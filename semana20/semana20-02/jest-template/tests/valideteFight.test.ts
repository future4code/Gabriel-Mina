import { Character, performAttack } from "../src"

describe("validação de luta", () => {

    test('Should perform attack', () => {
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Character = {
            name: 'Scorpion',
            life: 1300,
            strength: 800,
            defense: 400
        };

        const defender: Character = {
            name: 'Subzero',
            life: 1500,
            strength: 500,
            defense: 500
        };

        performAttack(attacker, defender, validatorMock as any);
        expect(defender.life).toEqual(1200);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });
});

test('Should return invalid character error', () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
        return false;
    });

    const attacker: Character = {
        name: '',
        life: 1300,
        strength: 800,
        defense: 400
    };

    const defender: Character = {
        name: 'Subzero',
        life: 1500,
        strength: 500,
        defense: 500
    };

    try {
        performAttack(attacker, defender, validatorMock as any);
    } catch (err) {
        expect(err.message).toBe('Invalid character');
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(1);
        expect(validatorMock).toHaveReturnedTimes(1);
    }
});


