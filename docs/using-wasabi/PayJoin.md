---
{
  "title": "PayJoin",
  "description": "A detailed explanation about PayJoin and it's implementation in Wasabi Wallet. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# PayJoin

[[toc]]

---

## Sending PayJoin step-by-step

1. Load a wallet and open the `Send` tab.

2. Request from the receiver a [BIP21 Bitcoin URI](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) with the flag `pj=` and paste it into the address field of the `Send` tab.
(E.g. `bitcoin:tb1q0382a3m2jzvyk5lkea5h5jcht88xa6l0jufgwx?amount=0.00010727&pj=https://payjoin.test.kukks.org/BTC/pj`)

3. Select the coins you want to send.

4. Verify the information is correct, type in the password, and press `Send`.

![Send Bitcoin PayJoin transaction in Wasabi Wallet](/PayJoinSend.png "Send Bitcoin PayJoin transaction in Wasabi Wallet")

:::warning The success of a PayJoin transaction is not something that depends on Wasabi.
It may happen that the transaction is broadcast with success, but that it is not a PayJoin.
This can happen for several reasons including:

- The receiver did not have any utxos to contribute towards a PayJoin.
- Your wallet does not use the same address format as the receiver's.
- The PayJoin server is not available.
:::

## The goal of PayJoin

PayJoin is a collaborative transaction between the sender and the receiver of a payment, for example the merchant and the customer.
The goal of the protocol is to break the common input ownership heuristic, while making it difficult to fingerprint that the transaction is in fact a CoinJoin.
Further, it reduces the transaction fees paid by the merchant due to consolidation of coins.

## Coordination

The coordination of this CoinJoin is done with the PayToEndPoint [P2EP] concept.
The receiver is reachable over the internet, either over a Tor onion service or clearnet IP address.
The link is included in a BIP21 Bitcoin URI, and is provided to the sender as the payment invoice.
The sender uses this onion service or IP address to connect to the server of the receiver and communicate the further protocol.
The coordination is usually done within seconds, and will abort to the fallback transaction after some time if the connection breaks.

## Fallback transaction

In the very first request to the receiving server, the sender provides a finalized signed transaction which has only the inputs of the sender, like any other Bitcoin transaction.
The inputs are only from the sender.
The outputs are the address of the receiver, as well as the change address of the sender.
For example here, Alice pays Bob `0.2 bitcoin`.

```
Alice input   1 bitcoin   -->   Bob output            0.2 bitcoin
                                Alice change output   0.8 bitcoin
```

Both the sender and the receiver _could_ broadcast this transaction.

## PayJoin transaction

The receiving server responds to this initial proposal, with a transaction that adds more inputs to the transaction.
Thus, the output belonging to the receiver increases in value, above the value that the payment amount is due.

```
Alice input   1 bitcoin   -->   Bob output            0.7 bitcoin
Bob input     0.5 bitcoin -->   Alice change output   0.8 bitcoin
```

The sender broadcasts this transaction to the Bitcoin network.

## Advantages of PayJoin

First and foremost, the common input ownership heuristic is broken, meaning that the inputs do not belong to one single entity, but to several of them.
This breaks one of the most important assumptions of transaction surveillance companies.
Contrarily to other CoinJoin implementations, the outputs are not of equal value, so it is not obvious that this transaction is in fact a CoinJoin.

Further, the outputs do not reflect the actual value of the transaction.
In our example, the economic transfer is of `0.2 bitcoin` from Alice to Bob, but the outputs are worth `0.7 bitcoin` and `0.8 bitcoin`.
This is obfuscating the actual amount payed.

Finally, the receiver is consolidating his coins, thus saving on future transaction fees.
Without the PayJoin, the receiver would have two coins, worth `0.2 bitcoin` and `0.5 bitcoin`, and he would have to pay twice the transaction fee to spend these coins.
But because of using PayJoin, he only has one coin, worth `0.7 bitcoin`, thus reducing his future transaction costs when spending this coin.
