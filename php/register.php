<?php
	$fname="";
	$lname="";
	$email="";
	$pass="";
	$con=mysqli_connect("localhost","root","","stackoverflow");
	if(isset($_POST["btnSubmit"]))
	{
		$fname=$_POST["fName"];
		$lname=$_POST["lName"];
		$email=$_POST["emailAddress"];
		$pass=$_POST["password"];
		$qry="insert into users(FNAME,LNAME,EMAIL,PASS) values ('$fname','$lname','$email','$pass')";
		$res=$con->query($qry);
		echo $qry;
		?>
		<!-- <script>
			window.location="../questions.php"
		</script> -->
		<?php
	}
?>