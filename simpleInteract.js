const Web3 = require('web3');

// Setting up the Web3 provider
const web3 = new Web3('https://sepolia-rpc.kakarot.org');

// The contract address obtained after deployment
const contractAddress = '0x46575d1CBE5da9A76CED2eaaF94B1Db7f49FC63f';

// ABI of your contract including only the name function
const contractABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [{"name": "", "type": "string"}],
    "type": "function"
  }
];

// Creating a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Function to get the name of the token
async function getTokenName() {
    const name = await contract.methods.name().call();
    console.log(`The name of the token is: ${name}`);
}

// Call the function
getTokenName();

