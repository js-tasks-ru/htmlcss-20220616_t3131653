const changer = document.getElementById('theme-changer');
const html = document.documentElement;

changer.addEventListener('change', function() {
    html.toggleAttribute('data-theme-dark');
});
 
console.log(changer);
console.log(3);
