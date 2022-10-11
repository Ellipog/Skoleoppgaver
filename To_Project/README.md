#### Hvilke utfordringer har brukeren? 

Høre tekst. 
Svar alternativer. 
Lese tekst. 
Svare selv. 

#### Hvilke interesser har brukeren? 

Musikk, sport, spill. 

Brukeren har vanskelig for å lære seg språk, spesielt engelsk. 
Hun observerer at engelsk er et nyttig språk, som kommer igjen i mange sammenhenger. 
Brukeren liker spill og har konkurranse-instinkt. Motivasjonen øker når man ser fremgang i læringen, i form av poeng og økt mestringsfølelse. 
Brukeren syntes det er vannskelig å lese teksten selv, og svare med tekst input. Så vi skal ha en funksjon hvor spilleren kan trykke på en knapp
for å få teksten lest opp for seg. Og svaralternativer istedet for tekst input. 
Spillet skal inneholde musikk og sport så mye som det lar seg gå, uten at det gjør spillet mindre lærerikt. 

## Applikasjon 

@@ -30,14 +30,13 @@ Forskjellige temaer og vannskelighetsgrader.
Knapp for å lese opp spørsmål. 
Gym app: bilde av kroppen med markert farge, velg hvilken muskel som er markert eller velg hva man trener på bildet. 

Applikasjonen er et TRUE-FALSE spill, som skal gi brukeren ett riktig svar og et feil svar. 
Applikasjonen er et gym spill, hvor spilleren får et bilde av en person som gjør et styrkeøvelse. 
Så får spilleren 4 svaralternativer, hvert alternativ er et bilde av en person, med muskler uthevet med farge. 
Da skal spilleren trykke på riktig bilde av muskler for hva som blir trent i bilde av øvelsen. 
Brukeren starter med 0 poeng og får ett poeng for riktig svar. 
Når alle 10 spørsmålene er stilt, får man en poeng-Score, og gis muligheten til å starte igjen. 
Det skal være to måter å visualisere spørsmålet på: 
Det skal være en måte å visualisere spørsmålet på: 

1. Et bilde. Hva er dette på engelsk? Deretter svaralternativer. 
2. Fortelle et ord på norsk, og deretter spørre hva det heter på engelsk. 
Her skal det være et tekstfelt, som brukeren skal skrive inn. 
1. Et bilde. Deretter svaralternativer. 

## Fremgangsmøte 

@@ -49,28 +48,17 @@ Skal lage en MYSQL - database som lagrer hvor mange poeng spilleren har etter en

  | BrukerID       | Brukernavn    | Passord |
  | -------------- |:-------------:| -------:|
  | 1              | 20.08.1991    | 3       |
  | 1              | Per Arne      | ADNI24  |

  Forslag til tabell 2 - Spill:

  | spillID        | Dato          | Poeng | Person |
  | -------------- |:-------------:| -----:| -----: |
  | 1              | 20.08.1991    | 3     | 1      |
  | BrukerID       | Dato          | Poeng | Brukernavn |
  | -------------- |:-------------:| -----:| ---------: |
  | 1              | 20.08.1991    | 3     | Per Arne   |

  Person-kolonnen i Spill - tabellen er en fremmednøkkel som skal fylles
  på med primærnøkkelen fra Person-tabellen for hvert spill.
  Person-tabellen skal brukes til innlogging.

#### HTML, CSS og Javascript

- Spillet trenger en innloggingsside, som kobler opp informasjon fra databasen
med informasjonen i innloggingsfeltet.
- Stylingen er "clean", med et stort bakgrunnsbilde på alle slides.
- Spillet skal ha en velkommen side (start spillet-side) og start spillet-knapp.
- Når man har svart, så kommer det opp at brukeren har tatt riktig eller feil.
Spilleren blir "tvunget" med til neste spørsmål.
- På Hver side skal det stå hvor langt spilleren har kommet i spillet.
For eksempel 1/10 på først slide, 2/10 på andre slide.
  på med primærnøkkelen fra BrukerID-tabellen for hvert spill.
  BrukerID-tabellen skal brukes til innlogging.
  Poengscoren til hver person blir så lagt på et leaderboard. 

#### Node - backend service.
