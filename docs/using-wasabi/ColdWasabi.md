---
{
  "title": "Cold-Wasabi protocol",
  "description": "A step by step guide on how to CoinJoin and send bitcoin to a hardware wallet for cold storage using WasabiWallet only. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# What is Cold Storage

Cold storage in the context of Bitcoin refers to keeping a reserve of Bitcoins offline.
This is often a necessary security precaution, especially dealing with large amounts of Bitcoin.

Cold storage is primarily intended for digital-asset custodians who do not actively trade their digital assets.
It offers a high level of protection for digital assets, because keys are secured offline or in hardware and should never be on networked computers.
However, cold storage should be considered as an option for everyone who is managing digital assets.
It can be the secure foundation for a more complex scenario that also involves hot wallets, offering the maximum security for whatever percentage of funds don't need to be actively available at all times.
A few questions can help you determine if you can move some of your funds from hot wallets to cold storage:
- How much readily available liquidity do you need?
- How often are you moving your digital assets?
- How often are you exchanging your digital assets?

After you answer these questions, you may discover that you don’t actually need all of your funds to be always available.
The remainder should then be moved off of exchanges into a cold-storage scenario, and the following can provide a model for that.
Even if you determine that all of your funds must remain hot, our cold-storage scenario still suggests a variety of best practices for managing digital-asset keys, and does so in the context of risks and adversaries that can be used to model other scenarios.

For example, a Bitcoin exchange typically offers an instant withdrawal feature, and might be a steward over hundreds of thousands of bitcoins.
To minimize the possibility that an intruder could steal the entire reserve in a security breach, the operator of the website follows a best practice by keeping the majority of the reserve in cold storage, or in other words, not present on the web server or any other computer.
The only amount kept on the server is the amount needed to cover anticipated withdrawals.

Methods of cold storage include keeping bitcoins:
- On a USB drive or other data storage medium in a safe place (e.g. safe deposit box, safe)
- On a paper wallet
- On a bearer item such as a physical bitcoin
- Use a offline Bitcoin Hardware wallet

Potential problems with cold storage methods exist but can be mitigated.

There are a number of cases where secret/private keys and/or backup seeds can be lost because of the medium on which they are stored.

## A list of the more common mediums of cold storage with some of their weaknesses:

:::details
### Written on a piece of paper
- Anyone who can see it, can steal it
- Handwriting can be hard to read or completely illegible
- Human error in transcription can cause errors on end product
- Paper can rot, be torn, burn, or be smoke damaged
:::

:::details
### Printed on a piece of paper
- Anyone who can see it, can steal it
- Type of printer - non-laser printers can run if paper gets wet
- Have to trust printer - some have internet connections, wifi, and memory
- Paper can rot, be torn, burn, or be smoke damaged
:::

:::details
### On laminated paper
- Anyone who can see it, can steal it
- Lamination is prone or degradation over time and puncture or cuts that could allow moisture to get trapped in the paper and cause deterioration or rotting in some circumstances | store in cool dry place
- Can burn or be smoke damaged
- 'Fireproof' & 'Fire-resistant' boxes can help protect paper in a small house fire but be warned that they can sometimes fall apart in the fire and get wet if the fire is put out with water.
Remember people can just carry out a small safe
:::

:::details
### Engraved / etched/ ablated/ stamped on a piece of metal
- Anyone who can see it, can steal it
- Some metals can deteriorate or corrode, choose a good metal; also store your metal away from direct contact other metals. - Some metals that are corrosion resistant have low melting points, are extremely expensive, or hard to machine.
- Metals can still deform or melt from heat, destroying any engraved SK. "Most house fires do not burn hotter than 1,200 degrees Fahrenheit.
This temperature is typically associated with the hottest portion of a home, which is in the roof area.
Homes that burn for longer than 30 minutes or consist of multiple levels sometimes burn at higher temperatures."
You want to pick a metal that won't be destroyed by a fire.
So magnesium, tin, and lead are all out as engraving materials.
- Silver, gold, copper, brass, bronze, nickel, cobalt, would survive the housefire fire unmelted.
Some Aluminium alloys can survive but you have to have the right ones.
At around 1500° Steel and Nickel should be okay.
Titanium is above the housefire range and so is tungsten, however tungsten rings are known to shatter due to the brittle nature of the very hard metal.
:::

:::details
### Stored digitally on a computer
- Computers can crash, making data recovery expensive
- Data can still technically be recovered after a system is abandoned by the user. In some cases data can be recovered after multiple overwriting attempts and physical destruction (as long as the attacker can get all or most the pieces) so if you copy files to a new computer and ditch the old one, be careful.
- Can burn or be smoke damaged
- A traditional hard disc drive can have data corrupted by powerful magnetic fields and can physically shatter
- A non-negligible amount of HDDs suffer from factory defects that will cause them to fail unexpectedly during their - lifetime
- Accidents can happen that could result in loss of data
- Solid state drives (SSDs) will lose data if unpowered, they may last years before this becomes a problem but it is unwise to store long-term data in unpowered SSDs
- If connected to internet it is another attack vector and the safety is only as good as the encryption used; I don't know what I would recommend but it wouldn't be BitLocker. Someone could be trying to break into the computer constantly. Even with good encryption if the machine or location is compromised the key could be stolen as soon as it is decrypted.
- There are a lot of ongoing threats with computers, from 0-day exploits to firmware exploits and malicious USB cords
- External hdds are good for storage for a few years at least if stored properly
- If not connected to internet, safety is only as good as the physical protection encryption used; could someone break into the location and copy the data without anyone noticing?
:::

:::details
### Stored digitally on CD, floppy disk, laserdisc, or mini-disc
- Plastics break down over time and with exposure to heat, humidity, regular light, all sorts of chemicals, even the oxygen in the air.
This can lead to the loss of your data when stored on a medium made of plastic or written/printed on plastic.
- Can burn or be smoke damaged
- Can be physically damaged, making data recovery expensive or even impossible
- Magnetic media (tapes, floppy disc) can be damaged by magnets
- Data can become difficult to recover if the software and/or hardware to decode is old, don't use proprietary formats
:::

:::details
### Stored digitally on a flash drive
- Can break and have to be physically repaired before use
- Rapidly changing magnetic fields (See MRIs) can damage the data stored on flash drives
- Can burn or be smoke damaged
- Can become corroded from salt water or some atmospheric conditions
- If they break apart, some lighting conditions can cause data corruption (you can also put them back together and often still get the data)
- Different devices are all different, even similar devices from the same production batch can be different.
There are large quality differences in drives but I am assuming you aren't using these for anything but storage.
- There are some fake flash drives that look like they saved the data but you can't get it back later
- Flash drives are not advised for long term storage; they can be used as one part of a multi-medium-location-format plan.
:::

:::details
### A pre-funded physical bitcoin coin (where the manufacturer generates and installs the secret key)
- The medium that the key is on is often paper/plastic which can burn or be smoke damaged
- Trust in the manufacturer themselves, they could copy the key
- Trust in their key generation procedure
- Trust in the operational security of the manufacturer, they could be generating the keys on their everyday computer
- Trust no one is successfully spying on them, electronically, looking through their documents while they are out of town, or with tiny tin foil hat cameras or long range ones
- Trust that the object was not tampered with in delivery
- Trust that no one has tampered with the object since you got it
:::

# Cold-Wasabi protocol

This is how you can safely eat cold Wasabi, or store your coins on a hardware wallet after one or more rounds of CoinJoin using Wasabi Wallet.
Both a 'Hot'(CoinJoin) and a 'Cold'(Storage) Wasabi Wallet instances will be running side-by-side, label them accordingly so you don't mix them up.

![](/ColdWasabiGeneral.png)

## Detailed walkthrough

1. Create a new Hot-Wasabi Wallet

2. Generate a new Receive address

3. Send coins you want to anonymize to the "Hot" Wasabi Wallet

Now you are set up for using the CoinJoin function with the "hot" Wasabi Wallet that holds the encrypted keys on an internet connected computer.

4. CoinJoin!

This is fine for small amounts of bitcoin, but not for larger bitcoin holdings.
That is where "Cold" hardware wallet storage comes in!
So after the CoinJoin you might want to send some of those coins back to the hardware wallet, but not expose those addresses to the central servers of the hardware wallet company or some sneaky peaky Electrum Wallet spies...

5. Connect your hardware wallet device (for the PSBT-protocol use a MicroSD card instead) 

6. Open another Wasabi Wallet instance, select `Hardware Wallet` to find your connected device.

*You will need to enter a PIN and unlock the hardware wallet*

For hardware wallet related questions see: [Hardware Wallet FAQs](/FAQ/FAQ-UseWasabi.md#hardware-wallet)

7. `Load Wallet` to import the xpub or Public Key (used to generate all receive addresses)

8. Go to `Receive` tab and Generate Receive Address, Copy this to clipboard (memorise the first/last few characters). (Note, don't generate more than 20 unused receive addresses).

9. Send a single mixed coin (don't combine UTXOs/coins as this hurts your anon-set badly) from your "Hot" Wasabi Wallet to this "Cold" Wasabi Wallet receive address by pasting from clipboard (check address hasn't changed).

10. Repeat steps 8 & 9 for each UTXO (new address each time) but vary fee rate & stagger timing (don't send all in one 1h session) for maximum privacy.

おめでとうございます!
You are now eating Cold Wasabi!

:::warning
The anonymity set is tied to the wallet that you used to CoinJoin, if you send a mixed coin to another Wasabi Wallet (in this case your hardware wallet), it will have an anonymity set 1 (red) because this wallet doesn't know that the coin was coinjoined.

You should put a meaningful label when you generate a receive address in your hardware wallet, e.g. "coinjoined utxo with anonymity set 70" (something that reminds you that you got this utxo from your Wasabi Wallet and it was coinjoined).
:::

# Cold-Wasabi PSBT protocol
When you want to safely spend some of those Cold-Wasabi funds from the hardware wallet, you could use the Partially Signed Bitcoin Transaction for offline/airgapped signing of transactions for an extra layer of defense.

## Workflow diagram
![](/ColdWasabiPSBTWorkflow.png)
