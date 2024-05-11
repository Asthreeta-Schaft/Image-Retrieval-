
// Pop Up Menu
window.addEventListener("load", function(){
    this.setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
});

document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});

// Define image arrays for different animals
   const catImages = [
    "IMAGES/CATS/CAT1.jpeg",
    "IMAGES/CATS/CAT2.jpg",
    "IMAGES/CATS/CAT3.jpeg",
    "IMAGES/CATS/CAT4.jpg",
    "IMAGES/CATS/CAT5.jpg"
];

const dogImages = [
    "IMAGES/DOGS/DOG1.jpg",
    "IMAGES/DOGS/DOG2.jpg",
    "IMAGES/DOGS/DOG3.jpg",
    "IMAGES/DOGS/DOG4.jpg",
    "IMAGES/DOGS/DOG5.jpeg"
];

const manImages = [
    "IMAGES/MAN/MAN1.jpeg",
    "IMAGES/MAN/MAN2.jpg",
    "IMAGES/MAN/MAN3.jpg",
    "IMAGES/MAN/MAN4.jpg",
    "IMAGES/MAN/MAN5.jpg"
];

const womanImages = [
    "IMAGES/WOMAN/WOMAN1.jpg",
    "IMAGES/WOMAN/WOMAN2.jpg",
    "IMAGES/WOMAN/WOMAN3.jpg",
    "IMAGES/WOMAN/WOMAN4.jpg",
    "IMAGES/WOMAN/WOMAN5.jpeg"
];

const bikeImages = [
    "IMAGES/BIKES/BIKES1.jpg",
    "IMAGES/BIKES/BIKES2.jpg",
    "IMAGES/BIKES/BIKES3.jpg",
    "IMAGES/BIKES/BIKES4.jpg",
    "IMAGES/BIKES/BIKES5.jpg"
];

const carImages = [
    "IMAGES/CARS/CARS1.jpg",
    "IMAGES/CARS/CARS2.jpg",
    "IMAGES/CARS/CARS3.jpg",
    "IMAGES/CARS/CARS4.jpg",
    "IMAGES/CARS/CARS5.jpg"
];

const flagImages = [
    "IMAGES/FLAGS/FLAG1.jpeg",
    "IMAGES/FLAGS/FLAG2.jpeg",
    "IMAGES/FLAGS/FLAG3.jpg",
    "IMAGES/FLAGS/FLAG4.jpg",
    "IMAGES/FLAGS/FLAG5.jpg"
];

const mountainImages = [
    "IMAGES/MOUNTAINS/MOUNTAINS1.jpg",
    "IMAGES/MOUNTAINS/MOUNTAINS2.jpg",
    "IMAGES/MOUNTAINS/MOUNTAINS3.jpeg",
    "IMAGES/MOUNTAINS/MOUNTAINS4.jpg",
    "IMAGES/MOUNTAINS/MOUNTAINS5.jpeg"
];

// Function to display images based on user input
function displayImages() {
    const userInput = document.getElementById("animalInput").value.toLowerCase();
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ""; 
    
    // Clear previous images

    let imagesToShow = [];

    switch (userInput) {
        case "cat":
            imagesToShow = catImages;
            break;
        case "dog":
            imagesToShow = dogImages;
            break;
        case "man":
            imagesToShow = manImages;
            break;
        case "woman":
            imagesToShow = womanImages;
            break;
        case "bike":
            imagesToShow = bikeImages;
            break;
        case "car":
            imagesToShow = carImages;
            break;
        case "flag":
            imagesToShow = flagImages;
            break;
        case "mountain":
            imagesToShow = mountainImages;
            break;

        default:
            alert("Invalid Input");
            return;
    }

    imagesToShow.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imageContainer.appendChild(imgElement);
    });
}

