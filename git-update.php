<?php
	if ($_SERVER['REQUEST_METHOD'] == "POST")
	{
		exec("git pull origin master 2>&1", $return);
	}
?>
