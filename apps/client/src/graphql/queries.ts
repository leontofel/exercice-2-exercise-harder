export const TotalDonationsQuery = `
        query Query {
        findTotal
        }
    `;

export const DonationsQuery = `
  query Query($ordersBy: OrderDonationDto!) {
    findAllSorted(ordersBy: $ordersBy) {
      count,
      id,
      displayName,
      createdAt,
      message,
      team
    }
  }
`;

