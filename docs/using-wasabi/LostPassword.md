---
{
  "title": "Lost Password Strategy",
  "description": "An explanation of the design decisions in Wasabi to protect you from losing and forgetting your password. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Lost Password Strategy

It is common that users lose or mistype their passwords.
While we have limited capabilities to prevent it, we still can do a few things.
Here we explain some of the tricks we had in mind to help Wasabikas avoid losing their password.

[[toc]]

## Moving Password Confirmation to Next Page

This also aims to disrupt the flow of the user.
If the user does not just have to repeat the password, but rather write password, do some other task, and confirm password, then it's more likely issues are caught before they happen.

## Password Tester

For the first time loading after the wallet generation, the password tester is mandatory.
Yet the user can at any time test the password here, without needing to load the wallet.
This provides uncertain users certainty.

![](/TestPassword.png)

## Password Finder

The most common issue is that the user mistypes his password.
We have built the [password finder](/using-wasabi/PasswordFinder.md) a yet rudimentary typo fixer that can find possible mistypings.
This simple yet powerful tool has already saved the sats of many Wasabikas!
