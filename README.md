# Parking Calculator and Booking Application - End-to-End Tests

This repository contains end-to-end tests for the Parking Calculator and Booking application using Cypress. The tests cover various scenarios to ensure the application functions correctly,including form submissions, button clicks, and validation messages.

## Prerequisites

Before running the tests, ensure you have the following installed on your machine:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/joeyzhaozhao/parking-calculator-e2e.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd parking-calculator-e2e
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```

## Running Tests

### Running Tests in the Cypress Test Runner

To open the Cypress Test Runner and run tests interactively:

```bash
npx cypress open
```

This command will launch the Cypress Test Runner, where you can select and run individual tests.

### Running Tests in Headless Mode

To run all tests in headless mode (useful for CI/CD pipelines):

```bash
npx cypress run
```

## Test Structure

The tests are organized as follows:

- `cypress/e2e`: Contains all the end to end test files.
- `cypress/fixtures`: Contains test data (if any).
- `cypress/support`: Contains custom commands and support utilities.

## Example Test Scenarios

### 1. User able to book and pay for valet parking
### 2. User able to book and pay for short term parking
### 3. User able to book and pay for long term garage parking



