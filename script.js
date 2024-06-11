// I will description so you wil know what i am doing
// Define the data
const facilitators = [
    { name: 'Facilitator 1' },
    { name: 'Facilitator 2' },
    { name: 'Facilitator 3' }
];

const developers = [
    { name: 'CSS Dev 1', skill: 'CSS' },
    { name: 'CSS Dev 2', skill: 'CSS' },
    { name: 'CSS Dev 3', skill: 'CSS' },
    { name: 'HTML Dev 1', skill: 'HTML' },
    { name: 'HTML Dev 2', skill: 'HTML' },
    { name: 'HTML Dev 3', skill: 'HTML' },
    { name: 'JS Dev 1', skill: 'JS' },
    { name: 'JS Dev 2', skill: 'JS' },
    { name: 'JS Dev 3', skill: 'JS' }
];

// Function to shuffle an array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Function to allocate rooms
function allocateRooms() {
    // Shuffle the developers array to make the kin room allocation random
    developers.sort(() => Math.random() - 0.5);

    // Allocate facilitators and developers to bedrooms
    const bedrooms = document.querySelectorAll('.bedroom');
    for (let i = 0; i < 3; i++) {
        const bedroom = bedrooms[i];
        const facilitator = facilitators[i];
        const developersInRoom = developers.slice(i * 3, (i + 1) * 3);

        // Add facilitator to the room
        const facilitatorListItem = document.createElement('li');
        facilitatorListItem.textContent = facilitator.name;
        bedroom.querySelector('ul').appendChild(facilitatorListItem);

        // Add developers to the room
        developersInRoom.forEach((developer) => {
            const developerListItem = document.createElement('li');
            developerListItem.textContent = `${developer.name} (${developer.skill})`;
            bedroom.querySelector('ul').appendChild(developerListItem);
        });
    }
}

// Call the allocation function
allocateRooms();