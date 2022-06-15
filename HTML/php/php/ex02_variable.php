<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 변수는 지역변수 전역변수 정적변수 -->
    <?php
        $num = 50;
        function varFunc(){
            //지역변수 선언
            $localvar = 10;
            //함수내에서 사용할 전역변수 명시
            //전역변수 num에 접근 --> global $변수명
            // global $num;
            echo "함수 내부에서 호출한 지역변수 localvar의 값은 {$localvar} 입니다.<br/>";
            echo "함수 내부에서 호출한 전역변수 num의 값은 {$GLOBALS['num']} 입니다<br/>";
        }
        varFunc();
        echo "함수 밖에서 호출한 지역변수 localvar의 값은 {$localvar} 입니다.";

        //정적변수 static
        function counter(){
            static $count = 0;
            echo "<br/>함수 내부에서 호출한 static변수 count의 값은 {$count} 입니다.<br/>";
            $count++;
        }
        counter();
        counter();
        counter();
    ?>
    <script>
        function myFunc(){
            let count = 0;
            console.log(count);
            count++;
        }
        myFunc();
        myFunc();
        myFunc();
    </script>
</body>
</html>