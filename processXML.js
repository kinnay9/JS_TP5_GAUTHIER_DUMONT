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
    var titre = document.createElement("h1");
    titre.innerHTML = "Chronique : " + channel.getElementsByTagName("title")[0].childNodes[0].nodeValue;
    document.getElementById("listeLecture").appendChild(titre);

    var item = channel.getElementsByTagName("item");
    
    for(var i = 0 ; i < item.length ; i++)
    {
        var divItem = document.createElement("div");
        divItem.setAttribute("class","itemList"); // le nom de la classe 
        divItem.addEventListener("click",eventClickedPodcast);
        divItem.id = i;
        
        var h3 = document.createElement("h3");
        h3.innerHTML=item[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;

        var p = document.createElement("p");
        p.innerHTML=item[i].getElementsByTagName("author")[0].childNodes[0].nodeValue;

        var a = document.createElement("a");
        a.href = "#video";
        a.innerHTML=item[i].getElementsByTagName("guid")[0].childNodes[0].nodeValue;

        divItem.appendChild(h3);
        divItem.appendChild(p);
        divItem.appendChild(a);
        document.getElementById("listeLecture").appendChild(divItem);
    }

    
}

//quand on clique sur un video/audio la definit comme source de la video/audio
//on nous met sur le lecteur dès que la vidéo à finit de charger
async function eventClickedPodcast(e)
{
	document.getElementById('video').src = e.target.parentNode.getElementsByTagName("a")[0].innerHTML;
    await document.getElementById('video').play();
    document.getElementById("play").value = 'PAUSE';
    videoPlay = true;
    window.location.hash = "play";
}

