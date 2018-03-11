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
		<?php include 'header.php';?>

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
							<a href="tags.php" class="qa-nav-main-link qa-nav-main-selected">Tags</a>
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
						
						
						Most popular tags
						
					</h1>
					<div class="qa-part-ranking">
						<table class="qa-top-tags-table">
							<tr>
								<td class="qa-top-tags-count">1,277 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/plugin.html" class="qa-tag-link">plugin</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">152 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/categories.html" class="qa-tag-link">categories</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">111 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/language.html" class="qa-tag-link">language</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">469 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/error.html" class="qa-tag-link">error</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">151 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/editor.html" class="qa-tag-link">editor</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">107 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/avatar.html" class="qa-tag-link">avatar</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">413 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/theme.html" class="qa-tag-link">theme</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">149 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/php.html" class="qa-tag-link">php</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">104 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/themes.html" class="qa-tag-link">themes</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">412 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/bug.html" class="qa-tag-link">bug</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">145 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/wysiwyg-editor.html" class="qa-tag-link">wysiwyg-editor</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">102 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/installation.html" class="qa-tag-link">installation</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">331 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/user.html" class="qa-tag-link">user</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">144 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/search.html" class="qa-tag-link">search</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">102 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/profile.html" class="qa-tag-link">profile</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">309 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/login.html" class="qa-tag-link">login</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">141 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/ckeditor.html" class="qa-tag-link">ckeditor</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">102 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/mysql.html" class="qa-tag-link">mysql</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">300 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/users.html" class="qa-tag-link">users</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">140 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/custom.html" class="qa-tag-link">custom</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">98 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/answers.html" class="qa-tag-link">answers</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">295 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/database.html" class="qa-tag-link">database</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">136 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/page.html" class="qa-tag-link">page</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">93 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/htaccess.html" class="qa-tag-link">htaccess</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">283 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/question.html" class="qa-tag-link">question</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">135 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/email-notifications.html" class="qa-tag-link">email-notifications</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">92 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/sidebar.html" class="qa-tag-link">sidebar</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">269 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/q2a.html" class="qa-tag-link">q2a</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">134 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/css.html" class="qa-tag-link">css</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">89 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/image.html" class="qa-tag-link">image</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">263 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/questions.html" class="qa-tag-link">questions</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">132 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/answer.html" class="qa-tag-link">answer</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">88 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/question2answer.html" class="qa-tag-link">question2answer</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">262 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/plugins.html" class="qa-tag-link">plugins</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">129 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/feature-request.html" class="qa-tag-link">feature-request</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">87 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/hide.html" class="qa-tag-link">hide</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">260 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/facebook.html" class="qa-tag-link">facebook</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">126 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/development.html" class="qa-tag-link">development</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">87 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/tag.html" class="qa-tag-link">tag</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">234 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/wordpress.html" class="qa-tag-link">wordpress</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">124 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/core.html" class="qa-tag-link">core</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">86 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/permissions.html" class="qa-tag-link">permissions</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">225 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/tags.html" class="qa-tag-link">tags</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">124 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/points.html" class="qa-tag-link">points</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">83 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/advanced-theme.html" class="qa-tag-link">advanced-theme</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">184 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/admin.html" class="qa-tag-link">admin</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">120 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/integration.html" class="qa-tag-link">integration</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">83 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/button.html" class="qa-tag-link">button</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">182 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/category.html" class="qa-tag-link">category</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">118 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/google.html" class="qa-tag-link">google</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">80 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/customization.html" class="qa-tag-link">customization</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">169 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/email.html" class="qa-tag-link">email</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">117 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/widget.html" class="qa-tag-link">widget</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">78 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/homepage.html" class="qa-tag-link">homepage</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">164 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/url.html" class="qa-tag-link">url</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">117 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/spam.html" class="qa-tag-link">spam</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">78 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/wysiwyg.html" class="qa-tag-link">wysiwyg</a></td>
							</tr>
							<tr>
								<td class="qa-top-tags-count">153 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/seo.html" class="qa-tag-link">seo</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">112 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/html.html" class="qa-tag-link">html</a></td>
								<td class="qa-top-tags-spacer">&nbsp;</td>
								<td class="qa-top-tags-count">77 &#215;</td>
								<td class="qa-top-tags-label"><a href="tag/snowflat.html" class="qa-tag-link">snowflat</a></td>
							</tr>
						</table>
					</div>
					<div class="qa-page-links">
						<span class="qa-page-links-label">Page:</span>
						<ul class="qa-page-links-list">
							<li class="qa-page-links-item">
								<span class="qa-page-selected">1</span>
							</li>
							<li class="qa-page-links-item">
								<a href="tagsc61e.html?start=60" class="qa-page-link">2</a>
							</li>
							<li class="qa-page-links-item">
								<a href="tagsb134.html?start=120" class="qa-page-link">3</a>
							</li>
							<li class="qa-page-links-item">
								<a href="tags0dc3.html?start=180" class="qa-page-link">4</a>
							</li>
							<li class="qa-page-links-item">
								<a href="tags9abd.html?start=240" class="qa-page-link">5</a>
							</li>
							<li class="qa-page-links-item">
								<a href="tags74f5.html?start=300" class="qa-page-link">6</a>
							</li>
							<li class="qa-page-links-item">
								<span class="qa-page-ellipsis">...</span>
							</li>
							<li class="qa-page-links-item">
								<a href="tagsa90b.html?start=3540" class="qa-page-link">60</a>
							</li>
							<li class="qa-page-links-item">
								<a href="tagsc61e.html?start=60" class="qa-page-next">next &raquo;</a>
							</li>
						</ul>
						<div class="qa-page-links-clear">
						</div>
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
