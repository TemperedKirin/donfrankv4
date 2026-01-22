function getYear() {
const yearSpan = document.getElementById('current-year');
yearSpan.textContent = new Date().getFullYear();
}

export default getYear;