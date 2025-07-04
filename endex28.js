// Rated- Year- Runtime - imdbRating  - Title  - Poster - Genre

//http://www.omdbapi.com/?t=${movie}&apikey=[key]&

let key = "bf33f271";
let myMovie = document.getElementById("movie-name");
let btn = document.getElementById("search-btn");
let result =  document.getElementById("result");


function filmGetir(){{
    
    let movie = myMovie.value;

    let url = `http://www.omdbapi.com/?t=${movie}&apikey=5a5a4cb8`;

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
        

        if(movie.length <= 0){

            result.innerHTML = `<h2 class = "mySpan1"> Lütfen bir film ismi giriniz.</h2>`;
        }

        else if(data.Response == "True"){
            //console.log(data.Title);
            //console.log(data.Year);
            
            result.innerHTML = `<div class = "div1">
                <div class = "mydiv1">
                    <img src="${data.Poster}" class = "myimg1" alt="">
                <div class = "first">
                <div class = "mydiv2">
                        ${data.Title}
                    </div>
                    <div class = "mydiv3">
                        <img src="Yıldız.png" width="35" height="35" alt="">
                        <div>${data.imdbRating}</div>
                    </div>

                    <div class = "mydiv4">
                        <span>${data.Year}</span>
                        <span>${data.Country}</span>
                        <span>${data.Runtime}</</span>
                    </div>

                    <div class = "mydiv5">
                        <span>${data.Genre}</span>
                    </div>

                    <div class = "mydiv6">
                        <h3>Plot</h3>
                        <div>${data.Plot}</div>
                    </div>

                    <div class = "mydiv7">
                        <h3>Cast</h3>
                        <div>${data.Actors}</div>
                    </div>
                    
                </div>
                </div>
                    
            </div>`;

            
        }

        else{
            result.innerHTML = `<h3 class = "myH3">${data.Error}</h3>`;
            
        }
    })

    
}}

btn.addEventListener("click", () => {
    filmGetir();
})
