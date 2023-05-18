<?php

class Base
{

    private $servidor;

    private $usuario;

    private $clave;

    private $basedato;

    function __construct()
    {

        $this->servidor = "127.0.0.1";

        $this->usuario = "root";

        $this->clave = "";

        $this->basedato = "proyecto";
    }

    function registrarBase($nombre,$cod_base)
    {

        $link = mysqli_connect($this->servidor, $this->usuario, "", $this->basedato);

        mysqli_select_db($link, $this->basedato);

        $grabar_base = "INSERT INTO Base(nomBase,codBase) VALUES('$nombre','$cod_base')"; //guardo los datos
        echo "$nombre ";
        $guardar_usuario = mysqli_query($link, $grabar_base) or die('El registro de datos fall&oacute;: ' . mysqli_connect_error()); //valido si guardo

        mysqli_close($link);
    }
}
