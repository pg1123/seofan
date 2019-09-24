<?php
require_once (dirname(__FILE__) . "/include/common.inc.php");
$ip =getip(); //获取用户IP
$id = $_GET['id'];
if(!isset($id) || empty($id)) exit;

//查询已赞过的IP
$dsql->SetQuery("SELECT ip FROM dede_download WHERE aid='".$id."' and ip='$ip'");
$dsql->Execute();
$count = $dsql->GetTotalRow();

$dateTime = date("Y-m-d H:i:s" ,time());

if($count==0){ //如果没有记录

    $dsql->ExecuteNoneQuery("update dede_addonarticle set download=download+1 where aid='$id'; ");//写入赞数
    
    $dsql->ExecuteNoneQuery("insert into dede_download (aid,ip,date_time) values ('$id','$ip', '$dateTime'); ");//写入IP,及被赞的AID
    
    
}else{
    //echo "赞过了..";
    $dsql->ExecuteNoneQuery("update dede_addonarticle set download=download+1 where aid='$id'; ");//写入赞数
    
    $dsql->ExecuteNoneQuery("insert into dede_download (aid,ip,date_time) values ('$id','$ip', '$dateTime'); ");//写入IP,及被赞的AID
    
}

$rows = $dsql->GetOne("select url from dede_addonarticle where aid='".$id."'");//获取被赞的数量
$url = $rows['url'];//获取赞数值
echo ("<script>window.open('".$url."');</script>"); 
//header("Location: {$url}");
exit;


