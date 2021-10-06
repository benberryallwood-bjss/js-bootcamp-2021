export const getCourierByKey = (key) => {
  let courierDetails = {};

  switch (key) {
    case "DHL":
      courierDetails.name = "DHL;";
      courierDetails.address = {
        street: "1st DHL St",
      };
      break;
    case "Hermes":
      courierDetails.name = "Hermes;";
      courierDetails.address = {
        street: "1st Hermes St",
      };
      break;
  }

  return courierDetails;
};
