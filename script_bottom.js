document.onload = setSkladkaDate()

function setSkladkaDate() {

    let data = new Date
    
    let dzien = (data.getDate()+1).toString();
    dzien.length == 1 ? dzien = '0' + dzien : "";
    let miesiac = (data.getMonth()+1).toString();
    miesiac.length == 1 ? miesiac = '0' + miesiac : "";

    data = data.getFullYear().toString() + '-' + miesiac + '-' + dzien;

    document.getElementById("skladka_data").value = data;
}

document.getElementById("skladka_data_1").innerText = 'Od ' + addDays(new Date,1).toLocaleDateString() + ' (Jutro)'
document.getElementById("skladka_data_2").innerText = 'Od ' + addDays(new Date,2).toLocaleDateString()
document.getElementById("skladka_data_3").innerText = 'Od ' + addDays(new Date,3).toLocaleDateString()

document.getElementById("skladka_50_1").innerText = policzSkladke(50,1)
document.getElementById("skladka_50_2").innerText = policzSkladke(50,2)
document.getElementById("skladka_50_3").innerText = policzSkladke(50,3)

document.getElementById("skladka_440_1").innerText = policzSkladke(440,1)
document.getElementById("skladka_440_2").innerText = policzSkladke(440,2)
document.getElementById("skladka_440_3").innerText = policzSkladke(440,3)

document.getElementById("skladka_600_1").innerText = policzSkladke(600,1)
document.getElementById("skladka_600_2").innerText = policzSkladke(600,2)
document.getElementById("skladka_600_3").innerText = policzSkladke(600,3)

document.getElementById("skladka_660_1").innerText = policzSkladke(660,1)
document.getElementById("skladka_660_2").innerText = policzSkladke(660,2)
document.getElementById("skladka_660_3").innerText = policzSkladke(660,3)

document.getElementById("skladka_860_1").innerText = policzSkladke(860,1)
document.getElementById("skladka_860_2").innerText = policzSkladke(860,2)
document.getElementById("skladka_860_3").innerText = policzSkladke(860,3)

document.getElementById("skladka_1320_1").innerText = policzSkladke(1320,1)
document.getElementById("skladka_1320_2").innerText = policzSkladke(1320,2)
document.getElementById("skladka_1320_3").innerText = policzSkladke(1320,3)



