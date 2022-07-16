import ship from "./ship"

const gameboard = (carrier, battleship, destroyer, submarine, patrolBoat) => {
    let carrier;	//5
    let battleship; //	4
    let destroyer;	//3
    let submarine;  //	3
    let patrolBoat;	//2
    
    const grid = [];

    const missedAttacks = [];
    const receiveAttack = (x,y) => {

    };

    const init = () => {
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                grid[i][j] = null;
            }
        }
    }

    
    const allShipsSunk = () => {
        return carrier.isSunk() && battleship.isSunk() && destroyer.isSunk() && submarine.isSunk() && patrolBoat.isSunk();
    };

   return {carrier, battleship, destroyer, submarine, patrolBoat, allShipsSunk};
};

/*

Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
Gameboards should have a receiveAttack function that takes a pair of coordinates, 
    determines whether or not the attack hit a ship and then sends the ‘hit’ function to the 
    correct ship, or records the coordinates of the missed shot.
Gameboards should keep track of missed attacks so they can display them properly.
Gameboards should be able to report whether or not all of their ships have been sunk.
*/