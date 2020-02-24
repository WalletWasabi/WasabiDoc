---
{
  "title": "Lock Screen",
  "description": "A feature that allows you to lock your Wasabi Wallet from being viewed or used while it is running, and then unlock it at any time with a user-specified PIN. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Lock Screen

The `Lock Screen` feature allows you to lock your Wasabi Wallet from being viewed or used while it is running, and then unlock it at any time with a user-specified PIN.

[[toc]]

:::warning Caution!
This feature is only intended to be used if you are stepping away from your computer for a very short time.

The PIN can be deleted and your wallet accessed by anyone that gets physical access to your computer and knows how to find and alter your `UIConfig.json` file.

Do not treat this feature as a strong, fail-safe lock on your wallet.
:::

## How to set the Lock Screen feature

You can active the `Lock Screen` feature by going to the menu bar on the top/left corner of your Wasabi Wallet and clicking on `Tools`.
In the resulting dropdown menu, click on `Settings`.

![](/LockScreenSet1.png)

Then, scroll down the `Settings` page until you see the `Lock Screen` section.

![](/LockScreenSet2.png)

Choose and enter a numerical PIN up to 10 digits in length in the PIN box, and click on `Set`.

## How to lock your screen

You can now lock your screen in two ways:

1. Hit `Ctrl-L` on your keyboard.
2. On the top/left menu bar, click on `File`, then `Lock Screen`.

Your wallet is now locked to anyone who does not have your PIN.

To unlock, just enter the correct PIN in the provided box.

![](/LockedScreen.png)

## How to clear your Lock Screen PIN

If you wish to delete or change your PIN:

1. Go to the top/left menu bar and click on `Tools`, then `Settings`.
2. Scroll down the `Settings` page to the `Lock Screen` section.
3. Enter your PIN in the PIN box, and click `Clear`.
4. If a new PIN is desired, enter it in the PIN box and click `Set`, otherwise the `Lock Screen` feature is now disabled.

## If you forget your PIN

If you have forgotten your PIN, you can delete it with these steps:

1. Shut down Wasabi Wallet.
2. Open your `UIConfig.json` file using a text editor.
This file can be found here:
* Windows: `/Users/{your username}/AppData/Roaming/WalletWasabi/Client`
* Linux: `/Home/.walletwasabi/client`
* MacOS: `/Users/{your username}/.walletwasabi/client`

:::tip
You need to mark the “show hidden files” setting to see it.

3. Find `LockScreenPinHash` at the bottom of this file, and delete the string of characters that are between the two quotation marks.

![](/UIConfigLocked.png)

When you are finished, it should look like this:

![](/UIConfigUnlocked.png)

Save your changes to this file, and re-start Wasabi.
The `Lock Screen` function should now be disabled, and you can create a new PIN if desired.
