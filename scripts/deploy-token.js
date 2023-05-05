// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const PartyKartsToken = await hre.ethers.getContractFactory("PartyKartsToken");
  const paryKartsToken = await PartyKartsToken.deploy(
    "0x4158cC33e78541Cf21aEB08B3a9FD062fdF0C686", //token owner
    "TestContract", //token name
    "TEST", //token symbol
    18, //decimals
    ethers.BigNumber.from("1000000000000000000000000000000"), //total supply
    1, // max txn % of supply
    3, // max wallet size as % of supply
    "0x4158cC33e78541Cf21aEB08B3a9FD062fdF0C686", // developer / marketing wallet
  );

  await paryKartsToken.deployed();

  console.log(
    `Deployed new contract to ${paryKartsToken.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
