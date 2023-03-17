const toggle = document.getElementById('toggle');
const annually = [199.99,249.99,399.99];
const monthy = [19.99,24.99,39.99];
const price = document.querySelectorAll('.price :last-child');
const links = document.querySelectorAll('a');

links.forEach(elem => elem.addEventListener("click", smoothscroll));

function smoothscroll(event){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

toggle.addEventListener('click', () => {
    if(toggle.checked) {
        for (let index = 0; index < 3; index++) {
            price[index].innerText = monthy[index];
        }
    }else {
        for (let index = 0; index < 3; index++) {
            price[index].innerText = annually[index]; 
        }
    }
});
