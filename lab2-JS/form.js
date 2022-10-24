const addPlaceholderButton = document.getElementById("addButton")
const list = document.querySelector('.list')
const logInButton = document.getElementById("logInButton")
const logOutButton = document.getElementById("logOutButton")
const userGreetings = document.querySelector('.user-greetings')
const switchLangButton = document.getElementById("switchLang")

let userName = ''
let isLogIn = false
let currentLang = 'ru'
const LOCALE = {
    en: {
      title: 'Form',
      greet: 'Hello',
      defaultUser: 'user',
      firstField: 'First field: ',
      secondField: 'Second field: ',
      switchLang: 'Перевести на русский',
      addButton: 'Add new field',
      logInButton: 'Log in',
      logOutButton: 'Log out',
      newPlaceholder: 'Placeholder for a new field:',
      promptText: `Input user's name`
    },
    ru: {
      title: 'Форма',
      greet: 'Привет',
      defaultUser: 'пользователь',
      firstField: 'Первое поле: ',
      secondField: 'Второе поле: ',
      switchLang: 'Switch to EN',
      addButton: 'Добавить поле',
      logInButton: 'Войти',
      logOutButton: 'Выйти',
      newPlaceholder: 'Плейсхолдер для нового поля:' ,
      promptText: `Введите имя пользователя` 
    }
}

addPlaceholderButton.addEventListener('click', (e) => {
    e.preventDefault()
    const placeholder = document.getElementById('newPlaceholder').value.trim()
    if (placeholder) {
        let input = document.createElement('div')
        input.innerHTML = `<input class="list__input input" type="text" required placeholder="${placeholder}:">`
        list.append(input);
        document.getElementById('newPlaceholder').value = ''
    }
})

logInButton.addEventListener('click', (e) => {
    e.preventDefault()
    userName = prompt(LOCALE[currentLang].promptText, LOCALE[currentLang].defaultUser)
    if (!isLogIn && userName.trim()) {
        logInButton.style.display = 'none'
        logOutButton.style.display = 'block'
        userGreetings.textContent = `${LOCALE[currentLang].greet}, ${userName}!`
        isLogIn = true
    }
})

logOutButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (isLogIn) {
        logInButton.style.display = 'block'
        logOutButton.style.display = 'none'
        userGreetings.textContent = `${LOCALE[currentLang].greet}, ${LOCALE[currentLang].defaultUser}!`
        isLogIn = false
        userName = ''
    }
})

switchLangButton.addEventListener('click', (e) => {
    e.preventDefault()
    currentLang = currentLang === 'ru' ? 'en' : 'ru'
    document.documentElement.lang = currentLang
    const lang = LOCALE[currentLang]
    document.getElementById('title').textContent = lang['title']
    document.getElementById('greet').textContent = lang['greet'] + ', ' + (userName ? userName : lang['defaultUser']) + '!'
    document.getElementById('firstField').placeholder = lang['firstField']
    document.getElementById('secondField').placeholder = lang['secondField']
    document.getElementById('switchLang').textContent = lang['switchLang']
    document.getElementById('addButton').textContent = lang['addButton']
    document.getElementById('logInButton').textContent = lang['logInButton']
    document.getElementById('logOutButton').textContent = lang['logOutButton']
    document.getElementById('newPlaceholder').placeholder = lang['newPlaceholder']
})