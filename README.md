
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-39-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- LOGO -->

<p align="center">
    <a href="https://developerdao.com">
    <img src="public/logo512.png" alt="logo" width="80" height="80"/>
    </a>
    <h2 align="center">DeveloperDAO</h2>
    <p align="center">
    A community of builders who believe in collective ownership of the internet.
    </p>
</p>

[![Chat on Discord](https://img.shields.io/badge/chat-Discord-7289DA?logo=discord)][Discord] [![Follow on Twitter](https://img.shields.io/badge/social-Twitter-1DA1F2?logo=twitter)](https://twitter.com/developer_dao) [![See on Etherscan](https://img.shields.io/badge/MintNFT-Ethereum-3C3C3D?logo=ethereum)](https://etherscan.io/token/0x25ed58c027921e14d86380ea2646e3a1b5c55a8b#writeContract)

<!-- Table of Contents -->

<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ul>
    <li><a href="#what-is-a-dao">What is a DAO</a></li>
    <li><a href="#what-is-developerDAO">What is  DeveloperDAO</a></li>
    <li><a href="#how-do-i-join">How do I join?</a></li>
    <li><a href="#what-is-this-repo">What is this repo?</a></li>
    <li><a href="#developing">Developing</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contributors-">Contributors</a></li>
</ul>


## What is a DAO

DAO stands for **D**ecentalized **A**utonomous **O**rganisation. That is a group of people with shared goals/mission that are governed by an agreed set of rules coded into a smart contract(s) on a blockchain.

If you want to learn more about DAOs, check out Cooper Turley's blog at https://alias.co/coopahtroopa/essays, mainly ["The Rise of Micro-Economies"](https://coopahtroopa.mirror.xyz/gWY6Kfebs9wHdfoZZswfiLTBVzfKiyFaIwNf2q8JpgI).

## What is DeveloperDAO

The project was started as an experiment by [Nader Dabit](https://twitter.com/dabit3) to see what can be achieved when we bring together talented and like-minded people who are interested in learning about and building on Web3.

## How do I join?

The DAO operates inside our [discord server](https://discord.gg/ASjBPJuNhS). To gain access to this server you need to own a [Devs for Revolution](https://opensea.io/collection/devs-for-revolution) NFT. The contract for purchasing one [can be found on etherscan.io](https://etherscan.io/address/0x25ed58c027921e14d86380ea2646e3a1b5c55a8b#writeContract). If you're not sure how to mint an NFT, [check out this how-to article](https://jonkuperman.com/how-to-join-developer-dao/) by @jkup.

Whilst there is no charge for the NFT you will have to pay a "gas fee" for the Ethereum Blockchain network in order to mint one. This fee can range wildy from about $40 up to and over $400 at peak times. You can check current gas fee uisng the [Etherum gas price tracker](https://etherscan.io/gastracker). If the fee is high you may want to wait and come back later.

That said, there is a limited supply of NFT's that can be created so don't wait too long!

To find available tokenIDs you can mint try this tool created by the community - https://ddao.ibby.dev/.

If you get stuck please reach out on our [Discord] and we'd be happy to help.

## What is this repo?

This is the code for the [public DeveloperDAO site](https://developerdao.com/).

At the moment it allows members to view their genesis NFT by entering in its ID. As the community takes shape we will decide what this website becomes and build it as a collective.

## Built with

- [React.js](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Chakra UI](https://chakra-ui.com/)
- [Yarn](https://yarnpkg.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [Husky](https://typicode.github.io/husky/#/)

## Developing

### Local Development Environment

**Note:** Make sure you have the latest version of node installed `^14.17.6`.

```bash
cd developer-dao;
nvm install; # to install the version in .nvmrc
```

1. Clone this repo with git
2. Install dependencies by running `yarn`
3. Start the development server with `yarn dev`
4. Open development site by going to `http:localhost:3000`
5. To test Walletconnect functionality, copy `.env.development` to `.env.local` and fill in your `INFURA_ID`.
   `INFURA_ID` can be easily obtained by register at <https://infura.io/>, then create a new Ethereum project for free.

### Deployment

This project uses Vercel to manage deployments. We use the Vercel GitHub integration to automatically deploy in two situations:

- When code is merged into `main`, a production deployment is triggered. Vercel will build the project and deploy it to `developerdao.com`.
- When a pull request is created, a preview deployment is triggered. Vercel will build the project from the PR's code and deploy it to an auto-generated URL.

In both cases, Vercel runs `next build` to build the project. Since running `next build` automatically sets `NODE_ENV` to `production`, if you need to distinguish between an actual production deployment and a PR preview deployment (example: we only want to run code that connects to analytics in production and not for preview deploys), use the `NEXT_PUBLIC_VERCEL_ENV` (`process.env.NEXT_PUBLIC_VERCEL_ENV`) environment variable. This variable exists in Vercel and provides the following values:

| Vercel Environment | value |
| --- | --- |
| Production | `production` |
| Preview | `preview` |
| Development | `development` |

## Contributing

Thanks for showing interest in contributing to Developer DAO. Before submitting any changes please review our contributing gudielines in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/aesthytik"><img src="https://avatars.githubusercontent.com/u/26917061?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Vipin Kumar Rawat</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=aesthytik" title="Code">💻</a></td>
    <td align="center"><a href="https://thomaslui.me/"><img src="https://avatars.githubusercontent.com/u/8930332?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Thomas Lui</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=thomasmetta" title="Documentation">📖</a></td>
    <td align="center"><a href="http://xdrdak.github.io/"><img src="https://avatars.githubusercontent.com/u/1198051?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Xavier Drdak</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=xdrdak" title="Code">💻</a> <a href="https://github.com/Developer-DAO/developerdao.com/commits?author=xdrdak" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/aej11a"><img src="https://avatars.githubusercontent.com/u/10066422?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew Jones</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=aej11a" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/nheingit"><img src="https://avatars.githubusercontent.com/u/60185486?v=4?s=100" width="100px;" alt=""/><br /><sub><b>nheingit</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=nheingit" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Canopix"><img src="https://avatars.githubusercontent.com/u/4460417?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Emanuel Canova</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=Canopix" title="Code">💻</a> <a href="#translation-Canopix" title="Translation">🌍</a></td>
    <td align="center"><a href="https://kempsterrrr.xyz/"><img src="https://avatars.githubusercontent.com/u/9025997?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Will Kempster</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=kempsterrrr" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://cbetz.com/"><img src="https://avatars.githubusercontent.com/u/458549?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Christopher Betz</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=cbetz" title="Code">💻</a></td>
    <td align="center"><a href="https://medium.com/@codingwithmanny"><img src="https://avatars.githubusercontent.com/u/318082?v=4?s=100" width="100px;" alt=""/><br /><sub><b>manny</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=codingwithmanny" title="Code">💻</a> <a href="#design-codingwithmanny" title="Design">🎨</a></td>
    <td align="center"><a href="https://with-heart.me/"><img src="https://avatars.githubusercontent.com/u/1954752?v=4?s=100" width="100px;" alt=""/><br /><sub><b>with-heart</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=with-heart" title="Code">💻</a></td>
    <td align="center"><a href="https://kavimaluskam.dev/"><img src="https://avatars.githubusercontent.com/u/19992414?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alex Kam</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=kavimaluskam" title="Code">💻</a> <a href="#translation-kavimaluskam" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/MGrin"><img src="https://avatars.githubusercontent.com/u/2393862?v=4?s=100" width="100px;" alt=""/><br /><sub><b>MGrin</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=MGrin" title="Code">💻</a> <a href="#translation-MGrin" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/gjsyme"><img src="https://avatars.githubusercontent.com/u/4706001/v4?s=100" width="100px;" alt=""/><br /><sub><b>Greg Syme</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=gjsyme" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/Dhaiwat10"><img src="https://avatars.githubusercontent.com/u/39617427?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dhaiwat Pandya</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=Dhaiwat10" title="Code">💻</a> <a href="https://github.com/Developer-DAO/developerdao.com/pulls?q=is%3Apr+reviewed-by%3ADhaiwat10" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.acollectionofatoms.me"><img src="https://avatars.githubusercontent.com/u/7197998?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Adam</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=ACollectionOfAtoms" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/narbs91"><img src="https://avatars.githubusercontent.com/u/29411347?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Narb</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=narbs91" title="Code">💻</a></td>
    <td align="center"><a href="https://bandism.net/"><img src="https://avatars.githubusercontent.com/u/22633385?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ikko Ashimine</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=eltociear" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/moiz-lakkadkutta"><img src="https://avatars.githubusercontent.com/u/59568435?v=4?s=100" width="100px;" alt=""/><br /><sub><b>moiz-lakkadkutta</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=moiz-lakkadkutta" title="Code">💻</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/nazeeh-vahora-a48abb196/"><img src="https://avatars.githubusercontent.com/u/56908732?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nazeeh Vahora</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=Nazeeh21" title="Code">💻</a> <a href="#maintenance-Nazeeh21" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/miralsuthar"><img src="https://avatars.githubusercontent.com/u/57826091?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Miral Suthar</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=miralsuthar" title="Code">💻</a> <a href="#maintenance-miralsuthar" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://trevorfrench.com"><img src="https://avatars.githubusercontent.com/u/42419234?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Trevor French</b></sub></a><br /><a href="#translation-TrevorFrench" title="Translation">🌍</a> <a href="https://github.com/Developer-DAO/developerdao.com/commits?author=TrevorFrench" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://marbiano.com"><img src="https://avatars.githubusercontent.com/u/5664?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martin Bavio</b></sub></a><br /><a href="#design-marbiano" title="Design">🎨</a></td>
    <td align="center"><a href="https://linkedin.com/in/davybraun"><img src="https://avatars.githubusercontent.com/u/543614?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Davy Peter Braun</b></sub></a><br /><a href="#translation-dheavy" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/nippold"><img src="https://avatars.githubusercontent.com/u/32570685?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dennis</b></sub></a><br /><a href="#translation-nippold" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/sijeesh-02"><img src="https://avatars.githubusercontent.com/u/4103618?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sijeesh Joshi</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=sijeesh-02" title="Code">💻</a> <a href="https://github.com/Developer-DAO/developerdao.com/commits?author=sijeesh-02" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/marcusdiaz"><img src="https://avatars.githubusercontent.com/u/4324727?v=4?s=100" width="100px;" alt=""/><br /><sub><b>marcusdiaz</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=marcusdiaz" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/cmotta"><img src="https://avatars.githubusercontent.com/u/4283535?v=4?s=100" width="100px;" alt=""/><br /><sub><b>cmotta</b></sub></a><br /><a href="#translation-cmotta" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/rin-st"><img src="https://avatars.githubusercontent.com/u/25638585?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rinat Akhunianov</b></sub></a><br /><a href="#translation-rin-st" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://nagmakapoor.com"><img src="https://avatars.githubusercontent.com/u/16668970?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nagma</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=nagmak" title="Code">💻</a></td>
    <td align="center"><a href="http://www.ibby.dev"><img src="https://avatars.githubusercontent.com/u/23090443?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Brian Eter</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=Ibby-devv" title="Code">💻</a> <a href="https://github.com/Developer-DAO/developerdao.com/commits?author=Ibby-devv" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/theprojectcode"><img src="https://avatars.githubusercontent.com/u/88997637?v=4?s=100" width="100px;" alt=""/><br /><sub><b>theprojectcode</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=theprojectcode" title="Code">💻</a></td>
    <td align="center"><a href="https://embiem.me"><img src="https://avatars.githubusercontent.com/u/3866457?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martin Beierling-Mutz</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=embiem" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/erain9"><img src="https://avatars.githubusercontent.com/u/77944593?v=4?s=100" width="100px;" alt=""/><br /><sub><b>erain9</b></sub></a><br /><a href="#translation-erain9" title="Translation">🌍</a></td>
    <td align="center"><a href="http://carmen0208.github.io"><img src="https://avatars.githubusercontent.com/u/3668156?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Carmen Liu</b></sub></a><br /><a href="#translation-carmen0208" title="Translation">🌍</a></td>
    <td align="center"><a href="http://imogu.us"><img src="https://avatars.githubusercontent.com/u/536970?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Cai Yuanqing</b></sub></a><br /><a href="#translation-caiiiyua" title="Translation">🌍</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://amazingandyyy.com"><img src="https://avatars.githubusercontent.com/u/7886068?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andy Chen</b></sub></a><br /><a href="#translation-amazingandyyy" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/G3root"><img src="https://avatars.githubusercontent.com/u/84864519?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Nafees Nazik</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=G3root" title="Code">💻</a></td>
    <td align="center"><a href="http://buxmann.dev"><img src="https://avatars.githubusercontent.com/u/21178318?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Martin Buxmann</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=mbuxmann" title="Code">💻</a></td>
    <td align="center"><a href="http://raza.run"><img src="https://avatars.githubusercontent.com/u/42661870?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Raza</b></sub></a><br /><a href="https://github.com/Developer-DAO/developerdao.com/commits?author=AlmostEfficient" title="Code">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Support
<div>
<a href="https://vercel.com?utm_source=developdao&utm_campaign=oss">
<img width="170px" src="https://user-images.githubusercontent.com/8930332/133003096-dbf81aa9-d165-49fd-b2dd-0108e32138a6.png" alt="Powered By Vercel" />
</a>
</div>
<div>
<p align="left">Thanks to Vercel sponsoring this project by hosting it for free</p>
</div>

[Discord]: https://discord.gg/ASjBPJuNhS
