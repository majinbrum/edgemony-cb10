import { calculateRepayments } from "./calculateRepayments.js";

export function calculateInterests(P, N, annual_r) {
	// Calculate monthly payment
	let M = calculateRepayments(P, N, annual_r).monthly;

	// Convert annual interest rate to monthly rate
	let r = annual_r / (12 * 100);

	// Calculate number of payments
	let n = N * 12;

	// Initialize variable to accumulate total interest
	let totalInterest = 0;

	// Calculate total interest over the term
	let remainingPrincipal = P;
	for (let i = 0; i < n; i++) {
		let interest = remainingPrincipal * r;
		totalInterest += interest;
		remainingPrincipal -= M - interest;
	}

	// Calculate average monthly interest
	let averageMonthlyInterest = totalInterest / n;

	// Round average monthly interest to two decimal places
	averageMonthlyInterest = Math.round(averageMonthlyInterest * 100) / 100;

	// Round total interest for clarity
	totalInterest = Math.round(totalInterest * 100) / 100;

	return {
		monthly: averageMonthlyInterest,
		total: totalInterest,
	};
}

// Example usage:
// let mortgageAmount = 200000; // Mortgage amount in dollars
// let mortgageTerm = 30; // Mortgage term in years
// let annualInterestRate = 4.5; // Annual interest rate in percent

// Calculate average monthly interest
// let averageMonthlyInterest = calculateInterests(mortgageAmount, mortgageTerm, annualInterestRate);
// console.log("Average Monthly Interest:", averageMonthlyInterest);

// Example usage:
// Using the same mortgageAmount, mortgageTerm, and annualInterestRate as in Function 1

// Calculate monthly interest and total interest paid over the term
// let result2 = calculateInterestComponents(mortgageAmount, mortgageTerm, annualInterestRate);
// console.log("Monthly Interest (first 5 months):", result2.monthlyInterest.slice(0, 5));
// console.log("Total Interest Paid:", result2.totalInterest);
