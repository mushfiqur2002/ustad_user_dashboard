const addCBtn = document.querySelector('#addCurrent');
const currentList = document.querySelector('#currentList');

// Array to store education objects
const currentArr = [];

addCBtn.addEventListener('click', function () {
    // Get input values
    const institution = document.getElementById('cInstitution').value.trim();
    const department = document.getElementById('department').value.trim();
    const role = document.getElementById('role').value.trim();

    // Create an object for the education item
    const currentItem = {
        institution,
        department,
        role
    };

    // Add the object to the array
    currentArr.push(currentItem);

    // Create a list item for display
    const li = document.createElement('li');

    // Create a span for education details
    const details = document.createElement('span');
    details.textContent = `${institution}, ${department}, ${role}`;
    li.appendChild(details);

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.addEventListener('click', function () {
        li.remove();
        // Remove the corresponding object from the array
        const index = currentArr.indexOf(educationItem);
        if (index > -1) {
            currentArr.splice(index, 1);
        }
    });

    // Create edit button
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "10px";

    editBtn.addEventListener('click', function () {
        // Pre-fill form inputs with the current values
        document.getElementById('institution').value = institution;
        document.getElementById('department').value = department;
        document.getElementById('role').value = role;

        // Remove the current list item and corresponding object for editing
        li.remove();
        const index = currentArr.indexOf(currentItem);
        if (index > -1) {
            currentArr.splice(index, 1);
        }
    });

    // Append buttons to the list item
    li.appendChild(removeBtn);
    li.appendChild(editBtn);

    // Append the list item to the current list
    currentList.appendChild(li);

    // Clear input fields
    document.getElementById('institution').value = '';
    document.getElementById('department').value = '';
    document.getElementById('role').value = '';
});
