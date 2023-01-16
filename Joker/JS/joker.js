class Joker {
    constructor(name) {
        this.name = name;
        this.middle = []; //5 tall
        this.answers = []; //5 tall
        this.index = 0;
    }

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
        }
        document.getElementById("up0").disabled = false;
        document.getElementById("down0").disabled = false;
        this.index = 0;
    }

    next(dir) {
        if (dir === "UP") {} else if (dir === "DO") {}
        document.getElementById(dir + this.index.toString()).innerHTML = this.answers[this.index];
        document.getElementById("up" + this.index.toString()).disabled = true;
        document.getElementById("down" + this.index.toString()).disabled = true;

        this.index++;

        document.getElementById("up" + this.index.toString()).disabled = false;
        document.getElementById("down" + this.index.toString()).disabled = false;
        document.getElementById("btn" + this.index.toString()).disabled = false;

        jokerGame.playGame();
    }

    playGame() {
        //sjekkker om spillet er slutt
        if (this.index >= 5) {
            console.log('du er ferdig med spillet')
        } else {
            document.getElementById("up" + this.index.toString()).onclick = (e) => jokerGame.next("up");
            document.getElementById("down" + this.index.toString()).onclick = (e) => jokerGame.next("down");
        }
    }
}

let jokerGame = new Joker('test')

document.getElementById("startButton").onclick = (e) => {
    jokerGame.startGame();
    jokerGame.playGame();
}

jokerGame.startGame();
jokerGame.playGame();