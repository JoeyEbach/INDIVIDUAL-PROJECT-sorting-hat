const users = [
{
  id: 1,
  name: "Johnny",
  house: "Ravenclaw",
  mvArmy: false,
},
{
  id: 2,
  name: "Greg",
  house: "Hufflepuff",
  mvArmy: false,
},
{
  id: 3,
  name: "Dylan",
  house: "Gryffindor",
  mvArmy: false,
},
{
  id: 4,
  name: "Joey",
  house: "Slytherin",
  mvArmy: true,
}
];

const pic = () => {
  users.forEach(user => {
  if (user.house === "Ravenclaw") {
    user.imgUrl = "https://cdn.shopify.com/s/files/1/1541/8579/files/Ravenclaw-harry_potter_large.jpg?v=1491539507"
} else if (user.house === "Hufflepuff") {
    user.imgUrl = "https://cdn.shopify.com/s/files/1/1541/8579/files/Hufflepuff-harry_potter_large.JPG?v=1491538917"
  } else if (user.house === "Gryffindor") {
    user.imgUrl = "https://m.media-amazon.com/images/I/71qheAe+f6L.jpg"
  } else {
    user.imgUrl = "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/88362/91127/Harry-Potter-Slytherin-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__31920.1507640618.jpg?c=2"
  }
});
};

const renderToDom = (divId, html) => {
  const targetId = document.querySelector(divId);
  targetId.innerHTML = html;
};

const buttonsOnDom = () => {
  let domString = "";
  domString += `
  <button type="button" class="btn btn-secondary" id="all">All Houses</button>
  <button type="button" class="btn btn-secondary" id="gryff">Gryffindor</button>
  <button type="button" class="btn btn-secondary" id="huff">Hufflepuff</button>
  <button type="button" class="btn btn-secondary" id="raven">Ravenclaw</button>
  <button type="button" class="btn btn-secondary" id="slyth">Slytherin</button>
  `
  renderToDom("#button-container", domString);
};

const cardsOnDom = (array) => {
  let domString = "";
  pic();

  for (const user of array) {
    domString += `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
        <img src="${user.imgUrl}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text">${user.house}</p>
          </div>
            <button type="button" id="expel--${user.id}">Expel</button>
        </div>
      </div>
    </div>`
  };
  return domString;
};

const cardsFilter = (array) => {
  const mvArmy = array.filter(user => user.mvArmy);
  const house = array.filter(user => !user.mvArmy);

  renderToDom("#houses", cardsOnDom(house));
  renderToDom("#mv-army", cardsOnDom(mvArmy));

};

const formOnDom = () => {
  let domString = "";
  domString += `
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" id="show-form" data-bs-toggle="modal" data-bs-target="#addUser">
    Put On The Sorting Hat
    </button>
    <!-- Modal -->
    <div class="modal fade" id="addUser" tabindex="-1" aria-labelledby="addUser" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="userForm">
              <div class="mb-3">
                  <label for="name" class="form-label">Student:</label>
                  <input type="text" class="form-control" id="name" aria-describedby="emailHelp">
              </div> 
              <div class="modal-footer" id="buttons">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Submit</button>
              </div> 
            </form>  
          </div> 
        </div>
      </div>
    </div>
  `
  renderToDom("#form-container", domString);
};

const houseFilter = (house) => {
  const houseFil = users.filter(user => user.house === house);
  cardsFilter(houseFil);
};

const newUser = () => {

  const house = ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"];
  const random = Math.floor(Math.random() * house.length);

  const userObj = {
    id: users.length + 1,
    name: document.querySelector("#name").value,
    house: house[random],
    mvArmy: false, 
  };

  users.push(userObj);
  cardsFilter(users);
};

const eventListeners = () => {
  const formModal = new bootstrap.Modal(document.querySelector("#addUser"));
  const buttonContainer = document.querySelector("#button-container");
  const form = document.querySelector("form");
  const cards = document.querySelector("#houses");
  const expel = document.querySelector("#expel");

  buttonContainer.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "raven":
        houseFilter("Ravenclaw")
        break;
      case "huff":
        houseFilter("Hufflepuff")
        break;
      case "gryff":
        houseFilter("Gryffindor")
        break;
      case "slyth":
        houseFilter("Slytherin")
        break;
      default: 
        cardsFilter(users);
    };  
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    newUser();
    formModal.hide();
    form.reset();
  });

  cards.addEventListener("click", (e) => {

    if (e.target.id.includes("expel")) {
       const [, id] = e.target.id.split("--");
       const index = users.findIndex(user => user.id === Number(id));
       users[index].mvArmy = true;
   }
   cardsFilter(users);
  });
};

const startApp = () => {
formOnDom();
buttonsOnDom();
cardsFilter(users);
eventListeners();
};

startApp();
