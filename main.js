let Languages = document.querySelector(".languages");
let Langs = document.querySelector(".langs");
let Icon2 = document.querySelector(".icon2");
let Icons1 = document.querySelector(".icons1");
let Icons2 = document.querySelector(".icons2");
let All_Lists = document.querySelector(".list-all");
let Form = document.querySelector(".form");

Languages.addEventListener('click', function(){
    if(Languages.classList.contains('languages-new')){
        Languages.classList.remove('languages-new');
        Langs.classList.remove('langs-new');
        Icon2.classList.remove('icon2-new');
    } else {
        Languages.classList.add('languages-new');
        Langs.classList.add('langs-new');
        Icon2.classList.add('icon2-new');
    }
});

Icons1.addEventListener('click', function(){
    if(Icons1.classList.contains('icons1-new')){
        Icons1.classList.remove('icons1-new');
        Icons2.classList.remove('icons2-new'); 
        All_Lists.classList.remove('list-all-new'); 
        Form.classList.remove('form-new'); 
    } else {
        Icons1.classList.add('icons1-new');
        Icons2.classList.add('icons2-new');
        All_Lists.classList.add('list-all-new');
        Form.classList.add('form-new');
    }
});
Icons2.addEventListener('click', function(){
    if(Icons2.classList.contains('icons2-new')){
        Icons2.classList.remove('icons2-new');
        Icons1.classList.remove('icons1-new'); 
        All_Lists.classList.remove('list-all-new'); 
        Form.classList.remove('form-new'); 
    } else {
        Icons1.classList.add('icons1-new');
        Icons2.classList.add('icons2-new');
        All_Lists.classList.add('list-all-new');
        Form.classList.add('form-new');
    }
});