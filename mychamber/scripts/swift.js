function toggleMenu(){
    document.getElementById("nav-list").classList.toggle("open");
    document.getElementById("navigation-button").classList.toggle("open");
}

const switchToX = document.getElementById("navigation-button");
switchToX.onclick = toggleMenu;

const todaysDate = new Date();
const dateformat = new Intl.DateTimeFormat("en-UK",{dateStyle: "full"}).format(todaysDate);
document.querySelector("#header-fulldate").innerHTML = dateformat;

const options = {year: 'numeric'}
document.getElementById('year').textContent = todaysDate.toLocaleDateString('en-us', options)
const date = document.lastModified;
document.getElementById('date').textContent = date;

if (todaysDate.getDay() == 1 || todaysDate.getDay() == 3){
    document.querySelector(".banner").classList.toggle("banner-shown");
  
    document.querySelector(".banner-close").addEventListener('click', function() {
    this.closest(".banner").style.display = "none";})
}