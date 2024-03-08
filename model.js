const btnsOpenModal = document.querySelectorAll('.show');

for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', function(){
    document.querySelector('.model').classList.remove('hide');
    document.querySelector('.filter').classList.remove('hide');
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.model').classList.add('hide');
    document.querySelector('.filter').classList.add('hide');
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        document.querySelector('.model').classList.add('hide');
        document.querySelector('.filter').classList.add('hide');
    }
});

document.querySelector('.filter').addEventListener('click', function(){
    document.querySelector('.model').classList.add('hide');
    document.querySelector('.filter').classList.add('hide');
});
