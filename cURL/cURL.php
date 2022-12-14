<?php
$ch = curl_init();

curl_setopt($ch , CURLOPT_URL , "https://zipcloud.ibsnet.co.jp/api/search?zipcode=1000001");
curl_setopt($ch , CURLOPT_RETURNTRANSFER , true);

$data = curl_exec($ch);

curl_close($ch);

echo $data;
?>