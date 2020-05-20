let libraryStorage = [];
let counter = 0;

function BookEntry(title, author, pageCount, genre) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.genre = genre;
}

function NewBook(arg) {

    arg.preventDefault();
    counter++

    let bookAdd = new BookEntry((document.getElementById("title").value), (document.getElementById("author").value), (document.getElementById("pageCount").value), (document.getElementById("genre").value));
    libraryStorage.push(bookAdd);

    document.forms[0].reset();
    console.log(libraryStorage)
    
    let html="<table border='1|1'>";

    html+="<td>"+"Title: " + libraryStorage[libraryStorage.length-1].title + "</td>";
    html+="<td>"+"Author: " + libraryStorage[libraryStorage.length-1].author + "</td>";
    html+="<td>"+"Page count: " + libraryStorage[libraryStorage.length-1].pageCount + "</td>";
    html+="<td>"+"Genre: " + libraryStorage[libraryStorage.length-1].genre + "</td>"
    html += "</table>";

    let deleteButton = document.createElement('button')
    deleteButton.id = 'deleteButton'
    deleteButton.className = counter

    deleteButton.addEventListener('click', function(){
        let trashVar = libraryStorage[deleteButton.id];
        let deleteThisOne = libraryStorage.indexOf(trashVar);
        libraryStorage.splice(deleteThisOne, 1)
       
        let desiredDeletes = document.getElementsByClassName(counter)
        console.log(desiredDeletes)

        if (this.className == tableDiv.className && this.className == readButton.className) {
            tableDiv.remove()
            readButton.remove()
        } 
        this.remove()
    })

    let readButton = document.createElement('button')
    readButton.id = 'readButton'
    readButton.className = counter

    readButton.addEventListener('click', function(){
        //relate readButton to array object and add 'read' status to its prototype
    })

    let tableDiv = document.createElement('div')
    tableDiv.className =  counter
    tableDiv.innerHTML += html;

    let libraryUpdater= document.getElementById("libraryEntries");
    libraryUpdater.appendChild(tableDiv);
    libraryUpdater.appendChild(deleteButton);
    libraryUpdater.appendChild(readButton);
    
    console.log(libraryStorage)
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("submit").addEventListener('click', NewBook)
});
