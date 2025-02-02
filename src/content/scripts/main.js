$(document).ready(function() {
    if (localStorage.userType && localStorage.user) {
        const nickname = localStorage.user;
        $(".sign-in-btn").css("display", "none");
        $(".user-image").css("display", "block");
        const initials = nickname.split(/\s+/).map(word => word.charAt(0).toUpperCase()).join('');
        $(".user-image p").text(initials);
    }
});