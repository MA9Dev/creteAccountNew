const find = (selector) => {
    return document.querySelector(selector);
}
const findAll = (selector) => {
    return document.querySelectorAll(selector);
}


const body = find('body')
//buttons
const next1 = find('#next1')
const next2 = find('#next2')
const prev1 = find('#prev1')
const prev2 = find('#prev2')
// const submit = find('#submit')
const indicator_bar = find('.indicator')

//sloiuri
const lvl1 = find('.level1')
const lvl2 = find('.level2')
const lvl3 = find('.level3')


//validation
const email = find('#email')
const pass = find('#pass')
const passConfirm = find('#pass_confirm')


//value , idk dont work
// let emailValue = email.value
// const passValue = pass.value
// const passConfirmValue = passConfirm.value


let count = 0


//error scris
let email_check = find('#email_check')
let password_check = find('#password_check')
let confirm_password_check = find('#confirm_password_check')


function isValidEmail(value) {
    const email_patern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    return value.match(email_patern)
//if return array mean respect regex and is not empty , if null not respect

}

const isValidPass = (passValue, passConfirmValue) => {
    let pass_patern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
    // if(passValue === passConfirmValue)
    return passValue.match(pass_patern)
}

const isSamePass = (a, b) => {
    return a === b
}


next1.disabled = true


//check if is true inputs
let emailBool,passBool,confirmBool;



email.addEventListener('input', () => {
    if (isValidEmail(email.value)) {
        email_check.style.color = "#38ad60";
        email_check.innerHTML = "<em>Valid email!!!</em>"
        // next1.disabled = false
        emailBool=true

    } else {
        email_check.style.color = "red";
        email_check.innerHTML = "<em>Invalid email!!!</em>"
        next1.disabled = true
        emailBool=false
    }
})

pass.addEventListener('input', () => {
    if (isValidPass(pass.value, passConfirm.value)) {
        password_check.style.color = "green";
        password_check.innerHTML = "<em>Valid password!!!</em>"
        passBool=true
    } else {
        password_check.style.color = "red";
        password_check.innerHTML = "<em>Password must contain 15 characters , lowercase&uppercase and special symbol</em>"
        next1.disabled = true
        passBool=false
    }
})


passConfirm.addEventListener('input', () => {
    if (isSamePass(pass.value, passConfirm.value)) {
        confirm_password_check.style.color = "green";
        confirm_password_check.innerHTML = "<em>Password match</em>"
        confirmBool=true
    } else {
        confirm_password_check.style.color = "red";
        confirm_password_check.innerHTML = "<em>Password doesn't match</em>"
        next1.disabled = true
        confirmBool=false
    }
})


//enable button
const enableButton = (a,b,c) => {
    if(a === b && b === c){next1.disabled = false}
}

document.addEventListener('change', ()=>{
    enableButton(emailBool,passBool,confirmBool)
});


//bar progress
next1.addEventListener('click', () => {
    indicator_bar.style.width = '50%';
    lvl2.classList.remove('mask')
    lvl2.classList.add('visible')
    lvl1.classList.add('mask')
})

next2.addEventListener('click', () => {
    indicator_bar.style.width = '100%'
    lvl2.classList.remove('visible')
    lvl3.classList.remove('mask')
    lvl3.classList.add('visible')

})

prev1.addEventListener('click', () => {
    indicator_bar.style.width = '0%';
    lvl2.classList.remove('visible')
    lvl2.classList.add('mask')
    lvl1.classList.remove('mask')
})

prev2.addEventListener('click', () => {
    indicator_bar.style.width = '50%';
    lvl3.classList.remove('visible')
    lvl3.classList.add('mask')
    lvl2.classList.remove('mask')
    lvl2.classList.add('visible')
})



//colect from form to json server
// const postData = async (url, data) => {
//     const response=   await  fetch('url' // inloc de url de la server
//         , {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: data // in loc de json
//         })
//     return await response.json()
// }
// const form=find('#unic')
//
// form.addEventListener('submit', (event) => {
//     event.preventDefault()
//     console.log(form)
//     const formData = new FormData(form)
//     const json = JSON.stringify(Object.fromEntries(formData.entries()))
//
//     postData('http://localhost:3000/',json)
//         .then(response => {
//             return response.json()
//         }).then(request => {
//         console.log(request.first_name, request.last_name)
//     })
// })