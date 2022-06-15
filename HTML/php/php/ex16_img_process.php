<?php
    $file = $_FILES['img'];
    var_dump($file);
    //파일 업로드시 자동으로 생성되는 임시 저장 위치
    echo $file['tmp_name'];
    //실제 저장하고 싶은 위치 C:/Apache24/htdocs/php/
    //move_uploaded_file(현재위치. 이동할 위치) 업로드 된 파일을 내가 지정한 위치에 지정한 파일명으로 파일 이동
    $result = move_uploaded_file($file['tmp_name'],"C:/Apache24/htdocs/php/".$file['name']);
    if($result){
?>
    <img src="<?=$file['name']?>">
<?php
    }
?>