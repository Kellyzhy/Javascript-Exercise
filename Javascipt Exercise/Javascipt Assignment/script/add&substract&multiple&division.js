function addNumbers() {
    var a = parseInt(document.getElementById("fn").value)  //convert into int
    var b = parseInt(document.getElementById("sn").value)
    document.getElementById("result").value = a + b
}

function substrction() {
    var a = parseInt(document.getElementById("fn").value)  //convert into int
    var b = parseInt(document.getElementById("sn").value)
    document.getElementById("result").value = a - b
}

function multiplication() {
    var a = parseInt(document.getElementById("fn").value)  //convert into int
    var b = parseInt(document.getElementById("sn").value)
    document.getElementById("result").value = a * b
}

function division() {
    var a = parseInt(document.getElementById("fn").value)  //convert into int
    var b = parseInt(document.getElementById("sn").value)
    document.getElementById("result").value = a / b
} 