var api_root = "https://api.handwriting.io/";
var handwritings;

export var OnSubmit = function(apiAuth,selectedHandwriting,letterSize,letterColor,text){
    var url = api_root + 'render/png?handwriting_id=' + selectedHandwriting + '&handwriting_color=' + letterColor.replace('#','%23')
                        + '&text='+text + '&handwriting_size=' + letterSize
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.setRequestHeader('Accept', 'image/png');
    xhr.setRequestHeader("Authorization", apiAuth);
    xhr.onload = function(e) {
        if (this.status == 200) {
            var uInt8Array = new Uint8Array(this.response)
            var i = uInt8Array.length
            var biStr = new Array(i)
            while (i--) { biStr[i] = String.fromCharCode(uInt8Array[i]) }
            var data = biStr.join('')
            var base64 = window.btoa(data)
            $('#img-result').attr("src", "data:image/png;base64,"+ base64);
        } else {
            showError()
        }
    }

    xhr.send()

        //$.ajax({
        //    url:api_root + 'render/png?handwriting_id=' + selectedHandwriting + '&handwriting_color=' + letterColor.replace('#','%23')
        //                + '&text='+text + '&handwriting_size=' + letterSize,
        //    async: true,
        //    type:'GET',
        //    beforeSend: function(xhr){
        //        xhr.setRequestHeader("Authorization", apiAuth);  
        //        xhr.setRequestHeader("Accept", 'image/png');
        //        xhr.responseType = 'arraybuffer';
        //    },
        //    success: function(data)
        //    {   
        //        var uInt8Array = new Uint8Array(data)
        //        console.log(uInt8Array);
        //        var i = uInt8Array.length
        //        var biStr = new Array(i)
        //        while (i--) { biStr[i] = String.fromCharCode(uInt8Array[i]) }
        //        var data1 = biStr.join('')
        //        var base64 = window.btoa(data1);
        //        $('#img-result').attr("src", "data:image/png;base64,"+ base64);
        //    },
        //    error: function(error)
        //    {
        //    }
        //});
    }






    








