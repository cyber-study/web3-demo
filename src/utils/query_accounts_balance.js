

export default async function query_accounts_balance(web3) {
  const accounts = await web3.eth.getAccounts();
  const query_task = accounts.map(async (account_address) => {
    const balance = await web3.eth.getBalance(account_address);
    return { account_address, balance };
  });
  const query_balance_result = await Promise.all(query_task);
  console.log(query_balance_result);
};