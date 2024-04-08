/* 
	Author: MLC Bloeiman <@strawmelonjuice, mar@strawmelonjuice.com> 
	Date: 26 maart 2024
    
	Website-wijd script voor project

*/
// Creeer de navigatiefuncties
const sidenav = {
	close: () => {
		document.getElementById("side-nav").style.left = `-${document.getElementById("side-nav").offsetWidth + 30
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
var leeftijd2 = 16;

// Booleans worden beheerst
var evenOud = (leeftijd1 == leeftijd2); // false
var waar = true; // true

var ZIN = ("Tristan is " + leeftijd2 + ", Marniek is " + leeftijd1 + " jaar. Zijn zij even oud? " + evenOud).toUpperCase();
console.log(ZIN);
var zin = ZIN.toLowerCase();
console.log(zin);

console.log("Die zin is " + zin.length + " tekens lang");

if (document.body.classList.contains("home")) {
	document.getElementById("top-nav").innerHTML = "<text>U bent op de homepage</text>" + document.getElementById("top-nav").innerHTML;
} else {
	console.log("We zijn niet op de homepage, de banner hoeft niet weergegeven.");
}
