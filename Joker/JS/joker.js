class Joker {
  constructor(name) {
    this.name = name;
    this.middle = []; //5 tall
    this.answers = []; //5 tall
    this.index = 0;
    this.points = 0;
  }

  //LEGGE TIL PILER PÅ OPP OG NED KNAPPENE

  startGame() {
    for (let i = 0; i < 5; i++) {
      let randomMiddle = Math.floor(Math.random() * 10);
      let randomAnswer = Math.floor(Math.random() * 10);

      this.middle.push(randomMiddle);
      this.answers.push(randomAnswer);

      document.getElementById("btn" + i.toString()).innerHTML = randomMiddle.toString();

      document.getElementById("up" + i.toString()).disabled = true;
      document.getElementById("down" + i.toString()).disabled = true;
      document.getElementById("up" + i.toString()).textContent = "";
      document.getElementById("down" + i.toString()).textContent = "";
      document.getElementById("up" + i.toString()).classList.remove("correct");
      document.getElementById("down" + i.toString()).classList.remove("correct");
      document.getElementById("up" + i.toString()).classList.remove("wrong");
      document.getElementById("down" + i.toString()).classList.remove("wrong");
    }
    document.getElementById("up0").disabled = false;
    document.getElementById("down0").disabled = false;
    document.getElementById("up0").innerHTML = "&#8249;";
    document.getElementById("down0").innerHTML = "&#8250;";
    this.index = 0;
  }
  //KLASSER FOR PILEN, ROTERT, LEGGES TIL FOR OPPGAVEN ETTER, STØRRELSE
  next(dir) {
    if (dir === "up") {
      if (this.answers[this.index] >= this.middle[this.index]) {
        document.getElementById(dir + this.index.toString()).classList.add("correct");
        this.points++;
      } else {
        document.getElementById(dir + this.index.toString()).classList.add("wrong");
        this.points--;
      }
    } else if (dir === "down") {
      if (this.answers[this.index] <= this.middle[this.index]) {
        document.getElementById(dir + this.index.toString()).classList.add("correct");
        this.points++;
      } else {
        document.getElementById(dir + this.index.toString()).classList.add("wrong");
        this.points--;
      }
    }
    console.log(this.points);
    document.getElementById(dir + this.index.toString()).innerHTML = this.answers[this.index];
    document.getElementById("up" + this.index.toString()).disabled = true;
    document.getElementById("down" + this.index.toString()).disabled = true;

    this.index++;

    document.getElementById("up" + this.index.toString()).disabled = false;
    document.getElementById("down" + this.index.toString()).disabled = false;
    document.getElementById("btn" + this.index.toString()).disabled = false;

    jokerGame.playGame();
    if (this.points <= 0) {
      this.points = 0;
    }
    console.log(this.points);
  }

  playGame() {
    //sjekkker om spillet er slutt
    if (this.index >= 5) {
      console.log("du er ferdig med spillet");
    } else {
      document.getElementById("up" + this.index.toString()).onclick = (e) => jokerGame.next("up");
      document.getElementById("down" + this.index.toString()).onclick = (e) => jokerGame.next("down");
    }
  }
}

let jokerGame = new Joker("test");

document.getElementById("startButton").onclick = (e) => {
  jokerGame.startGame();
  jokerGame.playGame();
};

jokerGame.startGame();
jokerGame.playGame();

console.log(jokerGame);
