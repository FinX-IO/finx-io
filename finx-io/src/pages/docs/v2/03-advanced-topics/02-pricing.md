---
title: Token Prices
tags: swaps, documentation
---

# How are Token Prices quoted?

As we learned in [Protocol Overview](/docs/v2/protocol-overview), each pair on Uniswap is actually underpinned by a liquidity pool. Liquidity pools are smart contracts that hold balances of two unique tokens and enforces rules around depositing and withdrawing them. The primary rule is the [constant product formula](/docs/v2/protocol-overview/glossary#constant-product-formula). When a token is withdrawn (bought), a proportional amount must be deposited (sold) to maintain the constant. The ratio of tokens in the pool, in combination with the constant product formula, ultimately determine the price that a swap executes at.

# Where does FINX get Token Prices?

FINX calls prices using Uniswap V2 periphery contracts. 
