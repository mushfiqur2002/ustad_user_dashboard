const dataForm = document.getElementById('dataForm');

dataForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
        image: document.getElementById("image").value.trim(),
        name: document.getElementById("name").value.trim(),
        designation: document.getElementById("designation").value.trim(),
        current: currentArr, // Make sure `currentArr` is defined and updated elsewhere
        bio: document.getElementById("bio").value.trim(),
        education: educationArr, // Make sure `educationArr` is defined and updated elsewhere
        researchAreas: researchArr, // Make sure `researchArr` is defined and updated elsewhere
        socialLinks: {
            facebook: document.getElementById("facebookLink").value.trim(),
            twitter: document.getElementById("twitterLink").value.trim(),
            linkedin: document.getElementById("linkedinLink").value.trim(),
        },
    };

    try {
        const response = await fetch('https://ustad-dashboard-server.onrender.com/submit',{
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(formData),
        });
        const result = await response.json()
        console.log(result);
        if(response.ok){
            alert('data submitted successfully');
        }else{
            alert('something wrong')
        }
        
    } catch (error) {
        alert('problem in code')
    }

    console.log("array : ", formData);
});
