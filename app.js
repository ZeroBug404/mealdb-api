document.getElementById("search-btn").addEventListener("click", () => {
  const searchInput = document.getElementById("search-input");
  const searchText = searchInput.value;
  // console.log(searchText);

  if (searchText == "") {
    // console.log('not working');
  } else {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => displayFood(data.meals));
  }

  searchInput.value = "";
});

const displayFood = (food) => {
  // console.log(food);
  const saerchResults = document.getElementById("saerch-results");
  saerchResults.textContent = "";
  food.forEach((meal) => {
    // console.log(meal);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
        <div id="food-details" onclick="loadMealDetail(${
          meal.idMeal
        })" class="card h-100">
            <img width="200px" src="${
              meal.strMealThumb
            }" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
          </div>
        </div>
        `;
    saerchResults.appendChild(div);
  });
};
const loadMealDetail = (mealId) => {
  // console.log(mealId);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals));
};

const displayMealDetails = (mealDetail) => {
  // console.log(mealDetail);
  const displayDetails = document.getElementById("display-details");
  displayDetails.textContent = "";
  mealDetail.forEach((element) => {
    // console.log(element);
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
                <img src="${element.strMealThumb}" class="card-img-top mw-100" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">${element.strMeal}</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </p>
                  <a href="${element.strYoutube}" class="btn btn-primary">GO to Youtube</a>
                </div>
        `;
    displayDetails.appendChild(div);
  });
};
