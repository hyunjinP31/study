<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>블로그</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <?php
        //scandir() 폴더에 있는 항목을 연관배열로 반환
        //0 => "." 1 => ".."
        //배열길이 count(배열변수)
        function createList(){
            $lists = scandir('data/');
            for ($i = 0 ; $i <count($lists); $i++){
                $title = $lists[$i];
                if ($lists[$i] != "." && $lists[$i] != ".." ){
                    echo "<li><a href='index.php?id=$title'>$title</a></li>";
                }
            }
        }

        //책 제목을 html 출력
        function printTitle(){
            //$_GET['id']가 존재하는지 확인
            if (isset($_GET['id'])){
                echo $_GET['id'];
            }else {
                echo '블로그';
            }
        }

        //책 내용을 html 출력
        function printDesc(){
            if (isset($_GET['id'])){
                echo file_get_contents('data/'.$_GET['id']);
            }else {
                echo '저희 블로그를 방문해주셔서 감사합니다.';
            }
        }
    ?>
    <div id="wrap">
        <header>
            <h1><a href="index.php">Blog</a></h1>
            <ul>
                <li><a href="index.php">홈</a></li>
                <li><a href="create.php">글쓰기</a></li>
            </ul>
        </header>