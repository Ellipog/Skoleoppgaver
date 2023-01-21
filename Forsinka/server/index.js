let stopPlaceId = "60944";
let forsinkaNew = [];
fetch("https://api.entur.io/journey-planner/v3/graphql", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "ET-Client-Name": "your-client-name",
    "ET-Client-ID": "your-client-id",
  },
  body: JSON.stringify({
    variables: {},
    query: `
    query {
      stopPlace(id: "NSR:StopPlace:${stopPlaceId}") {
        name
        estimatedCalls(timeRange: 3600, numberOfDepartures: 20) {
          realtime
          aimedArrivalTime
          expectedArrivalTime
          serviceJourney {
            line {
                id
            }
          }
          quay {
              name
          }
        }
      }
    }
    `,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    const departures = data.data.stopPlace.estimatedCalls;
    departures.forEach((departure) => {
      forsinkaNew.push(new Forsinka(departure.aimedArrivalTime, departure.expectedArrivalTime, departure.serviceJourney.line.id, departure.quay.name));
    });
  })
  .catch((error) => console.error(error));

class Forsinka {
  constructor(aimedArrivalTime, expectedArrivalTime, lineID, lineName) {
    this.aimedArrivalTime = aimedArrivalTime;
    this.expectedArrivalTime = expectedArrivalTime;
    this.lineID = lineID.replace("RUT:Line:", "").replace("NSB:Line:", "");
    this.lineName = lineName;
  }

  Latest() {
    let aimedTime = Date.parse(this.aimedArrivalTime);
    let expectedTime = Date.parse(this.expectedArrivalTime);
    let timeDiff = expectedTime - aimedTime;
    let diffMins = Math.round(((timeDiff % 86400000) % 3600000) / 60000);
    const data = {
      forsinkelse: diffMins,
      forventet: expectedTime,
      planlagt: aimedTime,
    };
    if (diffMins === 0) {
    } else {
      console.log(
        this.lineID +
          " " +
          this.lineName +
          "\nOriginal: " +
          new Date(aimedTime).toTimeString().slice(0, 5) +
          "\nForventet: " +
          new Date(expectedTime).toTimeString().slice(0, 5) +
          "\nDifference: " +
          diffMins +
          " minutes"
      );
    }
  }
}

document.getElementById("forsinkaLatest").onclick = (e) => {
  forsinkaNew.forEach((forsinka) => {
    forsinka.Latest();
  });
};
