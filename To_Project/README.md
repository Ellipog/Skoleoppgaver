# Engelsk-språklig applikasjon 

## Behovsanalyse 

#### Hvilke utfordringer har brukeren? 

Lese tekst. 
Svare selv. 

#### Hvilke interesser har brukeren? 

Musikk, sport, spill. 

Brukeren syntes det er vannskelig å lese teksten selv, og svare med tekst input. Så vi skal ha en funksjon hvor spilleren kan trykke på en knapp
for å få teksten lest opp for seg. Og svaralternativer istedet for tekst input. 
Spillet skal inneholde musikk og sport så mye som det lar seg gå, uten at det gjør spillet mindre lærerikt. 

## Applikasjon 

#### Hva er applikasjonen? 

Spill. 
Poengscore. 
Pugge matte. 
Main page fler mattekategorier. 
Løse oppgaver for å få poeng. 
Quiz. 
Alternativer, skrive hva man ser i et bilde. 
Forskjellige temaer og vannskelighetsgrader. 
Knapp for å lese opp spørsmål. 
Gym app: bilde av kroppen med markert farge, velg hvilken muskel som er markert eller velg hva man trener på bildet. 

Applikasjonen er et gym spill, hvor spilleren får et bilde av en person som gjør et styrkeøvelse. 
Så får spilleren 4 svaralternativer, hvert alternativ er et bilde av en person, med muskler uthevet med farge. 
Da skal spilleren trykke på riktig bilde av muskler for hva som blir trent i bilde av øvelsen. 
Brukeren starter med 0 poeng og får ett poeng for riktig svar. 
Det skal være en måte å visualisere spørsmålet på: 

1. Et bilde. Deretter svaralternativer. 

## Fremgangsmøte 

#### Database

Skal lage en MYSQL - database som lagrer hvor mange poeng spilleren har etter endt spill.

  Forslag til tabell 1 - Person:

  | BrukerID       | Brukernavn    | Passord |
  | -------------- |:-------------:| -------:|
  | 1              | Per Arne      | ADNI24  |

  Forslag til tabell 2 - Spill:

  | BrukerID       | Dato          | Poeng | Brukernavn |
  | -------------- |:-------------:| -----:| ---------: |
  | 1              | 20.08.1991    | 3     | Per Arne   |

  på med primærnøkkelen fra BrukerID-tabellen for hvert spill.
  BrukerID-tabellen skal brukes til innlogging.
  Poengscoren til hver person blir så lagt på et leaderboard. 

#### Node - backend service.

- Trenger database-tilkobling, og kan både hente og oppdatere databasen.
- Node kan brukes på to måter:
1. Som backend service og API-calls.
2. Som webserver.

Dette har jeg ikke bestemt meg for enda.
