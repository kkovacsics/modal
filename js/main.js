const modal=document.querySelector('.modal__container');

const conts = document.querySelectorAll('button, .modal__close, .modal__container');
for(let i=0; i<conts.length;i++)
    conts[i].addEventListener('click', function(event){
        if(event.target===this)
            modal.classList.toggle('modal__container-hidden');
    })