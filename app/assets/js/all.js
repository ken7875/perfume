console.log('Hello!');

$(document).ready(() => {
    // logIn登入按鈕
    (() =>{
        if(location.href.split('/')[3] === 'logIn.html'){
            var submit = document.querySelector('.logInBtn');
            submit.addEventListener('click', () =>{
                
                    location.href = '/account.html'
            })
        }
    })()
});