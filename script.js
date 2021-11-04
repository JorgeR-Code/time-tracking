const menu = document.querySelectorAll('#time p');





const cambiarPeriodo = (e) =>{

    

        switch (e.target.textContent) {

            case 'Diario':

                selectTime ("daily", "Hoy - ")

    
            break;
            case 'Semanal':
    
               
                selectTime ("weekly", "Semana pasada - ")

    
            break;
            case 'Mensual':
    
                
                selectTime ("monthly", "Mes pasado - ")

    
            break;
    
        }
    
    
    

}


function selectTime (periodo, texto){

    async function obtenerDatos(){
        const response = await fetch ("https://time-tracking.jorgerivera.me/data.json");
        const json = await response.json();

        document.getElementById('wCurrent').innerHTML = json[0].timeframes[periodo].current + "hrs";
        document.getElementById('wPrevious').innerHTML = texto + json[0].timeframes[periodo].previous + "hrs";
    
        document.getElementById('pCurrent').innerHTML = json[1].timeframes[periodo].current + "hrs";
        document.getElementById('pPrevious').innerHTML = texto + json[1].timeframes[periodo].previous + "hrs";
    
        document.getElementById('sCurrent').innerHTML = json[2].timeframes[periodo].current + "hrs";
        document.getElementById('sPrevious').innerHTML = texto + json[2].timeframes[periodo].previous + "hrs";
    
        document.getElementById('eCurrent').innerHTML = json[3].timeframes[periodo].current + "hrs";
        document.getElementById('ePrevious').innerHTML = texto + json[3].timeframes[periodo].previous + "hrs";
    
        document.getElementById('soCurrent').innerHTML = json[4].timeframes[periodo].current + "hrs";
        document.getElementById('soPrevious').innerHTML = texto + json[4].timeframes[periodo].previous + "hrs";
    
        document.getElementById('ssCurrent').innerHTML = json[5].timeframes[periodo].current + "hrs";
        document.getElementById('ssPrevious').innerHTML = texto + json[5].timeframes[periodo].previous + "hrs";

    }
    obtenerDatos();


};




menu.forEach((p) => {

    p.addEventListener('click', cambiarPeriodo);

});