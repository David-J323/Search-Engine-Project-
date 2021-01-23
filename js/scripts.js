let searchBar = document.getElementById('search');
let srcButton = document.getElementById('src-button');
let gifSection = document.getElementById('gifs');
let gifTitle = document.getElementById('gif-title');

srcButton.addEventListener("click", ()=> {
    let val = searchBar.value;
    let key = 'vs9jqcjPrd0MZuG3wsdXO8YdcpqHerNS';
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${val}`
    
    console.log(url);
    
    let search = async (url) => {
       let res = await fetch(url);
       let trigger = await res.json();
       //console.log(trigger);
       let empty = ``;
       let text = ``;
       for(item of trigger.data){
        //text = text + item.title;   
        empty = empty + `<img src=${item.images.original.url} />`;
       }
       //gifTitle.innerText = text;
       gifSection.innerHTML = empty;
    }

    search(url) 
    
});



