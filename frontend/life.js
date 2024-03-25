const password_input = document.querySelector('#password');
const length = 12;


const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
const numCount = '0123456789';
const symbolCount = "!@#$%^&*()_+-={}[]|:;<>,.?/~`'"


const passwordMix = upperCaseLetter + lowerCaseLetter + numCount + symbolCount;


function createPassword() {
    let newPassword = "";
    newPassword += upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)]
    newPassword += lowerCaseLetter[Math.floor(Math.random() * lowerCaseLetter.length)]
    newPassword += numCount[Math.floor(Math.random() * numCount.length)]
    newPassword += symbolCount[Math.floor(Math.random() * symbolCount.length)]

    while (length > newPassword.length) {
        newPassword += passwordMix[Math.floor(Math.random() * passwordMix.length)]
    }
    password_input.value = newPassword;
}



