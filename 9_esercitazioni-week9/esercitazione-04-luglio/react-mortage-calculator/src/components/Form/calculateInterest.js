export function calculateInterest(P, N, annual_r) {
	// Convert annual interest rate to monthly rate
	let r = annual_r / (12 * 100);

	// Calculate number of payments
	let n = N * 12;

	// Initialize variables to accumulate interest
	let totalInterest = 0;
	let monthlyInterest = [];

	// Calculate monthly interest and accumulate total interest
	let remainingPrincipal = P;
	for (let i = 0; i < n; i++) {
		let interest = remainingPrincipal * r;
		monthlyInterest.push(interest);
		totalInterest += interest;
		remainingPrincipal -= calculateMonthlyPayment(P, N, annual_r) - interest;
	}

	// Round values for clarity
	totalInterest = Math.round(totalInterest * 100) / 100;

	return {
		monthly: monthlyInterest,
		total: totalInterest,
	};
}

// Example usage:
// Using the same mortgageAmount, mortgageTerm, and annualInterestRate as in Function 1

// Calculate monthly interest and total interest paid over the term
// let result2 = calculateInterestComponents(mortgageAmount, mortgageTerm, annualInterestRate);
// console.log("Monthly Interest (first 5 months):", result2.monthlyInterest.slice(0, 5));
// console.log("Total Interest Paid:", result2.totalInterest);
