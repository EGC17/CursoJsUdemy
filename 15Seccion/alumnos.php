<?php
$cadena = $_GET["q"];
$usuario = "root"; 
$pwd = ""; 
$servidor = "localhost"; 
$db = "escuela";
// Crear conexión
$link = mysqli_connect($servidor, $usuario, $pwd, $db);
if( !$link ) {
	header( "location: error_mysql.html" ); exit;
}

// buscar todos los registros
$query = "SELECT * FROM alumnos WHERE nombre regexp '^".$cadena.".'  ";
// esta ves voy a guardar el resultado del 'query'
$resultado = mysqli_query($link, $query);
if (!$resultado) {
    die("Error FATAL al buscar datos de $db: " . mysqli_error($link));
}
// aquí averiguo cuantos registros fueron encontrados 

// aquí leo todos los registros encontrados, uno 
while ($renglon = mysqli_fetch_object($resultado)) {
    $nombre = $renglon->nombre;
    $apellidos = $renglon->apellidos;
    $promedio = $renglon->promedio;
    echo $nombre . " " . $apellidos . ", promedio: " . $promedio . "<br>";
}

mysqli_close($link);
?>


<!-- El error que estás viendo:Fatal error: Uncaught Error: Call to undefined function mysql_pconnect()
se debe a que estás usando la función mysql_pconnect(), que pertenece a 
la antigua extensión mysql_, eliminada completamente desde PHP 7.0. XAMPP
 hoy en día incluye versiones recientes de PHP (8.x), y por eso ya no están
  disponibles las funciones mysql_*.
Solución:: Debes migrar tu código a mysqli o PDO. Aquí te muestro cómo hacerlo
con mysqli (que es más similar a lo que ya estás usando): -->