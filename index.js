function show(value) {
    document.getElementById("output").value += value;
}

function Clear() {
    document.getElementById("output").value = "";
}

function calculate() {
    var p = document.getElementById("output").value;
    try {
        var q = eval(p);
        document.getElementById("output").value = q;
    } catch (e) {
        document.getElementById("output").value = "Error";
    }
}

function remove() {
    var p = document.getElementById("output").value;
    var q = p.slice(0, -1);
    document.getElementById("output").value = q;
}
