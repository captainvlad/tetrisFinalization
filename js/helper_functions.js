var getCurrentObject =  () => objects.find(object => object.state === 'falling');
var createPlayground = () => (new Array(10).fill().map( el => (new Array(5).fill())));

function randomChoice(initPos) {
    // decides random possible horizontal dispersion (Bonus 9)
    var res = []

    for (let k = 0; k < 11; k++) {
        var valid = true
        let samples = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
        initPos.forEach(pos => valid &= ( (pos[1] + samples[k]) >= 0 && (pos[1] + samples[k]) <= 4 ))
        if (valid){
            res.push(samples[k])
        }
    }
    return res[ Math.ceil(Math.random() * 1000) % res.length ]

}

function createObj() {
    // Creates random object with random rotation (Task 2, Bonus 8)
    const obj = ["L", "T", "I", "LL", "LLL", "LLLL", "II", "TT", "TTT", "TTTT"][Math.ceil(Math.random() * 1000) % 10];

    const initPos = JSON.parse(JSON.stringify(INITIAL_POSITIONS[obj]));
    const change = randomChoice(initPos);

    initPos.forEach(pos => pos[1] += change )


    for (let i = 0; i < initPos.length; i++){
        if (playground[initPos[i][0]][initPos[i][1]] !== undefined){
            pauseGame()
            console.log("Game Over!")
            break
        }
    }

        const neww = {type: obj, state: 'falling', position: initPos};
    objects.push(neww)
    renderPlayground()
}

function checkBottom() {
    //Checks if block is placed on another one (Task 1)
    let stop = false;
    let currentObject = getCurrentObject();

    for (let i = 0; i < currentObject.position.length; i++){
        let X = currentObject.position[i][0] - 1;
        let Y = currentObject.position[i][1];

        stop |= X === - 1 || (!isArrayInArray(currentObject.position, [X, Y]) && playground[X][Y] !== undefined)
    }

    if (stop) {
        currentObject.state = 'static'
    }

    renderPlayground()
    return stop
}

function isArrayInArray(arr, item){
    // Include method better version
    const item_as_string = JSON.stringify(item);

    const contains = arr.some(function (ele) {
        return JSON.stringify(ele) === item_as_string;
    });

    return contains;
}