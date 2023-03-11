document.addEventListener("DOMContentLoaded", getBooks());
function getBooks() {
    fetch("https://upadhayay.github.io/db.json")
    .then(response => response.json())
    .then(date => createBooksCard(data));
}
function createBooksCard(data) {
    const booksContainer = document.getElementById('books');
    const mainUL = document.createElement('ol');
    mainUL.className = "books_list";
    for(let i = 0; i < data.books.length; i++) {
        const booksLi = document.createElement('li');
        const headingTag = document.createElement('h3');
        const paraTag1 = document.createElement('p');
        const paraTag2 = document.createElement('p');
        const aTag = document.createElement('a');
        headingTag.innerHTML = data.books[i].title;
        paraTag1.innerHTML = 'Year: ${data.books[i].year}'
        aTag.innerHTML = 'Status: ${data.books[i].published}'
        aTag.innerHTML = 'Read more...'
        aTag.href = "#"
        booksLi.append(headingTag, paraTag1, paraTag2, aTag)
        mainUL.appendChild(booksLi);
    }
    booksContainer.appendChild(mainUL)
}