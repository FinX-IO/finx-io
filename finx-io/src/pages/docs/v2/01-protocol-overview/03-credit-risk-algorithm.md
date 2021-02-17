---
title: Credit Risk Algorithm
tags: protocol-overview, documentation
---

![](./images/credit_risk_formula.jpg)

The FINX protocol defines a Credit Risk Algorithm that sets the parameters of Credit Default to the ecosystem.

Credit Default is defined as either 1) a counterparty not fulfilling a payment obligation, or 2) an automated 
unwinding of a leveraged position that results in one or more counterparty obligations left unfulfilled.

The method by which the Credit Risk Algorithm operates is by employing a Distance to Default Model which is adapted 
to take into account the special nature of Decentralized Finance, collateralized pools and Credit Tokens. The usual 
assumption of log-normally distributed asset values is not appropriate for the DeFi space; instead, Tokens represent 
an exceptional risk relative to other commercial arrangements. Because leveraged debt creates the effect of a 
short put option on the borrower's collateral, when asset prices diverge dramatically from historical distributions the 
payoffs or losses can become parabolic. This has important consequences for risk dynamics and distance to default 
estimation.

Because payoffs will continue to be non-linear for the foreseable future, we believe that Token Volatility 
will increase following negative shocks to collateralized values, which could become a negative feedback 
loop and lead to a collapse of positions and a general unwinding of the ecosystems that currently exist.

Credit Risk is critical to managing these dynamics. Standard structural models in which volatility is assumed 
to be predictable will likely severely understate default risk, especially in good times when values are rising.
Leveraged yield farms resemble Mezzanine claims rather than a curve of call options, so the primary purpose of
the FINX Credit Risk model is to be sensitive to big negative shocks.
