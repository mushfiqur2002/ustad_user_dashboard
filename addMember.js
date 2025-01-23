const dataForm = document.getElementById('dataForm');

dataForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
        photo: document.getElementById("image").value.trim(),
        name: document.getElementById("name").value.trim(),
        designation: document.getElementById("designation").value.trim(),
        current: currentArr,
        bio: document.getElementById("bio").value.trim(),
        education: educationArr,
        research_areas: researchArr,
        company_role: document.querySelector('input[name="ustadRole"]:checked')?.value,
        social_links: {
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
