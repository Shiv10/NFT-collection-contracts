const main = async () => {

    const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    let txn = await nftContract.mintNFT("#000", "#fff", {value: hre.ethers.utils.parseEther('100')});
    await txn.wait();
    
    console.log("Contract deployed to address: ", nftContract.address);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (e) {
        console.log(e);
        process.exit(1);
    }
}

runMain();