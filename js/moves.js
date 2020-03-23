// Module for moves and their helper methods

function moveRight() {

    let currentObject = getCurrentObject();
    let legal = true;

    for(let i = 0; i < currentObject.position.length; i++ ){
        legal &= (currentObject.position[i][1] < 4 )
    }

    for (let i = 0; i < currentObject.position.length; i++){
        let X = currentObject.position[i][0]
        let Y = currentObject.position[i][1]
        legal &= !( playground[X][Y + 1] !== undefined && !isArrayInArray( currentObject.position, [X , Y + 1] ) )
    }

    currentObject.position.forEach(position => (legal && (position[1] += 1)))
    playground = createPlayground()

    renderPlayground()
}

function moveLeft() {

    let currentObject = getCurrentObject();
    let legal = true;

    for(let i = 0; i < currentObject.position.length; i++ ){
        legal &= (currentObject.position[i][1] !== 0)
    }

    for (let i = 0; i < currentObject.position.length; i++){
        let X = currentObject.position[i][0]
        let Y = currentObject.position[i][1]
        legal &= !( playground[X][Y - 1] !== undefined && !isArrayInArray( currentObject.position, [X , Y - 1] ) )
    }

    currentObject.position.forEach(position => (legal && (position[1] -= 1)))
    playground = createPlayground();

    renderPlayground()
}

function moveDown() {

    if ( checkBottom() ){

        for (let i = 0; i < 10; i++) {
            destroyLast(i)
        }

        createObj()
        return 0
    }

    let currentObject = getCurrentObject();

    currentObject.position.forEach(position => (position[0] > 0 && (position[0] -= 1)))
    playground = createPlayground();
    renderPlayground()
}

function pauseGame() {
    clearInterval(gameInterval);
}