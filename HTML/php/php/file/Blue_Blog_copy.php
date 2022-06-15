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
            align-items: center;
            justify-content: space-between;
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
        #titleBox {
            width: 300px;
            height: 40px;
            border: none;
            border-bottom: 2px solid crimson;
            outline: none; 
            margin : 14px 0; 
            padding: 10px;
        }
        #descBox {
            outline: none;
            border: none;
            border: 1px solid #ddd;
            padding: 10px;

        }
        footer {
            padding: 20px 0;
            border-top: 1px solid #ccc;
            margin-top: 10px;
        }
        footer h2 {
            font-size: 34px;
        }
        form button {
            width: 50px;
            height: 30px;
            border: none;
            outline: none;
            background: crimson;
            color: #fff;
            border-radius: 10px;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <!-- 헤더 -->
    <header>
        <h1>Blue Blog</h1>
        <div class="btns">
            <a href="Blue_Blog.php">홈</a>
            <button onclick="onWrite()">글쓰기</button>
        </div>
    </header>
    <!-- 메인 -->
    <div class="main">
        <div class="lists">
        <ul>
            <!-- 제목 리스트들 받아옴 -->
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
            <!-- 글쓰기 프로세스 -->
            <form action="blog_write_process.php" method="post" onsubmit="return formCheck()">
                <input type="text" name="title" id="titleBox" placeholder="제목을 입력해주세요"><br/>
                <textarea name="desc" cols="45" id="descBox"rows="12" placeholder="내용을 입력해주세요"></textarea><br>
                <button type="submit">전송</button>
                <button type="reset">취소</button>
            </form>           
        </p>
    </div>
    <footer>
        <p>copyright (c) all rights reserved</p>
        <h2>Green Blog</h2>
    </footer>

    <script>
        //폼에 내용을 적어야 전송되도록 함
        function formCheck() {
            let titleBox = document.querySelector('#titleBox');
            let descBox = document.querySelector('#descBox');
            //내용이 없으면 submit이 안 되도록 하고 경고창을 띄움
            if(!titleBox.value || !descBox.value){
                alert('제목과 내용을 입력해주세요!');
                return false;
            }
        }
        //글쓰기 중에 다시 글쓰기 버튼을 누르면 경고창뜨기
        function onWrite(){
            alert('글쓰기 중입니다.');
        }
    </script>
</body>
</html>