<div id="qam-topbar" class="clearfix">
			<div class="qam-main-nav-wrapper clearfix">
				<div class="sb-toggle-left qam-menu-toggle"><i class="icon-th-list"></i></div>
				<div class="qam-account-items-wrapper">
					<div id="qam-account-toggle" class="qam-logged-out">
						<i class="icon-key qam-auth-key"></i>
						<div class="qam-account-handle">Login</div>
					</div>
					<div class="qam-account-items clearfix">
						<form action="http://www.question2answer.org/qa/login?to=login" method="post">
							<input type="text" name="emailhandle" dir="auto" placeholder="Email or Username">
							<input type="password" name="password" dir="auto" placeholder="Password">
							<div><input type="checkbox" name="remember" id="qam-rememberme" value="1">
							<label for="qam-rememberme">Remember</label></div>
							<input type="hidden" name="code" value="0-1520521573-4e173d77c71c908b3a415f9b07133cae9c4ad257">
							<input type="submit" value="Login" class="qa-form-tall-button qa-form-tall-button-login" name="dologin">
						</form>
						<div class="qa-nav-user">
							<ul class="qa-nav-user-list">
								<!-- <li class="qa-nav-user-item qa-nav-user-facebook-login">
									<span class="qa-nav-user-nolink">	
										<div id="fb-root" style="display:inline;"></div>
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
													setTimeout("window.location='http:\/\/www.question2answer.org\/qa\/facebook-login?to=http%3A%2F%2Fwww.question2answer.org%2Fqa%2Flogin'", 100);
												});
											};
											(function(d){
												var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
												js = d.createElement('script'); js.id = id; js.async = true;
												js.src = "../../connect.facebook.net/en_US/all.js";
												d.getElementsByTagName('head')[0].appendChild(js);
											}(document));
											</script>
											<div class="fb-login-button" style="display:inline; vertical-align:middle;" size="medium" scope="email,user_about_me,user_location,user_website">
											</div>
									</span>
								</li> -->
								<li class="qa-nav-user-item qa-nav-user-register">
									<a href="register.php" class="qa-nav-user-link">Register</a>
								</li>
							</ul>
							<!-- <div class="qa-nav-user-clear">
							</div> -->
						</div>
					</div> <!-- END qam-account-items -->
				</div> <!-- END qam-account-items-wrapper -->
				<div class="qa-logo">
					<a href="index.php" class="qa-logo-link" title="Solvo"><img src="images/logo.png" width="454" height="40" border="0" alt="Solvo"></a>
				</div>
				<div class="qa-nav-main">
					<ul class="qa-nav-main-list">
						<!-- <li class="qa-nav-main-item qa-nav-main-activity">
							<a href="activity.html" class="qa-nav-main-link">All Activity</a>
						</li> -->
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
							<a href="departments.php" class="qa-nav-main-link">Departments</a>
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