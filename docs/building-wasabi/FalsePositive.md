---
{
  "title": "False positive",
  "description": "A guide on how to report Bitcoin Core and Wasabi as false positive. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# False positive

[[toc]]

## Mail Template
:::tip
Ensure that the email subject line starts with the word FALSE.
:::

```
To: mailof@antivirusvendor.here
Subject: FALSE: files being detected by {AntivirusVendorHere} - False Positive Report

Body: Dear {AntivirusVendorHere},
I write this email to report as a false positives two different software.

Unfortunately, your antivirus reports two open source and safe Bitcoin software as malware; more specifically, they are categorized as "Bitcoin Miner". This claim is extremely incorrect.
The two software are, respectively, "Bitcoin Core" and "Wasabi Wallet".

Bitcoin Core (https://github.com/bitcoin/bitcoin), despite being one of the most (if not the most) highly scrutinized and maintained open-source software in existence, it is categorized as "Bitcoin Miner".
Bitcoin Core is considered to be Bitcoin's reference implementation, serves as a Bitcoin node and provides a Bitcoin wallet which fully verifies payments.
It is not possible to mine with this software, since the mining code was removed in 2013 (https://bitcoin.stackexchange.com/questions/49664/since-which-version-the-mining-functionality-removed-from-wallet).

Wasabi Wallet (https://github.com/zkSNACKs/WalletWasabi/) is a open-source and non-custodial, Bitcoin wallet that integrates Bitcoin Core within it to validate transactions without having to connect to third party servers on the network, and for this reason, it is also reported as "Bitcoin Miner", when its only task is to allow users to manage bitcoins in a secure and user friendly way.
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
|Antity | N/A | http://submit@antiy.com/
|Arcabit | N/A | virus@arcabit.com
|Avast | https://www.avast.com/false-positive-file-form.php | N/A
|AVG | https://www.avg.com/en-us/false-positive-file-form | N/A
|Avira | https://www.avira.com/en/analysis/submit | virus@avira.com
|BitDefender | https://www.bitdefender.com/submit/ | virus_submission@bitdefender.com
|Cyren | N/A | info@cyren.com
|eScan | http://support.mwti.net/support/index.php | fp@escanav.com
|e-Gambit  | https://tehtris.com/en/fp-egambit/ | N/A
|ESET-NOD32  | N/A | samples@eset.com
|FireEye  | N/A | info@fireeye.com
|Fortinet  | https://fortiguard.com/faq/onlinescanner | submitvirus@fortinet.com
|F-Secure  | https://www.f-secure.com/en/business/support-and-downloads/submit-a-sample | N/A
|Gdata  | https://su.gdatasoftware.com/en/sample-submission | N/A
|Ikarus  | N/A | samples@ikarus.at / probe@ikarus.at
|Jiangmin  | N/A | support@jiangmin.com
|Kaspersky  | https://virusdesk.kaspersky.com/ | N/A
|K7 Computing | https://www.k7computing.com/us/contact-us | reportfp@k7computing.com
|MAX  | N/A | info@maxpcsecure.com
|TrendMicro  | https://www.trendmicro.com/en_us/about/legal/detection-reevaluation.html | N/A

## GUI Tutorials

- ESET-NOD32: https://forum.eset.com/topic/18724-how-to-submit-suspicious-file-to-eset-research-lab-via-program-gui/
- TrendMicro: https://success.trendmicro.com/solution/1115860-reporting-a-false-positive-issue-in-worry-free-business-security-wfbs
