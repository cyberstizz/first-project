//your spaceship

const UssSchwarzenegger = {
    hull: 20,
    firepower: 5,
    accuracy: .7
}

//function to generate alienship values within specified range


const randomFunc = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//one class of alienship

// class Alienship {
//     constructor(hull, firepower, accuracy) {
//         randomFunc(3, 6) = hull
//         randomFunc(2, 4) = firepower
//         randomFunc(.6, .8) = accuracy
//     }
// }

//six instances of alienships

let alienOne = {
    hull: randomFunc(3, 6),
    firepower: randomFunc(2, 4),
    accuracy: randomFunc(.6, .8)
};
let alienTwo = {
    hull: randomFunc(3, 6),
    firepower: randomFunc(2, 4),
    accuracy: randomFunc(.6, .8)
};
let alienThree = {
    hull: randomFunc(3, 6),
    firepower: randomFunc(2, 4),
    accuracy: randomFunc(.6, .8)
};
let alienFour = {
    hull: randomFunc(3, 6),
    firepower: randomFunc(2, 4),
    accuracy: randomFunc(.6, .8)
};
let alienFive = {
    hull: randomFunc(3, 6),
    firepower: randomFunc(2, 4),
    accuracy: randomFunc(.6, .8)
};
let alienSix = {
    hull: randomFunc(3, 6),
    firepower: randomFunc(2, 4),
    accuracy: randomFunc(.6, .8)
};

//array holding all alienships

let remainingShips = [alienOne, alienTwo, alienThree, alienFour, alienFive, alienSix];

// shoot function you and the aliens will use
const shoot = () => {
    return Math.random();
};

alert(`Welcome to Space Battle!These are the rules:
        Earth has been attacked by a horde of aliens!You are the captain of the USS Schwarzenegger,
        on a mission to destroy every last alien ship.Battle the aliens as you
        try to destroy them with your lasers.There are six alien ships.The aliens weakness is that they are too logical and attack one at a time: they will wai t to see the outcome of a battle before deploying another alien ship.Your strength is that you have the initiative and get to attack first.However, you do not have targeting lasers and can only attack the aliens in order.After you have destroyed a ship, you have the option to make a hasty retreat.A game round would look like this: -You attack the first alien ship - If the ship survives, it attacks you - If you survive, you attack the ship again - If it survives, it attacks you again - Etc. - If you destroy the ship, you have the option to ** attack ** the next ship or to ** retreat ** -If you retreat, the game is over, perhaps leaving the game open
        for further developments or options. - You win the game
        if you destroy all of the aliens. - You lose the game
        if you are destroyed.
        `);


// function to start game 
const game = () => {
    while ((remainingShips.length - 1) >= 0 && UssSchwarzenegger.hull >= 0) {
        //define a random ship from our ship array then ask what move you want to make

        let Currentship = remainingShips[Math.floor(Math.random() * (remainingShips.length - 1))];
        let answer = prompt('What action do you want to take? Attack or Retreat?')

        //check to see if answer entered is valid so you can either attack or retreat

        if (answer.toLowerCase() === 'attack') {
            shoot();
            // Your attack
            if (shoot() <= UssSchwarzenegger.accuracy) {
                console.log('Direct Hit');
                Currentship.hull -= UssSchwarzenegger.firepower;
            } else if (shoot() > UssSchwarzenegger.accuracy) {
                console.log('You Missed!')
            };
        } else if (answer.toLowerCase() === 'retreat') {
            console.log(`GameOver! There are ${remainingShips.length}Enemies left and you ran like a coward!`)
        }

        //Did your enemy survive the attack?
        if (Currentship.hull <= 0) {
            console.log('You have destroyed the alien Ship')
            if (remainingShips.length === 0) {
                console.log('You Win!!! You did it! You have defeated all of the ships! Earth is saved')
            }
        } else {
            console.log(`Your enemy has ${Currentship.hull}
                hull left!Oh no!INCOMING ENEMY FIRE!!!`);

            if (shoot() <= Currentship.accuracy) {
                console.log(`
                Oh No You 've been hit.... `);
                UssSchwarzenegger.hull -= Currentship.firepower;
            } else {
                console.log(`The enemy missed! you have ${UssSchwarzenegger.hull} hull left`)
            }
        }

        remainingShips.splice(remainingShips.indexOf(Currentship), 1)
        if (remainingShips.length === 0) {
            console.log(`You win!!!There are no enemy Ships left Game Over`)
        }
    }
}
game();