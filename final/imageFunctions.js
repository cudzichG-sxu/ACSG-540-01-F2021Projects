var offsetActual = 0;

function getImages(offsetActual) {
    var searchData = document.getElementById('search').value;

    if (searchData == null || searchData == "") {
        searchData = "random";
    }

    var data = { "offset": offsetActual, "search": searchData };
    var fd = new FormData();
    for (var i in data) {
        fd.append(i, data[i]);
    }
    fetch('http://localhost/server_side.php', {
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

document.getElementById("searchButton").addEventListener("click", function () {
    offsetActual = 0;
    if (document.getElementById("gifFrame")) {
        var iframes = document.querySelectorAll('iframe');
        for (var i = 0; i < iframes.length; i++) {
            iframes[i].parentNode.removeChild(iframes[i]);
        }
    }
    getImages(offsetActual);
});

document.body.addEventListener('click', function () {
    offsetActual += 10;
    getImages(offsetActual);
}, false);

document.addEventListener("DOMContentLoaded", function () {
    getImages(offsetActual);
});

function resizeIFrameToFitContent(iFrame) {
    iFrame.height = "300";
    iFrame.width = "480";
}

window.onscroll = function () {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
        offsetActual += 10;
        getImages(offsetActual);
    }
};