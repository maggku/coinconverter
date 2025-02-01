## Manual Testing Table for BerrySwap

This table outlines **manual test cases** following the **GIVEN-WHEN-THEN** approach.

| **#** | **GIVEN (Precondition)** | **WHEN (Action/Event)** | **OBSERVABLE CONSEQUENCES (Expected Outcome)** |
|---|---|---|---|
| 1 | The user is on the homepage | They click on the "Swap" button | The swap interface appears, allowing token selection |
| 2 | The user has selected BTC as the "From" token and ETH as the "To" token | They enter a valid amount to swap | The estimated ETH amount is displayed |
| 3 | The user tries to swap without connecting a wallet | They click "Confirm Swap" | An error message appears prompting them to connect a wallet |
| 4 | The user connects a wallet successfully | They refresh the page | The wallet remains connected |
| 5 | The user enters an invalid swap amount (e.g., letters or symbols) | They try to proceed with the swap | An error message appears indicating an invalid input |
| 6 | The user has insufficient balance for a swap | They click "Confirm Swap" | An error appears indicating insufficient funds |
| 7 | The user tries swapping when the network is congested | They confirm the transaction | The swap takes longer or fails with a timeout error |
| 8 | The user enables dark mode in settings | They navigate to another page | Dark mode remains enabled |
| 9 | The user accesses the site on mobile | They open the swap interface | The UI is responsive and all elements are accessible |
| 10 | The user submits feedback via the contact form | They click "Submit" | A confirmation message appears |

