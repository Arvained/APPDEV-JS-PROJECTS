/*randomize pokemon type*/
const type = ['psychic', 'fire', 'water', 'electric', 'grass'];
const btnRandomizer = document.getElementById("randomizer");

btnRandomizer.addEventListener("click", () => {
    const randomTypeIndex = getRandomNumber();
    const websiteLink = type[randomTypeIndex] + '.html';
    window.location.href = websiteLink;
});

function getRandomNumber() {
    return Math.floor(Math.random() * type.length);
}