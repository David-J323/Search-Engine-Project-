let searchBar = document.getElementById('search');
let srcButton = document.getElementById('src-button');
let gifSection = document.getElementById('gifs');

srcButton.addEventListener("click", ()=> {
    let val = searchBar.value;
    let key = 'vs9jqcjPrd0MZuG3wsdXO8YdcpqHerNS';
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${val}`
    
    console.log(url);
    
    let search = async (url) => {
       let res = await fetch(url);
       let trigger = await res.json()
       let empty = ``;
       for(item of trigger.data){
           empty = empty + `<img src=${item.images.original.url} />`
       }
       gifSection.innerHTML = empty;
    }

    search(url) 
    
});



