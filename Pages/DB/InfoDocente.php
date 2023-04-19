<?php
        // Generando la conexion con el servidor
        include("conexion.php");
        $con = conectar();
        $_Correo=$_POST['Correo'];
        $resul = "SELECT PrimerNombre, SegundoNombre FROM docente WHERE Correo_Docente='$_Correo'";
        $nombres = mysqli_query($con, $resul);
        if ($row = mysqli_fetch_row($nombres)) 
        {
            $nombres = trim($row[0]." ".$row[1]);
        }
        $resul1 = "SELECT PrimerApellido, SegundoApellido FROM docente WHERE Correo_Docente='$_Correo'";
        $apellidos = mysqli_query($con, $resul1);
        if ($row = mysqli_fetch_row($apellidos)) 
        {
            $apellidos = trim($row[0]." ".$row[1]);
        }
        $resul2 = "SELECT ID FROM docente WHERE Correo_Docente='$_Correo'";
        $ID = mysqli_query($con, $resul2);
        if ($row = mysqli_fetch_row($ID)) 
        {
            $ID = trim($row[0]);
        }
        $resul3 = "SELECT Correo_Docente FROM docente WHERE Correo_Docente='$_Correo'";
        $Correo = mysqli_query($con, $resul3);
        if ($row = mysqli_fetch_row($Correo)) 
        {
            $Correo = trim($row[0]);
        }
        $resul4 = "SELECT Asignaturas FROM docente WHERE Correo_Docente='$_Correo'";
        $Asignaturas = mysqli_query($con, $resul4);
        if ($row = mysqli_fetch_row($Asignaturas)) 
        {
            $Asignaturas = trim($row[0]);
        }
        // echo "<script>console.log('$Asignaturas' );</script>";


        // //     mysqli_close($con);
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../../imagenes/Logo Qr Assistance vacio.JPG" type="image/x-icon">
    <link rel="stylesheet" href="../../css/normalize.css">
    <link rel="stylesheet" href="../../css/styles.css">
    <title>QR Assistance</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!--Bootstrap-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"></script>
    <!--Librerías necesarias de Js para bootstrap-->
</head>

<body>
    <div class="main">
        <div>
            <input type="text" id="variable_user" class="input_echo_text" value="<?php echo $_Correo ?>">
            <a href="#" class="item_btn" onclick="top.window.location.href='../Docente.php?Correo='+document.getElementById('variable_user').value ; return !1">Regresar</a>
        </div>
        <div class="form_boxx">
            <h2 class="title_">INFORMACIÓN DOCENTE</h2>
            <div class="photod"><img class="photo" src="../../imagenes/Logo QR Assistance.jpg" alt=""></div>
                <table class="table_info">
                    <thead>
                        <tr>
                            <br><br>
                            <th class="subtitle">Nombres</th>
                            <th class="subtitle">Apellidos</th>
                            <th class="subtitle">Número de identificación</th>
                            <th class="subtitle">Correo electrónico</th>
                            <th class="subtitle">Asignaturas dictadas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <td class="input_echo"><input type="text" class="input_echo_text" value="<?php echo $nombres ?>" readonly></td>
                        <td class="input_echo"><input type="text" class="input_echo_text" value="<?php echo $apellidos ?>" readonly></td>
                        <td class="input_echo"><input type="text" class="input_echo_text" value="<?php echo $ID ?>" readonly></td>
                        <td class="input_echo"><input type="text" class="input_echo_text" value="<?php echo $Correo ?>" readonly></td>
                        <td class="input_echo"><input type="text" class="input_echo_text" value="<?php echo $Asignaturas ?>" readonly></td>
                    </tbody>
                </table>
            </div>
        </div>
</body>

</html>