// Problem 2
// Task: Implement a datasource connector to abstract away data retrieval and manipulation from the `ViewControllers`.
// Your solution shall use only [Vanilla JavaScript](http://vanilla-js.com).

class Datasource {

  constructor() {}

  // Sub-task #1: Return a Promise which retrieves the prices data from json format
  // which contains the array of prices
  const fetchPrices = async(url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch(error) {
        console.log(error);
      }
    }
    //
    fetchPrices("https://static.ngnrs.io/test/prices")
      .then(data => data['data']['prices'].map(entry => new Price(entry.buy, entry.sell, entry.pair)));
}

class Price {
  constructor(buy, sell, pair) {
    this.buy = buy;
    this.sell = sell;
    this.pair = pair;
  }
  // Sub-task #2: Create a mid function where it returns the middle of buy / sell price
  mid() {
    return (this.buy + this.sell) / 200;
  }
  // Sub-task #3: Create a quote() function where it returns either SGD or USD currency
  quote() {
    return this.pair.substring(this.pair.length-3, this.pair.length);
  }

}
