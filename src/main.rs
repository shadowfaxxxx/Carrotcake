use web3::types::{Address, U256};
use web3::{transports, Web3};

#[tokio::main]
async fn main() -> web3::Result<()> {
    let transport = transports::Http::new("https://sepolia-rpc.kakarot.org")?;
    let web3 = Web3::new(transport);
    let accounts = web3.eth().accounts().await?;

    println!("Accounts: {:?}", accounts);

    Ok(())
}

