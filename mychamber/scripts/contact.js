const contactUsForm = document.querySelector("#contactForm");
const contactUsSubButton = document.querySelector("#contactSubBut");

function formComplete()
{
  
    contactUsForm.innerHTML = '';
    const completeMessTop = document.createElement('h2');
    const completeMessBody = document.createElement('p');

    completeMessTop.textContent = `Awesome Work`;
    completeMessBody.textContent ="Succesfully, Will get our notifiaction in your mail";


    contactUsForm.setAttribute('class', 'completedForm');

    contactUsForm.appendChild(completeMessTop);
    contactUsForm.appendChild(completeMessBody);
};

contactUsForm.addEventListener("submit", formComplete);
