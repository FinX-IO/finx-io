---
title: Smart contracts
tags: protocol-overview, documentation
---

FINX is a binary smart contract system that extends the functionalisty of Uniswap V2 and Aave V2 contracts.

FINX smart contracts are stored in [FINX Uniswap](https://github.com/FinX-IO/finx-uniswap-v2-core) 
and [FINX Aave](https://github.com/FinX-IO/finx-aave-protocol-v2)

# Core

The FINX Core consists of a singleton [factory](#factory) and [pools](#pools), which the factory is responsible for creating 
and indexing. 

We attempt to have small surface areas wherever possible to save gas costs.

## Factory

<Link to='/docs/v2/smart-contracts/factory'>Reference documentation</Link>

The factory holds the generic bytecode responsible for powering pairs. Its primary job is to create a smart contract 
for a debt obligation. It also contains logic to turn on the protocol charge.

## Pools

The following are links to the underlying Pool design of Uniswap V2. FINX extends Uniswap V2 and industry standard 
protocols. The links below describe the underlying protocols:

<Link to='/docs/v2/smart-contracts/pool'>Pool Reference documentation</Link>
<br />
<Link to='/docs/v2/smart-contracts/pair'>Pair Reference documentation</Link>
<br />
<Link to='/docs/v2/smart-contracts/pair-erc-20'>Token Reference documentation (ERC-20)</Link>

# Periphery

[Source code](https://github.com/finx/finx-uniswap-v2-periphery)

FINX extends the Uniswap V2 periphery as an example of domain-specific interactions with the core. 
We leverage Uniswap's permissionless nature.
