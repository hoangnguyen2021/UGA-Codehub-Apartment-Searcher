class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }

  put(endpoint, body) {
    return this._send("put", endpoint, body);
  }

  post(endpoint, body) {
    return this._send("post", endpoint, body);
  }

  delete(endpoint, body) {
    return this._send("delete", endpoint, body);
  }

  _send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}

const minRent = document.querySelector("#min-rent");
const maxRent = document.querySelector("#max-rent");
const minBeds = document.querySelector("#min-beds");
const maxBeds = document.querySelector("#max-beds");
const form = document.querySelector("#form");
const results = document.querySelector("#results");
const airConditioning = document.querySelector("#air-conditioning");
const inUnitWasherDryer = document.querySelector("#in-unit-washer-dryer");
const washerDryer = document.querySelector("#washer-dryer-hookups");
const dishwasher = document.querySelector("#dishwasher");
const wheelchair = document.querySelector("#wheelchair-access");
const parking = document.querySelector("#parking");
const laundry = document.querySelector("#laundry-facilities");

const API = new FetchWrapper("https://api.apify.com");

function getMinBed(string) {
  const min = Number.parseInt(string);
  if (Number.isNaN(min)) {
    return 1;
  }
  return min;
}

function getMaxBed(string) {
  const max = Number.parseInt(string.substring(string.indexOf("-") + 1));
  if (Number.isNaN(max)) {
    return 1;
  }
  return max;
}

const renderResults = (data) => {
  results.innerHTML = "";
  data.forEach((item) => {
    const html = `<li>
          <h3>${item.propertyName}</h3>
          <img src="${item.photos[0]}" alt="apartment photo" width="300">
          <p>${item.location.streedAddress}, ${item.location.city}, ${item.location.state}, ${item.location.postalCode}</p>
          <p>${item.contact.phone}</p>
          <p>$${item.rent.min} - ${item.rent.max}</p>
          <p>${item.beds}</p>
        </li>`;
    results.insertAdjacentHTML("beforeend", html);
  });
};

const applyFilter = (array) => {
  return array
    .filter(
      (item) => maxRent.value >= item.rent.min && minRent.value <= item.rent.max
    )
    .filter(
      (item) =>
        maxBeds.value >= getMinBed(item.beds) &&
        minBeds.value <= getMaxBed(item.beds)
    )
    .filter(
      (item) =>
        item.amenities[0].value.includes() && item.amenities[1].value.includes()
    );
};

API.get("/v2/datasets/vBDC416fBHYtOHO8D/items?clean=true&format=json")
  .then((data) => {
    renderResults(data);
  })
  .catch((error) => {
    console.error(error);
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  API.get("/v2/datasets/vBDC416fBHYtOHO8D/items?clean=true&format=json")
    .then((data) => {
      renderResults(applyFilter(data));
    })
    .catch((error) => {
      console.error(error);
    });
});

const checkList = document.querySelector("#dropdown");
checkList.querySelector(".anchor").onclick = (event) => {
  if (checkList.classList.contains("visible"))
    checkList.classList.remove("visible");
  else checkList.classList.add("visible");
};
