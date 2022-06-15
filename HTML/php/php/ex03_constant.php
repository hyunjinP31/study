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
        //define() 함수
        define("PHP","PHP수업에 잘 오셨습니다.<br/>",true); //대소문자를 구분함
        echo PHP;
        echo php;

        //상수는 선언 후 어디에서라도 참조할 수 있음
        function defFunc(){
            echo ABC;
            define("ABC","하하하하하");
            echo "<br>".ABC."<br>";
        }
        defFunc();
        echo ABC;
    ?>
</body>
</html>