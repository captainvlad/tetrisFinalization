var playground = createPlayground();
start();

function start() {
  createObj()
}

function destroyLast(k){
  let destroy = true;

  for(let i = 0; i < 5; i++){
    destroy &= (playground[k][i] !== undefined)
  }

  if (!destroy){
    return true;
  }

  playground = createPlayground()

  for(let i = 0; i < objects.length; i++){

    let newPositions = []

    for (let j = 0; j < objects[i].position.length; j++) {
      if (objects[i].position[j][0] > k ) {
        newPositions.push([objects[i].position[j][0] - 1, objects[i].position[j][1]])
      }
      else if (objects[i].position[j][0] < k){
        newPositions.push([objects[i].position[j][0], objects[i].position[j][1]])
      }
    }
    objects[i].position = newPositions
  }


  renderPlayground()
  return false;
}

// function createObj() {}

// Events
// 1. move to bottom
// 2. move right
// 3. move left
// 4. pause
// 5. game over
// 6. (re)render playground

renderPlayground()

// interval 1 second
var gameInterval = setInterval(() => { moveDown();  }, 1000);