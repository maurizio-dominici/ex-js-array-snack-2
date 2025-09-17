const books = [
  {
    title: "React Billionaire",
    pages: 250,
    author: {
      name: "Alice",
      age: 35,
    },
    available: false,
    price: "101€",
    tags: ["advanced", "js", "react", "senior"],
  },
  {
    title: "Advanced JS",
    pages: 500,
    author: {
      name: "Bob",
      age: 20,
    },
    available: true,
    price: "25€",
    tags: ["advanced", "js", "mid-senior"],
  },
  {
    title: "CSS Secrets",
    pages: 320,
    author: {
      name: "Alice",
      age: 17,
    },
    available: true,
    price: "8€",
    tags: ["html", "css", "junior"],
  },
  {
    title: "HTML Mastery",
    pages: 200,
    author: {
      name: "Charlie",
      age: 50,
    },
    available: false,
    price: "48€",
    tags: ["html", "advanced", "junior", "mid-senior"],
  },
];

// const sommaNumeri = (a, b) => a + b;

// const longBooks = books.filter((b) => b.pages > 300);
// console.log(longBooks);

// const longBooksTitles = longBooks.map((b) => b.title);
// // console.log(longBooksTitles);

// longBooksTitles.forEach((t) => console.log(t));

// const availableBooks = books.filter((b) => b.available);
// console.log(availableBooks);

// const discountedBooks = availableBooks.map((aB) => {
//   const price = parseFloat(aB.price.replace("€", ""));
//   const discountedPrice = (price * 0.8).toFixed(2);
//   return { ...aB, price: `${discountedPrice}€` };
// });
// console.log(discountedBooks);

// const fullPricedBook = discountedBooks.find((db) => {
//   const price = parseFloat(db.price.replace("€", ""));
//   return price % 1 === 0;
// });
// console.log("fullPricedBook :", fullPricedBook);

const authors = books.map((book) => book.author);
console.log("authors:", authors);

const areAuthorsAdults = authors.every((a) => a.age >= 18);
console.log("areAuthorsAdults :", areAuthorsAdults);

authors.sort((a, b) => b.age - a.age);

const ages = authors.map((a) => a.age);
console.log("ages :", ages);

const agesSum = ages.reduce((acc, age) => {
  return acc + age;
}, 0);

console.log(agesSum);

console.log(`Eta media :, ${agesSum / ages.length}`);

const ids = [2, 13, 7, 21, 19];

async function getBooks(ids) {
  const baseUrl = "http://localhost:3333/books/";
  const bookPromises = ids.map((id) =>
    fetch(`${baseUrl}${id}`).then((res) => res.json())
  );
  const books = await Promise.all(bookPromises);
  return books;
}

getBooks(ids).then((books) => console.log("Books:", books));
