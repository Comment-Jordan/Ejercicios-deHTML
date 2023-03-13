<html>
<head>
<meta>http-equiv="Conten-Type" content="text/html; charset=utf-8"</meta>
<title>Documento sin titulo</title>
<script lenguage="javascript">

    var numEnCifras, numEnletras;
    numEnCifras= prompt("Teclee un numero del 1 al 10 (en cifras)","");
    numEnCifras=parseInt(numEnCifras);
    switch(numEnCifras){
        case 1:
            numEnletras="Uno";
            break;
        case 2:
            numEnletras="Dos";
            break;
        case 3:
            numEnletras="Tres";
            break;
        case 4:
            numEnletras="Cuatro";
            break;
        case 5:
            numEnletras="Cinco";
            break;
        case 6:
            numEnletras="Seis";
            break;
        case 7:
            numEnletras="Siete";
            break;
        case 8:
            numEnletras="Ocho";
            break;
        case 9:
            numEnletras="Nueve";
            break;
        case 10:
            numEnletras="Diez";
            break;        
        default:
            numEnletras="ERROR"
    }
    alert("El número es:"+numEnletras)
</script>
</head>
<body></body>
</html>