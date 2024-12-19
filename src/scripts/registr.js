import UI from "./utils/utils.js";

function createRegisterContainer() {
    const container = UI.createElement('div', { class: 'container w-100 display-flex jc-space-between  fd-column ai-center' }, [
        UI.createElement('header', { class: 'header w-90 h-100px display-flex  ai-center js-flex-end' }, [
            UI.createElement('a', { class: 'header__link td-none transition-5', href: 'home.html' }, 'Home'),
            UI.createElement('a', { class: 'header__link td-none transition-5', href: 'index.html' }, 'Login')
        ]),
        UI.createElement('form', { class: 'formBox__register w-400px h-300px display-flex ai-center fd-column relative' }, [
            UI.createElement('input', { type: 'text', placeholder: 'First Name', class: 'formBox__register__input w-300px h-40px' }),
            UI.createElement('input', { type: 'text', placeholder: 'Last Name', class: 'formBox__register__input  w-300px h-40px' }),
            UI.createElement('select', { class: 'select w-300px h-40px' }, [
                UI.createElement('option', { class: 'option', value: 'City' }, 'City'),
                UI.createElement('option', { class: 'option', value: 'Country' }, 'Country'),
                UI.createElement('option', { class: 'option', value: 'State' }, 'State')
            ]),
            UI.createElement('div', { class: 'gender w-300px h-40px display-flex ai-center' }, [
                UI.createElement('label', {}, [
                    UI.createElement('input', { type: 'radio', name: 'gender', value: 'male', class: 'radio' }),
                    ' Male'
                ]),
                UI.createElement('label', {}, [
                    UI.createElement('input', { type: 'radio', name: 'gender', value: 'female', class: 'radio-two' }),
                    ' Female'
                ])
            ]),
            UI.createElement('div', {class: 'inputBox w-300px h-40px display-flex jc-space-between ai-center absolute'},[
                UI.createElement('div', {class: 'box__checkbox'},[
                    UI.createElement('input', {type: 'checkbox', class: 'checkbox'}),'Send me email',
                ]),
                UI.createElement('button', { type: 'submit', class: 'submit-btn w-100px h-30px' }, 'Submit')
            ])
        ])
    ]);

    UI.render(container, 'body');
}
createRegisterContainer();

