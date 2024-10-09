class Book {
    constructor(name, authorName, publishedDate, quantity, genre, price) {
        this.name = name;
        this.authorName = authorName;
        this.publishedDate = publishedDate;
        this.quantity = quantity;
        this.genre = genre;
        this.price = price;
    }

    bookInfo() {
        console.log(`Ner: ${this.name}`);
        console.log(`zohiolch ner: ${this.authorName}`);
        console.log(`share date: ${this.publishedDate} mnt`);
        console.log(`Quantity: ${this.quantity}`);
        console.log(`type: ${this.genre}`);
        console.log(`une: ${this.price} mnt`);
    }
    changeBookPrice(newPrice) {
        this.price = newPrice;
        console.log(`${this.name} iim nom ${this.price} bolj oorchlogdloo`);
    }

    changeBookGenre(newGenre) {
        this.genre = newGenre;
        console.log(`${this.name} ii nomiin torol type in ${this.genre} bolj soligdloo`);
    }
    changeBookQuantity(newQuantity) {
        this.quantity = newQuantity;
        console.log(`${this.name} ii nomiin too shirheg in ${this.quantity} bolj oorchilloo`);
    }
    changeBookNameAuthor(newName, newAuthor) {
        this.name = newName;
        this.authorName = newAuthor
        console.log(`nomiin ner bolon zohiogch shinechlelee. Name: ${this.name} Author: ${this.authorName}`);
    }
    changeBookDate(newDate) {
        this.publishedDate = newDate;
        console.log(`hevlesen on hugatsaa ${this.publishedDate} iim bolj oorchilloo`);
    }
}

let book = new Book("ToF", "joy", "2024-01-04", 6, "action", 4000);

book.bookInfo();
book.changeBookPrice(5000);
book.bookInfo();

book.changeBookGenre("romance")
book.bookInfo();

book.changeBookQuantity(5);
book.bookInfo();

book.changeBookNameAuthor("FoT", "may");
book.bookInfo();

book.changeBookDate("2022-01-01");
book.bookInfo();
