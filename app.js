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



const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
//
const loginForm = document.createElement('form');
loginForm.id = "loginForm";
//
const userName = document.createElement('input');
userName.id = "username";
userName.type = "text";
userName.placeholder = "Username/Email";
//
const password = document.createElement('input');
password.id = "password";
password.type = 'password';
password.placeholder = "password";
//
const submit = document.createElement('button');
submit.id = "submit";
submit.innerText = "Login";
//
loginForm.append(userName, password, submit);
wrapper.appendChild(loginForm);
document.body.appendChild(wrapper);
//


//EVENTs
submit.addEventListener("click", function (e) {
    e.preventDefault()
});

submit.addEventListener('click', validate);

userName.addEventListener("focus", clearMsg);

password.addEventListener("focus", clearMsg);



//Functions
function validate() {
    const uname = this.form.elements[0].value;
    const pass = this.form.elements[1].value;
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
    document.querySelector("#loginForm").appendChild(p)
}


function reset() {
    document.querySelectorAll('.successMessage').forEach(e => e.remove());
    document.querySelectorAll('.errorMessage').forEach(e => e.remove());

    userName.value = "";
    userName.focus();
    password.value = "";
}


function clearMsg() {
    document.querySelectorAll('.successMessage').forEach(e => e.remove());
    document.querySelectorAll('.errorMessage').forEach(e => e.remove());
}
