<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head>
		<meta charset="utf-8">
		<title>Login</title>

		<!-- <script>
				var qa_root = '.html\/';
				var qa_request = 'login';
				var qa_oldonload = window.onload;
				window.onload = function() {
					if (typeof qa_oldonload == 'function')
						qa_oldonload();
					
					qa_reveal(document.getElementById('notice_visitor'), 'notice');
					
					var elem = document.getElementById('emailhandle');
					if (elem) {
						elem.select();
						elem.focus();
					}
				};
		</script> -->

<?php include 'header.php';?>
<?php include 'topNav.php';?>
		<div class="qam-ask-search-box"><div class="qam-ask-mobile"><a href="ask.php" class="turquoise">Ask a Question</a></div><div class="qam-search-mobile turquoise" id="qam-search-mobile"></div></div>
		<div class="qam-search turquoise the-top" id="the-top-search">
			<div class="qa-search">
				<form method="get" action="http://www.question2answer.org/qa/search">
					
					<input type="text" name="q" value="" class="qa-search-field">
					<input type="submit" value="Search" class="qa-search-button">
				</form>
			</div>
		</div>
		<div class="qa-body-wrapper">
			
			<div class="qa-main-wrapper">
				
				<div class="qa-main">
					<h1>
						Log in
						
					</h1>
					<div class="qa-part-form">
						<form method="post" action="http://www.question2answer.org/qa/login">
							<table class="qa-form-tall-table">
								<tr>
									<td class="qa-form-tall-label">
										Email or Username:
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-data">
										<input name="emailhandle" id="emailhandle" dir="auto" type="text" value="" class="qa-form-tall-text">
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-label">
										Password:
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-data">
										<input name="password" id="password" dir="auto" type="password" value="" class="qa-form-tall-text">
										<div class="qa-form-tall-note"><a href="forgot.html">I forgot my password</a></div>
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-label">
										<label>
											<input name="remember" type="checkbox" value="1" class="qa-form-tall-checkbox">
											Remember me on this computer
										</label>
									</td>
								</tr>
								<tr>
									<td colspan="1" class="qa-form-tall-buttons">
										<input value="Log In" title="" type="submit" class="qa-form-tall-button qa-form-tall-button-login">
									</td>
								</tr>
							</table>
							<input type="hidden" name="dologin" value="1">
							<input type="hidden" name="code" value="0-1520521573-4e173d77c71c908b3a415f9b07133cae9c4ad257">
						</form>
					</div>
					<div class="qa-part-custom">
						<br>	<div id="fb-root" style="display:inline;"></div>
	<script>
	window.fbAsyncInit = function() {
		FB.init({
			appId  : '158644244176280',
			status : true,
			cookie : true,
			xfbml  : true,
			oauth  : true
		});

		FB.Event.subscribe('auth.login', function(response) {
			setTimeout("window.location='http:\/\/www.question2answer.org\/qa\/facebook-login?to=http%3A%2F%2Fwww.question2answer.org%2Fqa%2F'", 100);
		});
	};
	(function(d){
		var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
		js = d.createElement('script'); js.id = id; js.async = true;
		js.src = "../../connect.facebook.net/en_US/all.js";
		d.getElementsByTagName('head')[0].appendChild(js);
	}(document));
	</script>
	<div class="fb-login-button" style="display:inline; vertical-align:middle;" size="large" scope="email,user_about_me,user_location,user_website">
	</div>
<br>
					</div>
				</div> <!-- END qa-main -->
				
				<div id="qam-sidepanel-toggle"><i class="icon-left-open-big"></i></div>
				<div class="qa-sidepanel" id="qam-sidepanel-mobile">
					<div class="qam-search turquoise ">
						<div class="qa-search">
							<form method="get" action="http://www.question2answer.org/qa/search">
								
								<input type="text" name="q" value="" class="qa-search-field">
								<input type="submit" value="Search" class="qa-search-button">
							</form>
						</div>
					</div>
					<div class="qa-sidebar wet-asphalt">
						<div style="font-size:13px;">
							Welcome to the WhizzKid!
							<BR><BR>
							Got a question? Ask it 
							<A HREF="ask.html">Here</A>.
							<BR><BR>
							Become an Expert!
							<a href="tag/bug.html"  style="margin:0 1px;"></a>
							<BR><BR>
						</div>	
				    </div>
				
			</div> <!-- END main-wrapper -->
		</div> <!-- END body-wrapper -->
		<?php include 'footer.php'; ?>
<!-- <script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-1165533-8']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script> -->
		<div style="position:absolute; left:-9999px; top:-9999px;">
			<span id="qa-waiting-template" class="qa-waiting">...</span>
		</div>
	</body>
</html>
