import {books} from './books.js'

// 1
console.log(`Fråga 1: Hur många böcker finns det i affären?`)
console.log();
console.log(`Det finns bara ${books.length} böcker i affären, det är hårda tider nu`);
console.log();

// 2

console.log(`Fråga 2: Skriv ut namnen på alla böcker.`)
console.log();
let titles = books.map(books => books.title);
console.log(`Titlarna som vi har på lager heter: ${titles.join("\n")}.`)
console.log();

// 3
console.log(`Fråga 3: Skriv ut namn och pris för alla böcker av typen "Fantasy".`)
console.log();
let fantasy = [], genre = "Fantasy";
fantasy = books.filter(bok => bok.genre === genre);
fantasy.forEach(bok => {
      console.log(`Boktitel: ${bok.title}, Pris: ${bok.price}`);
    
  });
console.log();

//   4
console.log(`Fråga 4: Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker.`)
console.log();
books.forEach(books => {
    if (books.genre === 'Classic' || books.genre === 'Dystopian' || books.genre === 'Mystery') {
        console.log(`Titel: ${books.title}, Genre: ${books.genre}`);
    }
});
console.log();

// 5
console.log(`Fåga 5: Skriv ut namn och pris för alla böcker som kostar över $10.`)
console.log();
books.forEach(books => {
    if (books.price > 10) {
        console.log(`Titel: ${books.title}, Pris: ${books.price}`);
    }
});
console.log();

// 6
console.log(`Fåga 6:  Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)`);
console.log();
let sum  = 0;
books.forEach(books => {
    sum += books.price;
}) 
console.log(sum.toFixed(2))
console.log();


// 7
console.log(`Fråga 7: Vilka böcker är sammanlagt värda mest, dystopian eller mystery?`);
console.log();
let dysbok = 0, mystbok = 0;
books.forEach(pris => {
    if ( pris.genre === "Dystopian") {
        dysbok += pris.price;
    }
    if ( pris.genre === "Mystery") {
        mystbok += pris.price
    }
})
if ( dysbok > mystbok){
    console.log(`Dystopian genren är dyrare än Mystery, kostar totalt: ${dysbok}.`)
} else if ( mystbok > dysbok){
    console.log(`Mystery genren är dyrare än Dystopian, kostar totalt: ${mystbok}.)`)
}
console.log();

// 8
console.log(`Fråga 8: Skriv ut namnen på alla böcker i bokstavsordning.`)
console.log();
let bokstavsbok = books.map(bok => bok.title).sort()
console.log(bokstavsbok)

// 9
console.log(`Fråga 9: Vilken bok finns det en dubblett av?`);
console.log();
let bok = null;
let dubblettLista = []

books.forEach(book => {
  if (dubblettLista.includes(book.title)) {
    bok = book.title;
  } else {
    dubblettLista.push(book.title);
  }
});

if (bok) {
  console.log(`Det finns en dubblett: ${bok}`);
} else {
  console.log("Det finns ingen dubblett.");
}
console.log();

// 10
console.log(`Fråga 10: Vilka författare har ett namn som består av mer än 2 ord? `);
console.log();
let flerord = books.filter( bok => {
    let dot = bok.author.includes(".");
    let massord = bok.author.split(" ").length;
    return massord > 2 && !dot;
})
flerord.forEach(bok => {
    console.log(`${bok.author} är en författare med ett namn längre än två ord i sitt namn 
    om vi exkluderar författare med punkter i namnet`)
})

// 11
console.log(`Fråga 11: Skriv ut namnen på alla författare i bokstavsordning. `);
console.log();

books.sort((a, b) => {
    const efternamnA = a.author.split(' ')[1]; 
    const efternamnB = b.author.split(' ')[1];

    return efternamnA.localeCompare(efternamnB);
  });

  books.forEach(bok => {
    console.log(bok.author);
  });
console.log();

// 12
console.log(`Fråga 12: Skriv ut namnen på alla böcker vars titel inte börjar med "The".`);
console.log();
let thebok = books.filter( bok => {
        let the = bok.title.includes("The");
        return !the;
    });
    let correctList = thebok.map( bok => bok.title)
    console.log(`Böcker utan "The" i titeln är följande: ${correctList.join("\n")}`);
console.log();

// 13
console.log(`Fråga 13: Skriv ut böckernas titel, sorterat efter titelns längd, i stigande ordning.`);
console.log();
let lengthList = books.map( bok => bok.title)
lengthList.sort(function(a, b) {
    return a.length - b.length;
})

console.log(lengthList)
console.log();

// 14
console.log(`Fråga 14: Skriv färdigt funktionen, som ska kunna lägga till en ny bok sist i listan.`);
console.log();
function addBook(list, title, author, genre, price) {
    const newBook = {
        id: list,
        title: title,
        author: author,
        genre: genre,
        price: price
    };

    books.push(newBook)
    return books;
}
