<?php include_once('./include/header.php'); ?>
        <div id="content">
            <h2>도서리스트</h2>
            <ul>
                <?php
                    createList();
                ?>
            </ul>

            <h2><?php printTitle() ?></h2>
            <div id="bookinfo">
                <?php
                    printDesc();
                ?>
                <!-- php와 html을 구분하기 위해서 if문 안에서 php구문을 한 번끊고 다시 이어주었다. -->
                <?php
                if(isset($_GET['id'])){
                ?>
                <ul>
                    <li><a href="edit.php?id=<?=$_GET['id']?>">글수정</a></li>
                    <li>
                        <form action="process/delete_process.php" method="post">
                            <input type="hidden" name="id" value="<?=$_GET['id']?>">
                            <input type="submit" value="글삭제">
                        </form>
                    </li>
                </ul>
                <?php
                }
                ?>
                
            </div>
        </div>
<?php include('include/footer.php') ?>