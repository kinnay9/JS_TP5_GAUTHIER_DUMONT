var url = 'https://www.numerama.com/feed/';












async function ajax(url)
{
    let result = await fetch(url, 
    {
        body :jsonObjet,
        headers:{
            'content-type': 'application/xml',
        },
        method : 'GET',
    });
}