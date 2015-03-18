# Primo-Guest-Sign-In-Bar
Adds a sign-in bar with a link to encourage guest users to login for more results and service options

## Installation

Add the following JavaScript to your Primo header or footer template file.

```html

<script>
	jQuery( document ).ready(function(jQuery) {
		// Sign-in bar for Guest Users
		var sign_in_bar_html = 'Current PSU affiliates <a href="javascript:jQuery( \'#login-lightbox\' ).dialog(\'open\'); void(0);" id="login_lightbox_link">sign in</a> to see additional results, library services, and request options.';
		
		var userName = $('#exlidUserAreaRibbon li.EXLUserName').text(); 
		var userNameDisplay = $('#exlidUserAreaRibbon li.EXLUserName .EXLUserNameDisplay').text();
		if (userName.trim() == "Guest" || userNameDisplay.trim().length <= 0 )
			$( "#resultsTileNoId" ).prepend('<div id="exlidHeaderSystemFeedback" class="EXLCustomLayoutTile EXLSystemFeedback"><div id="exlidHeaderSystemFeedbackContent" class="EXLSystemFeedback"><strong style="text-align:left;">'+sign_in_bar_html+'</strong></div></div>');
	});
</script>

```

Or link to the JavaScript file in your header or footer:

```html

<!-- Include File for Guest Sign-in Bar -->
<script src="//path_to_file/guest-sign-in-bar.js"></script>

```

## Configuration

set the login_link variable to the HTML you want to display for your sign-in bar.
