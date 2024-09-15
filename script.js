var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resume-display');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skill = document.getElementById('skills').value;
    var resumeHtml = "\n    <h2><b> Dynamic Resume </b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name : </b>".concat(name, "</p>\n    <p><b>Email : </b>").concat(email, "</p>\n    <p><b>Phone : </b>").concat(phone, "</p>\n    <p><b>Address : </b>").concat(address, "</p>\n    <br>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <br>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <br>\n    <h3>Skills</h3>\n    <p>").concat(skill, "</p>\n    ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error('The resume display element is missing!');
    }
});
