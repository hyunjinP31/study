<?php
    // var_dump($_POST) //앞에 폼에서 뿌린 모든 인풋의 벨류값을 배열로 가지고 있음
    //post전송으로 전송된 데이터는 $_POST가 가지고 있음
    $conn = mysqli_connect('localhost','root','1234','book'); //mysql 연동
    //데이터 수정 update문
    //update table명
    //set 컬럼명 = "변경될 값"
    // where 컬럼
    $query = "update books
    set `writer` ='{$_POST['writer']}',
    `title` ='{$_POST['title']}',
    `pub` ='{$_POST['pub']}',
    `price` ='{$_POST['price']}',
    `bookdate` ='{$_POST['bookdate']}',
    `desc` ='{$_POST['desc']}'
    where `id` = '{$_POST['id']}' "; // mysql 구문
    echo $query;
    $result = mysqli_query($conn, $query); //구문 넣어주기
    if($result){echo "성공"; }
    else { echo "실패"; }
    header ('Location:../index.php');
?>