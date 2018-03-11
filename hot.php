<!DOCTYPE html>
<html>
<meta http-equiv="content-type" content="text/html;charset=utf-8" />
<head>
		<meta charset="utf-8">
		<title>Hot questions</title>
		
		<!-- <script>
		var qa_root = '.html\/';
		var qa_request = 'hot';
		var qa_oldonload = window.onload;
		window.onload = function() {
			if (typeof qa_oldonload == 'function')
				qa_oldonload();
			
			qa_reveal(document.getElementById('notice_visitor'), 'notice');
		};
		</script> -->
		
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
						<form action="http://www.question2answer.org/qa/login?to=hot" method="post">
							<input type="text" name="emailhandle" dir="auto" placeholder="Email or Username">
							<input type="password" name="password" dir="auto" placeholder="Password">
							<div><input type="checkbox" name="remember" id="qam-rememberme" value="1">
							<label for="qam-rememberme">Remember</label></div>
							<input type="hidden" name="code" value="0-1520521078-c17a1e519a6448b2da78d66d9f5670f78990076e">
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
							<a href="hot.php" class="qa-nav-main-link qa-nav-main-selected">Hot!</a>
						</li>
						<li class="qa-nav-main-item qa-nav-main-unanswered">
							<a href="unanswered.php" class="qa-nav-main-link">Unanswered</a>
						</li>
						<li class="qa-nav-main-item qa-nav-main-tag">
							<a href="departments.php" class="qa-nav-main-link">Departments</a>
						</li>
						<!-- <li class="qa-nav-main-item qa-nav-main-user">
							<a href="users.php" class="qa-nav-main-link">Users</a>
						</li> -->
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
						<a href="feed/hot.rss" title="Hot questions"><i class="icon-rss qam-title-rss"></i></a>
						
						
						Hot questions
						
					</h1>
					<div class="qa-part-q-list">
						<form method="post" action="http://www.question2answer.org/qa/hot">
							<div class="qa-q-list">
								
								<div class="qa-q-list-item" id="q62711">
									<div class="qa-q-item-stats">
										<div class="qa-voting qa-voting-net" id="voting_62711">
											<div class="qa-vote-buttons qa-vote-buttons-net">
												<input title="Click to vote up" name="vote_62711_1_q62711" onclick="return qa_vote_click(this);" type="submit" value="+" class="qa-vote-first-button qa-vote-up-button"> 
												<input title="Click to vote down" name="vote_62711_-1_q62711" onclick="return qa_vote_click(this);" type="submit" value="&ndash;" class="qa-vote-second-button qa-vote-down-button"> 
											</div>
											<div class="qa-vote-count qa-vote-count-net">
												<span class="qa-netvote-count">
													<span class="qa-netvote-count-data">+8</span><span class="qa-netvote-count-pad"> votes</span>
												</span>
											</div>
											<div class="qa-vote-clear">
											</div>
										</div>
										<span class="qa-a-count">
											<span class="qa-a-count-data">2</span><span class="qa-a-count-pad"> answers</span>
										</span>
										<span class="qa-view-count">
											<span class="qa-view-count-data">91</span><span class="qa-view-count-pad"> views</span>
										</span>
									</div>
									<div class="qa-q-item-main">
										<div class="qa-q-item-title">
											
											<a href="62711/new-premium-plugin-ur-user-reactions.html"><span title="It's been a while since I don't (publicly) release any plugin and, after receiving some external motivation, I finally finished a reactions plugin. Most likely you already know what these reactions are because you can find them in many social networks. But in case you don't, let's say they are just a way to express  ...  the plugin you can check the plugin page. There, you'll find some additional features, screenshots and how to order it. You can also find a plugin demo here.">[New Premium Plugin] UR - User Reactions</span></a>
										</div>
										<span class="qa-q-item-avatar-meta">
											<span class="qa-q-item-avatar">
												<a href="user/pupi1985.html" class="qa-avatar-link"><img src="http://www.gravatar.com/avatar/080d24e21f0b0e02a1a9805122473755?s=20" width="20" height="20" class="qa-avatar-image" alt=""></a>
											</span>
											<span class="qa-q-item-meta">
												<span class="qa-q-item-what">asked</span>
												<span class="qa-q-item-when">
													<span class="qa-q-item-when-data">2 days</span><span class="qa-q-item-when-pad"> ago</span>
												</span>
												<span class="qa-q-item-where">
													<span class="qa-q-item-where-pad">in </span><span class="qa-q-item-where-data"><a href="plugins.html" class="qa-category-link">Plugins</a></span>
												</span>
												<span class="qa-q-item-who">
													<span class="qa-q-item-who-pad">by </span>
													<span class="qa-q-item-who-data"><a href="user/pupi1985.html" class="qa-user-link">pupi1985</a></span>
												</span>
											</span>
										</span>
										<div class="qa-q-item-tags">
											<ul class="qa-q-item-tag-list">
												<li class="qa-q-item-tag-item"><a href="tag/plugin.html" class="qa-tag-link">plugin</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/premium.html" class="qa-tag-link">premium</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/non-free.html" class="qa-tag-link">non-free</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/reactions.html" class="qa-tag-link">reactions</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/user-reactions.html" class="qa-tag-link">user-reactions</a></li>
											</ul>
										</div>
									</div>
									<div class="qa-q-item-clear">
									</div>
								</div> <!-- END qa-q-list-item -->
								
								<div class="qa-q-list-item" id="q62668">
									<div class="qa-q-item-stats">
										<div class="qa-voting qa-voting-net" id="voting_62668">
											<div class="qa-vote-buttons qa-vote-buttons-net">
												<input title="Click to vote up" name="vote_62668_1_q62668" onclick="return qa_vote_click(this);" type="submit" value="+" class="qa-vote-first-button qa-vote-up-button"> 
												<input title="Click to vote down" name="vote_62668_-1_q62668" onclick="return qa_vote_click(this);" type="submit" value="&ndash;" class="qa-vote-second-button qa-vote-down-button"> 
											</div>
											<div class="qa-vote-count qa-vote-count-net">
												<span class="qa-netvote-count">
													<span class="qa-netvote-count-data">+5</span><span class="qa-netvote-count-pad"> votes</span>
												</span>
											</div>
											<div class="qa-vote-clear">
											</div>
										</div>
										<span class="qa-a-count">
											<span class="qa-a-count-data">2</span><span class="qa-a-count-pad"> answers</span>
										</span>
										<span class="qa-view-count">
											<span class="qa-view-count-data">97</span><span class="qa-view-count-pad"> views</span>
										</span>
									</div>
									<div class="qa-q-item-main">
										<div class="qa-q-item-title">
											
											<a href="62668/new-plugin-flag-reasons-available.html"><span title="Download and Instructions: https://github.com/q2apro/q2apro-flag-reasons Question2Answer Plugin: Flag Reasons Description Adds choice of flag reasons and comment option to each flag vote Features user gets list of reasons to choose from when clicking on the button &quot;flag&quot; user can add a comment flags and reasons are  ... Flagging of answers and comments now possible. - Key listener for Enter (submit) and Escape (cancel). - Click on semi-transparent background closes overaly.">New plugin: &quot;Flag Reasons&quot; available</span></a>
										</div>
										<span class="qa-q-item-avatar-meta">
											<span class="qa-q-item-avatar">
												<a href="user/q2apro.html" class="qa-avatar-link"><img src="hot6569.jpg?qa=image&amp;qa_blobid=11666304965361404942&amp;qa_size=20" width="20" height="20" class="qa-avatar-image" alt=""></a>
											</span>
											<span class="qa-q-item-meta">
												<span class="qa-q-item-what">asked</span>
												<span class="qa-q-item-when">
													<span class="qa-q-item-when-data">3 days</span><span class="qa-q-item-when-pad"> ago</span>
												</span>
												<span class="qa-q-item-where">
													<span class="qa-q-item-where-pad">in </span><span class="qa-q-item-where-data"><a href="plugins.html" class="qa-category-link">Plugins</a></span>
												</span>
												<span class="qa-q-item-who">
													<span class="qa-q-item-who-pad">by </span>
													<span class="qa-q-item-who-data"><a href="user/q2apro.html" class="qa-user-link">q2apro</a></span>
												</span>
											</span>
										</span>
										<div class="qa-q-item-tags">
											<ul class="qa-q-item-tag-list">
												<li class="qa-q-item-tag-item"><a href="tag/plugin.html" class="qa-tag-link">plugin</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/q2apro-plugins.html" class="qa-tag-link">q2apro-plugins</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/flags.html" class="qa-tag-link">flags</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/flagging.html" class="qa-tag-link">flagging</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/flag.html" class="qa-tag-link">flag</a></li>
											</ul>
										</div>
									</div>
									<div class="qa-q-item-clear">
									</div>
								</div> <!-- END qa-q-list-item -->
								
								<div class="qa-q-list-item" id="q62759">
									<div class="qa-q-item-stats">
										<div class="qa-voting qa-voting-net" id="voting_62759">
											<div class="qa-vote-buttons qa-vote-buttons-net">
												<input title="Click to vote up" name="vote_62759_1_q62759" onclick="return qa_vote_click(this);" type="submit" value="+" class="qa-vote-first-button qa-vote-up-button"> 
												<input title="Click to vote down" name="vote_62759_-1_q62759" onclick="return qa_vote_click(this);" type="submit" value="&ndash;" class="qa-vote-second-button qa-vote-down-button"> 
											</div>
											<div class="qa-vote-count qa-vote-count-net">
												<span class="qa-netvote-count">
													<span class="qa-netvote-count-data">+1</span><span class="qa-netvote-count-pad"> vote</span>
												</span>
											</div>
											<div class="qa-vote-clear">
											</div>
										</div>
										<span class="qa-a-count">
											<span class="qa-a-count-data">2</span><span class="qa-a-count-pad"> answers</span>
										</span>
										<span class="qa-view-count">
											<span class="qa-view-count-data">21</span><span class="qa-view-count-pad"> views</span>
										</span>
									</div>
									<div class="qa-q-item-main">
										<div class="qa-q-item-title">
											
											<a href="62759/safe-to-use-version-to-1-8.html"><span title="About 5 months ago I tried to install q2a 1.8 for a new domain, but had issues and it did not work. I had to delete all and install version 1.7x. Im not sure what the original problem was. Would like to do a new install for a domain but want to see if others have experienced any issues with a new/clean install?">Safe to use version to 1.8?</span></a>
										</div>
										<span class="qa-q-item-avatar-meta">
											<span class="qa-q-item-avatar">
												<a href="user/craigg.html" class="qa-avatar-link"><img src="hot8eeb.jpg?qa=image&amp;qa_blobid=12697203736109131893&amp;qa_size=20" width="20" height="20" class="qa-avatar-image" alt=""></a>
											</span>
											<span class="qa-q-item-meta">
												<span class="qa-q-item-what">asked</span>
												<span class="qa-q-item-when">
													<span class="qa-q-item-when-data">9 hours</span><span class="qa-q-item-when-pad"> ago</span>
												</span>
												<span class="qa-q-item-where">
													<span class="qa-q-item-where-pad">in </span><span class="qa-q-item-where-data"><a href="core.html" class="qa-category-link">Q2A Core</a></span>
												</span>
												<span class="qa-q-item-who">
													<span class="qa-q-item-who-pad">by </span>
													<span class="qa-q-item-who-data"><a href="user/craigg.html" class="qa-user-link">craigg</a></span>
												</span>
											</span>
										</span>
										<div class="qa-q-item-tags">
											<ul class="qa-q-item-tag-list">
												<li class="qa-q-item-tag-item"><a href="tag/1.html" class="qa-tag-link">1</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/8.html" class="qa-tag-link">8</a></li>
												<li class="qa-q-item-tag-item"><a href="tag/core.html" class="qa-tag-link">core</a></li>
											</ul>
										</div>
									</div>
									<div class="qa-q-item-clear">
									</div>
								</div> <!-- END qa-q-list-item -->
								
								
							</div> <!-- END qa-q-list -->
							
							<div class="qa-q-list-form">
								<input type="hidden" name="code" value="0-1520521078-ad37d1c43ae756a29f46c4f3bd0316201353af5d">
							</div>
						</form>
					</div>
					<!-- <div class="qa-page-links">
						<span class="qa-page-links-label">Page:</span>
						<ul class="qa-page-links-list">
							<li class="qa-page-links-item">
								<span class="qa-page-selected">1</span>
							</li>
							<li class="qa-page-links-item">
								<a href="hot5a94.html?start=20" class="qa-page-link">2</a>
							</li>
							<li class="qa-page-links-item">
								<a href="hot4abd.html?start=40" class="qa-page-link">3</a>
							</li>
							<li class="qa-page-links-item">
								<a href="hotc61e.html?start=60" class="qa-page-link">4</a>
							</li>
							<li class="qa-page-links-item">
								<a href="hot4c62.html?start=80" class="qa-page-link">5</a>
							</li>
							<li class="qa-page-links-item">
								<a href="hot27d2.html?start=100" class="qa-page-link">6</a>
							</li>
							<li class="qa-page-links-item">
								<span class="qa-page-ellipsis">...</span>
							</li>
							<li class="qa-page-links-item">
								<a href="hota3d5.html?start=12660" class="qa-page-link">634</a>
							</li>
							<li class="qa-page-links-item">
								<a href="hot5a94.html?start=20" class="qa-page-next">next &raquo;</a>
							</li>
						</ul>
						<div class="qa-page-links-clear">
						</div>
					</div> -->
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
					
					<div class="qa-widgets-side qa-widgets-side-low">
						<div class="qa-widget-side qa-widget-side-low">
							<h2 style="margin-top: 0; padding-top: 0;">Most popular tags</h2>
							<div style="font-size: 10px;">
								<a href="tag/plugin.html" style="font-size: 24px; vertical-align: baseline;">plugin</a>
								<a href="tag/error.html" style="font-size: 8px; vertical-align: baseline;">error</a>
								<a href="tag/theme.html" style="font-size: 8px; vertical-align: baseline;">theme</a>
								<a href="tag/bug.html" style="font-size: 8px; vertical-align: baseline;">bug</a>
								<a href="tag/user.html" style="font-size: 8px; vertical-align: baseline;">user</a>
								<a href="tag/login.html" style="font-size: 8px; vertical-align: baseline;">login</a>
								<a href="tag/users.html" style="font-size: 8px; vertical-align: baseline;">users</a>
								<a href="tag/database.html" style="font-size: 8px; vertical-align: baseline;">database</a>
								<a href="tag/question.html" style="font-size: 8px; vertical-align: baseline;">question</a>
								<a href="tag/q2a.html" style="font-size: 8px; vertical-align: baseline;">q2a</a>
								<a href="tag/questions.html" style="font-size: 8px; vertical-align: baseline;">questions</a>
								<a href="tag/plugins.html" style="font-size: 8px; vertical-align: baseline;">plugins</a>
								<a href="tag/facebook.html" style="font-size: 8px; vertical-align: baseline;">facebook</a>
								<a href="tag/wordpress.html" style="font-size: 8px; vertical-align: baseline;">wordpress</a>
								<a href="tag/tags.html" style="font-size: 8px; vertical-align: baseline;">tags</a>
								<a href="tag/admin.html" style="font-size: 8px; vertical-align: baseline;">admin</a>
								<a href="tag/category.html" style="font-size: 8px; vertical-align: baseline;">category</a>
								<a href="tag/email.html" style="font-size: 8px; vertical-align: baseline;">email</a>
								<a href="tag/url.html" style="font-size: 8px; vertical-align: baseline;">url</a>
								<a href="tag/seo.html" style="font-size: 8px; vertical-align: baseline;">seo</a>
								<a href="tag/categories.html" style="font-size: 8px; vertical-align: baseline;">categories</a>
								<a href="tag/editor.html" style="font-size: 8px; vertical-align: baseline;">editor</a>
								<a href="tag/php.html" style="font-size: 8px; vertical-align: baseline;">php</a>
								<a href="tag/wysiwyg-editor.html" style="font-size: 8px; vertical-align: baseline;">wysiwyg-editor</a>
								<a href="tag/search.html" style="font-size: 8px; vertical-align: baseline;">search</a>
								<a href="tag/ckeditor.html" style="font-size: 8px; vertical-align: baseline;">ckeditor</a>
								<a href="tag/custom.html" style="font-size: 8px; vertical-align: baseline;">custom</a>
								<a href="tag/page.html" style="font-size: 8px; vertical-align: baseline;">page</a>
								<a href="tag/email-notifications.html" style="font-size: 8px; vertical-align: baseline;">email-notifications</a>
								<a href="tag/css.html" style="font-size: 8px; vertical-align: baseline;">css</a>
								<a href="tag/answer.html" style="font-size: 8px; vertical-align: baseline;">answer</a>
								<a href="tag/feature-request.html" style="font-size: 8px; vertical-align: baseline;">feature-request</a>
								<a href="tag/development.html" style="font-size: 8px; vertical-align: baseline;">development</a>
								<a href="tag/core.html" style="font-size: 8px; vertical-align: baseline;">core</a>
								<a href="tag/points.html" style="font-size: 8px; vertical-align: baseline;">points</a>
								<a href="tag/integration.html" style="font-size: 8px; vertical-align: baseline;">integration</a>
								<a href="tag/google.html" style="font-size: 8px; vertical-align: baseline;">google</a>
								<a href="tag/widget.html" style="font-size: 8px; vertical-align: baseline;">widget</a>
								<a href="tag/spam.html" style="font-size: 8px; vertical-align: baseline;">spam</a>
								<a href="tag/html.html" style="font-size: 8px; vertical-align: baseline;">html</a>
								<a href="tag/language.html" style="font-size: 8px; vertical-align: baseline;">language</a>
								<a href="tag/avatar.html" style="font-size: 8px; vertical-align: baseline;">avatar</a>
								<a href="tag/themes.html" style="font-size: 8px; vertical-align: baseline;">themes</a>
								<a href="tag/installation.html" style="font-size: 8px; vertical-align: baseline;">installation</a>
								<a href="tag/profile.html" style="font-size: 8px; vertical-align: baseline;">profile</a>
								<a href="tag/mysql.html" style="font-size: 8px; vertical-align: baseline;">mysql</a>
								<a href="tag/answers.html" style="font-size: 8px; vertical-align: baseline;">answers</a>
								<a href="tag/htaccess.html" style="font-size: 8px; vertical-align: baseline;">htaccess</a>
								<a href="tag/sidebar.html" style="font-size: 8px; vertical-align: baseline;">sidebar</a>
								<a href="tag/image.html" style="font-size: 8px; vertical-align: baseline;">image</a>
								<a href="tag/question2answer.html" style="font-size: 8px; vertical-align: baseline;">question2answer</a>
								<a href="tag/hide.html" style="font-size: 8px; vertical-align: baseline;">hide</a>
								<a href="tag/tag.html" style="font-size: 8px; vertical-align: baseline;">tag</a>
								<a href="tag/permissions.html" style="font-size: 8px; vertical-align: baseline;">permissions</a>
								<a href="tag/advanced-theme.html" style="font-size: 8px; vertical-align: baseline;">advanced-theme</a>
								<a href="tag/button.html" style="font-size: 8px; vertical-align: baseline;">button</a>
								<a href="tag/customization.html" style="font-size: 8px; vertical-align: baseline;">customization</a>
								<a href="tag/homepage.html" style="font-size: 8px; vertical-align: baseline;">homepage</a>
								<a href="tag/wysiwyg.html" style="font-size: 8px; vertical-align: baseline;">wysiwyg</a>
								<a href="tag/snowflat.html" style="font-size: 8px; vertical-align: baseline;">snowflat</a>
								<a href="tag/q2apro-plugins.html" style="font-size: 8px; vertical-align: baseline;">q2apro-plugins</a>
								<a href="tag/edit.html" style="font-size: 8px; vertical-align: baseline;">edit</a>
								<a href="tag/adsense.html" style="font-size: 8px; vertical-align: baseline;">adsense</a>
								<a href="tag/username.html" style="font-size: 8px; vertical-align: baseline;">username</a>
								<a href="tag/link.html" style="font-size: 8px; vertical-align: baseline;">link</a>
								<a href="tag/redirect.html" style="font-size: 8px; vertical-align: baseline;">redirect</a>
								<a href="tag/registration.html" style="font-size: 8px; vertical-align: baseline;">registration</a>
								<a href="tag/moderation.html" style="font-size: 8px; vertical-align: baseline;">moderation</a>
								<a href="tag/badges.html" style="font-size: 8px; vertical-align: baseline;">badges</a>
								<a href="tag/ask.html" style="font-size: 8px; vertical-align: baseline;">ask</a>
								<a href="tag/title.html" style="font-size: 8px; vertical-align: baseline;">title</a>
								<a href="tag/upload.html" style="font-size: 8px; vertical-align: baseline;">upload</a>
								<a href="tag/custom-page.html" style="font-size: 8px; vertical-align: baseline;">custom-page</a>
								<a href="tag/list.html" style="font-size: 8px; vertical-align: baseline;">list</a>
								<a href="tag/upgrade.html" style="font-size: 8px; vertical-align: baseline;">upgrade</a>
								<a href="tag/single-sign-on.html" style="font-size: 8px; vertical-align: baseline;">single-sign-on</a>
								<a href="tag/user-profile.html" style="font-size: 8px; vertical-align: baseline;">user-profile</a>
								<a href="tag/comments.html" style="font-size: 8px; vertical-align: baseline;">comments</a>
								<a href="tag/post.html" style="font-size: 8px; vertical-align: baseline;">post</a>
								<a href="tag/facebook-plugin.html" style="font-size: 8px; vertical-align: baseline;">facebook-plugin</a>
								<a href="tag/javascript.html" style="font-size: 8px; vertical-align: baseline;">javascript</a>
								<a href="tag/update.html" style="font-size: 8px; vertical-align: baseline;">update</a>
								<a href="tag/voting.html" style="font-size: 8px; vertical-align: baseline;">voting</a>
								<a href="tag/images.html" style="font-size: 8px; vertical-align: baseline;">images</a>
								<a href="tag/features.html" style="font-size: 8px; vertical-align: baseline;">features</a>
								<a href="tag/free-plugin.html" style="font-size: 8px; vertical-align: baseline;">free-plugin</a>
								<a href="tag/best-answer.html" style="font-size: 8px; vertical-align: baseline;">best-answer</a>
								<a href="tag/rss.html" style="font-size: 8px; vertical-align: baseline;">rss</a>
								<a href="tag/url-structure.html" style="font-size: 8px; vertical-align: baseline;">url-structure</a>
								<a href="tag/mobile.html" style="font-size: 8px; vertical-align: baseline;">mobile</a>
								<a href="tag/navigation.html" style="font-size: 8px; vertical-align: baseline;">navigation</a>
								<a href="tag/sitemap.html" style="font-size: 8px; vertical-align: baseline;">sitemap</a>
								<a href="tag/meta.html" style="font-size: 8px; vertical-align: baseline;">meta</a>
								<a href="tag/security.html" style="font-size: 8px; vertical-align: baseline;">security</a>
								<a href="tag/remove.html" style="font-size: 8px; vertical-align: baseline;">remove</a>
								<a href="tag/code.html" style="font-size: 8px; vertical-align: baseline;">code</a>
								<a href="tag/notification.html" style="font-size: 8px; vertical-align: baseline;">notification</a>
								<a href="tag/markdown.html" style="font-size: 8px; vertical-align: baseline;">markdown</a>
								<a href="tag/q2a-open-login.html" style="font-size: 8px; vertical-align: baseline;">q2a-open-login</a>
								<a href="tag/links.html" style="font-size: 8px; vertical-align: baseline;">links</a>
							</div>
						</div>
						
					</div>
					
					<div class="qa-feed">
						<a href="feed/hot.rss" class="qa-feed-link">Hot questions</a>
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
