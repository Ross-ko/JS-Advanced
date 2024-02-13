function tickets(data, howToSort) {
  let result = [];

  class Ticket {
    destination;
    price;
    status;

    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }

  for (let ticketInfo of data) {
    let [destination, price, status] = ticketInfo.split("|");
    const newTicket = new Ticket(destination, price, status);
    result.push(newTicket);
  }

  return result.sort((a, b) =>
    howToSort == "price"
      ? a[howToSort] - b[howToSort]
      : a[howToSort].localeCompare(b[howToSort])
  );
}

tickets(
  [
    "Philadelphia|94.20|available",
    "New York City|95.99|available",
    "New York City|95.99|sold",
    "Boston|126.20|departed",
  ],
  "destination"
);
