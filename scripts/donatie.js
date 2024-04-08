/* 
    Author: Tristan De Wit
    Date: maart 2024
    
    Donatie pagina script

*/

var donatie = () => {var Doneer = prompt("Hoeveel wilt u doneren?");
alert("U heeft" + " " + "$" + Doneer + " " + "gedoneerdt. Dank u wel." );

document.getElementById("Gedoneerd").innerHTML = "U heeft" + " " + "$" + Doneer + " " + "gedoneerdt. Dank u wel.";
}
document.getElementById("donatieknop").onclick = donatie;