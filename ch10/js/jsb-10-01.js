/**
 * Created by barcvilla on 23/11/2017.
 */
// inicializa cuando la pagina se ha cargado

addEventListener('load', initialize, false);

function initialize()
{
    // hacer esto solo si el browser puede controlar DOM methods
    if(document.getElementById) {
        // apuntamos los elementos criticos
        var oButtonCreate = document.getElementById('create-window');
        var oButtonClose = document.getElementById('close-window');

        // si todos ellos existen
        if (oButtonCreate && oButtonClose)
        {
            // aplicamos comportamientos
            oButtonCreate.onclick = makeNewWindow;
            oButtonClose.onclick = closeNewWindow;
        }
    }
}

var newWindow;

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