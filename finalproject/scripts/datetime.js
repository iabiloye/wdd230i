function toggleMenu(){
    document.getElementById("sidebar-icon").classList.toggle("open");
    document.getElementById("burger-icon").classList.toggle("open");
}

const x = document.getElementById("burger-icon")
x.onclick = toggleMenu;

let d = new Date();
    document.getElementById("currentYear").textContent = d.getFullYear();
let lastUpdated = document.lastModified;
    document.getElementById("lastModified").textContent = lastUpdated;