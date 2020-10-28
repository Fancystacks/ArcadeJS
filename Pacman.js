import { OBJECT_TYPE, DIRECTIONS } from './setup';

class Pacman {
    constructor(speed, startPosition) {
        this.position = startPosition;
        this.speed = speed;
        this.dir = null;
        this.timer = 0;
        this.powerPill = false;
        this.rotation = true;
    }

    shouldMove() {
        if (!this.dir) return;

        if (this.timer === this.speed) {
            this.timer = 0;
            return true;
        }
        this.timer++;
    }

    getNextMove(objectExists) {
        let nextMovePosition = this.position + this.dir.movement;

        if (
            objectExists(nextMovePosition, OBJECT_TYPE.WALL) || 
            objectExists(nextMovePosition, OBJECT_TYPE.GHOSTLAIR)
        ) {
            nextMovePosition = this.position;
        }
        return { nextMovePosition, direction: this.dir };
    }

    makeMove() {
        const classesToRemove = [OBJECT_TYPE.PACMAN];
        const classesToAdd = [OBJECT_TYPE.PACMAN];

        return { classesToRemove, classesToAdd }
    }

    setNewPosition(nextMovePosition) {
        this.position = nextMovePosition;
    }

    handleKeyInput(event, objectExists) {
        let dir;

        if (event.keyCode >= 37 && event.keyCode <= 40) {
            dir = DIRECTIONS[event.key];
        } else {
            return;
        }

        const nextMovePosition = this.position + dir.movement;
        if (objectExists(nextMovePosition, OBJECT_TYPE.WALL)) return;
        this.dir = dir;
    }
}

export default Pacman;