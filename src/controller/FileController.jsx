const getImgSize = ( base64 ) => {

    return new Promise (function (resolved) {
        var i = new Image()
        i.onload = function(){
            resolved({width: i.width, height: i.height})
        };
        i.src = base64
    })

}

export default {
    getImgSize
}