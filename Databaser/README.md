## Oppgave 1
Gjort 👍

## Oppgave 2
a)
```sql
SELECT * FROM elev WHERE kjonn = 'J';
```


b)
```sql
SELECT * FROM elev WHERE kjonn = 'G' AND klasse = '2';
```


c)
```sql
SELECT * FROM elev WHERE kjonn = 'J' AND klasse = '2';
```


d)
```sql
SELECT * FROM elev WHERE fornavn LIKE 'J%';
```


e)
```sql
SELECT * FROM elev WHERE fornavn LIKE 'M%' AND klasse = '2';
```


f)
```sql
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
