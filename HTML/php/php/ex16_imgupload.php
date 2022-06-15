<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 파일전송 form태그 속성추가하기
    enctype="multipart/form-data" -->
    <form action="ex16_img_process.php" method="post" enctype="multipart/form-data">
        이미지 업로드 : <input type="file" name="img"><button type="submit">확인</button>
    </form>
</body>
</html>