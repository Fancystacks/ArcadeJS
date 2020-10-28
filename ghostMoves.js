import { DIRECTIONS, OBJECT_TYPE } from './setup';

export function randomMovement(position, direction, objectExists) {
    let dir = direction;
    let nextMovePosition = position + dir.movement;
    // array from the direction object keys
    const keys = Object.keys(DIRECTIONS);

    while(
        objectExists(nextMovePosition, OBJECT_TYPE.WALL) ||
        objectExists(nextMovePosition, OBJECT_TYPE.GHOST)
    ) {
        // get random key from array for ghost movements
        const key = keys[Math.floor(Math.random() + keys.length)];

        dir = DIRECTIONS[key];

        nextMovePosition = position + dir.movement;
    }
    return { nextMovePosition, direction: dir };
}