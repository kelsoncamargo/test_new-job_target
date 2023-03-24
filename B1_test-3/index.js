const dailySales = {
    "01": 1000,
    "02": 1500,
    "03": 800,
    "04": 1200,
    "05": 0,
    "06": 500,
    "07": 2000,
    "08": 700,
    "09": 1100,
    "10": 900,
    "11": 1300,
    "12": 1800,
    "13": 0,
    "14": 1000,
    "15": 2000,
    "16": 1500,
    "17": 700,
    "18": 900,
    "19": 800,
    "20": 1000,
    "21": 1200,
    "22": 1500,
    "23": 1700,
    "24": 1900,
    "25": 1000,
    "26": 800,
    "27": 1300,
    "28": 1700,
    "29": 0,
    "30": 1200,
    "31": 1500
  };


  function calculateSalesStatistics(sales) {
    const daysWithSales = Object.values(sales).filter(value => value !== 0);
    const salesSum = daysWithSales.reduce((acc, value) => acc + value, 0);
    const salesAverage = salesSum / daysWithSales.length;
  
    const lowestSales = Math.min(...Object.values(sales));
    const highestSales = Math.max(...Object.values(sales));
  
    const daysAboveAverage = Object.values(sales).reduce((acc, value) => {
      if (value > salesAverage) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);
  
    return {
      lowestSales,
      highestSales,
      daysAboveAverage
    };
  }
  
  const salesStatistics = calculateSalesStatistics(dailySales);
  console.log(`Lowest daily sales: ${salesStatistics.lowestSales}`);
  console.log(`Highest daily sales: ${salesStatistics.highestSales}`);
  console.log(`Number of days with sales above average: ${salesStatistics.daysAboveAverage}`);
  