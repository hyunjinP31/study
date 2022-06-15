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
        echo "Mysql연결테스트<br>";
        // mysqli_connect("호스트주소","아이디","비밀번호","데이터베이스 명");
        $db = mysqli_connect("localhost","root","1234*","test");
        if($db){
            echo "성공<br>";
        }else {
            echo "실패<br>";
        }
        $query = "insert into members(name, tel, addr, license)
        values('ME','010-1111-1111','ADDRESS','Y');";
        $result = mysqli_query($db,$query);
        if($result){
            echo "전송되었습니다<br>";
        }else {
            echo "전송에 실패했습니다.<br>";
        }
    ?>
</body>
</html>