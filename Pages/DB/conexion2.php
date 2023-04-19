<?php
function conectar(){
            $user = "sql10495639";
            $pass = "I1bK4vhBRD";
            $server = "sql10.freemysqlhosting.net";
            $db = "sql10495639";
            $con = mysqli_connect($server,$user,$pass,$db) or die ("Error al conectar el servidor".mysqli_error());
            return $con;
        }
?>  