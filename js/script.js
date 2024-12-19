document.title = "Abishev Timur"

const headerElement = document.getElementById('header');
const h1Element = headerElement.querySelector('h1');
      h1Element.textContent = "Изучение JavaScript";

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
  console.log(link.textContent);
 });


 const featuresItems = document.querySelectorAll('.features-list li');

 if (featuresItems.length >= 2) {
   featuresItems[1].innerHTML = 'Поддержка <strong>API</strong>';
 }