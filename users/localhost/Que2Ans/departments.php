<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head>
		<meta charset="utf-8">
		<title>Departments</title>
		
		<script>
		var qa_root = '.html\/';
		var qa_request = 'tags';
		var qa_oldonload = window.onload;
		window.onload = function() {
			if (typeof qa_oldonload == 'function')
				qa_oldonload();
			
			qa_reveal(document.getElementById('notice_visitor'), 'notice');
		};
		</script>
				<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="qa-theme/SnowFlat/qa-styles8782.css?1.7.4">
		<link rel="stylesheet" href="qa-theme/SnowFlat/fonts/ubuntu8782.css?1.7.4">
		<link rel="stylesheet" type="text/css" href="bootstrap/css/bootstrap.min.css">
		<style>
			.qa-body-js-on .qa-notice {display:none;}
		</style>
		<style>
			.qa-nav-user { margin: 0 !important; }
		</style>
		<style>
			.fb-login-button.fb_iframe_widget.fb_hide_iframes span {display:none;}
		</style>
		<!-- <link rel="search" type="application/opensearchdescription+xml" title="Question2Answer Q&amp;A" href="opensearch.xml"> -->
		<STYLE TYPE="text/css">
			.qa-logo-link img {padding-top:8px;}
			.qa-nav-main-custom-6 {width:2em; background:url('../../developer.android.com/images/brand/Android_Robot_100.png') no-repeat center center; background-size:50% 50%;}
		</STYLE>
		<script src="qa-content/jquery-1.11.3.min.js"></script>
		<script src="qa-theme/SnowFlat/js/snow-core8782.js?1.7.4"></script>
		<script src="qa-content/qa-page8782.js?1.7.4"></script>
	</head>
	<body class="qa-template-login qa-body-js-off">
		<script>
			var b=document.getElementsByTagName('body')[0];
			b.className=b.className.replace('qa-body-js-off', 'qa-body-js-on');
		</script>
		<!-- <div class="qa-notice" id="notice_visitor">
			<form method="post" action="http://www.question2answer.org/qa/login">
				Welcome to the Question2Answer Q&amp;A. There's also a <A HREF="http://demo.question2answer.org/">demo</A> if you just want to try it out.
				<input name="notice_visitor" onclick="return qa_notice_click(this);" type="submit" value="X" class="qa-notice-close-button"> 
				<input type="hidden" name="code" value="0-1520521573-617e73361a96592386737f2d324555ffe519dd1d">
			</form>
		</div> -->
		<div id="qam-topbar" class="clearfix">
			<div class="qam-main-nav-wrapper clearfix">
				<div class="sb-toggle-left qam-menu-toggle"><i class="icon-th-list"></i></div>
				<div class="qam-account-items-wrapper">
					<div id="qam-account-toggle" class="qam-logged-out">
						<i class="icon-key qam-auth-key"></i>
						<div class="qam-account-handle">Login</div>
					</div>
					<div class="qam-account-items clearfix">
						<form action="http://www.question2answer.org/qa/login?to=tags" method="post">
							<input type="text" name="emailhandle" dir="auto" placeholder="Email or Username">
							<input type="password" name="password" dir="auto" placeholder="Password">
							<div><input type="checkbox" name="remember" id="qam-rememberme" value="1">
							<label for="qam-rememberme">Remember</label></div>
							<input type="hidden" name="code" value="0-1520521080-000d093f68c497a9b8cbede70e21f73845d97038">
							<input type="submit" value="Login" class="qa-form-tall-button qa-form-tall-button-login" name="dologin">
						</form>
						<div class="qa-nav-user">
							<ul class="qa-nav-user-list">
								<li class="qa-nav-user-item qa-nav-user-register">
									<a href="register.php" class="qa-nav-user-link">Register</a>
								</li>
							</ul>
							<div class="qa-nav-user-clear">
							</div>
						</div>
					</div> <!-- END qam-account-items -->
				</div> <!-- END qam-account-items-wrapper -->
				<div class="qa-logo">
					<a href="index.php" class="qa-logo-link" title="Solvo"><img src="images/logo.png" width="454" height="40" border="0" alt="Solvo"></a>
				</div>
				<div class="qa-nav-main">
					<ul class="qa-nav-main-list">
						<li class="qa-nav-main-item qa-nav-main-questions">
							<a href="questions.php" class="qa-nav-main-link">Questions</a>
						</li>
						<li class="qa-nav-main-item qa-nav-main-hot">
							<a href="hot.php" class="qa-nav-main-link">Hot!</a>
						</li>
						<li class="qa-nav-main-item qa-nav-main-unanswered">
							<a href="unanswered.php" class="qa-nav-main-link">Unanswered</a>
						</li>
						<li class="qa-nav-main-item qa-nav-main-tag">
							<a href="departments.php" class="qa-nav-main-link qa-nav-main-selected">Departments</a>
						</li>
						<li class="qa-nav-main-item qa-nav-main-user">
							<a href="users.php" class="qa-nav-main-link">Users</a>
						</li>
						<li class="qa-nav-main-item qa-nav-main-ask">
							<a href="ask.php" class="qa-nav-main-link">Ask a Question</a>
						</li>
						<li class="qa-nav-main-item-opp qa-nav-main-custom-1">
							<a href="index.php" class="qa-nav-main-link">About</a>
						</li>
					</ul>
					<div class="qa-nav-main-clear">
					</div>
				</div>
			</div> <!-- END qam-main-nav-wrapper -->
		</div> <!-- END qam-topbar -->
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
						
						
						Departments
						
					</h1>
					<div class="qa-part-ranking">
						<table class="qa-top-tags-table">
							<tr>
								<!-- <td class="qa-top-tags-count">1,277 &#215;</td> -->
								<td class=""><a href="tag/plugin.html" class="depart_btn btn btn-primary">Computer/IT Department</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<!-- <td class="qa-top-tags-count">152 &#215;</td> -->
								<td class="qa-top-tags-label"><a href="tag/categories.html" class="qa-tag-link">Electrical and Electronics</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<!-- <td class="qa-top-tags-count">111 &#215;</td> -->
								<td class="qa-top-tags-label"><a href="tag/language.html" class="qa-tag-link">Mechanical / Automobile</a></td>
							</tr>
							<tr>
								<!-- <td class="qa-top-tags-count">469 &#215;</td> -->
								<td class="qa-top-tags-label"><a href="tag/error.html" class="qa-tag-link">Civil</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<!-- <td class="qa-top-tags-count">151 &#215;</td> -->
								<td class="qa-top-tags-label"><a href="tag/editor.html" class="qa-tag-link">Mechatronics</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<!-- <td class="qa-top-tags-count">107 &#215;</td> -->
								<td class="qa-top-tags-label"><a href="tag/avatar.html" class="qa-tag-link">Auronautical</a></td>
							</tr>
							
						</table>
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
Welcome to the Q&amp;A site for <A HREF="http://www.question2answer.org/">Question2Answer</A>.
<BR><BR>
If you have a question about Q2A, please <A HREF="ask.html">ask in English</A>.
<BR><BR>
To report a bug, please create a <A HREF="https://github.com/q2a/question2answer/issues">new issue on Github</A> or ask a question here with the <a href="tag/bug.html" class="qa-tag-link" style="margin:0 2px;">bug</a> tag.
<BR><BR>
<!-- If you just want to try Q2A, please use the <A HREF="http://demo.question2answer.org/">demo site</A>. -->
<!--<BR><BR>
<B><A HREF="http://www.question2answer.org/qa/31514/what-do-you-want-in-question2answer-1-7">Q: What do you want in Question2Answer 1.7?</A></B>-->
<BR><BR>
<B STYLE="color:red;">Feb 8, 2018:</B> <A HREF="http://www.question2answer.org/versions.php">Q2A 1.8.0 released!</A>
</div>
					</div>
					
				</div>
				
			</div> <!-- END main-wrapper -->
		</div> <!-- END body-wrapper -->
		<div class="qam-footer-box">
	<div class="qam-footer-row">
	</div> <!-- END qam-footer-row -->
	<div class="qa-footer">
		<div class="qa-nav-footer">
			<ul class="qa-nav-footer-list">
				<li class="qa-nav-footer-item qa-nav-footer-custom-4">
					<a href="http://www.question2answer.org/feedback.php" class="qa-nav-footer-link">Send feedback</a>
				</li>
				<li class="qa-nav-footer-item qa-nav-footer-custom-3">
					<a href="http://demo.question2answer.org/" class="qa-nav-footer-link">Demo sandbox</a>
				</li>
				<li class="qa-nav-footer-item qa-nav-footer-custom-5">
					<a href="http://wiki.question2answer.org/" class="qa-nav-footer-link">Q2A Wiki</a>
				</li>
			</ul>
			<div class="qa-nav-footer-clear">
			</div>
		</div>
		<div class="qa-attribution">
			Snow Theme by <a href="http://www.q2amarket.com/">Q2A Market</a>
		</div>
		<div class="qa-attribution">
			Powered by <a href="index.php">Solvo</a>
		</div>
		<div class="qa-footer-clear">
		</div>
	</div> <!-- END qa-footer -->
			
</div> <!-- END qam-footer-box -->		<script type="text/javascript">

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
