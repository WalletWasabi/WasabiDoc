---
{
  "title": "Hardware Wallet Integration Testing",
  "description": "This is a checklist for the testers of different hardware wallets to ensure proper integration with off-line signing devices. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---



# Wasabi Hardware Wallet Integration Testing

|                | Windows | macOS     | Linux   |
|----------------|---------|---------|---------|
| Coldcard       | pass    | pass    | pass    |
| Digital BitBox |         |         |         |
| KeepKey        |         |         |         |
| Ledger Nano S  | pass    | pass    | pass    |
| Ledger Nano X  |         |         |         |
| Trezor One     | pass    | pass    | pass    |
| Trezor Model T | pass    | pass    | pass    |

# How to test?

## (Linux Only) Step 0: Add `udev` rules

If you are on Linux you must add some `udev` rules if you have not already, so your OS (and Wasabi) can recognize your hardware wallet:

```sh
git clone https://github.com/bitcoin-core/HWI.git
cd HWI/hwilib/
sudo cp udev/*.rules /etc/udev/rules.d/
sudo udevadm trigger
sudo udevadm control --reload-rules
sudo groupadd plugdev
sudo usermod -aG plugdev `whoami`
```

More info here: [https://github.com/bitcoin-core/HWI/tree/master/hwilib/udev](https://github.com/bitcoin-core/HWI/tree/master/hwilib/udev)

## Step 1: Build From Source Code

Follow this step-by-step [guide](../using-wasabi/BuildSource.md).

## Step 2: Test

### 1. Does Wasabi recognize your hardware wallet?
### 2. Does Wasabi load your hardware wallet?
### 3. Can you send transaction using Wasabi and your hardware wallet?

## Step 3: Report Results

Report the results on GitHub by commenting under one of the following pull requests: [PR #1341](https://github.com/zkSNACKs/WalletWasabi/pull/1341) or [PR #1905](https://github.com/zkSNACKs/WalletWasabi/pull/1905).

Please include your OS version and your hardware wallet type.
