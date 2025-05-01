# Testing Principles

## Principles of Testing

Testing is a crucial part of the development process for Berry Swap to ensure reliability, functionality, and user satisfaction. For this project, I focused on implementing manual testing, while understanding the principles of both manual and automated approaches.

### Automated Testing

Automated testing involves using software tools to execute pre-scripted tests on the application before releasing it to production.

#### Key Principles of Automated Testing:

1. **Consistency and Repeatability**: Automated tests perform the same operations each time they run, eliminating human error and ensuring consistent test execution.

2. **Efficiency and Speed**: Automated tests can run quickly and repeatedly, making them ideal for regression testing when code changes are made.

3. **Coverage Optimization**: Well-designed automated tests can cover a large portion of the codebase, testing multiple features simultaneously.

4. **Early Bug Detection**: Continuous integration with automated testing helps identify issues early in the development cycle when they are less costly to fix.

5. **Regression Prevention**: Automated tests ensure that new code changes don't break existing functionality.

#### When to Deploy Automated Testing:

- **Unit Testing**: For testing individual functions and methods in isolation
- **API Testing**: For verifying endpoints and data exchanges
- **Integration Testing**: When checking how different components work together
- **Regression Testing**: After code changes to ensure existing features still work
- **Performance Testing**: For load testing and stress testing the application
- **Repetitive Tasks**: For tests that need to be run frequently

### Manual Testing

Manual testing involves human testers who execute test cases without the aid of automation tools, exploring the application as a real user would.

#### Key Principles of Manual Testing:

1. **Exploratory Testing**: Testers can discover issues that might not be caught by pre-defined automated tests by exploring the application.

2. **User Experience Evaluation**: Human testers can assess subjective aspects like visual appeal, usability, and overall user experience.

3. **Ad-hoc Testing**: Allows for on-the-spot investigation of potential issues without formal test cases.

4. **Real-world Scenarios**: Manual testers can simulate real user behavior and edge cases that might be difficult to automate.

5. **Accessibility Testing**: Human judgment is often needed to evaluate compliance with accessibility standards.

#### When to Deploy Manual Testing:

- **Usability Testing**: Evaluating how intuitive the interface is
- **Exploratory Testing**: Finding unexpected bugs or edge cases
- **Visual Verification**: Ensuring UI elements appear correctly
- **Complex Test Scenarios**: Testing workflows that are difficult to automate
- **One-time Tests**: For features that change frequently or won't need repeated testing
- **Acceptance Testing**: Final verification before release

## Testing Approach for Berry Swap

For Berry Swap, I implemented a thorough manual testing approach:

### Manual Tests Performed:

- **Functionality Testing**: Verified all currency conversion functions worked accurately
- **UI Testing**: Checked that all UI elements rendered correctly across different screen sizes
- **Usability Testing**: Ensured the currency selection dropdowns and input fields were user-friendly
- **Visual Verification**: Confirmed proper display of exchange rates and conversion results
- **Cross-browser Testing**: Tested functionality on Chrome, Firefox, Safari, and Edge
- **Responsive Design Testing**: Verified proper adaptation to various screen sizes (mobile, tablet, desktop)
- **Dark/Light Mode Testing**: Verified the toggle functionality worked correctly
- **Edge Case Testing**: Tested with extreme currency values and different input types

### Manual Testing Process:

1. Created a test plan with specific test cases
2. Executed each test case and documented results
3. Identified and logged any bugs or issues
4. Retested after bug fixes were implemented
5. Performed final validation testing before deployment

## Testing Results

My manual testing approach has resulted in:
- Identification and resolution of several UI and functionality issues
- Improved user experience based on testing feedback
- Verified compatibility across major browsers and devices


## Future Testing Considerations

While manual testing was sufficient for the current scope of Berry Swap, as the project grows, implementing automated testing would be beneficial for:
- Regression testing when adding new features
- Performance testing under different load conditions
- Continuous integration to catch issues early

## Manual Testing Table for BerrySwap

This table outlines **manual test cases** following the **GIVEN-WHEN-THEN** approach.

| **#** | **GIVEN (Precondition)** | **WHEN (Action/Event)** | **OBSERVABLE CONSEQUENCES (Expected Outcome)** |
|---|---|---|---|
| 1 | The user is on the homepage | They click on the currency drop down menu | The drop down interface appears, allowing token selection |
| 2 | The user has selected USD as the "From" token and ETH as the "To" token | They enter a valid amount to swap | The estimated ETH amount is displayed |
| 3 | The user connects a wallet successfully | They refresh the page | The wallet remains connected |
| 4 | The user enters an invalid swap amount (e.g., letters or symbols) | They try to proceed with the buy | The keyboard does not allow putting anything else but numbers |
| 5 | The user enables dark mode | They check the toggle | Dark mode is enabled |
| 6 | The user clicks on the Buy Modal while the dark mode is on | They try to read the content | Dark mode is enabled but   |
| 7 | The user enables dark mode | They check the toggle | Dark mode is enabled |

**Screenshot of a failed test 6**

![Failed test 6](../../images/test1.png)

**Fixed - test 6**

![Failed test 7](../../images/test3.png)

**Screenshot of a failed test 7**

![Failed test 7](../../images/test2.png)

**Fixed - test 7**

![Failed test 7](../../images/test4.png)