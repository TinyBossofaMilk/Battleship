import ship from "./ship"

const gameboard = () => {
    let carrier;	//5
    let battleship; //	4
    let destroyer;	//3
    let submarine;  //	3
    let patrolBoat;	//2
    const _shipsArr = [carrier, battleship, destroyer, submarine, patrolBoat];
    const grid = []; // null if nothing, false if missed, true if hit

    const initCarrier = (x, y, length, horizontal) => {
        carrier = ship(x, y, length, horizontal);
    }

    const initBattleship = (x, y, length, horizontal) => {
        battleship = ship(x, y, length, horizontal);
    }

    const initDestroyer = (x, y, length, horizontal) => {
        destroyer = ship(x, y, length, horizontal);
    }

    const initSubmarine = (x, y, length, horizontal) => {
        submarine = ship(x, y, length, horizontal);
    }

    const initPatrolBoat = (x, y, length, horizontal) => {
        patrolBoat = ship(x, y, length, horizontal);
    }

    const receiveAttack = (x,y) => {
        for(let ship of _shipsArr){
            let indexOfHit = _getIndexofHit(x, y, ship);
            if(indexOfHit){
                ship.hit(indexOfHit);
                grid[x][y] = true;
                return;
            }
        }

        grid[x][y] = false;
    };

    const _getIndexofHit = (x, y, ship) => {
        // let lengthStartIndex;
        // let altPos;
        if(ship.horizontal){
            if(y !== ship.yPos)
                return null;

            for(let i = 0; i < ship.length; i++){
                if(x === ship.xPos + i)
                    return i;
            }
            return null;
        }
        else{
            if(x !== ship.xPos)
            return null;

            for(let i = 0; i < ship.length; i++){
                if(y === ship.yPos + i)
                    return i;
            }
            return null;
        }
    };

    const init = (() => {
        for(let i = 0; i < 10; i++){
            for(let j = 0; j < 10; j++){
                grid[i][j] = null;
            }
        }
    })();

    
    const allShipsSunk = () => {
        return carrier.isSunk() && battleship.isSunk() && destroyer.isSunk() && submarine.isSunk() && patrolBoat.isSunk();
    };

   return {carrier, battleship, destroyer, submarine, patrolBoat, allShipsSunk, initCarrier, initBattleship, initDestroyer, initPatrolBoat, initSubmarine};
};

/*

Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
Gameboards should have a receiveAttack function that takes a pair of coordinates, 
    determines whether or not the attack hit a ship and then sends the ‘hit’ function to the 
    correct ship, or records the coordinates of the missed shot.
Gameboards should keep track of missed attacks so they can display them properly.
Gameboards should be able to report whether or not all of their ships have been sunk.
*/