<?php
session_start();

$uname="";
$pwd="";
$con=mysqli_connect("localhost","root","","stackoverflow");
$error="<div class='alert alert-danger alert-dismissible'>
                <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>
                <h4><i class='icon fa fa-ban'></i> Alert!</h4>
                The Username or password that you've entered is incorrect. 
				 <a href='forgotPass1.php'>Forgotten password?</a>
    			</div>";

$Aerror="<div class='alert alert-danger alert-dismissible'>
                <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>×</button>
                <h4><i class='icon fa fa-ban'></i> Alert!</h4>
                Your account is not active!!! Click on link to active.
				 <a href='forgotPass1.php'>Active Account</a>
       			</div>";

if(isset($_POST["btnSubmit"]))
{
$uname=$_POST["uname"];
$pwd=$_POST["password"];
$sqr="select * from users where EMAIL='$uname' AND PASS='$pwd'";
$res=$con->query($sqr);
$count=mysqli_num_rows($res);

	if($count==1)
	{
		$row=$res->fetch_array();
		$_SESSION["U_ID"]=$row[0];
		$_SESSION["FNAME"]=$row[1];
		$_SESSION["LNAME"]=$row[2];
		$_SESSION["EMAIL"]=$row[3];

		?>
		<script type="text/javascript">
		window.location="../questions.php";
		</script>
		<?php 
	}
	else
    {
		$sqr1="select * from users where U_ID='$uname' AND PASS='$pwd'";
		$res1=$con->query($sqr1);
		$sum=mysqli_num_rows($res1);

		if ($sum==1)
		{
			$row1=$res1->fetch_array();
			$_SESSION["U_ID"]=$row1[0];
			$_SESSION["FNAME"]=$row1[1];
			$_SESSION["LNAME"]=$row1[2];
			$_SESSION["EMAIL"]=$row1[3];
			
			?>
			<script type="text/javascript">
			window.location="../questions.php";
			</script>
			<?php
		}
	}
}
?>