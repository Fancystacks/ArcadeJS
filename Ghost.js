import { DIRECTIONS, OBJECT_TYPE } from './setup';

class Ghost{
    constructor(speed, startPosition, movement, name) {
       this.name = name;
       this.movement = movement;
       this.startPosition = startPosition;
       this.position = startPosition;
       this.dir = DIRECTIONS.ArrowRight;
       this.speed = speed;
       this.timer = 0;
       this.isScared = false;
       this.rotation = false;
   }

   shouldMove() {
       if (this.timer === this.speed) {
           this.timer = 0;
           return true;
       }
       this.timer++;
       return false;
   }

   getNextMove(objectExists) {
       const { nextMovePosition, direction } = this.movement(
           this.position,
           this.dir,
           objectExists
       );
       return { nextMovePosition, direction }
   }

   makeMove() {
       const classesToRemove = [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, this.name];
       let classesToAdd = [OBJECT_TYPE.GHOST, this.name];

       if (this.isScared) classesToAdd = [...classesToAdd, OBJECT_TYPE.SCARED];

       return { classesToRemove, classesToAdd };
   }

   setNewPosition(nextMovePosition, direction) {
       this.position = nextMovePosition;
       this.dir = direction;
   }
}

export default Ghost;