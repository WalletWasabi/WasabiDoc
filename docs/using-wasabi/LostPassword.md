---
{
  "title": "Lost Password Strategy",
  "description": "An explanation of the design decisions in Wasabi to protect you from losing and forgetting your password. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Lost Password Strategy

It is common that users lose or mistype their passwords.
While we have limited capabilities to prevent it, we still can do a few things.
Here we explain some of the tricks we had in mind to help Wasabikas avoid losing their passwords.

[[toc]]

## Moving Password Confirmation to Next Page

This aims to disrupt the flow of the user.
He does not just have to repeat the password, but rather write the password, do some other task, and confirm the password, then it's more likely issues are caught before they happen.

## Password Tester

The password tester is mandatory when loading the wallet for the first time (after its generation).
Yet the user can at any time test the password here, without loading the wallet.
This provides uncertain users certainty.

![](/TestPassword.png)

## Password Finder

The most common issue is that the user mistypes his password.
We have built the [password finder](/using-wasabi/PasswordFinder.md) a primitive typo fixer that can find possible mistypings.
This simple yet powerful tool has already saved the sats of many Wasabikas!
