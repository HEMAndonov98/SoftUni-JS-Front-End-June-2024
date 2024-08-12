function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = document.getElementsByTagName('textarea')[0].value;
      const restaurants = [];

      // function to get workers from string as objects
      const getWorkers = function (workerArgs) {
         let result = [];

         for (const singleWorker of workerArgs) {
            // Worker arguments extracted from array arguments
            const [workerName, workerSalary] = singleWorker.split(' ');

            // Worker object creation
            const newWorker = {
               name: workerName,
               salary: Number(workerSalary),
            }
            result.push(newWorker);
         }
         return result;
      }
      const getTotalSalary = (workers) => workers.reduce((acc, curr) => acc + curr.salary, 0);

      // Safe conversion array literal string into an array
      const pattern = /\".*?\"/g;
      const inputArr = input.match(pattern);

      // Iteration through every element in Array
      for (const singleRestaurant of inputArr) {
         // Extraction of array arguments
         const restaurantArgs = singleRestaurant.replace('\"', '').split(' - ');
         const newRestaurantName = restaurantArgs[0];
         const newRestaurantWorkers = restaurantArgs[1].replace('\"', '').split(', ');

         if (restaurants.hasOwnProperty(newRestaurantName)) {
            restaurants[newRestaurantName].workers.push(...getWorkers(newRestaurantWorkers));
         } else {
            const newRestaurant = {
               name: newRestaurantName,
               workers: [],
            }
            newRestaurant.workers.push(...getWorkers(newRestaurantWorkers));
            // Adding restaurants as objects in array Assocative Array
            restaurants[newRestaurantName] = newRestaurant;
         }


         // Calculate average salary and get the best salary in the workforce
         const totalWorkerSalary = getTotalSalary(restaurants[newRestaurantName].workers);
         restaurants[newRestaurantName]['averageSalary'] = (totalWorkerSalary / restaurants[newRestaurantName].workers.length);

         restaurants[newRestaurantName]["bestSalary"] = restaurants[newRestaurantName].workers.toSorted((a, b) => b.salary - a.salary)[0].salary;
      }

      // get the best restaurant
      const bestRestaurant = Object.values(restaurants).sort((a, b) => b.averageSalary - a.averageSalary)[0];

      // Select output dom elements and append data
      const restaurantElement = document.querySelector('#bestRestaurant>p');
      const workersElement = document.querySelector('#workers>p')

      restaurantElement.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      let workersOutputString = '';

      for (const worker of bestRestaurant.workers) {
         workersOutputString = workersOutputString.concat(` Name: ${worker.name} With Salary: ${worker.salary}`);
      }

      workersElement.textContent = workersOutputString.trim();
   }
}