---
id: Solution
title: Solution
sidebar_label: Solution
slug: /solution
---

## Our Solution

Berkeley Compute is a network of pool operators and GPU owners, whose resources can be rented by customers through a real time marketplace. At a high level, pool operators can crowdsource capital by minting GPU NFTs and selling them to people who want to own and monetize GPUs, but who don't want to handle the high technical complexity of running GPU clusters. GPU NFT owners earn Berkeley Compute tokens as a reward whenever GPUs in the operator's resource pool are used. This enables smooth earnings for these owners. Customers can use the marketplace to reserve spot, on-demand or long term rental contracts as time slot NFTs. Arbitrageurs and aggregators can buy these longer term contracts, such as a cluster for 12 months, at discounted rates to on demand options, then cut them up and sell them in smaller time slices or offer their own serverless inferencing endpoint APIs to their own customers.

### Pool operators

Pool operators are a central player in the Berkeley Compute ecosystem. Anyone can be a pool operator. Operators have a unique ID, represented as an NFT. All the GPUs in their pool are associated with this operator, linking the quality of the resource to this operator. Great operators benefit from better reputation. Pool operators will typically operate in one of three modes. The first is self-pooling, in which the operator manages their own GPUs and grows their resource pool. The second is a single source pool, in which a data center operator manages all the GPUs in their pool in a single datacenter, and sells GPU NFTs to GPU owners to crowdsource ownership of the GPUs in their pool. The third is a distributed pool, in which the operator permits a distributed network of operators to band together into one pool. The distributed pool can add or kick members out based on their performance, reliability and uptime.

### Pooling protocol

Pool operators and GPU owners benefit from a key innovation: Berkeley Compute's pooling protocol. It is modeled after Chia Network's pooling protocol. Operators can create pools of the same GPU, set pricing and offer access through our marketplace. When a customer rents a GPU from this pool and payment is made, the protocol pay the operator, all the GPUs in the pool, and an additional reward for the specific GPU used. Pool operators can specify the share of rewards so owners know upfront before joining a pool. A pool protocol solves problems we observe in existing crowdsourced GPU networks: operators typically run at less than 100% utilization and have to "pick winners" in the GPUs, in which some GPU owners get paid and others do not, even when the resource is identical; GPU owners prefer smooth, continuous earnings rather than periodic earnings and no earnings when their GPU is not booked.

### GPU NFTs

GPUs in Berkeley Compute are real world assets (RWAs). They are represented on-chain as NFTs, acting as a digital twin of the physical GPU. Tokenizing GPUs brings several benefits. First, it ties an on-chain asset with on-chain cash flows, with customer rentals of the GPU generating Berkeley Compute token rewards paid directly to the wallet of the NFT holder. Secondly, it enables pool operators to crowdsource the capital across the entire crypto ecosystem, unlocking the ability for anyone to own a revenue-generating piece of Berkeley Compute. Thirdly, it creates a new investment asset with provable, transparent cash flows and contractual ownership that can be traded on secondary markets.

### Marketplace

Berkeley Compute is building a marketplace to connect customers who want to rent compute with the operators who provide them. Operators compete against each other and set pricing for the GPUs, typically in a cost per hour rental and for longer term rentals. Customers can buy spot instances, which are the least expensive, but in which they can be kicked off if long term rental is booked on that GPUs. They can also pay a little more for on-demand access, with the same pay-as-you-go model as spot instances, but with the protection of not being kicked off. They can also reserve a time based instance by purchasing a time slot NFT, which can be used by the customer, transferred to someone else, or sold in the marketplace at whatever price the time slot NFT holder wishes to charge.

### Payments

Berkeley Compute uses a similar model to Helium's burn-mint-equilibrium (BME). In this model, customers buy Berkeley Compute tokens and burn them to mint Data Credits (DCs), which is a stablecoin pegged to the USD, and which are used to pay for resources on the Berkeley Compute network. DCs have the customer benefit of no price volatility, ensuring that the cost of buying compute does not fluctuate wildly for customers if the Berkeley Compute token changes in price. DCs are burned when spent on compute resources. At set time intervals, called epochs, all the data credits burned are tallied, and new Berkeley Compute tokens are minted as rewards and paid out to pool operators based on the percentage of DCs consumed by their GPUs during that epoch. We expect that crypto native customers will buy Berkeley Compute tokens directly and burn them for DCs. We also expect that Web2 customers will prefer to use a payment processor to pay in fiat to obviate the crypto complexity away from their experience.
