<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/style.css">
    <?php
         function createTD(){
            $conn = mysqli_connect('localhost','root','1234','book'); //mysㅂl연동
            $sql = "select * from booklist;"; //mysql 구문 작성
            $result = mysqli_query($conn,$sql); //mysql에 구문 넣어주기
            while($rows = mysqli_fetch_array($result)){ //my sql에 나온 데이터를 배열로 받아오기
                echo "<tr><td>{$rows['id']}</td>
                <td>{$rows['title']}</td>
                <td>{$rows['writer']}</td>
                <td>{$rows['pub']}</td>
                <td>{$rows['cost']}</td>
                <td>{$rows['date']}</td></tr>";
            }
        }
    ?>
</head>
<body>
    <div id="wrap">
        <header>
            <ul>
                <li>home</li>
                <li>도서목록</li>
                <li>도서등록</li>
                <li>도서검색</li>
            </ul>
        </header>