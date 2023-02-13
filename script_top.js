function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function copyTxt() {

    const el_txt = event.target.innerText;

    let td_container = document.createElement("span");
    td_container.innerText = "Copied!";
    td_container.classList.add("copied");

    let el_copy = event.target;
    el_copy.appendChild(td_container)

    setTimeout( () => {td_container.classList.add("copied1")},10);
    setTimeout( () => {td_container.classList.add("copied2")},1500);
    setTimeout( () => {td_container.remove();}, 3000);

    navigator.clipboard.writeText(el_txt);
}

function policzSkladkeCustom() {

    const kwota = document.getElementById('skladka_kwota').value
    const ilosc = document.getElementById('skladka_ilosc').value
    const data = document.getElementById('skladka_data').value

    const arr = data.split('-')
    let skladka_Y_M = kwota/12*(12-Number(arr[1]))
    let skladka_Y_D = kwota/360*(31-Number(arr[2]))
    
    let skladka_Y = (skladka_Y_M + skladka_Y_D) 

    let skladka_H = skladka_Y - (kwota/2);
    skladka_H <= 0 ? skladka_H = skladka_Y : "";

    let skladka_Q = skladka_H - (kwota/4);
    skladka_Q <= 0 ? skladka_Q = skladka_H : "" ;

    val_day = kwota/360*ilosc

    document.getElementById("result_total").innerHTML = "Razem "+ ilosc + " pojazdy: <b>" + ilosc*kwota + " EUR </b>"
    document.getElementById("result_Y").innerHTML = "<b>Rocznie </b>od " + data + ": <b>" + (skladka_Y * ilosc).toFixed(2) + " EUR </b>"
    document.getElementById("result_H").innerHTML = "<b>Półrocznie </b>od " + data + ": <b>" + (skladka_H * ilosc).toFixed(2) + " EUR </b> (" + kwota/2*ilosc + " EUR)"
    document.getElementById("result_Q").innerHTML = "<b>Kwartalnie </b>od " + data + ": <b>" + (skladka_Q * ilosc).toFixed(2) + " EUR </b> (" + kwota/4*ilosc + " EUR)"
    document.getElementById("result_day").innerHTML = "Za 1 dzień: <b>" + val_day.toFixed(2) + " EUR </b>"

}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function policzSkladke(kwota, przesuniecie) {

    data = addDays(new Date, przesuniecie)

    let val_m = kwota/12*(12-(data.getMonth()+1))
    let val_d = kwota/360*(31-data.getDate())   
                
    return val_total = (val_m + val_d).toFixed(2).replace('.',',').replace(',00','') +' €';
}

function calculateFV_maxTransport () {

    let trucks_s = document.getElementById("trucks_s").value
    let trucks_l = document.getElementById("trucks_l").value

    let max_transport_l = 0
    let max_transport_s = 0


    if (trucks_l == 1) {
        max_transport_l = 9000;
    } else if (trucks_l > 1) {
        max_transport_l = 9000 + (5000 * (trucks_l-1))
    }


    if (trucks_l == 0) {
        document.getElementById("fv_l_disp_none").style.display = "none";
    } else {            
        document.getElementById("fv_pl_l").innerText = trucks_l + " poj. ponad 3,5t DMC / Suma ub. EUR " + numberWithSpaces(max_transport_l) + ",--"
        document.getElementById("fv_de_l").innerText = trucks_l + " Fzg. über 3,5 to hzG / Vers.Summe EUR " + numberWithSpaces(max_transport_l) + ",--"
        document.getElementById("fv_l_disp_none").style.display = "block";
    }


    if (trucks_s == 1) {
        max_transport_s = 1800;
    } else if (trucks_s > 1) {
        max_transport_s = 1800 + (900 * (trucks_s-1))
    }


    if (trucks_s == 0) {
        document.getElementById("fv_s_disp_none").style.display = "none";
    } else {
        document.getElementById("fv_pl_s").innerText = trucks_s + " poj. do 3,5t DMC / Suma ub. EUR " + numberWithSpaces(max_transport_s) + ",--"
        document.getElementById("fv_de_s").innerText = trucks_s + " Fzg. bis 3,5 to hzG / Vers.Summe EUR " + numberWithSpaces(max_transport_s) + ",--"
        document.getElementById("fv_s_disp_none").style.display = "block";
    }
    
    
    if (trucks_s > 0 && trucks_l > 0)  {
        document.getElementById("fv_pl_mix").innerText = trucks_s + " poj. do 3,5t DMC / Suma ub. EUR " + numberWithSpaces(max_transport_s - 900) + ",--"
        document.getElementById("fv_de_mix").innerText = trucks_s + " Fzg. bis 3,5 to hzG / Vers.Summe EUR " + numberWithSpaces(max_transport_s - 900) + ",--"
        document.getElementById("fv_mix_disp_none").style.display = "block";
        document.getElementById("fv_s_disp_none").style.display = "none";
    } else {
        document.getElementById("fv_mix_disp_none").style.display = "none";
    }

}            
