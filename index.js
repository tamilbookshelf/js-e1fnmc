var containerEl = document.getElementById("df-container"); // Get container
// Do screensize detection
if(detectWidth() <= 768){
    // ### Desktop ###
    $(document).ready(function()
    {
        $(".adsense-inject").each(function () {
            $(this).append('<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4320815752166067" data-ad-slot="6715971108" data-ad-format="auto"></ins>');
            (adsbygoogle = window.adsbygoogle || []).push({});
        }); 
    });
} else {
    // ###  Mobile ###
    var adEl = document.createElement("ins");
    adEl.classList.add("adsbygoogle");
    adEl.style.display = "block";
    adEl.dataset.adClient = "ca-pub-4320815752166067";
    adEl.dataset.adSlot = "3055871855";
    adEl.dataset.adFormat = "horizontal";
    adEl.dataset.language = "EN";
    // Inject ad into container div
    containerEl.appendChild(adEl);
    // Call Adsense async
    (adsbygoogle = window.adsbygoogle || []).push({});
}