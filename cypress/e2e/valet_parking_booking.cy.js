describe('Valet Parking Booking', () => {
  it('should successfully book valet parking', () => {
    // Step 1: Visit the parking cost calculator page
    cy.visit('https://practice.expandtesting.com/webpark');

    // Step 2: Select "Valet Parking"
    cy.get('#parkingLot').select('Valet');

    // Step 3: Enter entry and exit date and time
    cy.get('input[placeholder="Entry Date"]').type('2024-06-15');
    cy.get('input[placeholder="Entry Time"]').type('15:30');
    cy.get('input[placeholder="Exit Date"]').type('2024-06-15');
    cy.get('input[placeholder="Exit Time"]').type('21:45');

    // Step 4: Calculate cost
    cy.contains('Calculate Cost').click();

    // Verify calculated cost
    cy.contains('18.00€').should('be.visible');

    // Step 5: Enter booking details
    cy.contains('Book Now!').click();
    cy.get('input[data-testid="first-name"]').type('John');
    cy.get('input[data-testid="last-name"]').type('Smith');
    cy.get('input[data-testid="email"]').type('j.smith@email.com');
    cy.get('input[data-testid="phone"]').type('0123456789');
    cy.get('select[data-testid="vehicle-size"]').select('medium');
    cy.get('input[data-testid="lpn"]').type('ABC123');

    // Step 6: Enter payment details
    cy.contains('Continue').click();
    cy.get('input[data-testid="card-number"]').type('5200828282828223');
    cy.get('input[data-testid="expiration-date"]').type('0425'); // Use a valid future date
    cy.get('input[data-testid="security-code"]').type('123');

    // Step 7: Confirm booking
    cy.contains('Complete Reservation').click();

    // Verify booking summary
    cy.contains('Valet').should('be.visible');
    cy.contains('2024-06-15 15:30').should('be.visible');
    cy.contains('2024-06-15 21:45').should('be.visible');
    cy.contains('18.00€').should('be.visible');
  });
});
