<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $testStr = 0;       //int
        $testStr2 = 100;    //int
        $testStr3 = "0";    //str
        $testStr4 = "100";  //str
        $testStr5 = "abcd"; //str
        $testStr6 = "";     //str
        $testStr7 = NULL;   //null
        $testStr8 = true;   //true
        $testStr9 = false;  //false

        //1. int 0
        echo empty($testStr) ? "int 0 empty는 Y <br/>" : "int 0 empty는 N<br/>";
        echo isset($testStr) ? "int 0 isset은 Y <br/>" : "int 0 isset은 N <br/>";

        //2. int 100
        echo empty($testStr2) ? "int 100 empty는 Y <br/>" : "int 100 empty는 N<br/>";
        echo isset($testStr2) ? "int 100 isset은 Y <br/>" : "int 100 isset은 N <br/>";

        //3. str "0"
        echo empty($testStr3) ? "str 0 empty는 Y <br/>" : "str 0 empty는 N<br/>";
        echo isset($testStr3) ? "str 0 isset은 Y <br/>" : "str 0 isset은 N <br/>";

        //4. str "100"
        echo empty($testStr4) ? "str 100 empty는 Y <br/>" : "str 100 empty는 N<br/>";
        echo isset($testStr4) ? "str 100 isset은 Y <br/>" : "str 100 isset은 N <br/>";

        //5. str "abcd"
        echo empty($testStr5) ? "str abcd empty는 Y <br/>" : "str abcd empty는 N<br/>";
        echo isset($testStr5) ? "str abcd isset은 Y <br/>" : "str abcd isset은 N <br/>";

        //6. str ""
        echo empty($testStr6) ? "str 빈공백 empty는 Y <br/>" : "str 빈공백 empty는 N<br/>";
        echo isset($testStr6) ? "str 빈공백 isset은 Y <br/>" : "str 빈공백 isset은 N <br/>";

        //7. null
        echo empty($testStr7) ? "null empty는 Y <br/>" : "null empty는 N<br/>";
        echo isset($testStr7) ? "null isset은 Y <br/>" : "null isset은 N <br/>";

        //8. true
        echo empty($testStr8) ? "true empty는 Y <br/>" : "true empty는 N<br/>";
        echo isset($testStr8) ? "true isset은 Y <br/>" : "true isset은 N <br/>";

        //9. false
        echo empty($testStr9) ? "false empty는 Y <br/>" : "false empty는 N<br/>";
        echo isset($testStr9) ? "false isset은 Y <br/>" : "false isset은 N <br/>";
    ?>
</body>
</html>