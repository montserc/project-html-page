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

let radios;
document.addEventListener('DOMContentLoaded',function() {
    radios = Object.values(document.getElementsByTagName('input')).filter((item) => item.type == "radio");
    radios.map(addRadioListener);
    displays.map(displayItem);    
    document.getElementById('a-key').click();
});

function addRadioListener (r) {
    r.addEventListener('click',function(event) {                
        if(r.checked) {                
            document.getElementById(r.name).innerHTML = "&#10004;";
            document.getElementById(r.name).classList.remove('unchecked');
            document.getElementById(r.name).classList.add('checked');
        } 
    });            
}

function radioGrupChecked (r) {
    return document.getElementById(r.name).classList.contains('checked');
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
        
        //Antes de enviar el formulario comprobar si todas las preguntas se han respondido
        if (dp.when == 'a-enviar' && radios.map(radioGrupChecked).every(r => r == true)) {
            document.getElementById('resultado').innerText = 'Muy bien! Has rellenado todo el cuestionario.'
        } 
        else {
            document.getElementById('resultado').innerText = 'Cuestionario incompleto.'
        }
        
        if(dp.when == 'a-bigpage') {
            document.getElementById('a-epis').click();            
        }
        
        document.getElementById('title').textContent = dp.title;        
    });
}