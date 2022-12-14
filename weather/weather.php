<?php
$ch = curl_init();

curl_setopt($ch , CURLOPT_URL , "https://weather.tsukumijima.net/primary_area.xml");
curl_setopt($ch , CURLOPT_RETURNTRANSFER , true);

$data = curl_exec($ch);

curl_close($ch);

echo $data;