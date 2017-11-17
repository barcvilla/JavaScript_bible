/**
 * Created by barcvilla on 16/11/2017.
 */
var Boy = "Charlie Brown"; // gobal var
var Dog = "Snoopy"; // global var

// usando un diseño no apropiado para demostrar un punto
function demo()
{
    // variable local con el mismo nombre de una variable global
    var Dog = "Gromit";
    alert(Dog + " no pertenece a " + Boy + ".");
}

// usamos global variables
alert(Dog + " pertenece a " + Boy + ".");

// usamos gobal y local variables
demo();