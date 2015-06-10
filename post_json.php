<?php
  $user  = $_POST['user'];
  $day   = $_POST['day'];
  $month = $_POST['month'];
  $year  = $_POST['year'];
  $leave = $_POST['leave'];

  if ($user != null) {
    /*POST*/
      /*  $file = fopen('data/TEST.json','w');
        fwrite($file, $json);
        fclose($file);*/
  } else {
    echo "error writing file";
  }
?>