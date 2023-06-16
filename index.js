const submission = document.querySelector('#submit-button');

submission.addEventListener('click', ()=>{
    var emailInput = document.getElementById('email-input').value;
    console.log(emailInput)
    document.querySelector('.card-mainOne').setAttribute('style','display:none')
    document.querySelector('.card-mainTwo').setAttribute('style','display:block')
    document.getElementById('email-value').innerHTML=emailInput;
})