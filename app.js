const loginForm = document.querySelector('#welcome-form');
const messagesSection =document.querySelector('#messages-section');
const messagesList = messagesSection.querySelector('#messages-list');
const addMessageForm = messagesSection.querySelector('#add-messages-form');
const userNameInput = loginForm.querySelector('#username');
const messageContentInput = addMessageForm.querySelector('#message-content');

let userName = '';

//Po wykryciu zdarzenia submit odpala się funkcja login. Funkcja ta przyjmuje inf o evencie oraz blokujr domyślne zachowanie przeglądarki (preventDefault)
const login = (event) => {
    event.preventDefault();
    loginForm.addEventListener('submit', login);
}