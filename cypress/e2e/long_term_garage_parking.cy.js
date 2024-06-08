const utils = require('./utils');

describe('Long term garage parking', () => {
    it('should be able to book and pay for long term garage parking based on time', () => {
        const parkingType = 'LongTermGarage';
        const entryDate = '2024-06-14', entryTime = '14:00', exitDate = '2024-06-25', exitTime = '18:00', totalAmount = '128.00'
        // Step 1: Visit the parking cost calculator page
        utils.visitWebPark();

        // Step 2: Select "Long Term Garage Parking"
        utils.selectParkingType(parkingType);

        // Step 3: Enter invalid entry and exit date and time then continue and verify
        utils.inputInvalidParkingDateAndTimeThenVerify();

        // Step 4: Enter valid entry and exit date and time then continue and verify
        utils.inputValidParkingDateAndTimeThenVerify(entryDate, entryTime, exitDate, exitTime, totalAmount);
        utils.clickBookNowButton();

        // Step 5: Enter booking details with invalid input
        utils.inputInvalidBookingInformationThenVerify();

        // Step 6: Enter booking details with valid input
        utils.inputValidBookingInformationThenVerify();

        //Step7: Enter payment details with invalid input
        utils.inputInvalidCardInformationThenVerify();

        //Step8: Enter payment details with valid input
        utils.inputValidCardInformationThenVerify();

        //Step9: Verify the confirmation details 
        utils.verifyConfirmation(parkingType, `${entryDate} ${entryTime}`, `${exitDate} ${exitTime}`, totalAmount);

    });
});
