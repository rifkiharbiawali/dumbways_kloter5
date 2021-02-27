<?php
   define("BASE_URL", "");

   $server = "localhost";
   $username = "root";
   $password = "";
   $database = "perpustakaan";

   $koneksi = mysqli_connect($server, $username, $password, $database) or die ("Perikasa Koneksi Anda!");

?>