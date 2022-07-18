/*// get built-in modules
const path = require('path');

// get local modules
const localModule = require('./locaModule');


import {appLang(), letsPlay()} from './say.js';

appLang('English'); // Johnny, English!
letsPlay('Carrom'); // Let's Play, Carrom!

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});
*/
const ship = require('./ship');


describe('ship functions', () => {
  let carrier;
  beforeEach(()=> {
    carrier = ship(3, 6, 5);
  })
  
  test('hit function doesnt give false positives', () => {
    expect(carrier.isSunk()).toBe(false);
  });
  
  test('hit function doesnt give false negatives', () => {
    carrier.hit(0);
    carrier.hit(1);
    carrier.hit(2);
    carrier.hit(3);
    expect(carrier.isSunk()).toBe(false);
  });

  test('hit function works', () => {
    carrier.hit(0);
    carrier.hit(1);
    carrier.hit(2);
    carrier.hit(3);
    carrier.hit(4);
    expect(carrier.isSunk()).toBe(true);
  });
});
/*
31 lines (30 sloc)  856 Bytes

import Ship from '../factories/shipFactory';

describe('ship functions', () => {
	// assign variables to avoid beforeEach scoping issues
	let testCarrier;
	let testSubmarine;
	beforeEach(() => {
		testCarrier = new Ship('carrier', [0, 1, 2, 3, 4]);
		testSubmarine = new Ship('submarine', [12, 13, 14]);
	});
	it('accepts a hit', () => {
		testCarrier.hit(0);
		expect(testCarrier.hits).toEqual([0]);
	});
	it('accepts multiple hits', () => {
		testSubmarine.hit(12);
		testSubmarine.hit(13);
		expect(testSubmarine.hits).toEqual([12, 13]);
	});
	it('shows that the boat is not sunk', () => {
		testCarrier.hit(0);
		testCarrier.hit(1);
		expect(testCarrier.isSunk()).toBe(false);
	});
	it('shows that a boat is sunk', () => {
		testSubmarine.hit(12);
		testSubmarine.hit(13);
		testSubmarine.hit(14);
		expect(testSubmarine.isSunk()).toBe(true);
	});
});
////////////////////////////////
import Ship from '../Ship'

describe('Ship', () => {
  let ship: Ship

  beforeEach(() => {
    ship = new Ship(3)
  })

  test('creates and initializes a ship', () => {
    expect(ship).toEqual({ length: 3, hits: [] })
  })

  test('takes a hit', () => {
    ship.hit(2)
    expect(ship.hits).toContain(2)
  })

  test('sinks', () => {
    ship.hit(0)
    ship.hit(1)
    ship.hit(2)
    expect(ship.isSunk()).toBe(true)
  })

  test('prevents being hit multiple times at the same spot', () => {
    ship.hit(1)
    ship.hit(1)
    ship.hit(1)
    expect(ship.hits.length).toBe(1)
  })
})
*/