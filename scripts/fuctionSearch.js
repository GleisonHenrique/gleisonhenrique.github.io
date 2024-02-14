/*TRANSFERIR DADOS*/
const btnSearch = window.document.querySelector(".search-box-button")
btnSearch.addEventListener("click", changeColor)

function changeColor(){
    const txtSearch = window.document.querySelector(".search-box-input").value
    if(window.location.href == "http://127.0.0.1:5500/index.html" || window.location.href == "http://127.0.0.1:5500")
    {
        location.href = "/pages/search_page.html" + "?" + txtSearch
    }
    else 
    {
        location.href = "search_page.html" + "?" + txtSearch
    }
}

window.onload = function(){
    var labelSearchResults = window.document.querySelector("#label-search-results") 
    var stringUrl = window.location.href.split("?")[1]
    if(window.location.href == "http://127.0.0.1:5500/pages/search_page.html?" + stringUrl)
    {
        labelSearchResults.innerHTML = `Resultados da pesquisa para: ${stringUrl}`
    }

    searchTesting()
}

function searchTesting(){
    if (condition) 
    {
        
    } 
}


/*const btnSearch = window.document.querySelector(".search-box-button")
const txtSearch = window.document.querySelector(".search-box-input")
var testando = window.document.querySelector("#testing")

btnSearch.addEventListener("click", changeColor)


function changeColor(){
    if(window.location.href == "http://127.0.0.1:5500/index.html")
    {
        window.location.assign("pages/search_page.html")
    }
    else if(window.location.href == "http://127.0.0.1:5500/pages/search_page.html")
    {
        window.location.assign("search_page.html")
        testando.style.color = "green"
    }
    
}*/


/*
var btn = window.document.querySelector("button");

btn.addEventListener("click", changColor)

function changColor(){
    var testando = window.document.querySelector("p");
    testando.style.color = "red"
}*/