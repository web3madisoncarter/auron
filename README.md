# Auron — Decentralized Staking & Governance Platform

Auron is a Web3 staking and governance platform on **Ethereum (Sepolia testnet)**. Users can deposit ETH, stake for yield, track rewards, participate in on-chain governance, and manage their portfolio — using **the wallet they already prefer**, not a single vendor lock-in.

## Vision & Goals

Auron is built around three principles:

1. **Wallet choice** — Connect with MetaMask, Rabby, Phantom, or TronLink through a unified connect flow. Users pick the tool they trust; Auron handles provider discovery, network checks, and session restore.
2. **Transparent participation** — Staking positions, protocol stats, transaction history, and governance votes are visible on-chain and in the app.
3. **Long-term alignment** — Staking, rewards tracking, and governance are designed to reward sustained participation in the ecosystem.

## Concept

| Layer | What Auron provides |
|-------|---------------------|
| **Access** | Multi-wallet connect modal (EIP-6963 / TIP-6963 discovery + direct provider routing) |
| **Assets** | Deposit ETH → receive **dETH**; stake dETH → receive **sETH** |
| **Governance** | Create proposals, vote, and execute approved changes |
| **Insights** | Portfolio, rewards, history, analytics, and leaderboard |

Smart contracts live on **Ethereum Sepolia**. Wallet extensions handle unlock, signing, and approval — the dApp only requests connection and transactions.

## Supported Wallets

| Wallet | Status | Notes |
|--------|--------|--------|
| **MetaMask** | Supported | Browser extension via EIP-6963 or `window.ethereum` |
| **Rabby** | Supported | Browser extension; isolated from MetaMask provider conflicts |
| **Phantom** | Supported | Use Phantom’s **Ethereum** account (not Solana-only mode) |
| **TronLink** | Supported | Browser extension via TIP-6963, `window.tron`, or legacy `window.tronLink`; uses `eth_requestAccounts` |

Any EIP-1193 compatible Ethereum wallet may work if installed alongside the supported options. When connecting with TronLink, approve the site and **switch to Ethereum Sepolia** when prompted so on-chain staking and governance work correctly. Auron remembers your last connected wallet for silent session restore.

## Features

- **Dashboard** — Balances, staking overview, and quick actions
- **Deposit / Withdraw** — ETH ↔ dETH
- **Stake / Unstake** — dETH ↔ sETH
- **Portfolio** — Position breakdown and protocol share
- **Rewards** — Accrued rewards tracking (on-chain rewards contract planned)
- **History** — On-chain activity via event logs
- **Analytics** — Protocol and personal allocation charts
- **Governance** — Proposals, voting, execution
- **Leaderboard** — Staker rankings
- **Theme** — Light, dark, or system appearance

## Technology Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Web3**: ethers.js, EIP-6963 / TIP-6963 multi-wallet discovery
- **Smart contracts**: Solidity (ERC-20 tokens + governance)
- **UI**: shadcn/ui, Recharts
- **Network**: Ethereum Sepolia testnet

## Smart Contracts

| Contract | Role |
|----------|------|
| **DepositETH (dETH)** | Minted when users deposit ETH |
| **StakedETH (sETH)** | Minted when users stake dETH |
| **Governance** | Proposals, voting, execution |
| **StakingDashboard** | Protocol stats and leaderboard |

## Roadmap

### Phase 1 — MVP (current)

- [x] Multi-wallet connect (MetaMask, Rabby, Phantom, TronLink)
- [x] Deposit, withdraw, stake, unstake on Sepolia
- [x] Governance UI wired to contracts
- [x] Portfolio, history, analytics, rewards tracker (UI)
- [x] Light / dark theme
- [x] Auron rebrand and product hub navigation

### Phase 2 — On-chain product completeness

- [ ] Deploy **Rewards** contract and on-chain claim flow
- [ ] Mainnet / public testnet deployment pipeline
- [ ] WalletConnect / mobile wallet support

### Phase 3 — Growth & governance maturity

- [ ] Delegation and advanced voting (quorum, timelock hardening)
- [ ] Public API / subgraph for history and analytics
- [ ] Audit and bug-bounty program
- [ ] Additional EVM chain support (evaluate per governance vote)

### Phase 4 — Ecosystem

- [ ] SDK or embeddable widgets for partners
- [ ] Treasury and incentive programs governed on-chain
- [ ] Cross-chain strategy (research; not committed)

## Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- A supported wallet: **MetaMask**, **Rabby**, **Phantom** (Ethereum enabled), or **TronLink**
- **Sepolia testnet ETH** for transactions ([Google Cloud Sepolia faucet](https://cloud.google.com/application/web3/faucet/ethereum/sepolia))

### Installation

1. Clone the repository and install dependencies:

   ```bash
   npm install
   ```

2. Start the frontend (recommended — backend folder is legacy and not required for the Web3 app):

   ```bash
   npm start
   ```

   Or use the combined script (includes legacy backend):

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000).

4. Click **Connect Wallet**, choose your wallet, approve the connection, and switch to **Sepolia** when prompted.

## Project Structure

```
auron/
├── app/                    # Next.js App Router pages
├── components/             # React UI (dashboard, governance, layout, …)
├── contracts/              # Solidity source
├── lib/                    # ABIs, contract addresses, wallet helpers
│   └── wallets.ts          # Multi-wallet discovery and routing
├── public/wallets/         # Wallet logos for connect modal
├── hooks/                  # Custom React hooks
└── backend/                # Legacy e-commerce backend (not used by Auron Web3 UI)
```

## Security Note

The `backend/` directory contains legacy server code and is **not** part of the Auron staking frontend. Do not run it in production without a full security review. The Web3 application runs client-side against Sepolia contracts.

## License

Private / project-specific — see repository owner for terms.
