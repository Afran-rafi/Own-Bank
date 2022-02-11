// 1st part (Deposit)--------

document.getElementById('depo-button') .addEventListener
('click' , function () {
    const depo = document.getElementById('deposit-input');
    const deposit = depo.value;
    const depoAmount = document.getElementById('depo-amount');
    const depositAmount = depoAmount.innerText;
    const depositTotal = parseFloat(deposit) + parseFloat(depositAmount);
    depoAmount.innerText = depositTotal;
    const blnce = document.getElementById('blnce-amount');
    const balance = blnce.innerText;
    const totalBalance = parseFloat(deposit) + parseFloat(balance);
    blnce.innerText = totalBalance;
    depo.value = '';
});


// 2nd part (Withdraw)---------

document.getElementById('wdr-button').addEventListener('click' , function () {
    const wdr = document.getElementById('withdraw-input');
    const withdraw = wdr.value;
    const wdrAmount = document.getElementById('wdr-amount');
    const withdrawAmount = wdrAmount.innerText;
    const totalWithdraw = parseFloat(withdraw) + parseFloat(withdrawAmount);
    wdrAmount.innerText = totalWithdraw;
    const blnce = document.getElementById('blnce-amount');
    const balance = blnce.innerText;
    const newTotalBalance = parseFloat(balance) - parseFloat(withdraw);
    blnce.innerText = newTotalBalance;
    wdr.value = '';
});
