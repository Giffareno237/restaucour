function moyenne() {
    console.log("La fonction moyenne() est appelée !");
    var a = parseInt(document.getElementById("u1").value) || 0; 
    var b = parseInt(document.getElementById("u2").value) || 0;
    var c = parseInt(document.getElementById("u3").value) || 0;

    var M = (a + b + c) / 3;
    console.log("Valeurs :", a, b, c, "Moyenne :", M);
    
    document.getElementById("result").innerText = M;
}
