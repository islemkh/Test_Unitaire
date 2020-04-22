const {dicho}= require("./rechercheDic.js")
const array=[1,2,3,4,5,6]

describe("test function Dec ", () => {

    test("l'element recherche est un entier ", () => {
        const array=[1,2,3,4,5,6]
        const valeur = 5
        expect(typeof (valeur)).toBe("number")
    });

    test("element n'existe pas ", () => {
        const array=[1,2,3]
        const valeur = 5
        expect(()=>dicho(valeur,array)).toThrow()
    });

    test("tableau d'entier ", () => {
        const array=[1,2,3,4,5,6]
        const valeur = 5
        array.forEach(element => {
            expect(typeof (element)).toBe("number")
        });
        
    });

    test("tableau vide ", () => {
        const array=[]     
        const valeur = 2
        expect(()=>dicho(valeur,array)).toThrowError(/vide/gi)
    });

    test("element trouver dans le tableau ", () => {
        const array=[1,2,3,4,5]
        const valeur = 3
        let expected = 2
        expect(dicho(valeur,array)).toBe(expected)
    });

    test(" tableau non trier ", () => {
        const array=[2,1,3,5,4]
        const valeur = 3     
        expect(()=>dicho(valeur,array)).toThrowError(/non trier/gi)
    });


});
