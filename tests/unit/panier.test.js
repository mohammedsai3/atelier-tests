const { total } = require('../../src/panier');

describe('total()', () => {
    test('calcule le total du panier', () => {
        // Arrange : préparer les données
        const items = [{ prix: 10, qte: 2 }, { prix: 5, qte: 1 }];

        // Act : exécuter la fonction
        const resultat = total(items);

        // Assert : vérifier le résultat
        expect(resultat).toBe(25);
    });
});