import { validateCharacter } from "../src"

describe("validando personagens", () => {

    test("função com um personagem com o nome vazio", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(false);
    });

    test("função com um personagem com vida igual a zero", () => {
        const result = validateCharacter({
            name: "Scorpions",
            life: 0,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(false);
    });

    test("função com um personagem com a força igual a zero.", () => {
        const result = validateCharacter({
            name: "Scorpions",
            life: 300,
            strength: 0,
            defense: 500,
        });
        expect(result).toBe(false)
    });

    test("função com um personagem com a defesa igual a zero.", () => {
        const result = validateCharacter({
            name: "Scorpions",
            life: 300,
            strength: 300,
            defense: 0,
        });
        expect(result).toBe(false)
    });


    test("função com um personagem com a vida ou a força ou a defesa com um valor negativo", () => {
        const result = validateCharacter({
            name: "",
            life: -1,
            strength: -1,
            defense: -1,
        });
        expect(result).toBe(false);
    });

    test("função com um personagem com as informações validas", () => {
        const result = validateCharacter({
            name: "Scorpion",
            life: 1500,
            strength: 300,
            defense: 500
        });
        expect(result).toBe(true);
    });

    
    
})