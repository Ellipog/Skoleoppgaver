//Deklarerer en klasse som heter Klassenavn
class Klassenavn {
    constructor(programfag, klassetrinn) {
        this.programfag = programfag
        this.klassetrinn = klassetrinn
    }
}

//Lage en instans av klassen - Opprette en klasse
let ita2 = new Klassenavn('Informasjonteknologi', 'VG2')

class Sirkel {
    constructor(radius) {
        this.radius = radius
        this.diameter = radius * 2
        this.area = Math.PI + radius + radius
    }

    finnOmkrets() {
        return (this.diameter * Math.PI)
    }
}

let minSirkel = new Sirkel(10)
let omkretsSirkel = minSirkel.finnOmkrets()

export class Hund {
    constructo(navn) {
        this.navn = navn
    }

    formulerPresentasjon() {
        return 'Jeg heter $(this.navn). Voff!'
    }
}