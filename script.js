window.addEventListener("load",function(){



    var origin = 'https://crossorigin.me/';
    var buttonURL = document.getElementById("buttonURL");
    var inputURL = document.getElementById("inputURL");
    

    buttonURL.addEventListener("click",ajax);
    











    async function ajax()
    {
        let url = origin+inputURL.value;
        console.log(url);
        let result = await fetch(url, 
        {
            headers:{
                'content-type': 'text/xml',
            },
            method : 'GET',

        });

        if(result.ok)
        {
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(result.text(),"text/xml");
            document.body.appendChild(xmlDoc.documentElement);
            
        }
        else
        {        
            alert("L'url donnée n'éxiste pas ! " +result.ok);
        }
    }
});