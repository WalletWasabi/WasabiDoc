---
{
  "title": "Contribution FAQ",
  "description": "Frequently asked questions about how Wasabikas can support the project. This is the Wasabi documentation, an archive of knowledge about the open-source, non-custodial and privacy-focused Bitcoin wallet for desktop."
}
---

# Contributions to Wasabi

:::details
### How to donate to Wasabi Wallet?

Adam Ficsor had a donation address for a few years while he was working alone on Wasabi.
It's not the case anymore.
Though it's most likely not an issue to accept Bitcoin donations, zkSNACKs team discontinued accepting donations because they don't want to get into accidental legal gray areas.
Wasabi has a coordinator fee that is capped at 0.3% for every CoinJoin and it became zkSNACKs' main income.
To help Wasabi development, just CoinJoin your bitcoins via Wasabi!
If you want to read more about fees here is a nice explanation: [What are the fees for the CoinJoin](/FAQ/FAQ-UseWasabi.md#what-are-the-fees-for-the-coinjoin).
:::

## The Wasabikas of the dojo

:::details
### Who is contributing to Wasabi already?

There are many Wasabikas working with great effort and care to manifest this powerful tool of self defense.
[Over 40 peers](https://github.com/zkSNACKs/WalletWasabi/graphs/contributors) have already contributed to the repository, and more and more supporters are joining the [dojo](/building-wasabi/Dojo.md).
Four of the main contributors are [Ádám Ficsor](https://github.com/nopara73) [co-founder and former CTO of [zkSnacks Ltd](https://zksnacks.com/), co-author of the [zero link Bitcoin fungibility framework](https://github.com/nopara73/ZeroLink)], [Lucas Ontivero](https://github.com/lontivero) [lead engineer of [zkSnacks Ltd](https://zksnacks.com/)], [Dávid Molnár](https://github.com/molnard) [[zkSnacks Ltd](https://zksnacks.com/) employee], and [Dan Walmsley](https://github.com/danwalmsley) [maintainer of [Avalonia UI Framework](https://github.com/AvaloniaUI/Avalonia)].
For an inclusive list of all the Wasabikas, not just the code developers, please visit the [dojo](/building-wasabi/Dojo.md).

@[youtube](F8xNSOhbWrw)

@[youtube](Yg7_3LIutJA)

@[youtube](X9BB_9faJE8)
:::

:::details
### Who reviews and merges the pull requests?

As the Wasabi code is libre and open source, anyone has access to review the latest contributions and browse the [open pull requests](https://github.com/zkSNACKs/WalletWasabi/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc).
The review of any Wasabika is not just deeply appreciated, but desperately needed!
Wasabi is cutting-edge, high security software, and there can never be enough eyes seeking and squashing bugs.
Especially review by experienced C# developers are vitally important, yet even typo and grammar fixes are necessary.

There are three developers who have the ability to merge code into master branch.
Per default, they [require at least one approving review](https://help.github.com/en/github/administering-a-repository/about-required-reviews-for-pull-requests) by one of the other maintainers before a pull request can be merged.
However, since all three are administrators, they can still force the merge without the approval of others, but this will be noticed by many contributors.
- [Ádám Ficsor](https://github.com/nopara73) [co-founder and former CTO of [zkSNACKs Ltd](https://zksnacks.com/), co-author of the [zero link Bitcoin fungibility framework](https://github.com/nopara73/ZeroLink)] is the [admin](https://help.github.com/en/articles/repository-permission-levels-for-an-organization) of the [Wasabi Wallet repository](https://github.com/zksnacks/walletwasabi).
- [Lucas Ontivero](https://github.com/lontivero) [lead engineer of [zkSNACKs Ltd](https://zksnacks.com/)] is also [admin](https://help.github.com/en/articles/repository-permission-levels-for-an-organization) of the [Wasabi Wallet repository](https://github.com/zksnacks/walletwasabi).
- [Dávid Molnár](https://github.com/molnard) [CTO of [zkSNACKs Ltd](https://zksnacks.com/)] is also [admin](https://help.github.com/en/articles/repository-permission-levels-for-an-organization) of the [Wasabi Wallet repository](https://github.com/zksnacks/walletwasabi).
:::

:::details
### What is on the future roadmap of Wasabi development?

Wasabi is far from complete, there are many Wasabikas contributing every day to make this tool of self defense even more powerful.
Because Wasabi is libre and open source software, anyone can support the project without asking for permission.
Thus it is relatively tricky to give a precise roadmap with what will be implemented in the near and distant future.
You can check the [ToDo list](/building-wasabi/ToDo.md) for a somewhat up-to-date summary of the short term priorities of the next #twoweeks, and what might be implemented in the distant future.
:::

## You can become a Wasabika

:::details
### How should I start contributing to Wasabi?

Thank you for considering to support this beautiful libre and open source project!
Nobody owns this software, and thus it is the responsibility of everyone using it to contribute to its growth.
Thus your help is deeply appreciated, and very much needed!
First please read the [contribution checklist](/building-wasabi/ContributionChecklist.md) to get introduced to the project and to start out in the right direction.
You can also see the [ToDo list](/building-wasabi/ToDo.md) for inspiration of what other Wasabikas are tinkering on.
Join our [Slack](https://join.slack.com/t/tumblebit/shared_invite/enQtNjQ1MTQ2NzQ1ODI0LWIzOTg5YTM3YmNkOTg1NjZmZTQ3NmM1OTAzYmQyYzk1M2M0MTdlZDk2OTQwNzFiNTg1ZmExNzM0NjgzY2M0Yzg), [Telegram](https://t.me/WasabiWallet), [Riot](https://riot.im/app/#/room/#wasabiwallet:matrix.org) or [Sub-Reddit](https://www.reddit.com/r/WasabiWallet/), and check out the [GitHub](https://github.com/zkSnacks/WalletWasabi), so that you can stay up-to-date with the latest contributions.
:::

:::details
### Is there a bounty program?

Yes!
The beauty of Wasabi is that it's not just a very awesome wallet by default, but it has the additional opt-in CoinJoin service.
This is provided by [zkSnacks Ltd.](https://zksnacks.com), and in exchange for this additional service the user pays a coordinator fee.
In return, zkSnacks is supporting several developers to dedicate their full time to contribute to this open source project.
There are also projects like the [contribution game](/building-wasabi/ContributionGame.md) where a bounty is paid out to any contributor worthy the praise.
Specifically for the documentation, there is a monthly budget of 1.000 USD to cover for the maintenance and expansion of this knowledge archive.
:::

::::details
### How can I report a bug?

Code is speech, and can never be perfect.
Thus it is expected that there are many known and unknown bugs, quirks and issues in Wasabi.
Such a complex software requires constant and rigorous review by the developers and the users, this is everyone's responsibility working with Wasabi.

When you stumble upon an issue that needs fixing, please first check the open [issues](https://github.com/zkSNACKs/WalletWasabi/issues/) and [pull requests](https://github.com/zkSNACKs/WalletWasabi/pulls) if there is already someone working on it.
If yes, then you can comment your situation and bug report under the open issue.
If no, then please consider to [open a new issue](https://github.com/zkSNACKs/WalletWasabi/issues/new?template=bug-report.md) and give a detailed report on the problem.
It is especially helpful when you provide a step by step guide on how to reproduce what you have found.
There is constantly a lot of work done to the code base, thus it's good to know which version of Wasabi, and what operating system you are using.
In some cases it might be useful to see your logs, though please consider your privacy and encrypt this data properly in direct communication with the developers.

:::danger
If you find a bug that puts users' privacy or security at serious risk, please take great care with responsible disclosure!
Send an email to [adam.ficsor73@gmail.com](mailto:adam.ficsor73@gmail.com), preferably using PGP encryption [21D7 CA45 565D BCCE BE45 115D B4B7 2266 C47E 075E](https://github.com/zkSNACKs/WalletWasabi/blob/master/SECURITY.md).
:::
::::

:::details
### How can I request a feature?

Wasabi is a quite beautiful piece of software already.
Yet there are also 1001 things that could be just a little better, or even quite substantially superior.
The beauty and bain of libre and open source software is that it is never complete, there is always more work to be done.

Regardless if you are a new user of Wasabi, or a veteran black belt Wasabika, any suggestions on how to improve are desperately needed and very welcome.
Please first check the existing [issues](https://github.com/zkSNACKs/WalletWasabi/issues/) and [pull requests](https://github.com/zkSNACKs/WalletWasabi/pulls) if some one has the same feature request as you.
If yes, then you can comment your desired improvement under the open issue.
If no, then please consider to [open a new issue](https://github.com/zkSNACKs/WalletWasabi/issues/new?template=feature-request.md) and give a detailed request.
It makes sense to first explain the problem you have in the incumbent version of Wasabi, this is the place to express your frustrations and annoyances.
Then describe the solution that you have envisioned, with all the nuances and details of how this would fix your problem.
To flesh our your argument, please consider alternatives and different approaches to this feature request.
:::

:::details
### How can I get help and support?

You are already on the right track by first checking [this documentation](https://docs.wasabiwallet.io) for the knowledge you are seeking.
It's likely that you are not the first peer who has an issue and question, and hopefully one has curated the answer in here already.
You can use the search function in the top navbar to look for a specific topic, and the sidebar menu as a table of content.
Though often times it is quite useful to start a conversation with other Wasabikas about a specific problem.
It is useful to reach out to the contributors on [Twitter](https://twitter.com/wasabiwallet), [Reddit](https://old.reddit.com/r/WasabiWallet/), [Riot](https://riot.im/app/#/room/#wasabiwallet:matrix.org) and [Telegram](https://t.me/WasabiWallet).
If your trouble is specific to the code, then it might also be suitable to check the existing [GitHub issues](https://github.com/zkSNACKs/WalletWasabi/issues/) and open a new one.
:::

:::details
### What does the Wasabi project need help with?

Wasabi is libre and open source software, thus it relies on the support of several contributors on all fronts.
Of course, this includes coding new features, bug fixes and stability improvements.
Yet just equally important is the review of the commits of all other Wasabikas.
It's not just the contributions to the code, but also to the documentation and the effort to educate peers using Wasabi.
This includes education in meatspace tribe gatherings, but also in cyberspace peer support.
So basically, we need help with building and shilling Wasabi!
:::
