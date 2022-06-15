<?php
    include_once 'include/header.php';
?>
<section id="addBook" class="inner">
        <form action="/mall/process/newBook_process.php" method="post" enctype="multipart/form-data">
            <h1>도서 등록</h1>
            <table>
                <tr>
                    <td>
                        제목 :
                    </td>
                    <td>
                        <input type="text" name="title" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        출판일 :
                    </td>
                    <td>
                        <input type="text" name="date" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        출판사 :
                    </td>
                    <td>
                        <input type="text" name="pub" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        저자 :
                    </td>
                    <td>
                        <input type="text" name="writer" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        가격 :
                    </td>
                    <td>
                        <input type="text" name="price" required>
                    </td>
                </tr>
                <tr>
                    <td>
                        책표지 :
                    </td>
                    <td>
                        <input type="file" name="img" required id="picbox">
                    </td>
                </tr>
                <tr>
                    <td>
                        도서 분류 :
                    </td>
                    <td id="inputCh">
                        <input type="checkbox" name="Kbook" value="o">국내도서
                        <input type="checkbox" name="NKbook" value="o">해외도서
                        <input type="checkbox" name="Ebook" value="o">E-book
                        <input type="checkbox" name="best" value="o">베스트셀러
                        <input type="checkbox" name="todaybook" value="o">오늘의 추천
                        <input type="checkbox" name="new" value="o">신규 도서
                    </td>
                </tr>
                <tr>
                    <td>
                        내용 :
                    </td>
                    <td>
                        <textarea name="textview" id="textview" cols="30" rows="10">

                        </textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button type="submit">도서 작성</button>
                        <button onclick="location.href='/mall/index.php'">작성 취소</button>
                    </td>
                </tr>
            </table>
        </form>
 </section>
<?php
    include_once 'include/footer.php';
?>