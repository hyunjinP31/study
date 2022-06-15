<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="write_process.php" method="post" onsubmit="return formCheck()">
        <input type="text" name="title" id="titleBox"><br/>
        <input type="text" name="desc" id="descBox"><br/>
        <button type="submit">전송</button>
        <button type="reset">취소</button>
    </form>
    <script>
        function formCheck() {
            let titleBox = document.querySelector('#titleBox');
            let descBox = document.querySelector('#descBox');
            //내용이 없으면 submit이 안 되도록 하고 경고창을 띄움
            if(!titleBox.value || !descBox.value){
                alert('제목과 내용을 입력해주세요!');
                return false;
            }
        }
    </script>
</body>
</html>