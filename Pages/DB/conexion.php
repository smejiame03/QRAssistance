<?php
function conectar(){
            $user = "root";
            $pass = "";
            $server = "localhost";
            $db = "qrassistance";
            $con = mysqli_connect($server,$user,$pass,$db) or die ("Error al conectar el servidor".mysqli_error());
            return $con;
        }
?>  