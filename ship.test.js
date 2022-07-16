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

test('hit function works', () => {
    const carrier = ship(3, 6, 5);
    expect(carrier.isSunk()).toBe(false);

});