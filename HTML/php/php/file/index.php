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
    ?>
    <h1>리빙 페이지</h1>
    <ul>
        <?php
            $lists = scandir('data/');
            for($i=0; $i<count($lists);$i++){
                $title = $lists[$i];
                if($lists[$i] != '.' && $lists[$i] != '..' ){
                    // echo "<li><a href='index.php?title=".$title."'>".$title."</a></li>";
                    echo "<li><a href='index.php?title=${title}'>${title}</a></li>";
                }
            }
        ?>
    </ul>
    <p>
        <a href="write.php">파일 추가하기</a>
    </p>
    <h2>
        <?php
        //타이틀을 눌러서 값을 화면에 받아올 때만 타이틀을 띄우고 아무것도 받아오지 않은 상태(값이 없는 상태)에서는 환영합니다를 띄우도록 함
        if(isset($_GET['title'])){
            echo $_POST['title'];
        }else {
            echo "환영합니다.";
        }
        ?>
    </h2>
    <p>
        <?php
            if(isset($_GET['title'])){
                echo file_get_contents("data/".$_GET['title']);
            }else {
                echo "하이하이";
            }
        ?>
    </p>
</body>
</html>