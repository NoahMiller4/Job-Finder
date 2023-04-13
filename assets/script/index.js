/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Noah Miller

    Job Finder

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

'use strict';

let email = 'signin@gmail.com';
let password = 'fakepassword24';




let i;
let button = document.querySelector('button');
let error = document.querySelector('.error')

function getInfo() {
    let userName = document.querySelector('.email');
    let pw = document.querySelector('.password');


        if (userName.value === email && pw.value === password) {
            window.location.href = './home.html'
        } else error.innerHTML = 'Incorrect username or password'
}


/*function login() {
    const email = useRef();
    const password = useRef();
    const submit = () => {
        if(email.current.value === "signin@gmail.com" 
        && password.current.value === "fakelinkedin24") {
            localStorage.setItem('emailData', 'signin@gmail.com')
            localStorage.setItem('passwordData', "fakelinedin24")
        }
    }
} */