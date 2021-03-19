let displays = [
    { when: "a-key", hide: ["done-by","uso-adecuado-epis","higiene-personal","instalaciones"], show: ["key-project"], title: "a big HTML page" },
//    { when: "a-page", hide: ["empty"], show: ["key-project","done-by","uso-adecuado-epis","higiene-personal","instalaciones"], title: "Auditoria Covid-19" },
    { when: "a-epis", hide: ["key-project","higiene-personal","instalaciones"], show: ["done-by","uso-adecuado-epis"], title: "Auditoria Covid-19" },
    { when: "a-personal", hide: ["key-project","uso-adecuado-epis","instalaciones"], show: ["done-by", "higiene-personal"], title: "Auditoria Covid-19" },
    { when: "a-instalaciones", hide: ["key-project","uso-adecuado-epis","higiene-personal"], show: ["done-by", "instalaciones"], title: "Auditoria Covid-19" },
    { when: "a-enviar", hide: ["key-project"], show: ["done-by"], title: "Auditoria Covid-19" },
]

document.addEventListener('DOMContentLoaded',function() {
    render();
});

function render() {
    displays.map(displayItem);
}

function displayItem(dp, icurrent, dps) {    
    let a = document.getElementById(dp.when);
    a.addEventListener('click',function(event) {
        event.preventDefault();
        console.log(a.text);
        dp.hide.map(i => document.getElementById(i).style.display = 'none');
        dp.show.map(i => document.getElementById(i).style.display = 'block');
        
        dps.filter((item, index) => index != icurrent).forEach(element => { 
            document.getElementById(element.when).parentElement.classList.add('menu-item-unclicked');
            document.getElementById(element.when).parentElement.classList.remove('menu-item-clicked');

        });        

        dps.filter((item, index) => index == icurrent).forEach(element => {
            document.getElementById(element.when).parentElement.classList.remove('menu-item-unclicked');
            document.getElementById(element.when).parentElement.classList.add('menu-item-clicked');
        });        
        
        document.getElementById('title').textContent = dp.title;
        
    });
}
