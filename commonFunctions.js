function isMobileDevice() 
{
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

function changeGalleryPages() 
{
    
    var x = document.getElementsByClassName("galleryPage");
    if(isMobileDevice())
    {
        var i;
        for (i = 0; i < x.length; i++) 
        {
            x[i].style="width:100%;  margin-left: 0; margin-right: 0;"
        }
    }
    else
    {
        var i;
        for (i = 0; i < x.length; i++) 
        {
            x[i].style="width:25%;"
        }
    }
}

function changeImageSizes() 
{
    
    var x = document.getElementsByClassName("mobile100");
    if(isMobileDevice())
    {
        var i;
        for (i = 0; i < x.length; i++) 
        {
            x[i].style.width = "95%";
        }
    }
    else
    {
        var i;
        for (i = 0; i < x.length; i++) 
        {
            if(!(x[i].clientWidth < screen.width))
            {
                x[i].style.width = "100%";
            }
        }
    }
}

function changeTextDivs()
{

    var x = document.getElementsByClassName("mobileText");

    if(isMobileDevice())
    {
        var i;
        for (i = 0; i < x.length; i++) 
        {
            x[i].style.width = "95%";
        }
    }

}

function setupNavbar()
{
    var navbarSize = document.getElementsByClassName("navbar")[0].clientHeight;

    document.getElementById("navbarSpace").setAttribute("style", "margin-bottom: " + navbarSize.toString() + "px; ");

    console.log(document.getElementById("navbarSpace").style.marginBottom);

    //alert(document.getElementById("navbarSpace"));
}