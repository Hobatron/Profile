$(document).ready(function () {
    $(function () {
        $('[data-toggle="popover"]').popover()
    });
    //please don't destroy my database :-(
    var config = {
        apiKey: "AIzaSyBOgwJDxn7HXarmPFhIBbDsumFaPvS6Cm0",
        authDomain: "profile-resonses.firebaseapp.com",
        databaseURL: "https://profile-resonses.firebaseio.com",
        projectId: "profile-resonses",
        storageBucket: "profile-resonses.appspot.com",
        messagingSenderId: "237377136527"
    };
    firebase.initializeApp(config);

    $('#submit').click(function (e) {
        e.preventDefault();
        console.log(e)

    })
})