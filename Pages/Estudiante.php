<!DOCTYPE html>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="../imagenes/Logo Qr Assistance vacio.JPG" type="image/x-icon">
    <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/sidemenu.css">

    <title>QRAssistance Estudiante</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"><!--Bootstrap-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script><!--Librerías necesarias de Js para bootstrap-->
</head>

<body>
    <div class="main">
        <div id="sidemenu" class="menu-collapsed">
            <div id="header">
                <div id="title"> <span>Menú guía</span></div>
                <div id="menu-btn">
                    <div class="btn-hamburger"></div>
                    <div class="btn-hamburger"></div>
                    <div class="btn-hamburger"></div>
                </div>
            </div>
            <div id="profile">
                <div id="photo"><img src="../imagenes/Logo QR Assistance.jpg" alt=""></div>
                <div id="name"><span>Menú estudiante</span></div>
            </div>
    
            <div id="menu-items">

                <div class="item">
                <a href="#">
                        <form id="Page_InfoEstudiante" action="DB/InfoEstudiante.php" method="post">
                            <input type="text" id="variable_user" name="Correo" class="variable_user" value="<?php echo $_GET['Correo']; ?>">
                            <button type="submit" class="item_btn">Información personal</button>
                        </form>
                    </a>
                </div>
                <div class="item separator"></div>
                <div class="item">
                    <a href="#" onclick="ver_asistencia()">
                        <div class="icon"><img src=""></div>
                        <div class="title"><span>Verificar asistencia a clase</span></div>
                    </a>
                </div>
                <div class="item separator"></div>
                <div class="item">
                    <a href="PagPrincipal.html">
                        <div class="icon"><img src=""></div>
                        <div class="title"><span>Cerrar sesión</span></div>
                    </a>
                </div>
                <div class="item separator"></div>
            </div>
        </div>
        <div id="main-container">¡Bienvenidos estudiantes!</div>
        <div class="form_boxx1" id="contenedor_ver_asistencia">
            <form action="DB/VerificarAsistencia.php" target="_blank" method="post">
                <div class="grupo">
                    <div class="formulario_grupo_input">
                        <input type="text" class="formulario__input" name="Asignatura"><span
                            class="barra"></span>
                        <label for="Asignatura" class="formulario__label">Asignatura</label>
                        <input type="text" id="variable_user" name="Correo" class="variable_user" value="<?php echo $_GET['Correo']; ?>">
                    </div>
                </div>
                <br><button type="submit" class='submit_btn'>Consultar</button>
            </form>
        </div>
    
        <script>
            const btn = document.querySelector('#menu-btn');
            const menu = document.querySelector('#sidemenu');
            btn.addEventListener('click', e => {
                menu.classList.toggle("menu-expanded");
                menu.classList.toggle("menu-collapsed");
                document.querySelector('body').classList.toggle('body-expanded');
            });
        </script>  
        
        <script>
            var modal = document.getElementById('contenedor_ver_asistencia');
            var modal1 = document.getElementById('main-container');
            var modal2 = document.getElementById('contenedorQR');

            function ver_asistencia() {
                modal.style.display = "block";
                modal1.style.display = "none";
                modal2.style.display = "none";
            }
        </script>
        
    </div>
    
</body>

</html>