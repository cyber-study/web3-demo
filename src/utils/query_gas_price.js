


export default async function query_gas_price(web3) {
  const gasPrice = await web3.eth.getGasPrice();
  console.log("gasPrice", gasPrice);
};
