export function calculateRepayments(P, N, annual_r) {
	// Convert annual interest rate to monthly rate
	let r = annual_r / (12 * 100);

	// Calculate number of payments
	let n = N * 12;

	// Calculate monthly payment using formula
	let M = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);

	// Calculate total amount to pay
	let totalToPay = M * n;

	// Round values for clarity
	M = Math.round(M * 100) / 100;
	totalToPay = Math.round(totalToPay * 100) / 100;

	return {
		monthly: M,
		total: totalToPay,
	};
}

// Example usage:
// let mortgageAmount = 200000; // Mortgage amount in dollars
// let mortgageTerm = 30; // Mortgage term in years
// let annualInterestRate = 4.5; // Annual interest rate in percent

// Calculate monthly repayments and total to pay over the term
// let result1 = calculateRepaymentsAndTotal(mortgageAmount, mortgageTerm, annualInterestRate);
// console.log("Monthly Payment:", result1.monthly);
// console.log("Total Amount to Pay:", result1.total);
