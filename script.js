function calculate() {
    const etanol = parseFloat(document.querySelector(".etanol").value);
    const gasolina = parseFloat(document.querySelector(".gasolina").value);
    const result = document.querySelector(".compensa");
    const calcule = etanol / gasolina;

console.log ("etanol:", etanol)
console.log ("gasolina", gasolina)
console.log ("resultado", calcule)

    if (calcule >= 0.7) {
        result.textContent = "Compensa abastecer com gasolina!";
    } else {
        result.textContent = "Compensa abastecer com Etanol!";
    }
}
