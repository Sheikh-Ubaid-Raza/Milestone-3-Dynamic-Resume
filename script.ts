const form = document.getElementById('resumeForm') as HTMLFormElement

const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

form.addEventListener('submit',(event:Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skill = (document.getElementById('skills') as HTMLTextAreaElement).value
    
    const resumeHtml = `
    <h2><b> Dynamic Resume </b></h2>
    <h3>Personal Information</h3>
    <p><b>Name : </b>${name}</p>
    <p><b>Email : </b>${email}</p>
    <p><b>Phone : </b>${phone}</p>
    <p><b>Address : </b>${address}</p>
    <br>
    <h3>Education</h3>
    <p>${education}</p>
    <br>
    <h3>Experience</h3>
    <p>${experience}</p>
    <br>
    <h3>Skills</h3>
    <p>${skill}</p>
    `;

    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }else{
        console.error('The resume display element is missing!');
    }

})