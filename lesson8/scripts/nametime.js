// document.addEventListener("DOMContentLoaded", () => {
//     let lastModified = document.lastModified;
//     let h4 = document.querySelector("footer h4");
//     h4.innerText = h4.innerText.concat(` ${lastModified}`);
//     let date = new Date();
//     let h3 = document.querySelector("footer h3");
//     let index = h3.innerText.indexOf("©");
//     let str = h3.innerText.slice(0, index + 1).concat(`${date.getFullYear()}`);

//     h3.innerText = str.concat(h3.innerText.slice(index + 1));
// });