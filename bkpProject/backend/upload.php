<?php
$e=$_POST['event'];
$d="../uploads/$e/";
if(!is_dir($d)) mkdir($d,0755,true);
foreach($_FILES['media']['tmp_name'] as $i=>$t){
 move_uploaded_file($t,$d.uniqid().'_'.$_FILES['media']['name'][$i]);
}
