// The Video Game You Never Wanted

// Game class will hold all game information
// save file will consist of encoded bits to then be decoded to load the game
// Please see if encoded bits can be added as a 'cookie' onto the user's browser
//    --> OR give a code that one can copy and paste to return

// it's probably not a game you'd need to save tbh


class Game {

    save_file = "" // will hold bits in encoded doc as cookie on PC as a string
    state = false
    playerName = ""

    //save the game into save_file data

    //checks the state, if false, can't save anything
    SaveGame (data) {
        if ((this.state === false) || (!data)) {
            console.error("Can't do that, homie...")
            return false;
        } else {
            try {
                this.save_file = data; // data needs to be formatted as a string
                console.log('It worked!')
                return true;
            } catch (e) {
                console.error(e, "fuckin oops, save didn't work???");
                return false;
            }
        }
    }

}

// create a new game

// below game_init operates potentially creating a new canvas
// this project doesn't need a new canvas to operate.
// kept here for syntax and reference!


// let game_init = {
//     canvas : document.createElement("canvas"),
//     create : function() {
//             this.canvas.width = 500;
//             this.canvas.height = 350;
//             this.context = this.canvas.getContext("2d")
//             document.body.append(this.canvas, document.body.childNodes[0])
//     }
//
// }

let storyHandler = {
    intro : function(object) {
    }

}

let eventHandler = (buttons, canvas, player) => {
        alert("We made it!")
}

let main = () => {
    $(document).ready(function() {
        let newGame = new Game();
        if (newGame.state === false) {
            newGame.state = true;
        }

        const menuButtons = {
            left: document.createElement('button'),
            middle: document.createElement('button'),
            right:  document.createElement('button')
        }

        const canvas = document.getElementById('window')

        eventHandler(menuButtons, canvas, newGame);

    })

}

main();