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
        $a = 5;
        echo "증감연산자"."<br/>";
        echo "++a는 ".++$a." 입니다."."<br/>"; // 5 -> 6 증가한 후 참조 화면엔 6 출력
        echo "--a는 ".--$a." 입니다."."<br/>"; // 6 -> 5 감소한 후 참조 화면엔 5 출력
        echo "a++는 ".$a++." 입니다."."<br/>"; // 5 -> 6 출력한 후 증가 화면엔 5 출력
        echo "a--는 ".$a--." 입니다."."<br/>"; // 6 -> 5 출력한 후 감소 화면엔 6 출력
        echo $a."<br/>"; // 결과값 5

        echo "<br/>";
        $t = true;
        $f = false;
        echo "논리연산자<br/>";
        echo "t and f는 ".($t and $f)." 입니다."."<br/>"; //false
        echo "t or f는 ".($t or $f)." 입니다."."<br/>"; // true
        echo "t xor f는 ".($t xor $f)." 입니다."."<br/>"; // true
        echo "!t ".(!$t)." 입니다."."<br/>"; //false
        echo "t && f는 ".($t && $f)." 입니다."."<br/>"; //false
        echo "t || f는 ".($t || $f)." 입니다."."<br/>"; //true
        //자동으로 true false를 문자형으로 변환됐기 때문에 화면에는 1과 공백으로 나타난다.

        //기타 연산자
        echo "<br/>";
        echo "기타 연산자<br/>";
        $numvar = 1;
        echo $numvar == 1 ? "1입니다<br/>" : "1이 아닙니다<br/>";
        $age = 20;
        $my_age = $age ? 22 : 18;
        echo $my_age."<br/>";
        $str1 = "안녕하세요";
        $str2 = "저는 php를 공부합니다.";
        echo "두 문자열을 합친 문자열은 ".$str1.$str2." 입니다.<br/>";
        $str3 = "안녕하세요";
        $str3 .= " 저는 php를 공부합니다.";
        echo "두 문자열을 합친 문자열은 ".$str3. " 입니다.<br/>";

        echo "<br/>";
        $arr1 = array("key1"=>"딸기","key2"=>"사과");
        $arr2 = array("key1"=>"키위","key2"=>"오렌지","key3"=>"망고");
        $fru1 = ['🥐','🥞','🥯'];
        $fru2 = ['🍸','🍺','🥃','🍹','🍷'];
        $result1 = $fru1+$fru2;
        $result2 = $fru2+$fru1;

        print_r($result1);
        echo "<br/>";
        print_r($result2);
    ?>
</body>
</html>