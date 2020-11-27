<?php

/* database 서버에 php가 접속한다 */
$conn = mysqli_connect(
	'pkw0115.cafe24.com', //host이름
	'pkw0115', //db아이디
	'meditationuniv!', //db비번
	'pkw0115' //db이름
);

/* database 서버에 특정 sql문을 명령할 수 있다 */
$sql = "INSERT INTO topic (title, description, description, created) VALUE ('mysql', 'mysql is ...', NOW() )"
$result = mysqli_query($conn, $sql);
if($result == false){
	echo mysqli_error($conn);
}

/* table내의 데이터 보기 */
SELECT * FROM topic;
SELECT * FROM topic LIMIT 100;

/* table내의 모든 데이터 삭제 */
DELETE FROM test_table;

/* DB에서 데이터가져오기 */
$sql = "SELECT * FROM test_table"; 
$result = mysqli_query($conn, $sql);
//result 는 객체. 프로퍼티와 메소드들이 있음
//ex) var_dump($result->num_rows); 는 row의 수를 return해줌

/* mysql에서 가져온 데이터를 php가 받을 수 있게 변환 */
$sql = "SELECT * FROM test_table"; 
$result = mysqli_query($conn, $sql);
mysqli_fetch_row($result); //일반배열
mysqli_fetch_assoc($result); //연관배열
$tempArr = mysqli_fetch_array($result); //일반배열과 연관배열을 둘 다 사용할 수 있다.
echo $tempArr[0];
echo $tempArr['id'];

$sql = "SELECT * FROM test_table WHERE id='10'"; 
$result = mysqli_query($conn, $sql);
$tempArr = mysqli_fetch_array($result);
echo $tempArr['title']; //string

while($tempArr = mysqli_fetch_array($result)){
    var_dump($tempArr);
    echo "<br>";
}

/* ai 초기화 쿼리 */
ALTER TABLE [TABLE명] AUTO_INCREMENT = [시작할 값];

?>


<!--다른 파일로 POST방식으로 전송하는 법-->
<body>
	<form action="process_create.php" method="POST">
		<p><input type="text" name="title" placeholder="title"></p>
		<p><textarea name="description" placeholder="description"></textarea></p>
		<p><input type="submit"></p>
	</form>
</body>
