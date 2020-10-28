import { DIRECTIONS, OBJECT_TYPE } from './setup';

export function randomMovement(position, direction, objectExists) {
    let dir = direction;
    let nextMovePosition = position + dir.movement;
    // array from the direction object keys
    const keys = Object.keys(DIRECTIONS);
}