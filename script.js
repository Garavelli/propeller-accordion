// Global Vars
var accItemActive = 'n0';

//start: Json Functions
function getJson() {
    var jsonURL = 'http://design.propcom.co.uk/buildtest/accordion-data.json';
    var json = new XMLHttpRequest();
    json.open('GET', jsonURL);
    json.responseType = 'json';
    json.send();

    json.onload = function() {
        var jsonComplete = json.response;
        createPopulateAccordion(jsonComplete);
    }
}

function createPopulateAccordion(jason) {
    var blocks = jason['blocks'];
    var active = 'active';
    var upDown = 'up';
    var showHide = 'show'

    for (var i = 0; i < blocks.length; i++){
        if (i != 0){
            active = '';
            upDown = 'down';
            showHide = 'hide';
        }
        
        var htmlTemplate = '<div id="n'+i+'" class="accItem '+active+'" onclick="openCloseAcc('+i+')">';
        htmlTemplate += '<div class="title"><h1 class="fLeft">'+blocks[i].heading+'</h1>';
        htmlTemplate += '<i id="arrow'+i+'" class="fas fa-angle-'+upDown+' arrow fRight"></i></div>';
        htmlTemplate += '<div class="text '+showHide+'"><p>'+blocks[i].content+'</p></div></div>';

        document.getElementById("accordion").innerHTML += htmlTemplate;
    }
}
//end: Json Functions

//make things work
function openCloseAcc(nn){
    //alert(eID)
    var eID = "n"+nn;
    var iID = "arrow"+nn;

    if (eID != accItemActive) {
        geteID=document.getElementById(eID);

        geteID.classList.add("active");
        geteID.lastElementChild.classList.remove("hide");
        document.getElementById(iID).classList.toggle("fa-angle-up", "fa-angle-down");
        
        getAccItem = document.getElementById(accItemActive);

        getAccItem.classList.remove("active");
        getAccItem.lastElementChild.classList.add("hide");
        getAccItem.firstElementChild.childNodes[1].classList.toggle("fa-angle-down", "fa-angle-up");
        accItemActive = eID;
    }
}

//end: make things work

window.onload = function(){ 
    getJson(); 
}