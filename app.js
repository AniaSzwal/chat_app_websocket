const loginForm = document.querySelector('#welcome-form');
const messagesSection =document.querySelector('#messages-section');
const messagesList = messagesSection.querySelector('#messages-list');
const addMessageForm = messagesSection.querySelector('#add-messages-form');
const userNameInput = loginForm.querySelector('#username');
const messageContentInput = addMessageForm.querySelector('#message-content');

let userName = '';

//Dodaj nasłuchiwacz na ten formularz. Po wykryciu zdarzenia submit odpala się funkcja login. Funkcja ta przyjmuje inf o evencie oraz blokujr domyślne zachowanie przeglądarki (preventDefault)
const login = (event) => {
//Dodaj walidację wartości userNameInput. Ma sprawdzać, czy pole nie jest puste. Jeśli tak, należy zwrócić komunikat o błędzie (wystarczy zwykły alert)
    if (userNameInput === userName) {
        alert('Please enter Your login')
//Gdy wszystko w porządku, nasz kod powinien przypisać wartość tego pola do zmiennej userName
    } else {
        userName = userNameInput.value;
//schować formularz logowania
        loginForm.classList.remove('show');
//pokazać sekcję wiadomości
        messagesSection.classList.add('show');
    }
    event.preventDefault();
    loginForm.addEventListener('submit', login);
}

loginForm.addEventListener('submit', login);