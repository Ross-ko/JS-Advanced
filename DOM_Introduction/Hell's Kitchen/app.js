function solve() {

   document.querySelector('#btnSend').addEventListener('click', onClick);
   const textAreaEl = document.querySelector("textarea");
   const bestRestaurantEl = document.querySelector("#bestRestaurant p");
   const bestRestaurantWorkersEl = document.querySelector("#workers p");

   function onClick() {

      let result = {};
      let text = JSON.parse(textAreaEl.value);

      for (let restInfo of text) {
         let [restaurant, staff] = restInfo.split(' - ');
         if (!result.hasOwnProperty(restaurant)) {
            result[restaurant] = {
               avrgSalart: 0,
               bestSalary: 0,
               staff: []
            }
         }
         let curStaff = staffFunc(staff, result[restaurant].staff);
         result[restaurant].staff = sortStaff(curStaff);
         salaryCalculator(result[restaurant]);
      }
      let topRestaurant = bestRestaurant(result);
      addBestRestaurant(topRestaurant);
      addRestaurantStaff(topRestaurant[1].staff);
   }

   function addRestaurantStaff(staffInfo) {
      let staff = "";
      staffInfo.forEach(worker => staff += `Name: ${worker.worker} With Salary: ${worker.salary} `);
      bestRestaurantWorkersEl.textContent = staff;
   }

   function addBestRestaurant(restaurantInfo) {
      bestRestaurantEl.textContent = `Name: ${restaurantInfo[0]} Average Salary: ${restaurantInfo[1].avrgSalart} Best Salary: ${restaurantInfo[1].bestSalary}`;
   }

   function bestRestaurant(restaurants) {

      return Object.entries(restaurants).sort((restA, restB) => restB[1].avrgSalart - restA[1].avrgSalart)[0];
   }

   function sortStaff(staff) {

      return staff.sort((workerA, workerB) => workerB.salary - workerA.salary);
   }

   function salaryCalculator(restaurant) {

      let sumOfSalaries = 0;
      let bestSalary = 0;
      restaurant.staff.forEach(worker => {
         sumOfSalaries += worker.salary
         if (bestSalary < worker.salary) {
            bestSalary = worker.salary
         }
      })
      restaurant.bestSalary = bestSalary.toFixed(2);
      restaurant.avrgSalart = (sumOfSalaries / restaurant.staff.length).toFixed(2);
   }

   function staffFunc(staff, curStaff) {

      let staffArr = staff.split(', ');
      for (let workerData of staffArr) {
         let [worker, salary] = workerData.split(' ');
         curStaff.push({ worker, salary: Number(salary) });
      }
      return curStaff;
   }
}