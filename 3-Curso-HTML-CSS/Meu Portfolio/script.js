let d = new Date();
let hour = d.getHours()
let h1 = document.getElementById("bom");

if (hour >= 17) {
    h1.innerHTML = "Boa noite e seja bem-vindo(a) ao meu universo digital!"
} else if (hour >= 13) {
    h1.innerHTML = "Boa tarde e seja bem-vindo(a) ao meu universo digital!"
} else if (hour >= 0) {
    h1.innerHTML = "Bom dia e seja bem-vindo(a) ao meu universo digital!"
}
