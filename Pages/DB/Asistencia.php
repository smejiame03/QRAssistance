<?php
        //Generando la conexion con el servidor
        include("conexion2.php");
        $con = conectar();
        if(!$con->set_charset("utf8")){
                printf("Error cargando el conjunto de caracteres utf8: %\n", $conexion->error);
                exit();
        }
        $Asignatura=$_POST['Asignatura'];
        $Fecha=$_POST['Fecha'];
        $consulta = "SELECT PrimerNombre, SegundoNombre, PrimerApellido, SegundoApellido, ID_Estudiante, MarcaTemporal FROM AsistenciaEstudiantil WHERE Asignatura='$Asignatura' AND Fecha='$Fecha'";
        $query=mysqli_query($con, $consulta);
        $array=mysqli_fetch_array($query);
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
    <title>QR Assistance verificar</title>
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
        <!-- <div>
            <input type="text" id="variable_user" class="input_echo_text" value="<?php echo $_Correo ?>">
            <a href="#" class="item_btn1" onclick="top.window.location.href='../Docente.php?Correo='+document.getElementById('variable_user').value ; return !1">Regresar</a>
        </div> -->
        <div class="form_boxx2">
                <h2 class="title_">Asistencia Estudiantil</h2> 
                <div class="photod"><img class="photo1" src="../../imagenes/Logo QR Assistance.jpg" alt=""></div>
                <table class="table_info1">
                    <thead>     
                        <th class="subtitle"><h5>Asignatura:</h5></th>
                        <th class="subtitle"><h5>Fecha:</h5></th>
                    </thead>
                    <tbody>
                                <td class="input_echo"><input type="text" class="input_echo_text" value="<?php echo $Asignatura ?>" readonly></td>
                                <td class="input_echo"><input type="text" class="input_echo_text" value="<?php echo $Fecha ?>" readonly></td>
                    </tbody>
                </table>
                <div class="separador"></div>
                <table class="table_info">
                    <thead>
                        <tr>
                            <br><br>
                            <th class="subtitle">Nombres</th>
                            <th class="subtitle">Apellidos</th>
                            <th class="subtitle">Número de identificación</th>
                            <th class="subtitle">Ingreso</th>
                        </tr>
                    </thead>
                    <tbody>
                            <?php
                                foreach($query as $row){ ?>
                                <td class="input_echo_text"><?php echo $row['PrimerNombre']," ",$row['SegundoNombre']; ?></td>
                                <td class="input_echo_text"><?php echo $row['PrimerApellido']," ",$row['SegundoApellido'];?></td>
                                <td class="input_echo_text"><?php echo $row['ID_Estudiante']; ?></td>
                                <td class="input_echo_text      "><?php echo $row['MarcaTemporal']; ?></td>
                    </tbody>
                    <?php
                                } ?>
                </table>
            </div>
        </div>
</body>

</html>