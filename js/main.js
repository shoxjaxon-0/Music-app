let elAudio = document.querySelector("[data-audio]");
let elAudioPlay = document.querySelectorAll("[data-audio-toggle]");
let elAddBox = document.querySelector("[data-box-deezer]");
let elTemplate = document.querySelector("[data-template-music]");
let elInputSearch = document.querySelector("[data-form-search]");
const apiKey = `https://deezer.humosoft.uz/`;

searchMusic("chart");

const elSearchInput = document.querySelector("[data-input-search]");
elInputSearch.addEventListener("input", (evt) => {
  evt.preventDefault();
  searchMusic(elSearchInput.value);
});

async function searchMusic(audio) {
  const response = await fetch(`${apiKey}search?q=${audio}`);
  const result = await response.json();
  console.log(result);
  renderMusic(result);
}

function renderMusic(Music) {
  elAddBox.innerHTML = "";
  Music.data.forEach((deezer) => {
    elAddBox.appendChild(createLi(deezer));
  });
}

function createLi(deezers) {
  const card = elTemplate.content.cloneNode(true);

  card.querySelector("img").src = deezers.album.cover_xl;
  card.querySelector("[data-music-name]").textContent = deezers.album.title;
  card.querySelector("[data-audio]").src = deezers.preview;

  console.log(card);
  return card;
}

 
