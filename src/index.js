let displays = [
    { when: "a-key", hide: ["done-by","uso-epis","higiene-personal","instalaciones","enviar"], show: ["key-project"], title: "a big HTML page" },
    { when: "a-epis", hide: ["key-project","higiene-personal","instalaciones","enviar"], show: ["done-by","uso-epis"], title: "Auditoria Covid-19" },
    { when: "a-personal", hide: ["key-project","uso-epis","instalaciones","enviar"], show: ["done-by", "higiene-personal"], title: "Auditoria Covid-19" },
    { when: "a-instalaciones", hide: ["key-project","uso-epis","higiene-personal","enviar"], show: ["done-by", "instalaciones"], title: "Auditoria Covid-19" },
    { when: "a-enviar", hide: ["key-project","uso-epis","higiene-personal","instalaciones"], show: ["done-by","enviar"], title: "Auditoria Covid-19" },
]

document.addEventListener('DOMContentLoaded',function() {
    render();
    document.getElementById('a-key').click();    
});

function render() {
    /*
    document.getElementById('img-view').style.display='none';
    document.getElementById('a-imagen').addEventListener('click',function(event) {
        event.preventDefault();
        document.getElementById('img-view').style.display='block';
    });
    */
    displays.map(displayItem);
    addRadioListeners();
}

function displayItem(dp, icurrent, dps) {    
    let a = document.getElementById(dp.when);
    a.addEventListener('click',function(event) {
        event.preventDefault();
        dp.hide.map(section => document.getElementById(section).style.display = 'none');
        dp.show.map(section => document.getElementById(section).style.display = 'block');
        
        
        dps.filter((item, index) => index != icurrent).forEach(element => {             
            document.getElementById(element.when).classList.add('unclicked');
            document.getElementById(element.when).classList.remove('clicked');
        });        

        dps.filter((item, index) => index == icurrent).forEach(element => {
            document.getElementById(element.when).classList.remove('unclicked');
            document.getElementById(element.when).classList.add('clicked');
        });        
        
        document.getElementById('title').textContent = dp.title;
        
    });
}
function addRadioListeners () {
    let r = document.getElementsByTagName('input');
    Object.values(r).filter((item) => item.type == "radio").forEach((item) => {
        item.addEventListener('click',function(event) {
            //event.preventDefault();                 
            if(item.checked) {                
                document.getElementById(item.name).innerHTML = "&#10004;";
                //document.getElementById(item.name).style.color = "green"
                document.getElementById(item.name).classList.remove('unchecked');
                document.getElementById(item.name).classList.add('checked');

            } 
            else {
                document.getElementById(item.name).innerHTML="&#10008";                 
                //document.getElementById(item.name).style.color = "red"
                document.getElementById(item.name).classList.remove('checked');
                document.getElementById(item.name).classList.add('unchecked');

            }       
        });            
    });
}