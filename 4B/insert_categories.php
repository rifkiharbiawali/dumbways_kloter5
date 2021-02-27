<?php
 include_once("koneksi.php");
 $id = $_POST["id"];
 $category = $_POST["category"];
 mysqli_query($koneksi, "INSERT INTO categories (id, name) VALUES ('$id', '$category')");
 header("location:".BASE_URL);
?>