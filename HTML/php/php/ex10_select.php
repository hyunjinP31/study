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
        $conn = mysqli_connect('localhost','root','1234','book');
        echo "<h1>한 줄 조회하기</h1>";
        //쿼리문 작성 후 sql에 할당
        $sql = "select * from booklist where id = 3";
        $result = mysqli_query($conn, $sql);
        //php에서 사용가능한 데이터 형태인 배열로 반환
        $row = mysqli_fetch_array($result);
        var_dump($row);
        echo "<p>{$row['title']}</p>";

        //여러줄 select
        $sqlMul = "select * from booklist;";
        $result2 = mysqli_query($conn, $sqlMul);
        $total = mysqli_num_rows($result2);
        echo "전체 레코드는 ${total}이다";
        echo "<p>여기서 부터 여러줄이에요</p>";
        while($row2 = mysqli_fetch_array($result2)){
            echo "<p>{$row2['title']}</p>";
        }
    ?>
</body>
</html>