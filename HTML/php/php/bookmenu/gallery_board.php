<?php include_once 'include/header.php'; ?>
<?php
    $conn = mysqli_connect('localhost','root','1234','book');
    $query = "select * from bestseller";
    $result = mysqli_query($conn, $query);
    function printList() {
        global $result;
        while ($row = mysqli_fetch_array($result)){
            echo "<li><a href=\"gallery_detail.php?id={$row['id']}\"><img src='/php/bookmenu/images/{$row['imgs']}'></a></li>";
        }
    }
?>
<div id="bestSeller_page">
    <h2>베스트 셀러 목록</h2>
    <h3>베스트 셀러 목록입니다.</h3>
    <ul>
        <?php printList(); ?>
    </ul>
</div>
<?php include_once 'include/footer.php'; ?>