import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const main = async () => {
    try {
        const pbk = "sLY4jYdXicCMdCxA2r4bUEq1j9fVcrd1LYshdVYpsBu";
        const connection = new Connection(clusterApiUrl("mainnet-beta"))
        const address = new PublicKey(pbk);
        const balanceInLamports = await connection.getBalance(address);
        const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;
        console.log(balanceInSol, "balance");
    } catch (err) {
        console.log(err.message);
    }
};

main();