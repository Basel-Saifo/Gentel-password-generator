let cpyBtn = document.querySelector('.copy');
let displayPass = document.querySelector('.display');
let generator = document.querySelector('.generate');
let options = document.querySelectorAll('.option')
let passLength = document.querySelector('#password-length-display');
let passLengthModify = document.querySelector('#password-length');

const checkboxChecked = []

function resetter() {
    displayPass.value = ''
    passLengthModify.value = 15
    options.forEach((x) => {
        x.checked = true
    })
}
function passLengthListener() {
    passLength.textContent = passLengthModify.value
    passLengthModify.addEventListener('change', () => {
        passLength.textContent = passLengthModify.value
    });
}
function optionsListener() {
    options.forEach((x) => {
        if (x.checked === true) {
            checkboxChecked.push(x.value);
            // console.log(checkboxChecked)
        }
        x.addEventListener('change', (item) => {
            if (item.target.checked) {
                if (!checkboxChecked.includes(x.value)) {
                    checkboxChecked.push(x.value);
                    console.log(checkboxChecked)
                }
            } else {
                checkboxChecked.splice(checkboxChecked.indexOf(x.value), 1);
                console.log(checkboxChecked)
            }
        })
    });
    return checkboxChecked;
}
function generateEngine(length, ops) {
    let password = []
    const types = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        symbols: '!@#$%^&*()'
    }
    if (length >= 6 && length <= 30) {
        switch (ops.length) {
            case 0:
                for (let x = 0; x < length; x++) {
                    password[x] = 0
                }
                break;
            case 1:
                let includer = types[ops[0]];
                for (let x = 0; x < length; x++) {
                    let indexerMixerHAHA = Math.floor(Math.random() * includer.length);
                    password[x] = includer[indexerMixerHAHA];
                }
                break;
            case 2:
                let includer2 = types[ops[0]] + types[ops[1]]
                for (let x = 0; x < length; x++) {
                    let indexerMixerHAHA = Math.floor(Math.random() * includer2.length);
                    password[x] = includer2[indexerMixerHAHA];
                }
                break;
            case 3:
                let includer3 = types[ops[0]] + types[ops[1]] + types[ops[2]]
                for (let x = 0; x < length; x++) {
                    let indexerMixerHAHA = Math.floor(Math.random() * includer3.length);
                    password[x] = includer3[indexerMixerHAHA];
                }
                break;
            case 4:
                let includer4 = types[ops[0]] + types[ops[1]] + types[ops[2]] + types[ops[3]]
                for (let x = 0; x < length; x++) {
                    let indexerMixerHAHA = Math.floor(Math.random() * includer4.length);
                    password[x] = includer4[indexerMixerHAHA];
                }
                break;
        }
        displayPass.value = password.join('');
    }
}


cpyBtn.addEventListener('click', () => {
    if (displayPass.value !== '') {
        displayPass.select()
        navigator.clipboard.writeText(displayPass.value);
        alert('Password Copied to Clipboard');
    }
});
generator.addEventListener('click', () => {
    generateEngine(passLengthModify.value, checkboxChecked);
});

resetter();
passLengthListener();
optionsListener();