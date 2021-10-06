import { getCourierByKey } from "./courier-utils.js";
import { getCustomerById } from "./customer-utils.js";
// curly braces around getCourierByKey if export default not used
// not required if we say export default function...

const transactionDetails = {
  courier: "DHL",
  product: { name: "Jeans", price: 23.99 },
  customerId: 1,
};

const customer = getCustomerById(transactionDetails.customerId);

console.log(customer);

const courierAddress = getCourierByKey(transactionDetails.courier);

console.log(courierAddress);
