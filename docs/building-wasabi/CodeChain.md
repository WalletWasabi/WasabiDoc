---
{
  "title": "CodeChain",
  "description": "A guide on how to use Code Chain to sign and distribute the Wasabi source and package. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# CodeChain

[[toc]]

## Rational

### The Problem

For high security software like Wasabi, we need to take extra care that the code is well reviewed by different peers, and that users run exactly that software, and are not victim of a targeted backdoor attack.
Current best practice is to have PGP signatures of the developers on the individual code commits, as well as by the maintainers on every released compiled package.
However, users do not verify the git commit signatures, and only a few verify the build signatures.
Packages are distributed on the Wasabi website, with no verification of what the most recent version is.

There are several problems with such an approach:
- The PGP keys can be very and this long validity time makes stolen keys disastrous.
- They are stored on a network server and thus easily stolen.
- There is no method for key rotation.
- Only one key signs the package, this is a single point of failure.
- The verification is rather combersom, especially for commit signatures.
- Users cannot verify which version of the package is the most recent one.

The main attacks of such a signing and distribution process are:
- Key compromise (attacker can produce valid signatures).
- Developer coersion (wrench attack, blackmailing or bribing).
- Regression (supression of updates).

:::danger
This is far from optimal.
We can and must do better.
:::

