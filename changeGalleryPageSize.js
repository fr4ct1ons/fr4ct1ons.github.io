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
        //alert("The image size is" + x[0].clientWidth + "x" + x[0].clientHeight);
        for (i = 0; i < x.length; i++) 
        {
            x[i].style="width:25%;"
        }
    }
}