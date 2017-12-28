/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openSideNav() {
    document.getElementById("Forum_Sidenav").style.width = "250px";
    //document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeSideNav() {
    document.getElementById("Forum_Sidenav").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function openTopNav() {
    var x = document.getElementById("Forum_Topnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}