console.log("Welcome to VESIT Library!")

// constructor
function Book(name, author, type) {
    this.name = name
    this.author = author
    this.type = type
}

// Display constructor
function Display() {
}

//Add methods to Display prototype
Display.prototype.add = function (book) {
    tableBody = document.getElementById("tableBody")
    let tableString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`
    tableBody.innerHTML += tableString
}

// Implementing the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm")
    libraryForm.reset()
}

// Implementing the validtae function
Display.prototype.validate = function (book) {
    if(book.name.length < 2 || book.author.length < 2){
        return false
    }
    else{
        return true
    }
}

Display.prototype.show = function(type, displayMessage){
    let message = document.getElementById("message")
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>Message: </strong>${displayMessage}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>`
    setTimeout(() => {
        message.innerHTML = ""
    },3000);
}

// Add submit event listener to library form
let libraryForm = document.getElementById("libraryForm")
libraryForm.addEventListener("submit", libraryFormSubmit)

function libraryFormSubmit(e) {
    console.log("Your form has been submitted.")
    let name = document.getElementById("bookName").value
    let author = document.getElementById("author").value

    let fiction = document.getElementById("fiction")
    let programming = document.getElementById("programming")
    let cooking = document.getElementById("cooking")
    let type
    if (fiction.checked) {
        type = fiction.value
    }
    else if (programming.checked) {
        type = programming.value
    }
    else if (cooking.checked) {
        type = cooking.checked
    }

    let book = new Book(name, author, type)
    console.log(book)
    let display = new Display()
    if(display.validate(book)){
        display.add(book)
        display.clear()
        display.show("success","Your book has been successfully added!")
    }
    else{
        // show error message to user
        display.show("danger","Sorry you have enetered wrong book name or wrong author name!")
    }
    e.preventDefault()
}