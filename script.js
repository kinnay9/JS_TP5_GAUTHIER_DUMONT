window.addEventListener("load",function(){




    var buttonURL = document.getElementById("buttonURL");
    var inputURL = document.getElementById("inputURL");
    console.log(inputURL);
    console.log(buttonURL);

    buttonURL.addEventListener("click",ajax);
    buttonURL.addEventListener("click",()=>{
        console.log("fired"),
    });










    async function ajax()
    {
        let url = inputURL.value;
        console.log(url);
        let result = await fetch(url, 
        {
            body :jsonObjet,
            headers:{
                'content-type': 'application/xml',
            },
            method : 'GET',
        });

        if(result.status == 404)
        {
            alert("L'url donnée n'éxiste pas ! ");
        }
        else
        {        
            parser = new DOMParser();
            xmlDoc = parser.parseFromString(response.text(),"text/xml");
            console.log(xmlDoc);
        }
    }
});