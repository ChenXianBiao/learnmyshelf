function hasUserMedia() {
    return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia);// ！！是保护语句，（）返回如果有值则无影响，如果是null或者
    //undefine 则！表示true，！！表示false
}
/*
if(hasUserMedia())
{
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getUserMedia({
        video: true,
        audio: true
    }, function (stream) {
        var video = document.querySelector('video');
        video.src = window.URL.createObjectURL(stream);
        video.onloadedmetadata = alert("my stream is ready")
    }, function (error) { })
}else
{
    alert("抱歉，你的浏览器不支持getusermedia.")
}
*/
if(hasUserMedia())
{
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia || navigator.msGetUserMedia;
    navigator.getUserMedia(
        {
            video:{mandtory:{minAspectRatio:1.7777,minAspectratio:1.778},
                    optional:[{maxWidth:320,}]
                    },
            audio:false
        },
        function (stream)
        {
            var video = document.querySelector('video');
            video.src = window.URL.createObjectURL(stream);
            var constraints = {video:{mandtory:{minAspectRatio:1.7777,minAspectratio:1.778,
                        minWidth:640, minHeight:480},optional:{}}}
        },
        function (error) { console.log("Raised an error when capturing:",error) }
    )
}