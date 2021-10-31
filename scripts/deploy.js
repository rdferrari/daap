// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

// Greeter deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3

// This address is what we will use in our client application to talk to the smart contract. 
// Keep this address available as we will need to use it when connecting to it from the client application.

// Ropster Greeter deployed to: 0xAcEf63D14dB053920A98661a971A16ACeD9b9564

// npx hardhat run scripts/deploy.js --network localhost
// npx hardhat run scripts/deploy.js --network ropsten


const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, World!");

  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();

  await greeter.deployed();
  await token.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Token deployed to:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
