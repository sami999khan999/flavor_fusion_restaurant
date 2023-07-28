// // Inport and Export

// // In JavaScript, "import" and "export" are statements used to work with modules, which allow you to organize your code into separate files and share functionalities, variables, or classes across different parts of your application. //

//============================================================================================================================================//

// // Exporting from a module: To export functionalities, variables, or classes from a module, you use the "export" keyword. //

// // Importing a module: To use the functionalities, variables, or classes exported from a module, you use the "import" statement. //

//============================================================================================================================================//

// // Named export

// // Named exports in JavaScript allow you to export multiple functionalities, variables, or classes from a module with specific names. This way, you can import and use them individually in other files. //

// // Default export

// // In JavaScript, a default export allows you to export a single value from a module as the default export. Unlike named exports, there can be only one default export per module. When you import from a module with a default export, you can choose any name you like for the imported value. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

import { burgers } from "./date.js";

const burgerWrapper = document.querySelector(".burger-card-wrapper");

class App {
  constructor() {
    this._getBurgersData();
  }

  _getBurgersData() {
    burgers.forEach((burger) => this._renderBurgers(burger));
  }

  _currencyConverter(amount) {
    return amount.toLocaleString("bn-BD", {
      style: "currency",
      currency: "BDT",
    });
  }

  _renderBurgers(burger) {
    const html = `
              <div
            class="burger-card overflow-hidden w-96 h-96 bg-white rounded-lg shadow-md"
          >
            <div
              class="burger-img h-48 overflow-hidden flex justify-center items-center"
            >
              <img
                src="${burger.img}"
                alt="${burger.title}"
                class="block w-full"
              />
            </div>
            <div class="burger-text p-5 flex flex-col items-start gap-2">
              <h2 class="text-2xl font-semibold">${burger.title}</h2>
              <p class="text-xl font-semibold text-orange-500">${this._currencyConverter(
                burger.price
              )}</p>
              <button ${(onclick = this._orderHandeler.bind(this))}
                class="bg-orange-500 text-white py-2 px-4 rounded-md font-semibold uppercase mt-2 hover:bg-gray-700 duration-300"
              >
                Order Now
              </button>
            </div>
          </div>
    `;

    burgerWrapper.insertAdjacentHTML("afterbegin", html);
  }

  _orderHandeler() {
    console.log("clicked");
  }
}

const myApp = new App();
