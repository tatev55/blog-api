import UI from "./utils/utils.js";

function createContainer(){
    const container = UI.createElement('div', {class : 'container w-100 display-flex jc-space-between fd-column ai-center'}, [
        UI.createElement('header', {class: 'header w-90 h-100px display-flex ai-center js-flex-end'},[
            UI.createElement('a', {href : 'home.html', class: 'header__link td-none transition-5'}, 'Home'),
        ]),
    
        UI.createElement('form', { class: 'form__box w-300px h-300px display-flex fd-column ai-center' }, [
            UI.createElement('input', { type: 'text', placeholder: 'Username', class: 'form__box__username w-200px h-40px' }),
            UI.createElement('input', { type: 'password', placeholder: 'Password', class: 'form__box__password w-200px h-40px ' }),
            UI.createElement('button', { type: 'submit', class: 'form__box__login w-100px h-40px transition-5' }, 'Login')
        ])
        
    ]);


    UI.render(container, 'body');
}
createContainer();




const loginForm = document.querySelector(".form__box");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const inputName = document.querySelector(".form__box__username");
    const inputPass = document.querySelector(".form__box__password");
    const inputNameValue = inputName.value.trim();
    const inputPassValue = inputPass.value;

    inputName.style.borderColor = '';
    inputPass.style.borderColor = '';

    let errorMessage = '';

    if (!inputNameValue) {
        inputName.style.borderColor = 'red';
        errorMessage += 'Please enter a valid username.\n';
    }

    if (!inputPassValue || inputPassValue.length < 8) {
        inputPass.style.borderColor = 'red'; 
        errorMessage += 'Your password must be at least 8 characters long.\n';
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        window.location.href = "home.html"; 
    }
});

