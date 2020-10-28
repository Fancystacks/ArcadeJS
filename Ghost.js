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
       
   }
}