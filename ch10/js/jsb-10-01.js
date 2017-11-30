/**
 * Created by barcvilla on 23/11/2017.
 */
// inicializa cuando la pagina se ha cargado
// Pasamos la funcion initialize para que sea ejecutada una vez que la pagina ha sido cargada.
window.addEventListener('load', initialize, false);

function initialize()
{
    // hacer esto solo si el browser puede controlar DOM methods
    if(document.getElementById) {
        // apuntamos los elementos criticos
        var oButtonCreate = document.getElementById('create-window');
        var oButtonClose = document.getElementById('close-window');
        var oButtonVisit = document.getElementById('visit-page');

        // si todos ellos existen
        if (oButtonCreate && oButtonClose)
        {
            // aplicamos comportamientos
            oButtonCreate.onclick = makeNewWindow;
            oButtonClose.onclick = closeNewWindow;
            oButtonVisit.onclick= visitGitHub;
        }
    }
}

var newWindow;

function visitGitHub()
{
    // especificamos la direccion completa cuando se trata de un sitio que sale del dominio de la app
    makeNewWindow();
    newWindow.location.href="http://www.github.com";
}
function makeNewWindow()
{
    var config_window = "menubar=yes, location=yes, resizable=yes, scrollbars=yes, status=yes";
    newWindow = window.open("", "", config_window);
}

function closeNewWindow()
{
    if(newWindow)
    {
        newWindow.close();
        newWindow = null;
    }
}