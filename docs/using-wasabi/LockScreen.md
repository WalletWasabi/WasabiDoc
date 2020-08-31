---
{
  "title": "Lock Screen",
  "description": "A feature that allows you to lock your Wasabi Wallet from being viewed or used while it is running, and then unlock it at any time with a user-specified PIN. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Lock Screen

The `Lock Screen` feature allows you to lock your Wasabi Wallet from being viewed or used while it is running, and then unlock it at any time with a user-specified PIN.

:::warning No strong encryption
This feature only locks the GUI, it does not encrypt your public keys.
An attacker can circumvent the locked screen.
Do not treat this feature as a strong, fail-safe lock on your wallet.
:::

[[toc]]

---

## How to set the Lock Screen feature

In the `Settings` tab, go to the `Lock Screen` section.

![Wasabi Wallet Lock Screen feature](/SettingsLockScreen.png "Wasabi Wallet Lock Screen feature")

Choose and enter a numerical PIN up to 10 digits in length in the PIN box, and click on `Set`.

## How to lock your screen

You can now lock your screen in two ways:

1. Hit `Ctrl-L` on your keyboard.
2. On the top left menu bar, click on `File`, then `Lock Screen`.

![Lock Screen in Wasabi Wallet](/MenuFile.png "Lock Screen in Wasabi Wallet")

Now the GUI is locked until the correct PIN is entered in the box.

![Wasabi Wallet Locked with PIN](/LockedScreen.png "Wasabi Wallet Locked with PIN")

## How to clear your Lock Screen PIN

If you wish to delete or change your PIN:

1. In the `Settings` tab, go to the `Lock Screen` section.
2. Enter your PIN in the PIN box, and click `Clear`.
3. If a new PIN is desired, enter it in the PIN box and click `Set`, otherwise the `Lock Screen` feature is now disabled.

## If you forget your PIN

If you have forgotten your PIN, you can delete it with these steps.
Notice that an attacker can do the same to circumvent the screen lock without knowing the PIN.

1. Shut down Wasabi Wallet.
2. Open your `UIConfig.json` file using a text editor.
This file can be found in [Wasabi's Data Folder](/FAQ/FAQ-UseWasabi.md#where-can-i-find-the-wasabi-data-folder).
3. Find `LockScreenPinHash` at the bottom of this file, and delete the string of characters that are between the two quotation marks.

![Wasabi Wallet Lock Screen PIN Hash](/UIConfigLocked.png "Wasabi Wallet Lock Screen PIN Hash")

![Delete Lock Screen PIN Hash in Wasabi Wallet](/UIConfigUnlocked.png "Delete Lock Screen PIN Hash in Wasabi Wallet")

4. Save your changes to this file, and re-start Wasabi.

The `Lock Screen` function should now be disabled, and you can create a new PIN if desired.
