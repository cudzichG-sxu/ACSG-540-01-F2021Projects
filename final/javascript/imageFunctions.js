var offsetActual = 0;
//function go get images with offset as a parameter
function getImages(offsetActual) {
    //grabs seach field value and below checks if it's null, if so then it's set to random
    //mainly used for page refresh or on initial load
    var searchData = document.getElementById('search').value;

    if (searchData == null || searchData == "") {
        searchData = "random";
    }

    //data to send to php server side
    var data = { "offset": offsetActual, "search": searchData };
    var fd = new FormData();
    for (var i in data) {
        fd.append(i, data[i]);
    }
    //post data to php server side, on return loops through the 
    //return urls and adds them into iFrames
    fetch('http://acsg540.com/~gcudzich/final/server_side.php', {
        method: "POST",
        body: fd
    }).then(response => {
        response.text()
            .then(res => {
                var returnFormatted = JSON.parse(res);
                for (var i = 0; i < returnFormatted.length; i++) {
                    var iframe = document.createElement('iframe');
                    resizeIFrameToFitContent(iframe);
                    iframe.setAttribute('id', 'gifFrame');
                    iframe.src = returnFormatted[i];
                    document.body.appendChild(iframe);
                }
            })
    })
};

//function called by the button when searching new items
//resets offset to 0, removes all previously added iFrames so that 
//it's reset to the initial 10 for new images based on user search
function getNewImages() {
    offsetActual = 0;
    if (document.getElementById("gifFrame")) {
        var iframes = document.querySelectorAll('iframe');
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].parentNode.removeChild(iframes[i]);
        }
    }
    getImages(offsetActual);
}

//event listener to add more images when the body is clicked
document.body.addEventListener('click', function () {
    offsetActual += 10;
    getImages(offsetActual);
}, false);

//listener to load images on initial page load
document.addEventListener("DOMContentLoaded", function () {
    getImages(offsetActual);
});

//resizes iFrames to a reasonable size
//also combats the scroll to bottom stuff since the original size it would call
//the API twice since on initial load it was already technically at the bottom
function resizeIFrameToFitContent(iFrame) {
    iFrame.height = "300";
    iFrame.width = "480";
}

//scroll listener to load more images when the user
//hits the bottom of the page, *pagination
window.onscroll = function () {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        offsetActual += 10;
        getImages(offsetActual);
    }
};