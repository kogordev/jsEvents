const users = {
    osama: {
        username: "osama",
        password: "123"
    },
    alaa: {
        username: "alaa",
        password: "1234"
    }
}

const formData = {};

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
//
const loginForm = document.createElement('form');
loginForm.id = "loginForm";
//
const username = document.createElement('input');
username.classList.add("inputs");
username.id = "username";
username.type = "text";
username.placeholder = "Username/Email";
//
const password = document.createElement('input');
password.classList.add("inputs");
password.id = "password";
password.type = 'password';
password.placeholder = "password";
//
const submit = document.createElement('button');
submit.id = "submit";
submit.type = "submit";
submit.innerText = "Login";
//
const msgWrapper = document.createElement('div');
msgWrapper.classList.add('msgWrapper');
//
loginForm.append(username, password, submit, msgWrapper);
wrapper.appendChild(loginForm);
document.body.appendChild(wrapper);
//


//EVENTs
loginForm.addEventListener("submit", function (e) {
    e.preventDefault()
    validate(username.value, password.value);
})
//

for (let e of [username, password]) {
    e.addEventListener("input", ({ target }) => {
        const { id, value } = target;
        if (id === "username" && !value) return;
        formData[id] = value;
    })
}

username.addEventListener("focus", clearMsg);
//
password.addEventListener("focus", clearMsg);
//



Functions
function validate(uname, pass) {
    if (uname in users) {

        if (pass === users[uname].password) {
            msg('successMessage');
        } else {
            msg("errorMessage")
        }

    } else {
        msg("errorMessage")
    }
}


function msg(cls) {
    reset();
    const p = document.createElement('p');
    const errMsg = "Invalid username or password";
    const succMsg = "user successfully logged in";
    p.classList.add(cls);
    p.innerText = cls === "errorMessage" ? errMsg : succMsg;
    msgWrapper.appendChild(p);
}


function reset() {
    document.querySelectorAll('.successMessage').forEach(e => e.remove());
    document.querySelectorAll('.errorMessage').forEach(e => e.remove());

    username.value = "";
    username.focus();
    password.value = "";
}


function clearMsg() {
    document.querySelectorAll('.successMessage').forEach(e => e.remove());
    document.querySelectorAll('.errorMessage').forEach(e => e.remove());
}
