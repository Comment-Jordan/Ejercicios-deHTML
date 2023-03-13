<html>
    <head>
        <meta>http-equiv="Content-Type"content="text/html; charset=utf-8"</meta>
        <title>Documento sin titulo</title>
        <script lenguage="javascript">

        var cuentaTotal=0, numero, ciclos;
        for(ciclos=1, ciclos<=10;ciclos++)
        {
            numero= prompt("Introduzca un número positivo:","");
            numero=parseInt(numero);

            if (numero<1)
            break;
            cuentaTotal+=numero;
        }

        alert("La suma de números introducidos es:"+cuentaTotal);
        alert("Se han sumado un total de:"+(ciclos-1)+"numero");        
        </script>
    </head>
    <body>        
    </body>
</html>