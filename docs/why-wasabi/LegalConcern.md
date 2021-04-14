---
{
  "title": "CoinJoin Legal Concern",
  "description": "A legal analysis on the regulation of companies utilizing CoinJoin transactions. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# CoinJoin Legal Concern

[[toc]] 

---

Using Bitcoin and other cryptocurrencies in the everyday course of businesses is becoming more and more popular.
Digital money has a lot of advantages, from unstoppable transactions to relatively low fees, and quick final settlement of international payments.
But all come at a price: the blockchain stores sensitive information like the amount and involved addresses of a transaction, giving away too much business-related information to the public.
However, this does not necessarily need to be the case.

## Overview

A CoinJoin transaction obfuscates the history of a given coin, making it hard to trace the coin back to the originator of the funds.
The implementation of Wasabi Wallet CoinJoin allows the original user to get back his funds with an obfuscated history.

It is often assumed that the main problem with an obfuscated transaction history is that financial regulators may have concerns about money laundering.
However, this is only the first impression, if we go into the details it can become more transparent why institutions should not worry about violating AML rules and why companies could have a direct competitive advantage using CoinJoin transactions.

With a transparent financial track record, companies paying with cryptocurrencies may find themselves in a squeezing situation, where their suppliers, clients, and competitors are aware of all of their payment steps and prices.
For institutional investors, each step would be scrutinized by the market causing intentional or unintentional price manipulation.

While the Bitcoin blockchain does not store personal information about the owners of the specific Bitcoin addresses, using metadata makes it possible to link Bitcoin addresses to certain companies and individuals.
If such a link can be established, all past and future transactions can be traced.

## CoinJoin transactions

### Difference between ordinary banking and blockchain

The ordinary banking system is closed, a very non-transparent system, where the data inside this system is hidden from outside observers.
“Only” the bank and the user know the transactions made inside the system.
In opposition, the blockchain is transparent and open to everyone.
This means not only the “bank” (custodial service provider) but also outsider 3rd party observers are capable of tracking these transactions.

### Service providers' obligations regarding privacy

There is no question a service provider who keeps a record of personal information needs to deal with the different privacy regulations and act according to them.
In the ordinary banking system personal financial information is handled as a secret thus preserving individual privacy from third parties.
Whereas in the open blockchain system this information by the nature of the technology cannot be kept secret, so there is a large risk of a privacy leak of sensitive financial information.
This is obviously not intentional and even though the personal information might be protected, the financial information is nevertheless leaked due to the pseudonym nature of the system.
This information has similar sensitivity as name, address, gender, etc. so it should be handled with great care.

### CoinJoin as a privacy-preserving tool

Since the Bitcoin blockchain is transparent, transactions cannot be kept secret.
Currently, one prevalent solution in Bitcoin to gain privacy is to CoinJoin the different coins to obfuscate their history.
By the use of this tool, a custodial service provider can at least start to protect its users' financial privacy.

## Privacy perspective from the companies' point of view

The essence of competitive advantages is to keep and hold business secrets.
Each and every successful company has developed its own mechanism to deliver the best products and services to its customers.
To reach this, they usually use a secret sauce, called the business secret to deliver the results.
If anything, when a financial payment becomes fully transparent this business secret is evaporating
Let’s look a bit deeper into what exactly this means for companies, who would like to use Bitcoin as the payment method, where all transactions are recorded on the blockchain.

### Suppliers

Companies use suppliers to acquire products and services they use in their own production stages.
For these products and services, of course, they pay a reasonable price.
However, this price is usually negotiable, especially in B2B relationships or large scale orders.
What would happen if all of a sudden, the price of raw materials for a company becomes fully public?
Other competitors can now demand similar discounts, forcing industries into a vicious cycle of price reduction.
As each and every price discount is negotiated on a case by case basis, considering factors as creditworthiness and timing of payment, transparent supplier prices would only cause enormous pressure on suppliers to deal with negotiations.

Beyond the price of products, the timing of payments is also fully transparent on the blockchain.
However, in certain circumstances, it is also a crucial business secret to keep the information on the sequence of invoice payments indoors.
Considering cash flow implications, it can happen that one invoice is paid on time, while other invoices are still pending payment.
In the case of blockchain transactions however all payments are transparent, so it can be clear for each counterparty that only a selected number of invoices has been paid even if the sufficient funds are available which can cause unnecessary tension between business partners.

Additionally, if all historical transactions of a company are known, its creditworthiness might be considered incorrectly.
It can happen that the creditworthiness is considered better than it is if the incoming funds to a specific address are extraordinarily high, but these funds are needed in other parts of the business, so the overall solvency of the business can be still negative despite the large funds.
On the other hand, creditworthiness can be considered worse than it actually is, if only a handful of addresses are taken into consideration for the solvency analysis, neglecting other forms of wealth, like other Bitcoin addresses, or fiat accounts.

### Clients

From the client’s perspective, the factors listed under suppliers are all applicable.
If a client knows the revenue stream of the company, they can draw an incorrect conclusion about the actual financial situation of a company and make a decision of purchasing a product based on this assumed financial situation.
If for example, there are no incoming funds for a given period, clients may stay away from purchasing products and services, solely because they might consider the company dormant or insolvent.
But in reality, the seasonality of incoming funds is not disclosed for all companies, so it can be a  perfectly stable business situation to receive incoming funds only in a given period of a year, while still being able to deliver service throughout the year.

Another aspect is the possible price negotiations on the client-side.
If a client finds out that another client is paying less for a service or product, they can demand similar discounts which can result in downward price pressure in the industry.
This can ultimately result in companies going out of businesses if they cannot adjust to the lower price levels which are below the equilibrium prices.

### Competitors

Everyone can agree that the pricing structure of services is a very sensitive topic and is the core of the business secret which makes a company successful.
If all competitors can look at the transactions of the company, it also means they can adjust their own pricing structure to follow the successful market leaders in the industry, causing turbulence in competition.
Each company has its own pricing structure which should be coming from the internal processes, know-how, and resources.
Although external factors should be considered in pricing, they should not be the main driving force in pricing decisions.

### Employees

There is now a growing number of companies that are paying their employees salaries in bitcoin due to the trustless transactions with relatively low fees, especially with international transactions.

With transparent transaction history, employees would be aware of each other’s salaries without the company disclosing this information.
Although there are some theories supporting a transparent salary structure, up to now the majority of the companies prefer to keep salaries as secret and obligate employees to keep salary and wage information confidential.
Obfuscated transaction history can help companies to keep salary information confidential which can keep a relaxed atmosphere among employees with no wage pressures.

### Phishing attacks

Disclosing financial information for a company makes them more vulnerable to phishing attacks.
If the exact time and amount of payment are publicly known, attackers can use this information to build trust with the company and squeeze out other crucial business information pretending to be a trusted partner.


## Privacy perspective from the institutional investor’s point of view

The Bitcoin market is considered [fairly concentrated](https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html) in the sense that out of the millions of Bitcoin addresses, less than 1% holds 87% of bitcoins.

![Bitcoin address distribution](/AddressDistribution.png "Bitcoin address distribution")

Institutional investors and cryptocurrency exchanges are holding large sums of bitcoin on a blockchain where transactions are completely transparent.
These so-called whales sometimes need to move large amounts of coins for any reason which can often lead to unintentional price manipulation.
If a large bitcoin holding is on the move, it can always raise concern in the media regarding the future of Bitcoin, causing unnecessary price fluctuations.
In the case of unintentional price manipulation, it is difficult to prove there has been no insider trading on the institutional side, which can cause loss of faith from the clients.

Using obfuscated transaction history in large bitcoin transactions can help to keep the market stable and avoid unintentional price manipulations. 

## Resolving AML conflicts

Privacy is not just for criminals.
One of the major critiques against using CoinJoin is that if the transaction history is not known for a company, it may be used as a way to launder money.
From the above-listed cases, we already see that currently using fiat payments, during the normal course of businesses, companies do not disclose all financial information as that would result in a loss of business secrets.
Why would they need to do this if they are just using a new method of payment, called Bitcoin?
Using privacy tools to obfuscate Bitcoin transactions is completely legal and in accordance with the current legal framework.

### User privacy

In all jurisdictions, there are different laws and acts that are made to protect customers privacy.
This is not limited only to personal data but also financial data.
In the EU there is GDPR, in the USA there is the Privacy Act of 1974, in Canada, there is the Privacy Act of 1985, etc.
These set different rules to be kept in order to preserve individual privacy both on personal and financial levels.

### KYC/AML

By now in mainly all jurisdictions, custodial cryptocurrency service providers (wallet, exchange, payment processor, etc.) are requested to run KYC/AML checks on users and their transactions.
The KYC process and inner policies should ensure personal data protection.
The accounts are assigned to these individual users, who are verified by the provider.
This means the provider identifies the user just like a legacy bank would do.
The different AML checks are run on deposits or withdrawals.
The suspicious transactions can be linked to users based on the transactions that are initiated by them personally.
KYC and AML procedures now ensure that all transactions involving fiat (like buying and selling bitcoin on exchanges for fiat currency) have a detailed background in terms of who is sending what money to whom, the identification of transactions are even more strict than in the current banking world, where two companies or individuals can send even large funds without the need to verify their source.
 
### Using CoinJoin as a custodial service provider

As soon as a user deposits the funds to any of these service providers, the funds are in one large cluster.
From now on the funds are possessed by the service provider and the actual user balances are only kept on internal records.
At this point all KYC/AML procedures are done, funds should be considered “clean”.
The funds are controlled by the service provider and different policies are set for securing these funds (hot and cold storage, multisig, etc.).
The record system of the provider will show the exact value of funds belonging to the different users.
This is the time when a provider could preserve its users’ privacy by applying CoinJoin on these funds.
In case of a withdrawal, coinjoined UTXOs could be sent to the user.
Again, this user is already KYC-ed, the provider has full knowledge about the user.
In case of a law enforcement request, all data can be provided, since the deposit history of the user in question is still available.
The only thing CoinJoin does, in this case, is protecting the user from third-party observers, while the service provider is still enabled to provide data for law enforcement if requested.

### FinCEN guidance on legal framework

The Financial Crimes Enforcement Network (FinCEN) is a bureau of the United States Department of the Treasury that collects and analyzes information about financial transactions.
It is claimed that its job is to combat domestic and international money laundering, terrorist financing, and other financial crimes.
Its latest regulation regarding cryptocurrencies is in effect since May 2019.
The regulation places money transmitting in the center of the discussion.
Money transmitters must develop a certain process in terms of reporting and monitoring to help combat money laundering and terrorist financing.
FinCEN guidance explicitly states that those persons and businesses who provide the delivery, communication, or network access services used by a money transmitter to support money transmission services are NOT considered money transmitters.
Furthermore, in section 4.5 anonymity-enhanced cryptocurrency transactions are detailed and concluded that they are subject to the same AML and KYC regulations as any other transactions.
This means in an investigation even the obfuscated transaction history can be given out to authorities upon request if it is needed for a procedure, so it can be concluded that using CoinJoin transactions will not help money-laundering.
The KYC-ed participant’s data and pre-obfuscated transaction history can be given away to the authorities.

## Conclusion

Companies using Bitcoin as a method of payment currently do not have sufficient privacy regarding their financial information.
Outsiders can get valuable business-related information by studying the public transaction history of a company, causing economic damage in the long run.
Using CoinJoin transactions can help businesses to keep their privacy while still enjoying the benefits that Bitcoin transactions can provide.
Concerns from the AML perspective are not valid, as the necessary data can be provided to authorities upon investigation requests.
