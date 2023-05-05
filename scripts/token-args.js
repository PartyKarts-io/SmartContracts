module.exports = [
    "0x4158cC33e78541Cf21aEB08B3a9FD062fdF0C686", //token owner
    "TestContract", //token name
    "TEST", //token symbol
    18, //decimals
    ethers.BigNumber.from("1000000000000000000000000000000"), //total supply
    1, // max txn % of supply
    3, // max wallet size as % of supply
    "0x4158cC33e78541Cf21aEB08B3a9FD062fdF0C686", // developer / marketing wallet
];