const { pageObject } = require('./shared')

export const bookingPage = {
    getFirstNanme: () => pageObject('input[data-testid="first-name"]'),
    getLastNanme: () => pageObject('input[data-testid="last-name"]'),
    getEmail: () => pageObject('input[data-testid="email"]'),
    getPhone: () => pageObject('input[data-testid="phone"]'),
    getLicensePlateNumber: () => pageObject('input[data-testid="lpn"]'),
    getVehicleSizeSelect: () => cy.get('select[data-testid="vehicle-size"]'),
    getContinueButton: () => cy.get('[data-testid="continue"]')


}

