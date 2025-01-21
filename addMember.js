const dataForm = document.getElementById('dataForm');

const formData = {
    image: document.getElementById("image").value,
    name: document.getElementById("name").value,
    designation: document.getElementById("designation").value,
    affiliation: {
        current: currentArr
    },
    bio: document.getElementById("bio").value,
    education: educationArr,
    researchAreas: researchArr,
    socialLinks: {
        facebook: document.getElementById("facebookLink").value,
        twitter: document.getElementById("twitterLink").value,
        linkedin: document.getElementById("linkedinLink").value,
    },
};


dataForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    console.log("array : ", formData);
})