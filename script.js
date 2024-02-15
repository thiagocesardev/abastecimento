function calculate() {
    const etanol = parseFloat(document.querySelector(".etanol").value);
    const gasolina = parseFloat(document.querySelector(".gasolina").value);
    const result = document.querySelector(".compensa");
    const calcule = etanol / gasolina;

 calcule >= 0.7 ? result.textContent = "Compensa abastecer com Gasolina!" :
                  result.textContent = "Compensa abastecer com Etanol!";
   
}
