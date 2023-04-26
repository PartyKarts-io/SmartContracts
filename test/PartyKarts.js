const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("PartyKarts", function () {
  let partyKarts;
  let owner;
  let addr1;
  let addr2;
  let addrs;

  beforeEach(async function () {
    [owner, addr1, addr2, ...addrs] = await ethers.getSigners();

    const PartyKarts = await ethers.getContractFactory("PartyKarts");
    partyKarts = await PartyKarts.deploy(
      "PartyKarts",
      "PK",
      owner.address,
      100,
      owner.address
    );
    await partyKarts.deployed();
  });

  describe("createRaceLobby", function () {
    it("should create a new race lobby with correct parameters", async function () {
      const raceId = "myRace";
      const entryFee = 100;
      const trackName = "Test Track";
      const maxRacers = 4;
      const isVisible = true;
      const isOpen = true;

      await partyKarts.createRaceLobby(
        entryFee,
        raceId,
        trackName,
        maxRacers,
        isVisible,
        isOpen,
        { value: entryFee }
      );

      const raceLobby = await partyKarts.raceLobbies(raceId);
      expect(raceLobby.entryFee).to.equal(entryFee);
      expect(raceLobby.creator).to.equal(owner.address);
      expect(raceLobby.trackName).to.equal(trackName);
      expect(raceLobby.maxRacers).to.equal(maxRacers);
      expect(raceLobby.isVisible).to.equal(isVisible);
      expect(raceLobby.isOpen).to.equal(isOpen);
    });

    it("should not allow creation of race with same ID", async function () {
      const raceId = "myRace";
      const entryFee = 100;
      const trackName = "Test Track";
      const maxRacers = 4;
      const isVisible = true;
      const isOpen = true;

      await partyKarts.createRaceLobby(
        entryFee,
        raceId,
        trackName,
        maxRacers,
        isVisible,
        isOpen,
        { value: entryFee }
      );

      await expect(
        partyKarts.createRaceLobby(
          entryFee,
          raceId,
          trackName,
          maxRacers,
          isVisible,
          isOpen,
          { value: entryFee }
        )
      ).to.be.revertedWith("Race with this ID already exists!");
    });
  });
});

