# Primo-Guest-Sign-In-Bar
Adds a sign-in bar with a link to encourage guest users to login for more results and service options

## Installation

Add the following JavaScript to your Primo header or footer template file or in a separate Javascript file that is referenced in your Primo header or footer template file.

```javascript

jQuery( document ).ready(function(jQuery) {
	// Sign-in Alert Box for Guest Users
	var sign_in_bar_html = 'Current PSU affiliates <a href="javascript:jQuery( \'#login-lightbox\' ).dialog(\'open\'); void(0);" id="login_lightbox_link">sign in</a> to see additional results, library services, and request options.';
	
	var userName = $('#exlidUserAreaRibbon li.EXLUserName').text(); 
	var userNameDisplay = $('#exlidUserAreaRibbon li.EXLUserName .EXLUserNameDisplay').text();
	if (userName.trim() == "Guest" || userNameDisplay.trim().length <= 0 )
		$( "#resultsTileNoId" ).prepend('<div id="exlidHeaderSystemFeedback" class="EXLCustomLayoutTile EXLSystemFeedback"><div id="exlidHeaderSystemFeedbackContent" class="EXLSystemFeedback"><strong style="text-align:left;">'+sign_in_bar_html+'</strong></div></div>');
});

```

## Configuration

set the login_link variable to the HTML you want to display for your sign-in bar.
