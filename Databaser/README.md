## Oppgave 1
Gjort 👍

## Oppgave 2

```sql
a)
SELECT * FROM elev WHERE kjonn = 'J';


b)
SELECT * FROM elev WHERE kjonn = 'G' AND klasse = '2';


c)
SELECT * FROM elev WHERE kjonn = 'J' AND klasse = '2';


d)
SELECT * FROM elev WHERE fornavn LIKE 'J%';


e)
SELECT * FROM elev WHERE fornavn LIKE 'M%' AND klasse = '2';


f)
SELECT * FROM elev WHERE hobby = 'Fotball';
```

## Oppgave 3
Gjort 👍

## Oppgave 4
Gjort 👍

## Oppgave 5
Det er nødvendig for at man kan finne hvilken PC en elev har mye lettere, det kan også brukes til å finne all annen info. 

## Oppgave 6
```sql
SELECT elev.fornavn, elev.etternavn, datamaskin.datamaskinmerke
FROM elev
INNER JOIN datamaskin ON elev.datamaskin=datamaskin.dataid
WHERE fornavn = 'Hanna' OR fornavn = 'Martin';
```

## Oppgave 7
```sql
SELECT fornavn
FROM elev
ORDER BY fornavn ASC;
```

## Oppgave 8
```sql
SELECT elev.klasse FROM elev
GROUP BY elev.klasse HAVING COUNT(klasse) > 1 ORDER BY `elev`.`klasse` ASC;
```
