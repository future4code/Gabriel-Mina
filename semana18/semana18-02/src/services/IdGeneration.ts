import {v4} from 'uuid'

export function generationId():string{
    return v4();
}