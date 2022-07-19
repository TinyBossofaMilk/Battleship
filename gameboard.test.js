// import gameboard from "./gameboard"
const gam = require("./gameboard")

describe('gameboard functions', () => {
    let gb;
    // let carrier = ship(0, 4, 2, true);	//5
    // let battleship; //	4
    // let destroyer;	//3
    // let submarine;  //	3
    // let patrolBoat;	//2 

    beforeEach(()=> {
        gb = gameboard();
        gb.initCarrier(0,0, 5, true);
        gb.initBattleship(0, 1, 4, true);
        gb.initDestroyer(0, 2, 3, true);
        gb.initSubmarine(0, 3, 3, true);
        gb.initPatrolBoat(0, 4, 2, true);
    });

    
    test('asdlkf;klj', () => {
        return true;
    });
});