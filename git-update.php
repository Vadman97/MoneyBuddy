<?php
	if ($_SERVER['REQUEST_METHOD'] == "POST")
	{
        $data = json_decode(file_get_contents('php://input'), true);
        if ($data["config"]["secret"] === "eTbRy8FrytRQTtMP") {
            exec("git pull origin master 2>&1", $return);
        }
	}
?>
