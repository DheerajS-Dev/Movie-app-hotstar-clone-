var result = document.querySelector("#results") ;
search() ;
async function search(){
    
    const url = `https://api.themoviedb.org/3/trending/all/day?api_key=c10f692482eb3bde777a043efa58c299&maximmum=40` ;
    try{
        let response = await fetch(url) ;
        let res = await response.json() ;

        appendData(res.results) ;
        console.log(res.results) ;

    }catch(err){
        return false ;
    }
}

function appendData(data){
    data.forEach(function(element){        
        
        let title = element.original_title || element.original_name ;
        let date = element.release_date || "COMING SOON" ;

        const div = document.createElement('div');
        div.setAttribute("id","card") ;

        const img = document.createElement('img');
        img.src = `https://www.themoviedb.org/t/p/w220_and_h330_face/${element.poster_path}`;
        img.alt = `${title}` ;

        const h4 = document.createElement('h4');
        h4.innerText = title ;

        const p = document.createElement('p');
        p.innerText = date;

        const h5 = document.createElement('h5');
        h5.innerText = element.vote_average ;

        div.append(img,h4,p,h5) ;
        result.append(div) ;
    })
}