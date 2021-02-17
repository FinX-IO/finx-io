---
title: Fees
tags: protocol-overview, documentation
---

## Liquidity provider fees

FINX provides access to Uniswap V2 Swap Pools which have a **0.3%** fee for swapping tokens. **This fee is split by liquidity providers proportional to their contribution to liquidity reserves.**

Swapping fees are immediately deposited into liquidity reserves. This increases the value of liquidity tokens, functioning as a payout to all liquidity providers proportional to their share of the pool. Fees are collected by burning liquidity tokens to remove a proportional share of the underlying reserves.

Since fees are added to liquidity pools, the invariant increases at the end of every trade. Within a single transaction, the invariant represents `token0_pool / token1_pool` at the end of the previous transaction.

Our approach to Liquidity Provider rewards is here: [Liquidity Provider Rewards](/docs/v2/advanced-topics/liquidity-providder-rewards/).

## Protocol Fees

At the moment there are no protocol fees for access to Uniswap V2 pools. We reserve the right to implement a protocol fee 
of up to 0.05% to purchase insurance against pools for the protection of the ecosystem, if required.

More information about a potential future protocol fee can be found [here](https://uniswap.org/blog/#path-to-sustainability).

## Protocol Charge Calculation

In the future, it is possible that a protocol-wide charge of 0.05% per swap will take effect on top of Uniswap V2 pool fees. 
This represents ⅙th (16.6̅%) of the current Uniswap V2 0.30% fee. The fee is in effect if 
<Link to='/docs/v2/smart-contracts/factory/#feeto'>feeTo</Link> is not `address(0)` (`0x0000000000000000000000000000000000000000`), 
indicating that feeTo is the recipient of the charge.

This amount would not affect the fee paid by Borrowers, but would affect the amount received 
by liquidity providers.

Rather than calculating this charge on swaps, which would significantly increase gas 
costs for all users, the charge would instead be calculated when liquidity is added or 
removed.
