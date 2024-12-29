const alphabetContainer = document.getElementById("alphabet-container");
const wordContainer = document.getElementById("word");

const alphabetWords = {
    A: "Apple",
    B: "Ball",
    C: "Cat",
    D: "Dog",
    E: "Elephant",
    F: "Fish",
    G: "Goat",
    H: "Horse",
    I: "Ice Cream",
    J: "Jug",
    K: "Kite",
    L: "Lion",
    M: "Monkey",
    N: "Nest",
    O: "Orange",
    P: "Parrot",
    Q: "Queen",
    R: "Rabbit",
    S: "Sun",
    T: "Tiger",
    U: "Umbrella",
    V: "Van",
    W: "Watch",
    X: "Xylophone",
    Y: "Yak",
    Z: "Zebra"
};

// Create audio elements for each letter
const sounds = {};
Object.keys(alphabetWords).forEach(letter => {
    const audio = new Audio(`sounds/${letter}.mp3`); // Replace with actual sound paths
    sounds[letter] = audio;
});

// Generate alphabets
Object.keys(alphabetWords).forEach(letter => {
    const div = document.createElement("div");
    div.classList.add("alphabet");
    div.textContent = letter;

    // Add click event to play sound and display word
    div.addEventListener("click", () => {
        // Play sound
        if (sounds[letter]) sounds[letter].play();

        // Display the word
        wordContainer.textContent = alphabetWords[letter];
    });

    alphabetContainer.appendChild(div);
});
