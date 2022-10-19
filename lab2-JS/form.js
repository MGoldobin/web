const addPlaceholderButton = document.getElementById("addPlaceholder")
const list = document.querySelector('.list')

addPlaceholderButton.addEventListener('click', (e) => {
    e.preventDefault()
    const placeholder = document.getElementById('placeholder').value
    let input = document.createElement('div')
    input.innerHTML = `<input class="list__input input" type="text" required placeholder="${placeholder}:">`
    list.append(input);
    document.getElementById('placeholder').value = ''
})

let userName = ''
let isLogIn = false

const logInButton = document.getElementById("logInButton")
const logOutButton = document.getElementById("logOutButton")
const userGreetings = document.querySelector('.user-greetings')

logInButton.addEventListener('click', (e) => {
    e.preventDefault()
    userName = prompt('Введите имя пользователя', 'user')
    if (!isLogIn) {
        logInButton.style.display = 'none'
        logOutButton.style.display = 'block'
        userGreetings.textContent = `Привет, ${userName}!`
        isLogIn = true
    }
})

logOutButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (isLogIn) {
        logInButton.style.display = 'block'
        logOutButton.style.display = 'none'
        userGreetings.textContent = `Привет, пользователь!`
        isLogIn = false
    }
})