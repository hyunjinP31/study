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
        $n = $_GET['number']; //$_GET 글로벌 변수 url의 값을 받는다...?
        if($n % 3 == 0){
            echo "{$n}은 3의 배수이다.<br/>";
        }elseif($n % 5 == 0){
            echo "{$n}은 5의 배수이다.<br/>";
        }else {
            echo "{$n}은 3과 5의 배수가 아니다.<br/>";
        }
        $username = $_GET['name'];
        echo "{$username}님 안녕하세요<br/>";
        
        $score = 90;
        switch($score){
            case 100:
                echo "점수는 100점 입니다.";
                break;
            case 90:
                echo "점수는 90점 입니다.";
                break;
            case 80:
                echo "점수는 80점 입니다.";
                break;
            default:
                echo "점수는 70점 입니다.";
                break;
        }
    ?>
</body>
</html>