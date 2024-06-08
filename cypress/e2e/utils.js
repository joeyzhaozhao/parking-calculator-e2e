const { parkingPage } = require('./page_objects/parking_page')
const { bookingPage } = require('./page_objects/booking_page')
const { paymentPage } = require('./page_objects/payment_page')

export function visitWebPark() {
    cy.visit('https://practice.expandtesting.com/webpark');
}

export function selectParkingType(parkingType) {
    cy.get('#parkingLot').select(parkingType);
}

export function verifyInvalidDateOrTimeErrorMessage(isShow) {
    if (isShow) {
        cy.get('#resultMessage').should('contain', 'The entry date and time must be before the exit date and time!');
    } else {
        cy.get('#resultMessage').should('not.exist');
    }
}

export function inputInvalidParkingDateAndTimeThenVerify() {
    const entryDate = parkingPage.getEntryDate();
    const entryTime = parkingPage.getEntryTime();
    const exitDate = parkingPage.getExitDate();
    const exitTime = parkingPage.getExitTime();
    const calculateCostBtn = parkingPage.getCalculateCostButton();

    entryDate.clear();
    entryDate.input('2024-06-15');
    entryTime.clear();
    entryTime.input('14:00');
    exitDate.clear();
    exitDate.input('2024-06-15');
    exitTime.clear();
    exitTime.input('11:00');

    calculateCostBtn.click();

    verifyInvalidDateOrTimeErrorMessage(true);

    entryDate.clear();
    entryDate.input('2024-06-15');
    entryTime.clear();
    entryTime.input('14:00');
    exitDate.clear();
    exitDate.input('2024-06-14');
    exitTime.clear();
    exitTime.input('15:00');

    calculateCostBtn.click();

    verifyInvalidDateOrTimeErrorMessage(true);
}


export function inputValidParkingDateAndTimeThenVerify(entryDate, entryTime, exitDate, exitTime, amount) {
    const entryDateInput = parkingPage.getEntryDate();
    const entryTimeInput = parkingPage.getEntryTime();
    const exitDateInput = parkingPage.getExitDate();
    const exitTimeInput = parkingPage.getExitTime();
    const calculateCostBtn = parkingPage.getCalculateCostButton();

    entryDateInput.clear();
    entryDateInput.input(entryDate);
    entryTimeInput.clear();
    entryTimeInput.input(entryTime);
    exitDateInput.clear();
    exitDateInput.input(exitDate);
    exitTimeInput.clear();
    exitTimeInput.input(exitTime);

    calculateCostBtn.click();

    cy.contains('Calculate Cost').click();
    verifyInvalidDateOrTimeErrorMessage(false);

    cy.contains(`${amount}€`).should('be.visible');
}

export function clickBookNowButton() {
    const bookNowBtn = parkingPage.getBookNowButton();
    bookNowBtn.click();
}

export function inputInvalidBookingInformationThenVerify() {
    const firstName = bookingPage.getFirstNanme();
    const lastName = bookingPage.getLastNanme();
    const email = bookingPage.getEmail();
    const phone = bookingPage.getPhone();
    const lpn = bookingPage.getLicensePlateNumber();

    firstName.clear();
    firstName.input('jo');
    lastName.clear();
    lastName.input('Sm1th');
    email.clear();
    email.input('test');
    phone.clear();
    phone.input('2x234xc4');
    lpn.input('1234');

    clickContinueButton();
    verifyInvalidBookingInformationErrorMessage(true);

}

export function clickContinueButton() {
    const continueBtn = bookingPage.getContinueButton();
    continueBtn.click();
}

export function inputValidBookingInformationThenVerify() {
    const firstName = bookingPage.getFirstNanme();
    const lastName = bookingPage.getLastNanme();
    const email = bookingPage.getEmail();
    const phone = bookingPage.getPhone();
    const lpn = bookingPage.getLicensePlateNumber();
    const vehicleSize = bookingPage.getVehicleSizeSelect();

    firstName.clear();
    firstName.input('John');
    lastName.clear();
    lastName.input('Smith');
    email.clear();
    email.input('j.smith@email.com');
    phone.clear();
    phone.input('0123456789');
    vehicleSize.select('medium');
    lpn.input('ABC123');
    verifyInvalidBookingInformationErrorMessage(false);
    clickContinueButton();


}

export function verifyInvalidBookingInformationErrorMessage(isShow) {
    if (isShow) {
        cy.contains('A valid first name (3-20 characters) is required.').should('be.visible');
        cy.contains('A valid last name (3-20 characters) is required.').should('be.visible');
        cy.contains('A valid email address is required.').should('be.visible');
        cy.contains('A valid phone number (5-15 digits) is required.').should('be.visible');
        cy.contains('A valid car size is required.').should('be.visible');
        cy.contains('A valid LPN (5-20 characters / digits) is required.').should('be.visible');
    } else {
        cy.contains('A valid first name (3-20 characters) is required.').should('not.be.visible');
        cy.contains('A valid last name (3-20 characters) is required.').should('not.be.visible');
        cy.contains('A valid email address is required.').should('not.be.visible');
        cy.contains('A valid phone number (5-15 digits) is required.').should('not.be.visible');
        cy.contains('A valid car size is required.').should('not.be.visible');
        cy.contains('A valid LPN (5-20 characters / digits) is required.').should('not.be.visible');
    }

}

export function inputInvalidCardInformationThenVerify() {
    const cardNumber = paymentPage.getCardNumber();
    const expirationDate = paymentPage.getExpirationDate();
    const securityCode = paymentPage.getSecurityCode();
    const CompleteReservationBtn = paymentPage.getCompleteReservationButton();

    expirationDate.clear();
    expirationDate.input('test');
    securityCode.clear();
    securityCode.input('x32');
    CompleteReservationBtn.click();
    verifyInvalidCardInformationErrorMessage(true);

}


export function inputValidCardInformationThenVerify() {
    const cardNumber = paymentPage.getCardNumber();
    const expirationDate = paymentPage.getExpirationDate();
    const securityCode = paymentPage.getSecurityCode();
    const CompleteReservationBtn = paymentPage.getCompleteReservationButton();

    cardNumber.clear();
    cardNumber.input('5200828282828223'); //hard code value provided by the website for testing purpose
    expirationDate.clear();
    expirationDate.input('1127');
    securityCode.clear();
    securityCode.input('123');
    verifyInvalidCardInformationErrorMessage(false);
    CompleteReservationBtn.click();

}

export function verifyInvalidCardInformationErrorMessage(isShow) {
    // Verify system response for invalid card information
    if (isShow) {
        cy.contains('A valid card number is required.').should('be.visible');
        cy.contains('A valid expiration date is required.').should('be.visible');
        cy.contains('A valid security code is required.').should('be.visible');
    } else {
        cy.contains('A valid expiration date is required.').should('not.be.visible');
        cy.contains('A valid security code is required.').should('not.be.visible');
    }
}

export function verifyConfirmation(parkingType, checkIn, checkOut, totalAmount) {
    cy.contains(parkingType).should('be.visible');
    cy.contains(checkIn).should('be.visible');
    cy.contains(checkOut).should('be.visible');
    cy.contains(totalAmount).should('be.visible');
}