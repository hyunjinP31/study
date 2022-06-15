<?php include_once 'include/header.php'; ?>
<?php
    //아이디 값이 일치하는 레코드를 조회
    $conn = mysqli_connect('localhost','root','1234','book');
    $query = "select * from bestseller where id = '{$_GET['id']}'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_array($result);
?>
<div id="best_book" class="inner">
    <h2><?=$row['title']?></h2>
    <table>
        <tr>
            <td class="tdcenter">
                <img src="/php/bookmenu/images/<?=$row['imgs']?>" width="400"> 
            </td>
            <td>
                <ul>
                    <li>출판사 : <?=$row['pub']?> </li>
                    <li>글쓴이 : <?=$row['writer']?> </li>
                    <li>출판일자 : <?=$row['bookdate']?> </li>
                    <li>가격 : <?=$row['price']?> </li>
                </ul>
            </td>
        </tr>
        <tr>
            <td colspan="2"> 책소개</td>
        </tr>
        <tr>
            <td colspan="2"><?=$row['desc']?></td>
        </tr>
        <tr>
            <td colspan="2">
                <form action="/php/bookmenu/gallery_edit.php" method="post">
                    <button>수정하기</button>
                    <input type="hidden" name="id" value="<?=$_GET['id']?>">
                </form>
                
                <form action="/php/bookmenu/process/gallery_delete_process.php" method="post">
                    <input type="hidden" name="id" value="<?=$_GET['id']?>">
                    <input type="hidden"  name="imgs" value=<?=$row['imgs']?>>
                    <button type="submit">삭제하기</button>
                </form>
            </td>
        </tr>
    </table>
<?php include_once 'include/footer.php'; ?>