<?php
  $json = $_POST['json'];

  if (json_decode($json) != null) {
    $file = fopen('json/people2.json','w+');
    fwrite($file, $json);
    fclose($file);
  } else {
    echo "error writing file";
  }
?>