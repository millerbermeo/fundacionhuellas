window.onload=inicio;



function inicio() {
    btnUno = document.querySelector('.fa-bars');
    menu = document.querySelector('.nav-menu')

    btnUno.addEventListener('click', () => {
        menu.classList.toggle('active');
   
});

}


    n1 = document.querySelector('#nosotros');
    n2 = document.querySelector('.sub-menu-uno')

    n1.addEventListener('click', () => {
        n1.classList.toggle('active');
        n2.classList.toggle('active');
    });

    n3 = document.querySelector('#evento');
    n4 = document.querySelector('.sub-menu-dos')

    n3.addEventListener('click', () => {
        n3.classList.toggle('active');
        n4.classList.toggle('active');
    });

    navMenu = document.querySelector('.nav');
    
    banner = document.querySelector('.banner-top');
    sub1 = document.querySelector('.sub-menu-uno');
    sub2 = document.querySelector('.sub-menu-dos');

    window.addEventListener('scroll', function(){
        if(window.scrollY > 0){
            navMenu.classList.add('scroll');
            banner.classList.add('scroll');
            sub1.classList.add('active');
            sub2.classList.add('active');
        }else{
            navMenu.classList.remove('scroll');
            banner.classList.remove('scroll');
            sub1.classList.remove('active');
            sub2.classList.remove('active');
        }
    })


    

