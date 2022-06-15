<?php
    $bookno = $_POST['no'];
    var_dump($bookno);
    $count = count($bookno);
    $conn = mysqli_connect('localhost','root','1234','mall');
    for($i = 0 ; $i < $count ; $i++){
        $query = "delete from basket where no={$bookno[$i]};";
        $result = mysqli_query($conn, $query);
    };

    header ("Location: /mall/basket_buy.php");
    
?>
