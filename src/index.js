let displays = [
    { 
        when: "a-key", 
        hide: ["done-by","uso-epis","higiene-personal","instalaciones","enviar","a-epis","a-personal","a-instalaciones","a-enviar"], 
        show: ["key-project","a-bigpage","empty"], 
        title: "A big HTML Page" 
    },
    { 
        when: "a-bigpage", 
        hide: ["key-project","higiene-personal","instalaciones","enviar","a-bigpage","empty"], 
        show: ["done-by","uso-epis","a-epis","a-personal","a-instalaciones","a-enviar"], 
        title: "Auditoria Covid-19" 
    },
    { 
        when: "a-epis", 
        hide: ["key-project","higiene-personal","instalaciones","enviar","a-bigpage","empty"], 
        show: ["done-by","uso-epis"], 
        title: "Auditoria Covid-19" 
    },
    { 
        when: "a-personal", 
        hide: ["key-project","uso-epis","instalaciones","enviar","a-bigpage","empty"], 
        show: ["done-by", "higiene-personal"], 
        title: "Auditoria Covid-19" 
    },
    { 
        when: "a-instalaciones", 
        hide: ["key-project","uso-epis","higiene-personal","enviar","a-bigpage","empty"], 
        show: ["done-by", "instalaciones"], 
        title: "Auditoria Covid-19" 
    },
    { 
        when: "a-enviar", 
        hide: ["key-project","uso-epis","higiene-personal","instalaciones"], 
        show: ["done-by","enviar"], 
        title: "Auditoria Covid-19" 
    }
]

document.addEventListener('DOMContentLoaded',function() {
    render();
    document.getElementById('a-key').click();
});

let radios;
function render() {
    radios = Object.values(document.getElementsByTagName('input')).filter((item) => item.type == "radio");
    radios.map(addRadioListener);
    displays.map(displayItem);    
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
        
        if(dp.when == 'a-bigpage') {
            document.getElementById('a-epis').click();            
        }
        
        if (dp.when == 'a-enviar' && radios.every(r => r.checked)) {
            console.log('Si')
            document.getElementById('enviar').textContent = 'Si'
        } 
        else {
            console.log('No')
            document.getElementById('enviar').textContent = 'No'
        }
        
        document.getElementById('title').textContent = dp.title;        
    });
}

function addRadioListener (r) {
    r.addEventListener('click',function(event) {        
        r.checked = true;
        if(r.checked) {                
            document.getElementById(r.name).innerHTML = "&#10004;";
            document.getElementById(r.name).classList.remove('unchecked');
            document.getElementById(r.name).classList.add('checked');
        } 
        /*
        else {
            document.getElementById(r.name).innerHTML="&#10008";                 
            document.getElementById(r.name).classList.remove('checked');
            document.getElementById(r.name).classList.add('unchecked');
        } 
        */      
    });            
}
