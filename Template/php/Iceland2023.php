<?php
$Iceland2023 = "../../Media/Pictures/Iceland2023";

// Get all image files in the Iceland2018
$files = glob($Iceland2023 . "*.{jpg,jpeg,png,gif}", GLOB_BRACE);

// Loop through the files and generate HTML code
foreach ($files as $file) {
    echo '<img src="' . $file . '" alt="Photo">' . PHP_EOL;
}
?>
