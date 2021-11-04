async function obtenerDatos(){
    const response = await fetch ("http://localhost/time-tracking/time-tracking/data.json");
    const json = await response.json();

    console.log(json[0].timeframes.daily.current);
    evento ();
}

obtenerDatos();


function evento (){
    document.getElementById("time").onclick = function(){
        console.log("si jala")
    };
};
