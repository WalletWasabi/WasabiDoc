---
{
  "title": "False positive",
  "description": "A guide on how to report Bitcoin Core and Wasabi as false positive. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# False positive

Since [v1.1.10](https://github.com/zkSNACKs/WalletWasabi/releases/tag/v1.1.10), Wasabi has [partial Bitcoin Core integration](https://github.com/zkSNACKs/WalletWasabi/pull/2495).
This means that it is possible (but not mandatory) to start Bitcoin Core during the startup of Wasabi, without having to install or configure anything.

Unfortunately, Bitcoin Core is detected as an unsecure Bitcoin Miner by some antiviruses, despite it being one of the most (if not the most) highly scrutinized and maintained open source software in existence.
This creates a huge problem as several users are no longer able to download and use Bitcoin Core and Wasabi Wallet, despite being two extremely safe and malware-free software.

**The whole community is called to download [Bitcoin Core](https://bitcoincore.org/en/download/) and [Wasabi Wallet](https://wasabiwallet.io/#download), and report them to their antivirus as a false positive.**

This page contains online form submissions, email template, addresses and GUI tutorials.

[[toc]]

## Email Template
:::tip
Ensure that the email subject line starts with the word FALSE.
:::

```
To: mailof@antivirusvendor.here
Subject: FALSE: files being detected by {AntivirusVendorHere} - False Positive Report

Body: Dear {AntivirusVendorHere},
I write this email to report as false positives two different software.

Unfortunately, your antivirus reports two open source and safe Bitcoin software as malware; more specifically, they are categorized as "Bitcoin Miner". This claim is extremely incorrect.
The two software are, respectively, "Bitcoin Core" and "Wasabi Wallet".

Bitcoin Core (https://github.com/bitcoin/bitcoin), despite being one of the most (if not the most) highly scrutinized and maintained open-source software in existence, it is categorized as "Bitcoin Miner".
Bitcoin Core is considered to be Bitcoin's reference implementation, serves as a Bitcoin node and provides a Bitcoin wallet which fully verifies payments.
It is not possible to mine with this software, since the mining code was removed in 2013 (https://bitcoin.stackexchange.com/questions/49664/since-which-version-the-mining-functionality-removed-from-wallet).

Wasabi Wallet (https://github.com/zkSNACKs/WalletWasabi/) is an open-source, non-custodial, Bitcoin wallet that integrates Bitcoin Core within it to validate transactions without having to connect to third party servers on the network, and for this reason, it is also reported as "Bitcoin Miner", when its only task is to allow users to manage bitcoins in a secure and user friendly way.
Again, Wasabi Wallet cannot in any way mine bitcoins (or any other cryptocurrency), as its sole purpose is to manage bitcoins.

(optional from here, edit according to your antivirus - The more information there is, the better)
Additional information:
Product - McAfee Security Center
Version - v16.0
Engine - 3181.0
Type of alert - ELF:BitCoinMiner-ET [PUP]

You can find the two files attached.
Looking forward to your kind reply, I wish you a good job.

Regards,
Name and Surname
```

## Antivirus Online forms and email addresses
  
|Antivirus  | Online Form | eMail address
|----  | ----   | ---- |
|Antity | No | submit@antiy.com
|Arcabit | No | virus@arcabit.com
|Avast | [Yes](https://www.avast.com/false-positive-file-form.php) | N/A
|AVG | [Yes](https://www.avg.com/en-us/false-positive-file-form) | N/A
|Avira | [Yes](https://www.avira.com/en/analysis/submit) | virus@avira.com
|BitDefender | [Yes](https://www.bitdefender.com/submit/) | virus_submission@bitdefender.com
|Cyren | N/A | info@cyren.com
|eScan | [Yes](http://support.mwti.net/support/index.php) | fp@escanav.com
|e-Gambit  | [Yes](https://tehtris.com/en/fp-egambit/) | N/A
|ESET-NOD32  | No | samples@eset.com
|FireEye  | No | info@fireeye.com
|Fortinet  | [Yes](https://fortiguard.com/faq/onlinescanner) | submitvirus@fortinet.com
|F-Secure  | [Yes](https://www.f-secure.com/en/business/support-and-downloads/submit-a-sample) | N/A
|Gdata  | [Yes](https://su.gdatasoftware.com/en/sample-submission) | N/A
|Ikarus  | No | samples@ikarus.at, probe@ikarus.at
|Jiangmin  | No | support@jiangmin.com
|Kaspersky  | [Yes](https://virusdesk.kaspersky.com/) | N/A
|K7 Computing | [Yes](https://www.k7computing.com/us/contact-us) | reportfp@k7computing.com
|MAX  | No | info@maxpcsecure.com
|TrendMicro  | [Yes](https://www.trendmicro.com/en_us/about/legal/detection-reevaluation.html) | N/A

## GUI Tutorials

This list contains tutorials on how to report Bitcoin Core and Wasabi Wallet as false positive, directly from your antivirus software:

- ESET-NOD32: https://forum.eset.com/topic/18724-how-to-submit-suspicious-file-to-eset-research-lab-via-program-gui/
- TrendMicro: https://success.trendmicro.com/solution/1115860-reporting-a-false-positive-issue-in-worry-free-business-security-wfbs
