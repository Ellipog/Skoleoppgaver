let jokerGame;
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
        for (let i = 0; i < 5; i++) {
            let randomMiddle = Math.floor(Math.random() * 10);
            let randomJoker = Math.floor(Math.random() * 35);
            let randomAnswer = randomJoker === 19 ? 10 : Math.floor(Math.random() * 10);

            this.middle.push(randomMiddle);
            this.answers.push(randomAnswer);
        }

        this.reset();

        //Putter tall fra "middle" listen inn i midt raden, 1 og 1, med en animasjon som spiller av når klassen "mid-jump" blir lagt til
        let j = 0;
        let printNumber = setInterval(() => {
            document.getElementById("btn" + j.toString()).innerHTML = this.middle[j].toString();
            document.getElementById("btn" + j.toString()).classList.add("mid-jump");
            j++;
            if (j === 5) {
                clearInterval(printNumber);
            }
        }, 100);
        //Kjører funkjsonen som klargjør alt for starten av spillet. 
        this.ready();
    }

    ready() {
        //Mer resetting av tekst og klasser osv.
        for (let i = 0; i < 6; i++) {
            document.getElementById("points" + i.toString()).classList.remove("activeReward");
        }
        document.getElementById("up0").innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
        document.getElementById("down0").innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
        document.getElementById("up0").disabled = false;
        document.getElementById("down0").disabled = false;
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

    reset() {
        //Resetter forskjellig info, mest classer for styling
        for (let i = 0; i < 5; i++) {
            let btn = document.getElementById(`btn${i}`);
            let up = document.getElementById(`up${i}`);
            let down = document.getElementById(`down${i}`);
            btn.innerHTML = "";
            up.disabled = true;
            down.disabled = true;
            up.textContent = "";
            down.textContent = "";
            up.classList.remove("correct", "wrong", "jump-up", "jump-down");
            down.classList.remove("correct", "wrong", "jump-up", "jump-down");
            btn.classList.remove("mid-jump");
        }
    }

    check(dir, undir) {
        //Sjekker om svaret er en JOKER, hvis ja slutt spillet og gi maks poeng
        if (this.answers[this.index] === 10) {
            dir.classList.add("correct");
            dir.innerHTML = "<img src='img/jokerhatt.svg' class='theJoker--qOT4x' data-test='theJoker' height='60px'>";
            undir.innerHTML = "";
            undir.disabled = true;
            dir.disabled = true;
            this.points = 5;
            jokerGame.final();
            return;
        } else if (this.answers[this.index] >= this.middle[this.index]) {
            dir.classList.add("correct");
            undir.innerHTML = "";
            this.points++;
        } else {
            dir.classList.add("wrong");
            undir.innerHTML = "";
            this.points--;
        }
    }

    next(dirI, undirI) {
        let dir = document.getElementById(dirI + this.index.toString());
        let undir = document.getElementById(undirI + this.index.toString());
        document.getElementById("points" + this.points.toString()).classList.remove("activeReward");
        if (dirI === "up") { this.check(dir, undir) } else if (dirI === "down") { this.check(dir, undir) }

        //Spiller av en hoppe animasjon når knappen trykkes, dette blir gjort ved å legge til en CSS klasse som har en "@keyframes" animasjon
        //Bruker samme metode for alle andre animasjoner på nettsiden
        if (dirI === "up") {
            dir.classList.add("jump-up");
        } else {
            dir.classList.add("jump-down");
        }

        dir.innerHTML = this.answers[this.index];
        dir.disabled = true;
        undir.disabled = true;

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
        } else {
            jokerGame.playGame();
            //Putter inn piler i knappene
            document.getElementById("up" + this.index.toString()).innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
            document.getElementById("down" + this.index.toString()).innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
        }

        document.getElementById("points" + this.points.toString()).classList.add("activeReward");
    }

    final() {
        //Setter opp info som tekst og klasser og hviser restart knappen til spilleren
        document.getElementById("startButton").style.opacity = "100%";
        document.getElementById("startButton").style.cursor = "pointer";
        document.getElementById("tittel").textContent = "Du kunne vunnet";
        //Hviser hvor mye poeng du fikk
        document.getElementById("intro").textContent = this.reward[this.points];
        document.getElementById("intro").classList.add("title");
        document.getElementById("points" + this.points.toString()).classList.add("activeReward");
    }

    playGame() {
        document.getElementById("up" + this.index.toString()).onclick = (e) => jokerGame.next("up", "down");
        document.getElementById("down" + this.index.toString()).onclick = (e) => jokerGame.next("down", "up");
    }
}

function start() {
    jokerGame = new Joker("spill");
    jokerGame.startGame();
    jokerGame.playGame();
}

document.getElementById("startButton").onclick = (e) => { start(); };
start();