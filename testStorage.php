<?php
require_once('config.php');
require_once('storage\FileBasedStorage.php');
require_once('model\User.php');
use storage\FileBasedStorage;
use model\User;

$storage = new FileBasedStorage();
$user = new User(1, "Joram");
//echo json_encode($user->jsonSerialize());
//echo TimeSheetConfig::DATA_DIR;
echo $storage->store($user);
echo "end of test\n";