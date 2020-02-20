function isMobileDevice() 
{
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};

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
        //alert("The image size is" + x[0].clientWidth + "x" + x[0].clientHeight);
        for (i = 0; i < x.length; i++) 
        {
            if(!(x[i].clientWidth < screen.width))
            {
                x[i].style="width:100%"
            }
        }
    }
}