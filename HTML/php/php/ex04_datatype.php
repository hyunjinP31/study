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
        echo "integer타입의 크기는".PHP_INT_SIZE."바이트 입니다.<br>";
        echo "integer티입이 표현할 수 있는 가장 큰 수는".PHP_INT_MAX."입니다.";
        $int1 = 1000;
        $float1 = 5.12345;
        var_dump($int1);
        var_dump($float1);

        //String
        $str1 = "안녕하세요";
        $str2 = "green";
        echo $str1."<br>";
        echo strlen($str1);
        echo strlen($str2);

        //Array
        $day = array("일요일","월요일", "화요일","수요일","목요일","금요일","토요일");
        echo $day[1]."<br/>";
        var_dump($day);
        //연관 배열
        $arr = array("name" => "green", "age"=>30);
        echo "<br/>".$arr["name"]."<br/>";
        var_dump($arr);

        $fruits = ['🍰','🍩','🍪','🍨','🍧','🍦']; //따로 인덱스를 지정해주지 않으면 0부터 시작하는 정수가 들어감
        echo $fruits."<br/>";
        var_dump($fruits);
        echo $fruits[0]."<br/>";

        $arr2 = ["key1"=>"사과","key2"=>"오렌지","key3"=>"자두"];
        echo $arr2["key1"]."<br/>";

        $myStr1 = 'abc';
        $myStr2 = 100;
        $myStr3 = true;
        $myStr4 = NULL;

        echo "<br/>";
        echo gettype($myStr1)."<br/>";
        echo gettype($myStr2)."<br/>";
        echo gettype($myStr3)."<br/>";
        echo gettype($myStr4)."<br/>";
        echo gettype($arr2)."<br/>";

        echo "<br/>";
        echo (int)1.12345."<br/>"; // 1 반환
        echo (int)"1020"."<br/>"; // 숫자 1020 반환
        echo (int)"그린"."<br/>"; // 0 반환
        echo (bool)"그린"."<br/>"; // 1 반환
        echo (bool)""."<br/>"; // 아무것도 반환하지 않음 숫자 0을 불린으로 바꿔도 아무것도 반환하지 않음
        $num = 12345;
        echo (string)$num."<br/>"; // 숫자를 string으로 바로 변환시키려고 하면 에러뜸

    ?>
</body>
</html>