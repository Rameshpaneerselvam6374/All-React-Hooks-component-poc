document.getElementById('validateButton').addEventListener('click', validateLink);

function validateLink() {
    const urlInput = document.getElementById('urlInput').value;
    const result = document.getElementById('result');

    // Regular expression for URL validation
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

    if (urlPattern.test(urlInput)) {
        result.textContent = "Valid link!";
        result.style.color = "green";
        saveLink(urlInput);
        displayLinks();
        document.getElementById('urlInput').value = ''; // Clear input
    } else {
        result.textContent = "Invalid link. Please enter a valid URL.";
        result.style.color = "red";
    }
}

function saveLink(link) {
    let links = JSON.parse(localStorage.getItem('links')) || [];
    links.push(link);
    localStorage.setItem('links', JSON.stringify(links));
}

function displayLinks() {
    const savedLinksList = document.getElementById('savedLinks');
    savedLinksList.innerHTML = ''; // Clear the list before displaying

    const links = JSON.parse(localStorage.getItem('links')) || [];
    links.forEach((link, index) => {
        const li = document.createElement('li');
        li.textContent = link;

        // Create edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editLink(index);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteLink(index);

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        savedLinksList.appendChild(li);
    });
}

function editLink(index) {
    const links = JSON.parse(localStorage.getItem('links')) || [];
    const newLink = prompt("Edit the link:", links[index]);

    if (newLink) {
        links[index] = newLink; // Update the link
        localStorage.setItem('links', JSON.stringify(links));
        displayLinks(); // Refresh the displayed list
    }
}

function deleteLink(index) {
    let links = JSON.parse(localStorage.getItem('links')) || [];
    links.splice(index, 1); // Remove the link at the specified index
    localStorage.setItem('links', JSON.stringify(links));
    displayLinks(); // Refresh the displayed list
}

// Load saved links on page load
window.onload = displayLinks;
