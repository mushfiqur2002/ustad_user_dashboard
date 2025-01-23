const addBtn = document.querySelector('#addEducation');
const educationList = document.querySelector('#educationList');

// Array to store education objects
const educationArr = [];

addBtn.addEventListener('click', function () {
    // Get input values
    const degree = document.getElementById('degree').value.trim();
    const field = document.getElementById('field').value.trim();
    const institution = document.getElementById('institution').value.trim();
    const status = document.querySelector('input[name="status"]:checked')?.value;
    const scholarship = document.getElementById('scholarship').value.trim();

    // Create an object for the education item
    const educationItem = {
        degree,
        field,
        institution,
        status,
        scholarship: scholarship || null, // Include scholarship if available
    };

    // Add the object to the array
    educationArr.push(educationItem);

    // Create a list item for display
    const li = document.createElement('li');

    // Create a span for education details
    const details = document.createElement('span');
    details.textContent = `${degree}, ${field}, ${institution}, ${status}${scholarship ? `, Scholarship: ${scholarship}` : ''}`;
    li.appendChild(details);

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.addEventListener('click', function () {
        li.remove();
        // Remove the corresponding object from the array
        const index = educationArr.indexOf(educationItem);
        if (index > -1) {
            educationArr.splice(index, 1);
        }
    });

    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "10px";

    editBtn.addEventListener('click', function () {
        // Pre-fill form inputs with the current values
        document.getElementById('degree').value = degree;
        document.getElementById('field').value = field;
        document.getElementById('institution').value = institution;
        document.querySelector(`input[name="status"][value="${status}"]`).checked = true;
        document.getElementById('scholarship').value = scholarship || '';

        // Remove the current list item and corresponding object for editing
        li.remove();
        const index = educationArr.indexOf(educationItem);
        if (index > -1) {
            educationArr.splice(index, 1);
        }
    });

    // Append buttons to the list item
    li.appendChild(removeBtn);
    li.appendChild(editBtn);

    // Append the list item to the education list
    educationList.appendChild(li);

    // Clear input fields
    document.getElementById('degree').value = '';
    document.getElementById('field').value = '';
    document.getElementById('institution').value = '';
    document.getElementById('scholarship').value = '';
    const checkedStatus = document.querySelector('input[name="status"]:checked');
    if (checkedStatus) {
        checkedStatus.checked = false;
    }
});
