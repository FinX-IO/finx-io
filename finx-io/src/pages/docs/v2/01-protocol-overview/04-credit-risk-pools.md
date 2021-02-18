---
title: Credit Risk Pools
tags: protocol-overview, documentation
related: '/docs/v2/core-concepts/pools'
---

![](./images/pools.png)

FINX Protocol defines Credit Risk Pools that are extensions of Collateralized Loan Pools by adding a tokenized risk
transfer mechanism and the Credit Risk Algorithm to manage downside risk.

Pool specifications will be published along with the source code and may be forked for use in creating custom counterparty
arrangements.

Pools can have the following characteristics and distinctions:
- Maturity (perpetual, fixed maturity, optionality)
- Interest Rate schedules (fixed, float, tied to benchmark, tiered, contingent)
- Industry groupings
- Environmental, Societal, and Governance groupings

### Who is responsible for determining credit worthiness?

The FINXC Token represents a rentable transfer of risk between counterparties. While we imagine that in most large arrangements
the supplier of the credit (FINXC) will know the borrower and will therefore have separate information upon which to make a
credit decision, nevertheless __the protocol is designed to manage the Credit Pools as though all counterparties are
anonymous__.
