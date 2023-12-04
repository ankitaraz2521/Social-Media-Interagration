window.fbAsyncInit = function () {
    FB.init({
        appId: '346674706727132',
        cookie: true,                     // Enable cookies to allow the server to access the session.
        xfbml: true,                     // Parse social plugins on this webpage.
        version: 'v10.0'           // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function (response) {   // Called after the JS SDK has been initialized.
        statusChangeCallback(response);        // Returns the login status.
    });
};

function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
        testAPI();
    } else if (response.status === 'not_authorized') {  // Not logged into your webpage or we are unable to tell.
        window.alert('Please log ' + 'into this webpage.');
    }
    else {
        swal({
            title: `Not Logged In!`,
            text: `You are not logged into Facebook.`,
            icon: 'warning'
        });
    }
}