function JólKitöltve() {
    var a = parseInt(document.getElementById("Háromszög_a").value);
    var b = parseInt(document.getElementById("Háromszög_b").value);
    var c = parseInt(document.getElementById("Háromszög_c").value);
    var α = parseFloat(document.getElementById("Háromszög_α").value);
    var β = parseFloat(document.getElementById("Háromszög_β").value);
    var γ = parseFloat(document.getElementById("Háromszög_γ").value);
    var kitöltve = 6
    if (isNaN(a)) {
        kitöltve -= 1
    }
    else if (isNaN(b)) {
        kitöltve -= 1
    }
    else if (isNaN(c)) {
        kitöltve -= 1
    }
    else if (isNaN(α)) {
        kitöltve -= 1
    }
    else if (isNaN(β)) {
        kitöltve -= 1
    }
    else if (isNaN(γ)) {
        kitöltve -= 1
    }
    if (kitöltve > 3) {
        alert("Nincs megadva elég adat")
    } else {
        if (a + b <= c || a + c <= b || b + c <= a) {
            alert("A háromszög nem szerkeszthető meg! (Bármely két oldalának összegének nagyobbank kell lennie mint a harmadiknak)")
        } else {
            return
        }

    }
}

function háromszög() {
    if (JólKitöltve) {
        var a = parseInt(document.getElementById("Háromszög_a").value);
        var b = parseInt(document.getElementById("Háromszög_b").value);
        var c = parseInt(document.getElementById("Háromszög_c").value);
        var α = parseFloat(document.getElementById("Háromszög_α").value);
        var β = parseFloat(document.getElementById("Háromszög_β").value);
        var γ = parseFloat(document.getElementById("Háromszög_γ").value);
        if (a <= 0 || b <= 0 || c <= 0 || α <= 0 || β <= 0 || γ <= 0) {
            alert("Egyik érték sem lehet negatív szám vagy nulla")
        }
        else {
            var kosz_α = Math.cos(Math.PI * α / 180)
            var szin_α = Math.sin(Math.PI * (α / 180))
            var kosz_β = Math.cos(Math.PI * α / 180)
            var szin_β = Math.sin(Math.PI * (α / 180))
            var kosz_γ = Math.cos(Math.PI * α / 180)
            var szin_γ = Math.sin(Math.PI * (α / 180))
            var a_szögből = Math.sqrt(Math.pow(b) + Math.pow(c) - (2 * ((b * c) * kosz_α)))
            var b_szögből = Math.sqrt(Math.pow(a) + Math.pow(c) - (2 * ((a * c) * kosz_β)))
            var c_szögből = Math.sqrt(Math.pow(a) + Math.pow(b) - (2 * ((a * b) * kosz_γ)))
            if (isNaN(a)) {
                a = a_szögből
            }
            if (isNaN(b)) {
                b = b_szögből
            }
            if (isNaN(c)) {
                c = c_szögből
            }
            var m_a = b * szin_γ
            var K_eredmény = a + b + c
            var T_eredmény = (a * m_a) / 2
            document.getElementById("Háromszög_K").value = K_eredmény.toFixed(2);
            document.getElementById("Háromszög_T").value = T_eredmény.toFixed(2);
            document.getElementById("Háromszög_a").value = a.toFixed(1);
            document.getElementById("Háromszög_b").value = b.toFixed(1);
            document.getElementById("Háromszög_c").value = c.toFixed(1);
            document.getElementById("Háromszög_α").value = α.toFixed(1);
            document.getElementById("Háromszög_β").value = β.toFixed(1);
            document.getElementById("Háromszög_γ").value = γ.toFixed(1);
        }
    }
}
function rombusz() {
    var a = parseInt(document.getElementById("Rombusz_a").value);
    var m = parseInt(document.getElementById("Rombusz_m").value);
    if (isNaN(a) || isNaN(m)) {
        alert("Nem adott meg elég értéket!")
    } else {
        if (a <= 0 || m <= 0) {
            alert("Egyik érték sem lehet negatív szám vagy nulla")
        } else {
            var K_eredmény = 4 * a
            var T_eredmény = a * m
            document.getElementById("Rombusz_K").value = K_eredmény.toFixed(2);
            document.getElementById("Rombusz_T").value = T_eredmény.toFixed(2);
        }
    }
}
function téglatest() {
    var a = parseInt(document.getElementById("Tégla_a").value);
    var b = parseInt(document.getElementById("Tégla_b").value);
    var c = parseInt(document.getElementById("Tégla_c").value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Nem adott meg elég értéket!")
    } else {
        if (a <= 0 || b <= 0 || c <= 0) {
            alert("Egyik érték sem lehet negatív szám vagy nulla")
        } else {
            var A_eredmény = 2 * (a * b + a * c + b * c)
            var V_eredmény = a * b * c
            document.getElementById("Tégla_A").value = A_eredmény.toFixed(2);
            document.getElementById("Tégla_V").value = V_eredmény.toFixed(2);
        }
    }
}
function henger() {
    var r = parseInt(document.getElementById("Henger_r").value);
    var m = parseInt(document.getElementById("Henger_m").value);
    if (isNaN(r) || isNaN(m)) {
        alert("Nem adott meg elég értéket!")
    } else {
        if (r <= 0 || m <= 0) {
            alert("Egyik érték sem lehet negatív szám vagy nulla")
        } else {
            var V_eredmény = Math.PI * m * r * r
            var A_eredmény = 2 * Math.PI * r * (r + m)
            document.getElementById("Henger_A").value = A_eredmény.toFixed(2);
            document.getElementById("Henger_V").value = V_eredmény.toFixed(2);
        }
    }
}
