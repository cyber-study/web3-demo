

async function send_transaction(web3) {
  const accounts = await web3.eth.getAccounts();
  const last_account_address = accounts[accounts.length];
  const query_task = accounts.slice(0, accounts.length - 1).map(async (account_address) => {
    const result = await web3.eth.sendTransaction({ from: account_address, to: last_account_address, value: 100000000 });
    return result;
    // const balance = await web3.eth.getBalance(account_address);
    // return { account_address, balance };
  });
  const query_balance_result = await Promise.all(query_task);
  console.log(query_balance_result);
  await query_accounts_balance();
};