const { pageObject } = require('./shared')

export const parkingPage = {
    getEntryDate: () => pageObject('input[placeholder="Entry Date"]'),
    getEntryTime: () => pageObject('input[placeholder="Entry Time"]'),
    getExitDate: () => pageObject('input[placeholder="Exit Date"]'),
    getExitTime: () => pageObject('input[placeholder="Exit Time"]'),
    getCalculateCostButton: () => cy.get('[data-testid="calculate-cost"]'),
    getBookNowButton: () => cy.get('[data-testid="reserve-online"]')
}

