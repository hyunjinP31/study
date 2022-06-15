<?php include_once ('include/header.php'); ?>
<?php
            $conn = mysqli_connect('localhost','root','1234','book');
            $query = "select * from bestseller;";
            $result = mysqli_query($conn, $query);
           
            function addLi() {
                global $result;
                while($row = mysqli_fetch_array($result)){
                    echo "<li><a href=\"best_detail.php?id={$row['id']}\"><img src=\"/php/bookmenu/images/{$row['imgs']}\" alt=\"사진1\"></a></li>";
                };
            }
            
?>
<div class="img_contents">
    <h2>베스트셀러</h2>
    <ul>
        <?php
            addLi();
        ?>
    </ul>
</div>
<div class="goto_best">
    <a href="/php/bookmenu/best_create.php">베스트셀러 등록</a>
</div>
<?php include_once ('include/footer.php'); ?>