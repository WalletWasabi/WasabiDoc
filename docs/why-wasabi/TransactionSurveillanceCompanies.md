---
{
  "title": "Transaction Surveillance Companies",
  "description": "An explanation of transaction surveillance companies and a list of the most known ones. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

#  Transaction Surveillance Companies

[[toc]]

---
A transaction surveillance company is one which attempts to spy on all bitcoin users.
Their business model is usually to sell the data to any governments, corporations and individuals willing to pay for their services.

## Spying technology

There are a number of techniques probably used by transaction surveillance companies:

### AML/KYC information
Many bitcoin exchanges require users to undergo Anti-Money Laundering (AML) Know-Your-Customer (KYC) checks, which requires users to reveal all kinds of invasive personal information such as their real name, residence, occupation, net worth and income.
All this information is usually passed onto the exchange's partner transaction surveillance company, which keeps a database linking the victim's personal information with their bitcoin addresses and transactions.

### Blockchain analysis
Bitcoin on-chain transactions are visible to all and so can be analyzed.
Important techniques are the common-input-ownership heuristic and address reuse.

### Wallet synchronization analysis
Bitcoin lightweight wallets often download their own history and balance by querying a third-party server.
Transaction surveillance companies often try to exploit this to learn which addresses and transactions belong to certain wallets.
The companies have been known to collect [BIP 37](/using-wasabi/BIPs.md#bip-37-connection-bloom-filtering) filters from BIP37-enabled wallets.
They almost-certainly also run many Electrum servers which can spy on any Electrum wallet that connects to them.

### Transaction broadcasting
Surveillance companies have been known to sybil attack the bitcoin network in order to try to find the source IP addresses of unconfirmed transactions.

## Criticisms

### Attempt to invade privacy

The right to privacy is recognized as a human right by the US constitution, European Union regulations and the Constitution of India.

Financial privacy is an essential criteria for the efficient operation of a free market: if you run a business, you cannot effectively set prices if your suppliers and customers can see all your transactions against your will.
You cannot compete effectively if your competition is tracking your sales.
Individually your informational leverage is lost in your private dealings if you don't have privacy over your accounts: if you pay your landlord in Bitcoin without enough privacy in place, your landlord will see when you've received a pay raise and can hit you up for more rent.

Financial privacy is essential for personal safety: if thieves can see your income, holdings, and spending, they can use that information to target and exploit you.
Without privacy malicious parties have more ability to steal your identity, snatch your large purchases off your doorstep, or impersonate businesses you transact with towards you... they can tell exactly how much to try to scam you for.

Financial privacy is essential for human dignity: no one wants the snotty barista at the coffee shop or their nosy neighbors commenting on their income or spending habits.
No one wants their baby-crazy in-laws asking why they're buying contraception (or sex toys).
Your employer has no business knowing what church you donate to.
Only in a perfectly enlightened discrimination free world where no one has undue authority over anyone else could we retain our dignity and make our lawful transactions freely without self-censorship if we don't have privacy.

Most importantly, financial privacy isn't incompatible with things like law enforcement or transparency.
You can always keep records, be ordered (or volunteer) to provide them to whomever, have judges hold against your interest when you can't produce records (as is the case today).
None of this requires globally visible public records.

Globally visible public records in finance are completely unheard-of.
They are undesirable and arguably intolerable.
The Bitcoin whitepaper made a promise of how we could get around the visibility of the ledger with pseudonymous addresses, but the ecosystem has broken that promise in a bunch of places and we ought to fix it.
Bitcoin could have coded your name or IP address into every transaction.
It didn't.
The whitepaper even has a section on privacy.
Sufficient privacy is an essential prerequisite for a viable digital currency.

### Attempt to destroy fungibility

Privacy invasions can lead to damaging or destroying bitcoin fungibility.
The aim of bitcoin is to be a decentralized digital currency, but if all users are eventually required to consult centralized blacklists before accepting bitcoin then its decentralization will be destroyed.

Financial privacy is an essential element to fungibility in Bitcoin: if you can meaningfully distinguish one coin from another, then their fungibility is weak.
If our fungibility is too weak in practice, then we cannot be decentralized: if someone important announces a list of stolen coins they won't accept coins derived from, you must carefully check coins you accept against that list and return the ones that fail.
Everyone gets stuck checking blacklists issued by various authorities because in that world we'd all not like to get stuck with bad coins.
This adds friction and transactional costs and makes Bitcoin less valuable as a money.

### No mechanism for oversight or appeal

There appears to be no recourse for someone affected by false positive identification of exchange-disapproved transaction history.
This could result in them wrongly having their coins confiscated.

### Jurisdiction

Transaction surveillance company market themselves as a tool for finding "bad guys", but its unclear which jurisdiction that applies to.
For example, could one day the government of China pressure those companies into marking certain coins as "bad" because they belong to users who disagree with Chinese government policy?

### Incentivized to oppose bitcoin updates

During the deployment of segregated witness certain transaction surveillance companies were believed to have spread misinformation about it, because the update enables Lightning Network, which the companies saw as a threat to their business.

### Oversold effectiveness

Transaction surveillance companies rely on heuristics or assumptions when analyzing the blockchain.
These heuristics are sometimes not true, for example the common-input-ownership heuristic is broken by CoinJoin.
Even if that heuristic is true, it still requires actually identifying the cluster, which is not always possible.

Laws surrounding anti-money-laundering typically require businesses to take reasonable efforts to investigate the source of funds.
Usually the transaction surveillance company's customers simply want to legally protect themselves, regardless of whether the surveillance actually works.
There is a lot of money in this space from governments and other authorities, who usually don't understand the underlying technology and are happy to throw money at several startups who claim to be able to accurately track everything.
Whether the activities of transaction surveillance company actually help against money laundering is an open question.

## Examples

- [Chainanalysis](https://www.chainalysis.com/)
- [Elliptic](https://www.elliptic.co/)
- [Coinvalidation](http://coinvalidation.com/)
- [Neutrino](https://www.neutrino.nu/)
- [Coinfirm](https://www.coinfirm.io/)
- [Blockchain Group](https://blockchaingroup.io/)
- [Ciphertrace](https://ciphertrace.com/)
- [Comply Advantage](https://complyadvantage.com/aml-crypto-compliance/)
- [IdentityMind](https://identitymindglobal.com/)
- [Elementus](https://elementus.io/)
- [BlockSeer](https://www.blockseer.com/)
- [ScoreChain](https://www.scorechain.com/)
- [Crystal](https://crystalblockchain.com/)
