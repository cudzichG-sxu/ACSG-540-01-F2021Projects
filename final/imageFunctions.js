function getImages(offsetActual) {
    var data = { "offset": offsetActual, "search": "random" };
    var fd = new FormData();
    //very simply, doesn't handle complete objects
    for (var i in data) {
        fd.append(i, data[i]);
    }
    fetch('http://localhost/server_side.php', {
        method: "POST",
        body: fd
    })
        .then(response => {
            response.text()
                .then(res => {
                    var returnFormatted = JSON.parse(res);
                    for (var i = 0; i < returnFormatted.length; i++) {
                        var iframe = document.createElement('iframe');
                        iframe.src = returnFormatted[i];
                        document.body.appendChild(iframe);
                    }
                })
        })

};

function getSearchImages(offsetActual) {
    var searchData = document.getElementById('search').value;
    var data = { "offset": offsetActual, "search": searchData };
    var fd = new FormData();
    //very simply, doesn't handle complete objects
    for (var i in data) {
        fd.append(i, data[i]);
    }
    fetch('http://localhost/server_side.php', {
        method: "POST",
        body: fd
    })
        .then(response => {
            response.text()
                .then(res => {
                    var returnFormatted = JSON.parse(res);
                    for (var i = 0; i < returnFormatted.length; i++) {
                        var iframe = document.createElement('iframe');
                        iframe.src = returnFormatted[i];
                        document.body.appendChild(iframe);
                    }
                })
        })

}