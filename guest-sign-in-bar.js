jQuery( document ).ready(function(jQuery) {
    // Sign-in bar for Guest Users
    var sign_in_bar_html = 'Current PSU affiliates <a href="javascript:jQuery( \'#login-lightbox\' ).dialog(\'open\'); void(0);" id="login_lightbox_link">sign in</a> to see additional results, library services, and request options.';

    var userName = $('#exlidUserAreaRibbon li.EXLUserName').text(); 
    var userNameDisplay = $('#exlidUserAreaRibbon li.EXLUserName .EXLUserNameDisplay').text();
    if (userName.trim() == "Guest" || userNameDisplay.trim().length <= 0 )
        $( "#resultsTileNoId" ).prepend('<div id="exlidHeaderSystemFeedback" class="EXLCustomLayoutTile EXLSystemFeedback"><div id="exlidHeaderSystemFeedbackContent" class="EXLSystemFeedback"><strong style="text-align:left;">'+sign_in_bar_html+'</strong></div></div>');
});