/* 
    Author: MLC Bloeiman <@strawmelonjuice, mar@strawmelonjuice.com> 
    Date: 26 maart 2024
    
    <Subject>

*/
// Creeer de navigatiefuncties
const sidenav = {
	close: () => {
		document.getElementById("side-nav").style.left = `-${
			document.getElementById("side-nav").offsetWidth + 30
		}px`;
	},
	open: () => {
		document.getElementById("side-nav").style.left = "0";
	},
};
sidenav.close();
// Maak de knopjes klikbaar
document
	.getElementById("side-menu-opener")
	.setAttribute("onclick", "sidenav.open()");
document
	.querySelector("#side-menu-closer button")
	.setAttribute("onclick", "sidenav.close()");
// Bij het resizen, moet het verborgen menu ook geresized worden, anders verschijnt het alsnog op het scherm.
window.onresize = () => {
	// Om zeker te weten dat we alle bewegingen te pakken hebben, wachten we 100 ms.
	setTimeout(() => {
		sidenav.close();
	}, 100);
};
// Strings worden beheerst
var websitenaam = "DierenTehuisDenBosch";
var initialen = "TDW, MLCB";
// Getallen worden beheerst
// Float-vorm
var leeftijd1 = 20.4;
// Int-vorm
var leeftijd2= 16;

// Booleans worden beheerst
var evenOud = (leeftijd1 == leeftijd2); // false
var waar = true; // true