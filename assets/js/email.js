document.addEventListener('DOMContentLoaded', function() {
    var emailLink = document.getElementById('email-link');
    emailLink.href = "mailto:" + "pd423" + "@" + "cst.cam.ac.uk";
    var emailSpan = document.createElement('span');
    emailSpan.classList.add('email-text');
    emailSpan.innerText = "pd423" + "@" + "cst.cam.ac.uk";
    emailLink.appendChild(emailSpan);
});
