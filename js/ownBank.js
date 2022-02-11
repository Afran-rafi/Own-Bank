document.getElementById('login-button') .addEventListener
('click' , function () {
    const user = document.getElementById('user-input');
    const userInput = user.value;
    const pass = document.getElementById('pass-input');
    const passInput = pass.value;
    if (userInput == "own.bank@gmail.com" && passInput == "Afran"){
        window.location.href = "Money.html"
    }
});