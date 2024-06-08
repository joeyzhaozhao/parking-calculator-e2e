const { pageObject } = require('./shared')

export const paymentPage = {
    getCardNumber: () => pageObject('input[data-testid="card-number"]'),
    getExpirationDate: () => pageObject('input[data-testid="expiration-date"]'),
    getSecurityCode: () => pageObject('input[data-testid="security-code"]'),
    getCompleteReservationButton: () => cy.get('[data-testid="complete-reservation"]')

}


