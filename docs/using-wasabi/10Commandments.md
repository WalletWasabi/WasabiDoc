---
{
  "title": "Ten Commandments",
  "description": "The very basics of Wasabi that enable you to use this powerful tool properly. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# The Ten Commandments

[[toc]]

---

## 1. Wasabi is for defense only

Wasabi Wallet is a powerful free and open-source Bitcoin wallet, and it is used to protect your privacy.

## 2. Verify the integrity of your software

When installing the wallet, you may choose to [download the package](/using-wasabi/InstallPackage.md) from the official [clearnet](https://wasabiwallet.io) or the [Tor onion service](http://wasabiukrxmkdgve5kynjztuovbg43uxcbcxn6y2okcrsg7gb6jdmbad.onion), or to [compile the source code](/using-wasabi/BuildSource.md) from the official [GitHub repository](https://github.com/zkSNACKs/WalletWasabi)
Please [verify the signatures](/using-wasabi/InstallPackage.md) after completing downloads.
The concern here is that you may accidentally fall for a phishing attempt and be on a malicious site downloading a malicious piece of software.

## 3. Back up your recovery words and password (BOTH!)

When [creating a new wallet](/using-wasabi/WalletGeneration.md), write down your recovery words **AND** password and store them safely in separate locations.
This way, if a malicious person manages to find one of them, he or she still needs to find the other in order to gain access to your coins.
It also gives you time to move your coins to a different wallet if you notice that one of the two storage locations has been compromised.


Wasabi is a fully non-custodial wallet, which means that you are always in possession of your keys, and thus you should safely store your backups.
If you have done this step, then even if your computer crashes, there is very little you have to worry about, you can always [recover your wallet](/using-wasabi/WalletRecovery.md).
Also, under no circumstance should you reveal the password or mnemonic words to anyone that asks for them.
Lastly, understand that if you lose your password, it becomes much harder (if not impossible) to restore your wallet, so store both safely!

## 4. Practice good labeling AND try to never reuse addresses

Each time you generate an address to [receive bitcoin](/using-wasabi/Receive.md) or you [send a transaction](/using-wasabi/Send.md), you must label the address with the observers and receivers of this transaction.
This label helps you use your bitcoin privately, and is stored exclusively on your device.
Wasabi has strong automatic coin control features, and as you use the wallet, it automatically coinjoins these coins to enable you to continue making payments without having to worry about revealing your transaction history.

Lastly, in the same way, that you should never receive bitcoin to the same address twice, you should try to avoid sending bitcoin to the same address twice.
So ask the recipients to provide you a new address for every transaction.

## 5. CoinJoin whenever possible and be patient

By default, the process of participating in a [coinjoin](/using-wasabi/CoinJoin.md) happens automatically in the background.
For coins to get coinjoined, you must keep your computer online and awake, because this is an interactive process.
As a coinjoin is just many users (up to 100) enqueuing coins, it may take up to one hour for you to successfully participate in a coinjoin.
Once you've done so, you will see the amount of `Private coins` increase in the main view.

As more users join the network, the frequency of these coinjoins will go up.
Lastly, you can remix your coins without additional coordinator fee for up to one hop away.
This provides you and the other coinjoin participants with plenty of additional privacy.

## 6. Never merge private and non-private coins

It's highly recommended that users don't send payments using private and non-private coins in the same transaction.
By merging your non-private coins with your private coins, you undo the privacy benefits of coinjoins, so be patient and if possible, wait till Wasabi automatically coinjoins more of your funds before making the payment.

For more information, please see the discussions [here](https://www.reddit.com/r/WasabiWallet/comments/avxbjy/combining_mixed_coins_privacy_megathread/).

## 7. Avoid 3rd party servers

Wasabi is designed to allow users to see their balances [without any concern that a third party](/why-wasabi/NetworkLevelPrivacy.md) would be able to link your addresses to you, or to each other.
But if you proceed to enter your address into a block explorer, or use a wallet that trusts a third party server with your public keys - all bets are off.
So if you want to check on the status of a transaction or the balance on an address, you should first:

1. Check your Wasabi Wallet
2. Check through your full node
3. Use a block explorer through Tor (e.g. [Blockstream Esplora Tor](http://explorerzydxu5ecjrkwceayqybizmpjjznk5izmitf2modhcusuqlid.onion/)) and generate new Tor identities for every query.

If you think that forensics companies are not paying big money to block explorers for user information, you are wrong.
Even something as simple as leaving a comment on a YouTube video or Reddit post will be scraped.

## 8. Run your own full node (if you can)

Wasabi will protect your network-level privacy even without your own full node.
However, if you can spare the resources on your device, running a full node is the only way to properly verify the bitcoin you receive.
Wasabi comes [packaged with a Bitcoin full node](/using-wasabi/BitcoinFullNode.md), and you can easily start it with one click in the settings.
If you have a full node already running on the same device, Wasabi will use it automatically per default.
Finally, you can even connect to your remote node over Tor.

## 9. Use separate profiles

When you ask a question on Reddit or send coins to a merchant, be wary of the public identity you choose.
You can create a dummy Reddit account as opposed to an account where you may have revealed your personal details elsewhere.
When you spend coins from your wallet, consider what you might want to keep private from the merchant or individual you are interacting with.
In the same way that reusing addresses hurts your privacy, consolidating all of your online behavior into one profile can do the same.

## 10. Use Lightning

Wasabi is an ideal wallet for many things, but trade-offs exist with everything.
Lightning is still a project in its early days, but the privacy topology of lightning payments is much more ideal over on-chain payments if you have the choice.
Routing large amounts can be uncertain, but for small amounts, the network is becoming steadily more reliable.
Currently, Wasabi does not support in-wallet lightning features, but the creators of the wallet have already announced a [grant](https://blog.wasabiwallet.io/1-btc-ln-privacy-grant/) for researching it.
