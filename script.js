var url  = "http://radiofrance-podcast.net/podcast09/rss_15644.xml";



var origin = 'https://crossorigin.me/';
var buttonURL = document.getElementById("buttonURL");
var inputURL = document.getElementById("inputURL");


buttonURL.addEventListener("click",ajax);



async function ajax()
{
    let result;
    if(inputURL.value.trim().length == 0)
    {
        alert("Veuillez rentrer une url valide");
        return;
    }
    let url = origin+inputURL.value;
    
    try {
         result = await fetch(url, 
        {
            headers:{
                'content-type': 'text/xml',
            },
            method : 'GET',

        });
    } catch(e) {
        alert("L url n existe pas ou erronee");
        return;
    }
   

    if(result.ok)
    {
        parser = new DOMParser();
        let resultText = await result.text();

        xmlDoc = parser.parseFromString(resultText,"text/xml");
        console.log(xmlDoc);


        traiterXML(xmlDoc);        
    }
    else
    {        
        alert("Erreur ! " +result.status);
    }
}


function traiterXML(xml)
{
    var channel = xml.getElementsByTagName("channel")[0];
    console.log(channel);
    var titre = document.createElement("h1");
    titre.innerHTML = channel.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    document.body.appendChild(titre);

    var item = channel.getElementsByTagName("item");
    console.log(item);
    for(var i = 0 ; i < item.length ; i++)
    {
        var divItem = document.createElement("div");
        divItem.addEventListener("click",eventClickedPodcast);
        var titleItem = item[i].getElementsByTagName("title")[0];
        divItem.appendChild(document.createElement("h2").innerHTML=titleItem);
        divItem.appendChild(document.createElement("br"));
        divItem.appendChild(document.createElement("p").innerHTML=item[i].getElementsByTagName("author")[0]);
        divItem.appendChild(document.createElement("br"));
        divItem.appendChild(document.createElement("a").innerHTML=item[i].getElementsByTagName("guid")[0]);
        document.body.appendChild(divItem);
    }
    
}

function eventClickedPodcast(e)
{
    alert("tu as cliqué sur un élément pour l'écouter");
}