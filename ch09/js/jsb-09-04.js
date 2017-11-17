/**
 * Created by barcvilla on 16/11/2017.
 */
function getStateDate()
{
    var USState = new Array(4);
    USStates[0] = "Alabama";
    USStates[1] = "Alaska";
    USStates[2] = "Arizona";
    USStates[3] = "Arkansas";

    var stateEntered = new Array(4);
    stateEntered[0] = 1819;
    stateEntered[1] = 1959;
    stateEntered[2] = 1912;
    stateEntered[3] = 1836;

    var selectedState = window.document.getElementById("entry").value;

    for(var i = 0; i < USState.length; i++)
    {
        if(USState[i] == selectedState)
        {
            alert("Selecciono el estado de: " + USState[i] + " y su state date is " + stateEntered[i])
        }
        else
        {
            alert("Lo siento el dato . " + selectedState + " no se reconoe como un estado" );
        }
    }
}