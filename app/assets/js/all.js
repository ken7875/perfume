console.log('Hello!');

$(document).ready(() => {
    // logIn登入按鈕
    (() =>{
        if(location.href.split('/')[3] === 'logIn.html'){
            var submit = document.querySelector('.logInBtn');
            var account = document.querySelector('.account');
            var password = document.querySelector('.password');
            submit.addEventListener('click', () =>{
                if(account.value ==='' && password.value === ''){
                    alert('請填入您的帳號與密碼')
                }else if(password.value === ''){
                    alert('請填入您的密碼')
                }else if(account.value === ''){
                    alert('請填入您的帳號')
                }else{
                    location.href = '/account.html'
                }
            })
        }
    })()
});