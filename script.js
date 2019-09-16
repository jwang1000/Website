// open element with defaultOpen id on page load
document.getElementById("defaultOpen").click();

// hide all skill text except for the starting one
var texts = document.getElementsByClassName("infoText");
for (var i = 0; i < texts.length; i++)
{
    texts[i].style.display = "none";
}
document.getElementById("start").style.display = "block";


// show the icons for the selected tab
function openTab(evt, tabName)
{
    var tabcontent, tablinks;

    // get all elements that are of class tabcontent and deselect them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) 
    {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) 
    {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // show the current tab, add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";

    // reset the description
    openDescrip(evt, "start");
}

// show the description for the selected icon
function openDescrip(evt, iconName)
{
    // hide all paragraphs that display info text except for the desired ones
    for (var i = 0; i < texts.length; i++)
    {
        if (texts[i].id === iconName)
            texts[i].style.display = "block";
        else
            texts[i].style.display = "none";
    }

    // deselect all iconlinks
    var iconlinks = document.getElementsByClassName("iconlink");
    for (var i = 0; i < iconlinks.length; i++)
    {
        iconlinks[i].className = iconlinks[i].className.replace(" active", "");
    }

    if (iconName != "start")
        evt.currentTarget.className += " active";
}


// handle mobile menu opening/closing
function toggleMenu() {
    var x = document.getElementById("menuLinks");
    if (x.style.display === "block")
    {
        x.style.display = "none";
    }
    else 
    {
        x.style.display = "block";
    }
}