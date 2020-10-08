//this script serves up the appropriate content depending on which province the user decides to browse

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
    dynamicElement.innerHTML = returnContent(`../provinces/albertaContent.html`, 'alberta');//still just a test, I need to pass a html from another document
}

//this map contains all the loaded content for the different provinces
let loadedProvinces = {};
//this function checks if the content has been previously imported and if not call the fetch function - it then returns the content
function returnContent(path, key){
    if(loadedProvinces[key] == undefined){
        return fetchContentFromFile(path, key);
    }else{
        return loadedProvinces[key];
    }
}
//this function returns the content of a specified file *Note this fuction will have to be changed to support a framwork like node.js when deployed on a server*
function fetchContentFromFile(path, constName){
    loadedProvinces[constName] = content;
    return loadedProvinces[constName];
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
};