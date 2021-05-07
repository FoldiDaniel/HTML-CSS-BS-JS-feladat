function háromszögMértékegység(váltószám) {
    var Mértékegység = document.getElementById("Mértékegység_HÁ").value;
    if (Mértékegység == "mm") {
        var str = "2";
        var result = "mm" + str.sup("2");
        document.getElementById("Mértékegység_HÁ_K").innerHTML = "mm";
        document.getElementById("Mértékegység_HÁ_T").innerHTML = result
        var váltószám = 10
        return váltószám
    }
    if (Mértékegység == "cm") {
        var str = "2";
        var result = "cm" + str.sup("2");
        document.getElementById("Mértékegység_HÁ_K").innerHTML = "cm";
        document.getElementById("Mértékegység_HÁ_T").innerHTML = result
        var váltószám = 1
        return váltószám
    }
    if (Mértékegység == "dm") {
        var str = "2";
        var result = "dm" + str.sup("2");
        document.getElementById("Mértékegység_HÁ_K").innerHTML = "dm";
        document.getElementById("Mértékegység_HÁ_T").innerHTML = result
        var váltószám = 0.1
        return váltószám
    }
    if (Mértékegység == "m") {
        var str = "2";
        var result = "m" + str.sup("2");
        document.getElementById("Mértékegység_HÁ_K").innerHTML = "m";
        document.getElementById("Mértékegység_HÁ_T").innerHTML = result
        var váltószám = 0.01
        return váltószám
    }
}
function háromszög() {
    var váltószám = háromszögMértékegység()
    var a = parseInt(document.getElementById("Háromszög_a").value);
    var b = parseInt(document.getElementById("Háromszög_b").value);
    var c = parseInt(document.getElementById("Háromszög_c").value);
    if (a <= 0 || b <= 0 || c <= 0) {
        alert("Egyik érték sem lehet negatív szám vagy nulla")
    }else{
        if (a + b <= c || a + c <= b ||  b + c <= a){
            alert("A háromszög nem szerkeszthető meg! (Bármely két oldal összegének nagyobbnak kell lenie a harmadik oldalnál)")
        } else{
        var K_eredmény = (a + b + c) * váltószám
        var s = (a + b + c) / 2
        var T_eredmény = Math.sqrt(s * (s - a) * (s - b) * (s - c)) * (váltószám * váltószám)
        document.getElementById("Háromszög_K").value = K_eredmény.toFixed(2);
        document.getElementById("Háromszög_T").value = T_eredmény.toFixed(2);
    }}
}

function rombuszMértékegység(váltószám) {
    var Mértékegység = document.getElementById("Mértékegység_R").value;
    if (Mértékegység == "mm") {
        var str = "2";
        var result = "mm" + str.sup("2");
        document.getElementById("Mértékegység_R_K").innerHTML = "mm";
        document.getElementById("Mértékegység_R_T").innerHTML = result
        var váltószám = 10
        return váltószám
    }
    if (Mértékegység == "cm") {
        var str = "2";
        var result = "cm" + str.sup("2");
        document.getElementById("Mértékegység_R_K").innerHTML = "cm";
        document.getElementById("Mértékegység_R_T").innerHTML = result
        var váltószám = 1
        return váltószám
    }
    if (Mértékegység == "dm") {
        var str = "2";
        var result = "dm" + str.sup("2");
        document.getElementById("Mértékegység_R_K").innerHTML = "dm";
        document.getElementById("Mértékegység_R_T").innerHTML = result
        var váltószám = 0.1
        return váltószám
    }
    if (Mértékegység == "m") {
        var str = "2";
        var result = "m" + str.sup("2");
        document.getElementById("Mértékegység_R_K").innerHTML = "m";
        document.getElementById("Mértékegység_R_T").innerHTML = result
        var váltószám = 0.01
        return váltószám
    }
}

