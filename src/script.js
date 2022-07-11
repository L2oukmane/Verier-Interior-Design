function openMenu(){
 const openTab = document.querySelector('.open-menu');
 const closeTab = document.querySelector('.close-menu');
 const navbarMenu = document.querySelector('.navbar__items');
 openTab.addEventListener('click', () => {
    navbarMenu.classList.add('menu-active');
    openTab.style.display = 'none';
    closeTab.style.display = 'flex'
 })
 closeTab.addEventListener('click', () => {
    navbarMenu.classList.remove('menu-active');
    openTab.style.display = 'flex';
    closeTab.style.display = 'none'
 })
}

openMenu();