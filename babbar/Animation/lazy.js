const albums = [];

for (let i = 1; i <= 100; i++) {
  albums.push({
    albumId: i,
    id: i,
    title: `Sample title for album ${i}`,
    url: `https://via.placeholder.com/600/${Math.floor(
      Math.random() * 1000000
    ).toString(16)}`,
    thumbnailUrl: `https://via.placeholder.com/150/${Math.floor(
      Math.random() * 1000000
    ).toString(16)}`,
  });
}

//console.log(albums);

const productDiv = document.querySelector(".products");
let start = 0;
let limit = 9;

//console.log(productDiv);

const loadData = () => {
  let isLoading = false;
  if (isLoading) {
    return;
  }
  isLoading = true;
  let actualData = albums.slice(start, limit);
  let newDiv = "";
  actualData.forEach((item) => {
    newDiv += `<div class="card">
          <img src="${item.thumbnailUrl}" alt="${item.title}" />
          <p>${item.title}</p>
        </div>`;
  });
  isLoading = false;
  productDiv.innerHTML += newDiv;
  if (limit > albums.length) {
    isLoading = true;
  }
  start += 9;
  limit += 9;
};
loadData();
window.addEventListener("scroll", () => {
  let bottom = productDiv.getBoundingClientRect().bottom;
  let winHeight = window.innerHeight;
  console.log(bottom);
  console.log(winHeight);
  if (bottom < winHeight) {
    loadData();
  }
});
