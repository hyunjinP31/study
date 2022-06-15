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
    //get 전송일 경우 $_GET
    //post 전송일 경우 $_POST
        $num1 = $_POST['num1'];
        $num2 = $_POST['num2'];
        var_dump($_POST);
    ?>
    <p>
        <?php
            if ($num1 === $num2){
                echo "num1의 값은 {$num1}이고 num2의 값은 {$num2}이며 같습니다.";
            }elseif($num1>$num2){
                echo "num1의 값은 {$num1}이고 num2의 값은 {$num2}이며 num1이 더 큽니다.";
            }else{
                echo "num1의 값은 {$num1}이고 num2의 값은 {$num2}이며 num2이 더 큽니다.";
            }
        ?>
    </p>
</body>
</html>