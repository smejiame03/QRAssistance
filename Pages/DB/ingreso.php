<?php
    var_dump($_POST);
    $contraseña = $_POST['Contraseña'];
    $Correo = $_POST['Correo'];

    $user = "root";
    $pass = "";
    $server = "localhost";
    $db = "qrassistance";
    $con = mysqli_connect($server,$user,$pass,$db) or die ("Error al conectar el servidor".mysqli_error());
    $consulta="SELECT * FROM docente WHERE contraseña_Docente='$contraseña' and Correo_Docente='$Correo'";
    $resultado=mysqli_query($con,$consulta);
    $filas=mysqli_num_rows($resultado); 
    $respuesta="";

    if($filas){
        $respuesta="Docente";
        header('Location: ../Docente.php?Correo='.$Correo);
    }
    else
    {
        $consulta="SELECT * FROM estudiante WHERE contraseña_Estudiante='$contraseña' and Correo_Estudiante='$Correo'";
        $resultado=mysqli_query($con,$consulta);
        $filas=mysqli_num_rows($resultado);
        if($filas){
            $respuesta="Estudiante";
            header('Location: ../Estudiante.php?Correo='.$Correo);
        }
        else{
                $respuesta="Error de autenticación, verifique la información e inténtelo nuevamente";
                header('Location: ../PagPrincipal.html?error='.$respuesta);
        }
    }
    // echo json_encode($respuesta);
    mysqli_free_result($resultado);
    mysqli_close($con);
    ?>