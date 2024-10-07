function numberLength2Or3(text){
    regex = /\b{2,3}\b/g
    result = text.match(regex)
    console.log(result)
}

function startsWithEven(){
    regex = /\b{2,4,6,8}\b/g
    result = text.match(regex)
    console.log(result)
}



let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes."
let regex, result

console.log(text)

// Kétjegyű számok keresése:
regex = /\b\d{2}\b/g
result = text.match(regex)
console.log(`\nKétjegyű számok keresése: ${regex}`)
console.log(result) // ["15"]

// Háromjegyű számok keresése:
regex = /\b[0-9]{3}\b/g
result = text.match(regex)
console.log(`\nHáromjegyű számok keresése: ${regex}`)
console.log(result) // ["123"]

// Négyjegyű számok keresése:
regex = /\b\d{4}\b/g
result = text.match(regex)
console.log(`\nNégyjegyű számok keresése: ${regex}`)
console.log(result) // ["2024", "4567"]

// Szavak keresése, amelyek kisbetűvel kezdődnek:
regex = /\b[a-z][a-z]*\b/g
result = text.match(regex)
console.log(`\nSzavak keresése, amelyek kisbetűvel kezdődnek: ${regex}`)
console.log(result) // ["oday", "is", "the", "of", "have", "apples", "oranges", "grapes"]

// Szavak keresése, amelyek nagybetűvel kezdődnek:
regex = /\b[A-Z][a-z]*\b/g
result = text.match(regex)
console.log(`\nSzavak keresése, amelyek nagybetűvel kezdődnek: ${regex}`)
console.log(result) // ["Hello", "World", "Today", "June"]

// Szavak keresése, amelyek pontosan öt karakterből állnak:
regex = /\b\w{5}\b/g
result = text.match(regex)
console.log(`\nSzavak keresése, amelyek pontosan öt karakterből állnak: ${regex}`)
console.log(result) // ["Today", "World", "grapes"]

// Szavak keresése, amelyek számokkal kezdődnek:
regex = /\b\d+\w*/g
result = text.match(regex)
console.log(`\nSzavak keresése, amelyek számokkal kezdődnek: ${regex}`)
console.log(result) // ["5th", "2024", "15", "123", "4567"]

// Szóköz nélküli karakterek keresése:
regex = /\S+/g
result = text.match(regex)
console.log(`\nSzóköz nélküli karakterek keresése: ${regex}`)
console.log(result) // minden szót és számot megtalál szóközök nélkül

// Olyan szavak keresése, amelyek "a" betűvel kezdődnek:
regex = /\ba\w*\b/g
result = text.match(regex)
console.log(`\nOlyan szavak keresése, amelyek "a" betűvel kezdődnek: ${regex}`)
console.log(result) // ["apples"]

// Oldd meg az alábbi feladatokat!
// Hozz létre függvényeket, melyek visszatérési értéke a megoldás.
// A függvény bemeneti értéke a fenti text, a kimeneti érték a feladatban megadott feltétel szerinti tömb.
// Feladatok:
// startsWithNumber - Olyan szavak, melyek számmal kezdődnek és betűvel végződnek
// capitalized - Olyan szabak, melyek nagybetűből állnak
// capitalizedLengthMin3 - Olyan szavak, melyek nagybetűvel kezdődnek és legalább 3 betűsek
// startsWithVowel - Olyan szavak, melyek magánhangzóval kezdődnek

//
// A feladatokat a GitHubra töltsd fel és a linkjét add meg.
// A függvény neve a feladatban van megadva!
