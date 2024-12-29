import { clusterApiUrl, Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

const main = async () => {
    try {
        const connection = new Connection(clusterApiUrl("devnet"));
        const address = new PublicKey("CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN");
        const balance = await connection.getBalance(address);
        const balanceInSol = balance / LAMPORTS_PER_SOL;
        console.log(balance, "balance");
        console.log(balanceInSol, "balance in SOL");
    } catch (err) {
        console.log(err.message);
    }
};

main();