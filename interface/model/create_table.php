<?php
require('./_connect.php');

//书写sql语句
//购物车
$sql = "CREATE TABLE cart (
			product_id VARCHAR(300) NOT NULL PRIMARY KEY,
			product_name VARCHAR(300) NOT NULL,
			product_img VARCHAR(30) NOT NULL,
			product_price VARCHAR(30) NOT NULL,
			product_num VARCHAR(30) NOT NULL,
			submission_date TIMESTAMP	
)";
//用户数据
$sqql = "CREATE TABLE `info` (
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`username` VARCHAR(300) NOT NULL,
	`password` VARCHAR(30) NOT NULL,
	`email` VARCHAR(30) NOT NULL,
	`phone` VARCHAR(30) NOT NULL
)";
$result1 = mysqli_query($conn,$sqql);
$result2 = mysqli_query($conn,$sql);
if($result1&&$result2){
	echo "数据表创建成功";
}else{
	echo "数据表创建失败";
}

?>