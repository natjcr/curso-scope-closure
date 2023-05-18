/* function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(5); */

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`)
    }
    return countCoins;
}
const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxCam = moneyBox();
moneyBoxCam(10);
moneyBoxCam(20);
moneyBoxCam(5);

//EJEMPLO
export function createPetList() {
    const petList = [];
    return function addPet(myPet) {
      if (myPet) {
        petList.push(myPet);
      }
      return petList;
    }
  }