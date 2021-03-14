let displays = [
    { when: "a-key", hide: ["done-by","uso-adecuado-epis","higiene-personal","instalaciones"], show: ["key-project"] },
    { when: "a-epis", hide: ["key-project","higiene-personal","instalaciones"], show: ["done-by","uso-adecuado-epis"] },
    { when: "a-personal", hide: ["key-project","uso-adecuado-epis","instalaciones"], show: ["done-by", "higiene-personal"] },
    { when: "a-instalaciones", hide: ["key-project","uso-adecuado-epis","higiene-personal"], show: ["done-by", "instalaciones"] },
    { when: "a-enviar", hide: ["key-project"], show: ["done-by"] },
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
            document.getElementById(element.when).parentElement.style.background='white';
            document.getElementById(element.when).parentElement.style.fontWeight='normal';
        });        

        dps.filter((item, index) => index == icurrent).forEach(element => {
            document.getElementById(element.when).parentElement.style.background='#FFFFE0';
            document.getElementById(element.when).parentElement.style.fontWeight='bold';
        });        

    });
}


