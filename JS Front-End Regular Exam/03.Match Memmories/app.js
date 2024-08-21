const baseUrl = 'http://localhost:3030/jsonstore/matches/';

const matchListE = document.getElementById('list');
const loadBtnE = document.getElementById('load-matches');
loadBtnE.addEventListener('click', loadMatches);

async function loadMatches() {
    // fetch data
    const response = await fetch(baseUrl);
    const result = await response.json();
    const matches = Object.values(result);

    // Remove current elemnt
    const currentShowingMatches = [...matchListE.children];
    currentShowingMatches.map(match => matchListE.removeChild(match));

    // append retrieved matches

    const matchElements = matches.map(match => createMatchElement(match.host, match.score, match.guest))
}

function createMatchElement(host, score, guest) {
    const pHostE = document.createElement('p');
    pHostE.textContent = host;

    const pScoreE = document.createElement('p');
    pScoreE.textContent = score;

    const pGuestE = document.createElement('p');
    pGuestE.textContent = guest;

    const divContentE = document.createElement('div');
    divContentE.classList.add('info')

    divContentE.appendChild(pHostE);
    divContentE.appendChild(pScoreE);
    divContentE.appendChild(pGuestE);


    const divBtnWrapper = document.createElement('div');
    divBtnWrapper.classList.add('btn-wrapper');

    const changeBtn = document.createElement('button');
    changeBtn.textContent = 'Change'
    changeBtn.classList.add('change-btn');

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn');

    divBtnWrapper.appendChild(changeBtn);
    divBtnWrapper.appendChild(deleteBtn);

    const listItemE = document.createElement('li');
    listItemE.classList.add('match')

    listItemE.appendChild(divContentE);
    listItemE.appendChild(divBtnWrapper);

    matchListE.appendChild(listItemE);
}