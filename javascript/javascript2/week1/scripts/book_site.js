
//Part3: Book site
//Display book titles

let bookTitles = ["The Jungle Book", "A Tale of Two Cities", "The Lord of the Rings", "The Little Prince", "Harry Potter and the Philosopher's Stone",
 "The Hobbit", "Vyakti Ani Valli", "Dream of the Red Chamber", "The Alchemist", "Il Nome della Rosa",];

function displayBookTitles(titleList) {
    var unordList = document.body.appendChild(document.createElement("ul"));
    for (let i = 0; i < titleList.length; i++) {
        let list = unordList.appendChild(document.createElement("li"));
        list.innerHTML = titleList[i];
    }
}

// displayBookTitles(bookTitles); 


//Display books
let bookInfo = [];
let titleId = [];
let language = ["English", "English" , "English", "French", "English", "Marathi", "Chinese", "Portuguese", "Italian",];
let author = ["Rudyard Kipling", "Charles Dickens", "J. R. R. Tolkien", "Antoine de Saint-Exupéry", "J. K. Rowling", "J. R. R. Tolkien",
"P. L. Deshpande", "Cao Xueqin", "Paulo Coelho", "Umberto Eco"];

//function to create array bookInfo of objects(id: ,title: , language: ,author: )
function displayBookInfo() {
    for(let i = 0; i < bookTitles.length; i++) {
        titleId.push(bookTitles[i].replace(/ /g , "_"));
        bookInfo.push({id: titleId[i], title: bookTitles[i], language: language[i], author: author[i] });
    }
}

displayBookInfo();
console.log(bookInfo);

/*this is the console of bookInfo after calling function displayBookInfo
creats array bookInfo of objects(id: ,title: , language: ,author: )

(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {id: "The_Jungle_Book", title: "The Jungle Book", language: "English", author: "Rudyard Kipling"}
1: {id: "A_Tale_of_Two_Cities", title: "A Tale of Two Cities", language: "English", author: "Charles Dickens"}
2: {id: "The_Lord_of_the_Rings", title: "The Lord of the Rings", language: "English", author: "J. R. R. Tolkien"}
3: {id: "The_Little_Prince", title: "The Little Prince", language: "French", author: "Antoine de Saint-Exupéry"}
4: {id: "Harry_Potter_and_the_Philosopher's_Stone", title: "Harry Potter and the Philosopher's Stone", language: "English", author: "J. K. Rowling"}
5: {id: "The_Hobbit", title: "The Hobbit", language: "Marathi", author: "J. R. R. Tolkien"}
6: {id: "Vyakti_Ani_Valli", title: "Vyakti Ani Valli", language: "Chinese", author: "P. L. Deshpande"}
7: {id: "Dream_of_the_Red_Chamber", title: "Dream of the Red Chamber", language: "Portuguese", author: "Cao Xueqin"}
8: {id: "The_Alchemist", title: "The Alchemist", language: "Italian", author: "Paulo Coelho"}
9: {id: "Il_Nome_della_Rosa", title: "Il Nome della Rosa", language: undefined, author: "Umberto Eco"}
length: 10
__proto__: Array(0)
*/


function displayBooks(bookList) {
    for (let i = 0; i < bookList.length; i++) {
        let mainsection = document.body.appendChild(document.createElement("section"));
        mainsection.setAttribute("class", 'mainsection');

        let bookImageDiv = document.createElement("div");
        bookImageDiv.setAttribute("class", 'imagediv');
        mainsection.appendChild(bookImageDiv);

        let bookInfoDiv = mainsection.appendChild(document.createElement("div"));
        bookInfoDiv.setAttribute("class", 'bookInfodiv');

        let unordList = bookInfoDiv.appendChild(document.createElement("ul"));
    
        let list = unordList.appendChild(document.createElement("li"));
        list.setAttribute("class", "booklist");

        let bookTitle = document.createElement("h1");
        bookTitle.setAttribute("class", "booktitle");
        list.appendChild(bookTitle).innerHTML = bookList[i].title;

        let bookAuthor = document.createElement("h3");
        bookAuthor.setAttribute("class", "bookauthor");
        list.appendChild(bookAuthor).innerHTML = "Author: " + bookList[i].author;

        let bookLanguage = document.createElement("h5");
        bookLanguage.setAttribute("class", "booklanguage");
        list.appendChild(bookLanguage).innerHTML = "Language: " + bookList[i].language;

       
    }
}
displayBooks(bookInfo);

//Show the book covers
//function to create array of objects(bookId as key and imageLink as value)

let bookIdImageObject = [];
function bookIdImage() {
    
    for(let i = 0; i < bookTitles.length; i++) {
        let obj = {};
        let idB = '"'+ titleId[i] + '"';
        obj[idB] = "./images/image" + (i + 1) + ".jpg";//created key (id) and value(image) for empty object obj.
        bookIdImageObject.push(obj); //pushed object into array
    }
}
bookIdImage();
console.log(bookIdImageObject);

/*following the console log of bookIdImageObjectafter calling function bookIdImage.
creats array of objects(bookId as key and imageLink as value) 
(10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {"The_Jungle_Book": "./images/image1.jpg"}
1: {"A_Tale_of_Two_Cities": "./images/image2.jpg"}
2: {"The_Lord_of_the_Rings": "./images/image3.jpg"}
3: {"The_Little_Prince": "./images/image4.jpg"}
4: {"Harry_Potter_and_the_Philosopher's_Stone": "./images/image5.jpg"}
5: {"The_Hobbit": "./images/image6.jpg"}
6: {"Vyakti_Ani_Valli": "./images/image7.jpg"}
7: {"Dream_of_the_Red_Chamber": "./images/image8.jpg"}
8: {"The_Alchemist": "./images/image9.jpg"}
9: {"Il_Nome_della_Rosa": "./images/image10.jpg"}
length: 10
__proto__: Array(0)
*/

//displayImage function appending the book image in bookImageDiv
function displayImage() {
    let imagePlace = document.getElementsByClassName('imagediv');
    for (let i = 0; i < bookTitles.length; i++) {
        let bookImage = document.createElement("IMG");
        bookImage.setAttribute("class", "image");
        var imageSrc = bookIdImageObject[i][Object.keys(bookIdImageObject[i])];
        bookImage.setAttribute("src", imageSrc);
        bookImage.setAttribute("width", "300");
        bookImage.setAttribute("height", "450");
        bookImage.setAttribute("alt", "The Pulpit Rock");
        imagePlace[i].appendChild(bookImage);
        
    }
}
displayImage();