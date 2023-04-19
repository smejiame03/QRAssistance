<?php
        var_dump($_POST);
        //Generando la conexion con el servidor
        include("conexion.php");
        $con = conectar();

            $PrimerNombre=$_POST['PrimerNombre_Docente'];
            $SegundoNombre=$_POST['SegundoNombre_Docente'];
            $PrimerApellido=$_POST['PrimerApellido_Docente'];
            $SegundoApellido=$_POST['SegundoApellido_Docente'];
            $ID=$_POST['ID_Docente'];
            $Asignaturas=$_POST['Asignaturas_Docente'];
            $Correo_Docente=$_POST['Correo_Docente'];
            $contraseña_Docente=$_POST['Contraseña_Docente'];

            $consulta = "INSERT INTO docente (PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, ID, Asignaturas, Correo_Docente, contraseña_Docente) 
            VALUES ('$PrimerNombre', '$SegundoNombre', '$PrimerApellido', '$SegundoApellido', '$ID', '$Asignaturas', '$Correo_Docente', '$contraseña_Docente')";
            $resul = mysqli_query($con, $consulta);
            mysqli_close($con);
?>