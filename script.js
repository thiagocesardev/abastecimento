function calculate() {
    const etanol = parseFloat(document.querySelector(".etanol").value);
    const gasolina = parseFloat(document.querySelector(".gasolina").value);
    const result = document.querySelector(".compensa");
    const calcule = etanol / gasolina;

    if (calcule >= 0.7) {
        result.textContent = "Compensa abastecer com gasolina!";
    } else {
        result.textContent = "Compensa abastecer com Etanol!";
    }
}
