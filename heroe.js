async function populate() {
    const requestUrl = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestUrl);
    const response = await fetch(request);
    const superHeroes = await response.json();

    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}

function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement('h1');
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);

    const para = document.createElement('p');
    para.textContent = `Hometown:${obj.homeTown} // Formed:${obj.formed} `;
    header.appendChild(para);

}

function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;

}

populate();