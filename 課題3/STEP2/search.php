<?php
$zipcode = $_GET["zipcode"];
$ary = null;

$ch = curl_init();

curl_setopt($ch , CURLOPT_URL , "https://zipcloud.ibsnet.co.jp/api/search?zipcode=".$zipcode);
curl_setopt($ch , CURLOPT_RETURNTRANSFER , true);

$data = curl_exec($ch);

curl_close($ch);

$data = json_decode($data);
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/destyle.css">
    <link rel="stylesheet" href="../css/style.css">
    <title>郵便番号検索 | 同期通信</title>
</head>
<body>
    <div id="place">
        <ul>
            <li id="refectures"><?= $data->results[0]->address1 ?></li>
            <li id="municipalities"><?= $data->results[0]->address2 ?></li>
            <li id="area"><?= $data->results[0]->address3 ?></li>
        </ul>
    </div>
</body>
</html>