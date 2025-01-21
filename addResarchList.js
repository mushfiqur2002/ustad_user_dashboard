const addRBtn = document.querySelector('#addResearch');
const researchList = document.querySelector('#researchList');

const researchArr = [];

addRBtn.addEventListener("click", function () {
    const inputValue = document.querySelector('#research').value.trim();

    // Validation to prevent adding empty values
    if (!inputValue) {
        alert("Please enter a research item.");
        return;
    }

    // Add the item to the array
    researchArr.push(inputValue);

    // Create a new list item
    const li = document.createElement('li');

    // Create a span to hold the text content
    const details = document.createElement('span');
    details.className = 'details';
    details.textContent = inputValue;

    li.appendChild(details);

    // Create Remove Button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "10px";
    removeBtn.addEventListener('click', function () {
        li.remove();
        // Remove the item from the array
        const index = researchArr.indexOf(inputValue);
        if (index > -1) {
            researchArr.splice(index, 1);
        }
        console.log('Updated Research Array:', researchArr); // Debug log
    });

    // Create Edit Button
    const editBtn = document.createElement('button');
    editBtn.textContent = "Edit";
    editBtn.style.marginLeft = "10px";
    editBtn.addEventListener('click', function () {
        // Pre-fill the input field with the current value
        document.querySelector('#research').value = details.textContent.trim();

        // Remove the current list item
        li.remove();

        // Remove the item from the array
        const index = researchArr.indexOf(inputValue);
        if (index > -1) {
            researchArr.splice(index, 1);
        }
        console.log('Updated Research Array:', researchArr); // Debug log
    });

    li.appendChild(removeBtn);
    li.appendChild(editBtn);

    researchList.appendChild(li);

    // Clear the input field
    document.querySelector('#research').value = '';

    console.log('Current Research Array:', researchArr); // Debug log
});
