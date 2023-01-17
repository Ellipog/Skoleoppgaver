class Joker {
    constructor(name) {
        this.name = name;
        this.middle = []; //5 tall
        this.answers = []; //5 tall
        this.index = 0;
        this.points = 0;
        this.reward = ["412 000 kr", "535 000 kr", "722 000 kr", "1 010 000 kr", "2 196 000 kr"]
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
            document.getElementById("up0").innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
            document.getElementById("down0").innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
            document.getElementById("points0").classList.add("activeReward");
            document.getElementById("startButton").style.opacity = "0%";
            this.index = 0;
        }
        //KLASSER FOR PILEN, ROTERT, LEGGES TIL FOR OPPGAVEN ETTER, STØRRELSE, FARGE
    next(dir) {
        document.getElementById("points" + this.points.toString()).classList.remove("activeReward");
        if (dir === "up") {
            if (this.answers[this.index] >= this.middle[this.index]) {
                document.getElementById(dir + this.index.toString()).classList.add("correct");
                document.getElementById("down" + this.index.toString()).innerHTML = "";
                this.points++;
            } else {
                document.getElementById(dir + this.index.toString()).classList.add("wrong");
                document.getElementById("down" + this.index.toString()).innerHTML = "";
                this.points--;
            }
        } else if (dir === "down") {
            if (this.answers[this.index] <= this.middle[this.index]) {
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

        console.log(this.index);
        if (this.index === 5) {
            jokerGame.final();
        }

        jokerGame.playGame();
        if (this.points <= 0) {
            this.points = 0;
        } else if (this.points >= 4) {
            this.points = 4;
        }

        document.getElementById("up" + this.index.toString()).innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
        document.getElementById("down" + this.index.toString()).innerHTML = "<i class='fa-solid fa-chevron-down'></i>";

        document.getElementById("points" + this.points.toString()).classList.add("activeReward");
    }

    final() {
        console.log("WINNER")
        document.getElementById("startButton").style.opacity = "100%";
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