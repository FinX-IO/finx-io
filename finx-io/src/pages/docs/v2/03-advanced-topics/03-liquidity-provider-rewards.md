---
title: Liquidity Provider Rewards
tags: pools, documentation
---

FINX provides a set of incentives for Liquidity Providers, Debt Service Providers  and 
Stakeholders to provide liquidity to FINX Pools.

FINX Liquidity Providers and Debt Services providers collectively serve as Decentralized Market Makers, which is a complex 
undertaking that requires understanding of the risks involved.

# Reward Architecture

The primary purpose of the Rewards is to encourage a Token Capital Adequacy. The survival of the 
ecosystem relies on two primary requirements: 1) 24/7 liquidity to execute swaps; and 
2) the ability to view and understand volatility between tokens.

The Reward Architecture links the tokens that underpin the ecosystem, and deposits them in swappable 
pairs in locked pools. The goal is to reach both the minimum levels of tokenization required to perform tasks on 
the ecosystem, and also create a baseline for value in the system as a whole.

## How Rewards Work

Rewards are generated when an eligible token is 'staked' in an account that exists for the purpose of 
recording and generating them. The user (Liquidity Provider, Debt Service Provider, Stakeholder, or 
Borrower) deposits tokens into the stake account and receives stake-tokens in return. The 
holder of the stake-tokens can then redeem them later in exchange for their balance in the stake account 
as per the rules of the particular token stake program.

While the staked tokens are in the stake account, they generate rewards. Generally speaking, rewards are 
generated in the same token-denomination as the deposited stake, but this is not always the case. It is possible 
for special classes of tokens to be generated as rewards for specific use cases.

When the user wishes to unstake, they swap the staked-tokens for the originally deposited tokens plus the rewards
that accumulated during the staking period.

# Risks

To understand the risks associated with providing liquidity you can read [https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2](https://medium.com/@pintail/uniswap-a-good-deal-for-liquidity-providers-104c0b6816f2) to get an in-depth look at how to conceptualize a liquidity position.

# Excerpt from Risk Article

<blockquote>

Consider the case where a liquidity provider adds 10,000 DAI and 100 WETH to a pool (for a total value of \$20,000), the liquidity pool is now 100,000 DAI and 1,000 ETH in total. Because the amount supplied is equal to 10% of the total liquidity, the contract mints and sends the market maker “liquidity tokens” which entitle them to 10% of the liquidity available in the pool. These are not speculative tokens to be traded. They are merely an accounting or bookkeeping tool to keep track of how much the liquidity providers are owed. If others subsequently add/withdraw coins, new liquidity tokens are minted/burned such that everyone’s relative percentage share of the liquidity pool remains the same.

**Now let’s assume the price trades on Coinbase from $100 to $150. The Uniswap contract should reflect this change as well after some arbitrage. Traders will add DAI and remove ETH until the new ratio is now 150:1.**

What happens to the liquidity provider? The contract reflects something closer to 122,400 DAI and 817 ETH (to check these numbers are accurate, 122,400 \* 817 = 100,000,000 (our constant product) and 122,400 / 817 = 150, our new price). Withdrawing the 10% that we are entitled to would now yield 12,240 DAI and 81.7 ETH. The total market value here is $24,500. Roughly $500 worth of profit was missed out on as a result of the market making.

**Obviously no one wants to provide liquidity out of charitable means, and the revenue isn’t dependent on the ability to flip out of good trades (there is no flipping). Instead, 0.3% of all trade volume is distributed proportionally to all liquidity providers. By default, these fees are put back into the liquidity pool, but can be collected any time. It’s difficult to know what the trade-off is between revenues from fees and losses from directional movements without knowing the amount of in-between trades. The more chop and back and forth, the better.**

## Why is my liquidity worth less than I put in?

To understand why the value of a liquidity provider’s stake can go down despite income from fees, we need to look a bit more closely at the formula used by Uniswap to govern trading. The formula really is very simple. If we neglect trading fees, we have the following:

- `eth_liquidity_pool * token_liquidity_pool = constant_product`

In other words, the number of tokens a trader receives for their ETH and vice versa is calculated such that after the trade, the product of the two liquidity pools is the same as it was before the trade. The consequence of this formula is that for trades which are very small in value compared to the size of the liquidity pool we have:

- `eth_price = token_liquidity_pool / eth_liquidity_pool`

Combining these two equations, we can work out the size of each liquidity pool at any given price, assuming constant total liquidity:

- `eth_liquidity_pool = sqrt(constant_product / eth_price)`
- `token_liquidity_pool = sqrt(constant_product * eth_price)`

So let’s look at the impact of a price change on a liquidity provider. To keep things simple, let’s imagine our liquidity provider supplies 1 ETH and 100 DAI to the Uniswap DAI exchange, giving them 1% of a liquidity pool which contains 100 ETH and 10,000 DAI. This implies a price of 1 ETH = 100 DAI. Still neglecting fees, let’s imagine that after some trading, the price has changed; 1 ETH is now worth 120 DAI. What is the new value of the liquidity provider’s stake? Plugging the numbers into the formulae above, we have:

- `eth_liquidity_pool = 91.2871`
- `dai_liquidity_pool = 10954.4511`

"Since our liquidity provider has 1% of the liquidity tokens, this means they can now claim 0.9129 ETH and 109.54 DAI from the liquidity pool. But since DAI is approximately equivalent to USD, we might prefer to convert the entire amount into DAI to understand the overall impact of the price change. At the current price then, our liquidity is worth a total of 219.09 DAI. What if the liquidity provider had just held onto their original 1 ETH and 100 DAI? Well, now we can easily see that, at the new price, the total value would be 220 DAI. So our liquidity provider lost out by 0.91 DAI by providing liquidity to Uniswap instead of just holding onto their initial ETH and DAI."

"Of course, if the price were to return to the same value as when the liquidity provider added their liquidity, this loss would disappear. **For this reason, we can call it an **impermanent loss**.** Using the equations above, we can derive a formula for the size of the impermanent loss in terms of the price ratio between when liquidity was supplied and now. We get the following:"

- "`impermanent_loss = 2 * sqrt(price_ratio) / (1+price_ratio) — 1`"

- "Which we can plot out to get a general sense of the scale of the impermanent loss at different price ratios:"
  ![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2Fdnazarov%2FOscQ_nmzbA.png?alt=media&token=4dff866e-a740-4121-9da4-9c9105baa404)

- "Or to put it another way:"

  - "a 1.25x price change results in a 0.6% loss relative to HODL"
  - "a 1.50x price change results in a 2.0% loss relative to HODL"
  - "a 1.75x price change results in a 3.8% loss relative to HODL"
  - "a 2x price change results in a 5.7% loss relative to HODL"
  - "a 3x price change results in a 13.4% loss relative to HODL"
  - "a 4x price change results in a 20.0% loss relative to HODL"
  - "a 5x price change results in a 25.5% loss relative to HODL"

- "N.B. The loss is the same whichever direction the price change occurs in (i.e. a doubling in price results in the same loss as a halving)." -->

</blockquote>
