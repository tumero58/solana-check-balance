import { clusterApiUrl, Connection, LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";

const main = async () => {
    try {
        const pbk = "DuWMG2Z8h8EvFDy3XuDZi1BtPNwRjLf4gmkqs9ZdSdSW";
        const connection = new Connection(clusterApiUrl("devnet"));
        const address = new PublicKey(pbk);
        const balanceInLamports = await connection.getBalance(address);
        const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;
        console.log(balanceInSol, "balance");
    } catch (err) {
        console.log(err.message);
    }
};

main();