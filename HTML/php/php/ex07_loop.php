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
        $i = 1;
        while($i<10){
            echo $i."<br/>";
            $i++;
        }
        $j=0;
        do {
            echo $j."<br/>";
            $j++;
        }while(false);

        echo "<br/>";
        $num = $_GET['number'];
        echo "숫자 입력시 해당 구구단 띄움"."<br/>";
        echo "{$num}단 입니다.<br/>";
        
        for ($j2 = 1; $j2 < 10; $j2++){
            echo $num."*"."$j2"."=".$num*$j2."<br/>";
        }

        echo "<br/>";
        
        echo "2~9 구구단"."<br/>";
        for($i2 = 2; $i2 < 10; $i2++){
            for ($j2 = 1; $j2 < 10; $j2++){
                echo $i2."*"."$j2"."=".$i2*$j2."<br/>";
            }
        }

        //foreach
        echo "<br/>";
        echo "<br/>";
        $arr = array(1,2,3,4,5);
        foreach($arr as $value){
            echo "{$value}입니다.<br/>";
        }
        $arr2 = array("key1"=>"수박","key2"=>"딸기","key3"=>"복숭아");
        foreach($arr2 as $key => $value){
            echo "배열에서 key는 {$key}이고, value는 {$value}입니다.<br/>";
        }
    ?>
</body>
</html>