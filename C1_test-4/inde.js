const revenue = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Others: 19849.53,
    };
    
    // Calculates the total revenue
    const totalRevenue = Object.values(revenue).reduce((accumulator, value) => accumulator + value);
    
    // Calculates the percentage of representation of each state
    const percentages = {};
    for (const state in revenue) {
    percentages[state] = (revenue[state] / totalRevenue) * 100;
    }
    
    // Prints the results
    console.log(`Total revenue: $ ${totalRevenue.toFixed(2)}`);
    for (const state in percentages) {
    console.log(`${state}: ${percentages[state].toFixed(2)}%`);
    }