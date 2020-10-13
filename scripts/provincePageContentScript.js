//this functions allows this script to parse the url for variables
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

//this script serves up the appropriate content depending on which province the user decides to browse
function changeContent(province){
    switch(province){
        case 'Alberta': dynamicElement.innerHTML = albertaContent;
        break;
        case 'British Columbia': dynamicElement.innerHTML = british_columbiaContent;
        break;
        case 'Saskatchewan': dynamicElement.innerHTML = saskatchewanContent;
        break;
        default: dynamicElement.innerHTML = "<h2>Oops</h2>";
    }
}
//finds all the tags I'd want to change with this script
let dynamicElement;
function findAllTags (){
    dynamicElement = document.getElementById("dynamicContent");
}

//this function will be triggered onclick --- it takes the elements id as param to know what content to serve
function newContentOnClick(event) {
    event = event || window.event; //IE
    let target = event.target || event.srcElement; //IE
    let id = target.id;
    changeContent(id);
}

//finds all links that will change content and adds an onclick event to them
function addOnclickForEach(item, index, arr){
    item.setAttribute("onclick","newContentOnClick(event); return false;");//returns flase to stop the page from refreshing
}
let contentLinks = [];
function findAllLinks() {
    let contentLinks = Array.from(document.getElementById("provinceNav").children);
    contentLinks.forEach(addOnclickForEach);
}


//waits till the document is loaded so I can find elements by id
window.onload = function() {
    findAllTags();
    findAllLinks();
    let currentProvince = getQueryVariable("province");
    changeContent(currentProvince);
};