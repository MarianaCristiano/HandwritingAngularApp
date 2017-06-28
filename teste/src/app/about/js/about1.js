var api_root = "https://api.handwriting.io/";
var handwritings;

export var LoadHandwriting = function (apiAuth) {
        if(handwritings==null)
        {
            $.ajax({
                url:api_root + 'handwritings',
                async: false,
                type:'GET',
                beforeSend: function(xhr){
                    xhr.setRequestHeader("Authorization", apiAuth); 
                },
                success: function(data)
                {
                    handwritings = data;
                    return handwritings;
                },
                error: function(error)
                {
                }
            });
        }
    }




    