function rombusz() {
    var váltószám = rombuszMértékegység()
    var a = parseInt(document.getElementById("Rombusz_a").value);
    var m = parseInt(document.getElementById("Rombusz_m").value);
    if (isNaN(a) || isNaN(m)) {
        alert("Nem adott meg elég értéket!")
    } else {
        if (a <= 0 || m <= 0) {
            alert("Egyik érték sem lehet negatív szám vagy nulla")
        } else {
            var K_eredmény = 4 * a * váltószám
            var T_eredmény = a * m * váltószám * váltószám
            document.getElementById("Rombusz_K").value = K_eredmény.toFixed(2)
            document.getElementById("Rombusz_T").value = T_eredmény.toFixed(2);
        }
    }
}
function téglatestMértékegység(váltószám) {
    var Mértékegység = document.getElementById("Mértékegység_T").value;
    if (Mértékegység == "mm") {
        var str1 = "2";
        var result1 = "mm" + str1.sup("2");
        var str2 = "3";
        var result2 = "mm" + str2.sup("3");
        document.getElementById("Mértékegység_T_K").innerHTML = result1;
        document.getElementById("Mértékegység_T_T").innerHTML = result2;
        var váltószám = 10
        return váltószám
    }
    if (Mértékegység == "cm") {
        var str1 = "2";
        var result1 = "cm" + str1.sup("2");
        var str2 = "3";
        var result2 = "cm" + str2.sup("3");
        document.getElementById("Mértékegység_T_K").innerHTML = result1;
        document.getElementById("Mértékegység_T_T").innerHTML = result2;
        var váltószám = 1
        return váltószám
    }
    if (Mértékegység == "dm") {
        var str1 = "2";
        var result1 = "dm" + str1.sup("2");
        var str2 = "3";
        var result2 = "dm" + str2.sup("3");
        document.getElementById("Mértékegység_T_K").innerHTML = result1;
        document.getElementById("Mértékegység_T_T").innerHTML = result2;
        var váltószám = 0.1
        return váltószám
    }
    if (Mértékegység == "m") {
        var str1 = "2";
        var result1 = "m" + str1.sup("2");
        var str2 = "3";
        var result2 = "m" + str2.sup("3");
        document.getElementById("Mértékegység_T_K").innerHTML = result1;
        document.getElementById("Mértékegység_T_T").innerHTML = result2;
        var váltószám = 0.01
        return váltószám
    }
}
function téglatest() {
    var váltószám = téglatestMértékegység()
    var a = parseInt(document.getElementById("Tégla_a").value);
    var b = parseInt(document.getElementById("Tégla_b").value);
    var c = parseInt(document.getElementById("Tégla_c").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Nem adott meg elég értéket!")
    } else {
        if (a <= 0 || b <= 0 || c <= 0) {
            alert("Egyik érték sem lehet negatív szám vagy nulla")
        } else {
            var A_eredmény = 2 * (a * b + a * c + b * c) * váltószám * váltószám
            var V_eredmény = a * b * c * váltószám * váltószám * váltószám
            document.getElementById("Tégla_A").value = A_eredmény.toFixed(2);
            document.getElementById("Tégla_V").value = V_eredmény.toFixed(2);
        }
    }
}
function hengerMértékegység(váltószám) {
    var Mértékegység = document.getElementById("Mértékegység_H").value;
    if (Mértékegység == "mm") {
        var str1 = "2";
        var result1 = "mm" + str1.sup("2");
        var str2 = "3";
        var result2 = "mm" + str2.sup("3");
        document.getElementById("Mértékegység_H_K").innerHTML = result1;
        document.getElementById("Mértékegység_H_T").innerHTML = result2;
        var váltószám = 10
        return váltószám
    }
    if (Mértékegység == "cm") {
        var str1 = "2";
        var result1 = "cm" + str1.sup("2");
        var str2 = "3";
        var result2 = "cm" + str2.sup("3");
        document.getElementById("Mértékegység_H_K").innerHTML = result1;
        document.getElementById("Mértékegység_H_T").innerHTML = result2;
        var váltószám = 1
        return váltószám
    }
    if (Mértékegység == "dm") {
        var str1 = "2";
        var result1 = "dm" + str1.sup("2");
        var str2 = "3";
        var result2 = "dm" + str2.sup("3");
        document.getElementById("Mértékegység_H_K").innerHTML = result1;
        document.getElementById("Mértékegység_H_T").innerHTML = result2;
        var váltószám = 0.1
        return váltószám
    }
    if (Mértékegység == "m") {
        var str1 = "2";
        var result1 = "m" + str1.sup("2");
        var str2 = "3";
        var result2 = "m" + str2.sup("3");
        document.getElementById("Mértékegység_H_K").innerHTML = result1;
        document.getElementById("Mértékegység_H_T").innerHTML = result2;
        var váltószám = 0.01
        return váltószám
    }
}
function henger() {
    var váltószám = hengerMértékegység()
    var r = parseInt(document.getElementById("Henger_r").value);
    var m = parseInt(document.getElementById("Henger_m").value);
    if (isNaN(r) || isNaN(m)) {
        alert("Nem adott meg elég értéket!")
    } else {
        if (r <= 0 || m <= 0) {
            alert("Egyik érték sem lehet negatív szám vagy nulla")
        } else {
            var V_eredmény = Math.PI * m * r * r * váltószám * váltószám
            var A_eredmény = 2 * Math.PI * r * (r + m) * váltószám * váltószám * váltószám
            document.getElementById("Henger_A").value = A_eredmény.toFixed(2);
            document.getElementById("Henger_V").value = V_eredmény.toFixed(2);
        }
    }
}
