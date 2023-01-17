class Joker {
  constructor(name) {
    this.name = name;
    this.middle = [];
    this.answers = [];
    this.index = 0;
    this.points = 0;
    this.reward = ["412 000 kr", "535 000 kr", "722 000 kr", "1 010 000 kr", "1 464 000 kr", "2 196 000 kr"];
  }

  startGame() {
    this.middle = [];
    this.answers = [];
    for (let i = 0; i < 5; i++) {
      let randomMiddle = Math.floor(Math.random() * 10);
      let randomJoker = Math.floor(Math.random() * 20);
      if (randomJoker === 19) {
        this.randomAnswer = 10;
      } else {
        this.randomAnswer = Math.floor(Math.random() * 10);
      }
      document.getElementById("btn" + i.toString()).innerHTML = "";

      this.middle.push(randomMiddle);
      this.answers.push(this.randomAnswer);

      document.getElementById("up" + i.toString()).disabled = true;
      document.getElementById("down" + i.toString()).disabled = true;
      document.getElementById("up" + i.toString()).textContent = "";
      document.getElementById("down" + i.toString()).textContent = "";
      document.getElementById("up" + i.toString()).classList.remove("correct");
      document.getElementById("down" + i.toString()).classList.remove("correct");
      document.getElementById("up" + i.toString()).classList.remove("wrong");
      document.getElementById("down" + i.toString()).classList.remove("wrong");
      document.getElementById("up" + i.toString()).classList.remove("jump-up");
      document.getElementById("down" + i.toString()).classList.remove("jump-up");
      document.getElementById("up" + i.toString()).classList.remove("jump-down");
      document.getElementById("down" + i.toString()).classList.remove("jump-down");
      document.getElementById("btn" + i.toString()).classList.remove("mid-jump");
    }

    let j = 0;
    let printNumber = setInterval(() => {
      document.getElementById("btn" + j.toString()).innerHTML = this.middle[j].toString();
      document.getElementById("btn" + j.toString()).classList.add("mid-jump");
      j++;
      if (j === 5) {
        clearInterval(printNumber);
      }
    }, 100);

    for (let i = 0; i < 6; i++) {
      document.getElementById("points" + i.toString()).classList.remove("activeReward");
    }
    document.getElementById("up0").disabled = false;
    document.getElementById("down0").disabled = false;
    document.getElementById("up0").innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
    document.getElementById("down0").innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
    document.getElementById("points0").classList.add("activeReward");
    document.getElementById("startButton").style.opacity = "0%";
    document.getElementById("startButton").style.cursor = "default";
    this.index = 0;
    this.points = 0;
    document.getElementById("points" + this.points.toString()).classList.add("activeReward");

    document.getElementById("tittel").textContent = "Joker-kanditatens prøvespill";
    document.getElementById("intro").textContent = "Trekk tallene og se om du vinner!";
    document.getElementById("intro").classList.remove("title");
  }

  next(dir) {
    document.getElementById("points" + this.points.toString()).classList.remove("activeReward");
    if (dir === "up") {
      document.getElementById("up" + this.index.toString()).classList.add("jump-up");
      setTimeout(() => {
        document.getElementById("up" + this.index.toString()).classList.remove("jump-up");
      }, 0);
      if (this.answers[this.index] === 10) {
        document.getElementById(dir + this.index.toString()).classList.add("correct");
        document.getElementById("up" + this.index.toString()).innerHTML = "<img src='img/jokerhatt.svg' class='theJoker--qOT4x' data-test='theJoker' height='60px'>";
        document.getElementById("down" + this.index.toString()).innerHTML = "";
        document.getElementById("down" + this.index.toString()).disabled = true;
        document.getElementById("up" + this.index.toString()).disabled = true;
        this.points = 5;
        jokerGame.final();
        return;
      } else if (this.answers[this.index] >= this.middle[this.index]) {
        document.getElementById(dir + this.index.toString()).classList.add("correct");
        document.getElementById("down" + this.index.toString()).innerHTML = "";
        this.points++;
      } else {
        document.getElementById(dir + this.index.toString()).classList.add("wrong");
        document.getElementById("down" + this.index.toString()).innerHTML = "";
        this.points--;
      }
    } else if (dir === "down") {
      document.getElementById("down" + this.index.toString()).classList.add("jump-down");
      setTimeout(() => {
        document.getElementById("down" + this.index.toString()).classList.remove("jump-down");
      }, 0);
      if (this.answers[this.index] === 10) {
        document.getElementById(dir + this.index.toString()).classList.add("correct");
        document.getElementById("down" + this.index.toString()).innerHTML = "<img src='img/jokerhatt.svg' class='theJoker--qOT4x' data-test='theJoker' height='60px'>";
        document.getElementById("up" + this.index.toString()).innerHTML = "";
        document.getElementById("up" + this.index.toString()).disabled = true;
        document.getElementById("down" + this.index.toString()).disabled = true;
        this.points = 5;
        jokerGame.final();
        return;
      } else if (this.answers[this.index] <= this.middle[this.index]) {
        document.getElementById(dir + this.index.toString()).classList.add("correct");
        document.getElementById("up" + this.index.toString()).innerHTML = "";
        this.points++;
      } else {
        document.getElementById(dir + this.index.toString()).classList.add("wrong");
        document.getElementById("up" + this.index.toString()).innerHTML = "";
        this.points--;
      }
    }
    document.getElementById(dir + this.index.toString()).innerHTML = this.answers[this.index];
    document.getElementById("up" + this.index.toString()).disabled = true;
    document.getElementById("down" + this.index.toString()).disabled = true;

    this.index++;

    if (this.index < 5) {
      document.getElementById("up" + this.index.toString()).disabled = false;
      document.getElementById("down" + this.index.toString()).disabled = false;
      document.getElementById("btn" + this.index.toString()).disabled = false;
    }

    if (this.points <= 0) {
      this.points = 0;
    }

    if (this.index === 5) {
      jokerGame.final();
    }

    jokerGame.playGame();
    document.getElementById("up" + this.index.toString()).innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
    document.getElementById("down" + this.index.toString()).innerHTML = "<i class='fa-solid fa-chevron-down'></i>";

    document.getElementById("points" + this.points.toString()).classList.add("activeReward");
  }

  final() {
    document.getElementById("startButton").style.opacity = "100%";
    document.getElementById("startButton").style.cursor = "pointer";
    document.getElementById("tittel").textContent = "Du kunne vunnet";
    document.getElementById("intro").textContent = this.reward[this.points];
    document.getElementById("intro").classList.add("title");
    document.getElementById("points" + this.points.toString()).classList.add("activeReward");
  }

  playGame() {
    document.getElementById("up" + this.index.toString()).onclick = (e) => jokerGame.next("up");
    document.getElementById("down" + this.index.toString()).onclick = (e) => jokerGame.next("down");
  }
}

let jokerGame = new Joker("test");

document.getElementById("startButton").onclick = (e) => {
  jokerGame.startGame();
  jokerGame.playGame();
};

jokerGame.startGame();
jokerGame.playGame();
