// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const PartyKarts = await hre.ethers.getContractFactory("PartyKarts");
  const partyKarts = await PartyKarts.deploy(
    "PartyKartsRaceContract",
    "PartyKartsRaceContract",
    "0xA5E60D30daa7225F5140F7601E08f57325465255", //token address
    "0x4158cC33e78541Cf21aEB08B3a9FD062fdF0C686",
    100,
    "0x4158cC33e78541Cf21aEB08B3a9FD062fdF0C686"
  );

  await partyKarts.deployed();

  console.log(
    `Deployed new contract to ${partyKarts.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
