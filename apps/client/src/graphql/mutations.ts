const CreateDonation = `
  mutation CreateDonation($dto: CreateDonationDto!) {
    createDonation(dto: $dto) {
        count
        createdAt
        id
  }
}
`;

export default CreateDonation;