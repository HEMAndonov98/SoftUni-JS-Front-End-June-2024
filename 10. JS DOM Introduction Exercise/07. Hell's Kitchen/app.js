function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = document.getElementsByTagName('textarea')[0].value;
      const restaurants = [];

      // Safe conversion array literal string into an array
      const pattern = /\".*?\"/g;
      const inputArr = input.match(pattern);

      // Iteration through every element in Array
      for (const singleRestaurant of inputArr) {
         // Extraction of array arguments
         const restaurantArgs = singleRestaurant.replace('\"', '').split(' - ');
         const newRestaurantName = restaurantArgs[0];
         const newRestaurantWorkers = restaurantArgs[1].replace('\"', '').split(', ');

         const newRestaurant = {
            name: newRestaurantName,
            workers: [],
         }

         for (const singleWorker of newRestaurantWorkers) {
            // Worker arguments extracted from array arguments
            const [workerName, workerSalary] = singleWorker.split(' ');

            // Worker object creation
            const newWorker = {
               name: workerName,
               salary: Number(workerSalary),
            }

            newRestaurant.workers.push(newWorker);
         }
         // Calculate average salary and get the best salary in the workforce
         const totalWorkerSalary = newRestaurant.workers.reduce((acc, curr) => acc + curr.salary, 0);
         newRestaurant['averageSalary'] = (totalWorkerSalary / newRestaurant.workers.length);

         newRestaurant["bestSalary"] = newRestaurant.workers.toSorted((a, b) => b.salary - a.salary)[0].salary;

         // Adding restaurants as objects in array Assocative Array
         restaurants[`${newRestaurantName}`] = newRestaurant;
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