---
id: Tokenomics
title: Tokenomics
sidebar_label: Tokenomics
slug: /tokenomics
---

## Tokenomics

### Summary
Berkeley Compute’s token is a payment method, network reward and governance token. It uses a burn-mint-equilibrium (BME) model, similar to Helium’s HNT.

### Burn Mint Equilibrium
The BME model uses Berkeley Compute token as a payment method to rent compute on the network, while also eliminating the volatility of the token, which unchecked would cause the price of compute to fluctuate. In summary, customers or payment processors must purchase the token on an exchange, then send it to a smart contract to burn the token. The smart contract uses a price oracle to confirm the current token price to USD, and mints a Data Credit Token for the customer, pegged to the USD at $0.00001 per data credit. Customer then use DCs to rent a GPU. The DCs are burned for each time interval it rented, typically per-minute. At the end of a given time period, called an epoch, all the data credits burned by each GPU are tallied, and the GPUs earn rewards in Berkeley Compute tokens on a pro rata basis. If one GPU consumed 1% of the DCs in that epoch, it earns 1% of the reward tokens in that epoch.

Berkeley Compute will have a 7-year, annualized emissions schedule, out of which each epoch will distribute a fixed number of reward tokens. The schedule will be published closer to our token generation event, and will favor early adopters to incentive supply side growth.

### Token allocations
Berkeley Compute will adopt commonly used token allocations, and will publish this allocation model prior to its next financing event, TGE and mainnet launch. In general, it will have allocations for:

- Premine at TGE
- Team and advisors
- Investors
- Foundation
- Block rewards

### GPU NFTs
GPUs are represented on chain as a GPU NFT, acting as a digital twin of the physical GPU. The NFT includes: metadata URLs to a hosting agreement with the datacenter operator hosting the GPU, if applicable; metadata defining the hardware, its serial number, date of purchase and in-service launch date; metadata URL to contract stipulating that the bearer of the NFT owns the GPU. Token rewards earned by the GPU in the BME model are paid to the wallet which has custody of the NFT. As such, the historical cash flows of the GPU can be tracked on chain and follow it even when the NFT is transferred between wallets or sold on secondary markets. This historical view and NFT metadata can be used by buyers when evaluating acquiring the GPU NFT in a secondary market transaction.

### Time slot NFTs
Each GPU can be rented in a pay-as-you-go model, either as a spot purchase or on-demand purchase. They can also be rented for specific periods of time. In any of these cases, the customer is buying a time slot NFT that grants access to the GPU as long as the customer custodies the time slot NFT in their wallet, and has sufficient DCs to pay for access. The time slot NFT can also be fractionalized, enabling a customer to purchase a long term rental, such as six months, which will typically be less expensive than a shorter term or on-demand slot. The customer can cut the NFT into smaller pieces, use what it requires, then sell back the remaining pieces of the time slot NFT in the marketplace. The also enables aggregators to buy long term time slot NFTs at wholesale rates, then sell it to its own customers at retail prices. We believe this will also enable a commodities market to emerge for compute, in which customers can hedge against price volatility due to supply or demand shocks.