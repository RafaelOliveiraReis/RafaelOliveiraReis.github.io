<?php
$e=$_GET['event'];
$d="../uploads/$e/";
$r=[];
if(is_dir($d)){
 foreach(scandir($d) as $f){
  if($f==='.'||$f==='..')continue;
  $r[]=['type'=>preg_match('/mp4|webm|ogg/',$f)?'video':'image','path'=>"uploads/$e/$f"];
 }
}
echo json_encode($r);
