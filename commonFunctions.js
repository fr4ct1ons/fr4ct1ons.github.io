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
            x[i].style="width:100%"
        }
    }
    else
    {
        var i;
        for (i = 0; i < x.length; i++) 
        {
            if(!(x[i].clientWidth < screen.width))
            {
                x[i].style="width:100%"
            }
        }
    }
}