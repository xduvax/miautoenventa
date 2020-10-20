const mainMenu = (toggleId, navId) => {
    
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }

}

mainMenu('main-menu-hamburguesa','main-nav');