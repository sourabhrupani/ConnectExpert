<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head>
		<meta charset="utf-8">
		<title>Reset Forgotten Password</title>
		
		<!-- <script>
		var qa_root = 'http://www.question2answer.org/qa/.\/';
		var qa_request = 'forgot';
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
			
			var elem = document.getElementById('emailhandle');
			if (elem) {
				elem.select();
				elem.focus();
			}
		};
		</script> -->
		<?php include 'header.php';?>

		<?php include 'topNav.php';?>

		<div class="qam-ask-search-box"><div class="qam-ask-mobile"><a href="http://www.question2answer.org/qa/ask" class="turquoise">Ask a Question</a></div><div class="qam-search-mobile turquoise" id="qam-search-mobile"></div></div>
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
						
						
						Reset Forgotten Password
						
					</h1>
					<div class="qa-part-form">
						<form method="post" action="http://www.question2answer.org/qa/forgot">
							<table class="qa-form-tall-table">
								<tr>
									<td class="qa-form-tall-label">
										Email or Username:
									</td>
								</tr>
								<tr>
									<td class="qa-form-tall-data">
										<input name="emailhandle" id="emailhandle" type="text" value="" class="qa-form-tall-text">
										<div class="qa-form-tall-note">A message will be sent to your email address with instructions.</div>
									</td>
								</tr>
								
								<tr>
									<td colspan="1" class="qa-form-tall-buttons">
										<input value="Send Reset Password Email" title="" type="submit" class="qa-form-tall-button qa-form-tall-button-send">
									</td>
								</tr>
							</table>
							<input type="hidden" name="doforgot" value="1">
							<input type="hidden" name="code" value="0-1520528034-d1b4ee34c494133452701b1d4305a8a6a6a63bed">
						</form>
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
