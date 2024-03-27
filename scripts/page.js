/* 
    Author: MLC Bloeiman <@strawmelonjuice, mar@strawmelonjuice.com> 
    Date: 26 maart 2024
    
    <Subject>

*/
// Create nav functions
const sidenav = {
    close: () => {
        document.getElementById("side-nav").style.left = `-${(document.getElementById("side-nav").offsetWidth)}px`;
    },
    open: () => {
        document.getElementById("side-nav").style.left = "0";
    }
}
sidenav.close()
// Add onclick events to buttons
document.getElementById("side-menu-opener").setAttribute("onclick", "sidenav.open()");
document.querySelector("#side-menu-closer button").setAttribute("onclick", "sidenav.close()");