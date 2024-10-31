for (let i = 1; i <= 50; i++) {
    // Check if the number is odd
    if (i % 2 !== 0) {
        continue; // Skip this iteration if the number is odd
    }

    console.log(i); // Log the even number

    // Break the loop if the number is 100
    if (i === 50) {
        break;
    }
}
