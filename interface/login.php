<?php
/* 
    如果要用login.php处理登陆
    传入用户名必须使用username这个键
    传入密码必须使用password这个键
*/

header('content-type:text/html;charset=utf-8;');

$uname = $_GET['username'];//获取前端传递的用户名
$upass = $_GET['password'];//获取前端传递的密码


$conn = mysqli_connect('127.0.0.1','root','root','shop');
$sql = "SELECT * FROM `info` WHERE `username`='$uname' AND `password`='$upass'";
$res = mysqli_query($conn,$sql);
$row = mysqli_fetch_assoc($res);
mysqli_close($conn);
if($row){
    header('location:../src/pages/jd.html');
}else{
    echo "用户名或密码错误!";
}




?>