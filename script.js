const accessKey = "tUwjEZ7wNHzO0p57DH0dkStxv5a6KdFhhvLJLdHoWuQ";


const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const moreBtn = document.getElementById('more-btn');

let keyword = '';
let page = 1;

async function searchImage(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    if(page ===1){
        searchResult.innerHTML = "";
    }
    const results = data.results;

    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.targer = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);

    })
    moreBtn.style.display = "block";
} 

searchForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1;
    searchImage();
})

moreBtn.addEventListener("click",  ()=>{
    page++;
    searchImage();
})