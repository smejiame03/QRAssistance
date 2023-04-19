<?php
        var_dump($_POST);
        //Generando la conexion con el servidor
        include("conexion.php");
        $con = conectar();

            $PrimerNombre=$_POST['PrimerNombre_Estudiante'];
            $SegundoNombre=$_POST['SegundoNombre_Estudiante'];
            $PrimerApellido=$_POST['PrimerApellido_Estudiante'];
            $SegundoApellido=$_POST['SegundoApellido_Estudiante'];
            $ID=$_POST['ID_Estudiante'];
            $Programa=$_POST['Programa_Estudiante'];
            $Correo_Estudiante=$_POST['Correo_Estudiante'];
            $contraseña_Estudiante=$_POST['Contraseña_Estudiante'];

            $consulta = "INSERT INTO estudiante (PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, ID, Programa, Correo_Estudiante, contraseña_Estudiante) 
            VALUES ('$PrimerNombre', '$SegundoNombre', '$PrimerApellido', '$SegundoApellido', '$ID', '$Programa', '$Correo_Estudiante', '$contraseña_Estudiante')";
            $resul = mysqli_query($con, $consulta);
            mysqli_close($con);
?>