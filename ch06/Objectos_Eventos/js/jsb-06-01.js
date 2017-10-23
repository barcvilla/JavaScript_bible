/**
 * Created by barcvilla on 19/10/2017.
 * Boton que se le aplica un event handler
 */

// le decimos al browser ejecutar el script cuando la pagina ha terminado de cargar
window.onload = applyBehaviour;

// aplicacion el comportamiento al boton
function applyBehaviour()
{
    // nos aseguramos que el interprete de javascript del metodo DOM getElementById
    if(document.getElementById)
    {
        // apuntamos al button
        var oButton = document.getElementById("clicker");
        // si el boton existe aplicamos el comportamiento
        if(oButton)
        {
            oButton.onclick = behave;
        }
    }
}

// lo que debe hacer cuando se hace click al boton
function behave()
{
    alert("Ouch!");
}
