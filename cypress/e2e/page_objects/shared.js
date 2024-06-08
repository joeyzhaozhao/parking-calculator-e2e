export function pageObject(locate) {
    const pageObject = cy.get(locate);
    return {
        clear: () => pageObject.clear(),
        input: (input) => pageObject.type(input)
    }
}