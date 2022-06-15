<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * { margin: 0; padding: 0; box-sizing:border-box;}
        li {list-style: none; padding: 10px 0;}
        a { text-decoration: none; color: inherit;}
        body {
            max-width: 1200px;
            width: 100%;
            margin: 0 auto;
        }
        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
            border-bottom: 1px solid #ccc;
        }
        header .btns {
            width: 220px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 16px;
        }
        header button {
            width: 100px;
            height: 50px;
            color: #fff;
            background: crimson;
            border: none;
            outline: none;
            border-radius: 10px;
            font-size: inherit;
        }
        header a{
            text-align: center;
            line-height: 50px;
            text-decoration: none;
            display: inline-block;
            width: 100px;
            height: 50px;
            color: #fff;
            background: crimson;
            border-radius: 10px;
        }
        .main {
            width: 100%;
            height: 700px;
        }
        .lists {
            height: 50%;
        }
        .main p {
            padding: 20px 0;
        }
        li:hover a{
            color: crimson;
            font-weight: bold;
        }
        footer {
            padding: 20px 0;
            border-top: 1px solid #ccc;
        }
        footer h2 {
            font-size: 34px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Blue Blog</h1>
        <div class="btns">
            <button type="reset">홈</button>
            <a href="Blue_Blog_copy.php">글쓰기</a>
        </div>
    </header>
    <div class="main">
        <div class="lists">
            <ul>
            <!-- 제목 받아옴 -->
            <?php
            $list = scandir('blogData/');
                for($i=2; $i < count($list); $i++){
                    $title = $list[$i];
                    echo "<li><a href='Blue_Blog.php?title=$title'>$title</a></li>";
                }
            ?>
            </ul>
        </div>
        <h2>그린 블로그</h2>
        <p>
            <!-- 내용받아옴 -->
            <?php
                echo file_get_contents("blogData/".$_GET['title']);
            ?>
        </p>
    </div>
    <footer>
        <p>copyright (c) all rights reserved</p>
        <h2>Green Blog</h2>
    </footer>
</body>
</html>