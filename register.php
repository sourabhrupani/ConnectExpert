<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head>
		<meta charset="utf-8">
		<title>Register as a new user</title>
		
		<script>
		var qa_root = '.html\/';
		var qa_request = 'register';
		var qa_captcha_in = 'qa_captcha_div_1';
		function recaptcha_load(elemId) {
		  if (grecaptcha) {
		    grecaptcha.render(elemId, {
		      "sitekey": '6LdY9gsAAAAAAO3irtawGrfBt7rqPkzFRvRHd_Mz'
		    });
		  }
		}
		function recaptcha_onload() {
		  recaptcha_load("qa_captcha_div_1");
		}
		var qa_oldonload = window.onload;
		window.onload = function() {
			if (typeof qa_oldonload == 'function')
				qa_oldonload();
			
			qa_reveal(document.getElementById('notice_visitor'), 'notice');
			
			var elem = document.getElementById('handle');
			if (elem) {
				elem.select();
				elem.focus();
			}
		};
		</script>
		<script src="../../www.google.com/recaptcha/api99a7.js?onload=recaptcha_onload&amp;render=explicit"></script>
		
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
						
						
						Register as a new user
						
					</h1>
					<div class="qa-part-form">
						<form method="post" action="http://www.question2answer.org/qa/register">
							<table class="qa-form-tall-table">
								<tr>
									<td class="qa-form-tall-label">
										Username:
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-data">
										<input name="handle" id="handle" dir="auto" type="text" value="" class="qa-form-tall-text">
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
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-label">
										Email:
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-data">
										<input name="email" id="email" dir="auto" type="text" value="" class="qa-form-tall-text">
										<div class="qa-form-tall-note">Privacy: Your email address will not be shared or sold to third parties.</div>
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-label">
										Q2A site:
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-data">
										<input name="field_5" type="text" value="" class="qa-form-tall-text">
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-label">
										Anti-spam verification:
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-data">
										<div id="qa_captcha_div_1"></div>
									</td>
								</tr>
								<tr>
									<td colspan="1" class="qa-form-tall-buttons">
										<input onclick="qa_show_waiting_after(this, false);" value="Register" title="" type="submit" class="qa-form-tall-button qa-form-tall-button-register">
									</td>
								</tr>
							</table>
							<input type="hidden" name="doregister" value="1">
							<input type="hidden" name="code" value="0-1520521573-d6c18add60c4ef71eb533f5ffef192e1346e8010">
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
					
				</div>
				
			</div> <!-- END main-wrapper -->
		</div> <!-- END body-wrapper -->
		
		<?php include 'footer.php';?>

		<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-1165533-8']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
		<div style="position:absolute; left:-9999px; top:-9999px;">
			<span id="qa-waiting-template" class="qa-waiting">...</span>
		</div>
	</body>
	
</html>
