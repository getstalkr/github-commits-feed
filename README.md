<h1 align="center">
	<img src="docs/images/banner.png" alt="stalkr | GitHub | Commits Feed">
	<br>
	<br>
</h1>

<br>
<br>

<p align="center">
	<a href="https://getstal.kr">stalkr</a> micro service which feeds our clients with GitHub push events.
</p>

<br>

---

<p align="center">
	<a href="">
	<img
	src="https://img.shields.io/badge/stalkr-example-orange.svg" alt="Sample Badge">
	</a>&nbsp;&nbsp;&nbsp;
	<a href="">
	<img
	src="https://img.shields.io/badge/stalkr-example-orange.svg" alt="Sample Badge">
	</a>
</p>

<br>

## Table of Contents

<!-- DO NOT EDIT THE COMMENTS BELOW -->

<!-- toc -->

- [What](#what)
  * [Our Product](#our-product)
  * [How it Works](#how-it-works)
    + [Architectural Overview](#architectural-overview)
      - [The Registry](#the-registry)
      - [The CLI](#the-cli)
      - [Clients](#clients)
        * [Smart TVs](#smart-tvs)
      - [The Cloud](#the-cloud)
      - [PaaS/BaaS/FaaS](#paasbaasfaas)
- [Usage](#usage)
  * [A Few Technical Notes](#a-few-technical-notes)
    + [WebHooks](#webhooks)
    + [Pusher](#pusher)
    + [GitHub](#github)
  * [Getting Started](#getting-started)
    + [Locally](#locally)
    + [Deploying](#deploying)
      - [now.sh](#nowsh)
    + [On GitHub](#on-github)

<!-- tocstop -->

## What

### Our Product

<p align="center">
	<img src="docs/images/logo.png" alt="stalkr Logo" width="400px">
</p>

*stalkr* is a simple–yet powerful–set of tools which gathers data from both continuous integration and application infrastructure monitoring tools in order to make it easier to monitor the whole developing process, in a way the entire team can see at a glance, from the very first commit to the final release.

Although our experimental release is a simple client made for the  TV, we do intend to make *stalkr* clients available on as much platforms as possible, which include:

- Other **Smart TV** platforms–e.g. Android TV, webOS, Tizen etc.;

- **SmartWatch** platforms–e.g. watchOS, Android Wear etc.;

- Popular **Mobile** platforms–e.g. iOS, Android etc.;

- Popular **Desktop** OSs–e.g. macOS, Linux, Windows etc.;

- The **Web** itself.

If you can't wait to check it out:

<p align="center">
  <a href="https://itunes.apple.com/br/app/.../...">
    <img alt="Download on the App Store" src="docs/images/badge.png" width="150px">
  </a>
</p>

### How it Works

#### Architectural Overview

> easy peasy lemon squeezy!

<p align="center">
  <a href="https://itunes.apple.com/br/app/.../...">
    <img alt="Download on the App Store" src="docs/images/stack-overview.png" width="900px">
  </a>
</p>

##### The Registry

> Coming soon.

Use the *stalkr* **Package Catalog**/Registry to quickly and easily find open-source packages to speed your development.

It basically discovers all the available *stalkr* plugins in popular back-end registries out there–e.g. *[node.js](https://nodejs.org/en/)-based* plugins available [npmjs.com](https://www.npmjs.com/) registry can be discovered if they contain `stalkr-plugin` value in `keywords` field of `package.json`.

##### The CLI

> Coming soon.

Use the *stalkr* **CLI** to quickly bootstrap and deploy your packages right from your terminal.

It basically works as an abstraction layer over commom CLI tools used to get a *stalkr* package up and running.

##### Clients

As stated above, we do intend to have multiple clients to fetch data from your deployed micro services.

###### Smart TVs

<p align="center">
	<img src="docs/images/screenshot_main.png" alt="stalkr  TV" width="650px">
</p>

Right now, only the  TV one is available for download at the [App Store]().

##### The Cloud

> Coming soon.

The *stalkr* **Cloud** is *PaaS* which behaves as one our revenue streams and helps your organizing your projects across **organizations**, **teams**, **roles** etc.

**Organizations** are great for creating distinct groups of users within your company, such as divisions or groups working on similar projects.

**Teams** give organizations the ability to create groups of members and control access to projects. Team members can be granted read, write, or admin permissions to specific projects.

##### PaaS/BaaS/FaaS

Those are the services where you deploy any stalkr micro service–such as the one whose documentation you're reading.

More information on these topics can be found at [Server](#server).

## Usage

### A Few Technical Notes

#### WebHooks

Webhooks are *user-defined HTTP callbacks* which are usually triggered by some event, such as pushing code to a repository–**which is what happens here**–or a comment being posted to a blog. When that event occurs, the source platform makes an HTTP request to the URI which as been previously set for the webhook.

Users can set them to cause events on one site to invoke behaviour on another. The action taken may be anything. Common uses are to trigger builds with continuous integration systems or to notify bug tracking systems–**and that's how stalkr works**. Since they use HTTP, they can be integrated into web services without adding new infrastructure.

#### [Pusher](pusher.com)

We intend to work over a bunch of different realtime frameworks–e.g. [Socket.IO](https://socket.io/), [Primus](https://github.com/primus/primus) and [ws](https://github.com/websockets/ws)–and services–e.g. [Ably](https://www.ably.io/), [PubNub](https://www.pubnub.com/) and [Pusher](pusher.com) itself–based on a commom protocol for transporters.

But now Pusher has shown to achieve good documentation/examples, a solid API, and great backend/debug tools, which led us to deal, in our *Minimum Viable Product*, only with Pusher.

Then you need to [create an account](https://dashboard.pusher.com/accounts/sign_up), and make a note of your `app_id`, `app_key` and `app_secret` for each project you'd like to integrate with *stalkr*.

#### [GitHub](https://github.com)

Depending on how much `push` events your repo triggers, it can be necessary to add a Github API token:

1. Head on over to your [settings](https://github.com/settings/tokens) to manage personal API tokens.

1. Then clink on `Generate new token`.

1. Put the description which is more expressive for you.

1. Check both `repo` and `user` scopes.

1. Then click on `Generate token`.

### Getting Started

#### Locally

1. Make sure you define the `ENV` variables below:

    ```sh
    # Pusher credentials
    export PUSHER_ID='123456'
    export PUSHER_KEY='4JEUi0C2UT49m872Euc5'
    export PUSHER_SECRET='Bzx2MlrMbNtBpZv391J1'

    # GitHub credentials
    export GITHUB_TOKEN='5K78650K9PGuTHgbVOGl26l9nQ6JuLyS'

    # Basic stalkr cell metadata
    export STALKR_TEAM='myTeam'
    export STALKR_PROJECT='myProject'
    ```

1. Clone this repository:

    ```sh
    git clone https://github.com/stalkr-io/github-commits-feed
    ```

1. Install all dependencies:

    ```sh
    # via npm
    npm install
    # or using yarn
    yarn
    ```

1. Launch it:

    ```sh
    # via npm
    npm start
    # or using yarn
    yarn start
    ```

If everything goes okay, it should now be running at [`localhost:3000`](http://localhost:3000).

#### Deploying

##### [now.sh](now.sh)

1. Install *now* globally:

    ```sh
    # via npm
    npm install -g now
    # or using yarn
    yarn global add now
    ```

1. Run *now* with the `-e` flag to define these environment variables:

    ```sh
    now -e PUSHER_ID='123456' \
           PUSHER_KEY='4JEUi0C2UT49m872Euc5' \
           PUSHER_SECRET='Bzx2MlrMbNtBpZv391J1' \
           GITHUB_TOKEN='5K78650K9PGuTHgbVOGl26l9nQ6JuLyS' \
           STALKR_TEAM='myTeam' \
           STALKR_PROJECT='myProject'
    ```

#### On GitHub

1. Sign in, then select the related repository you own.

1. Click on `Settings` on the top panel.

1. Then click on `Webhooks & Services` on the left panel.

1. Click on the `Add WebHook` Button.

1. Paste the URL where you've deployed your *stalkr* webhook in the `URL` form field.

1. Select `application/json` as the content type.

1. Remain the `Just the push event.` checkbox checked.

1. Remain the `Active` checkbox checked.

1. Click on `Add webhook` to save the webhook.

Your configuration should look similar to this:

<p align="center">
	<img src="docs/images/github-adding-webhook.png" alt="Github Webhook" width="850px">
</p>

---

**Maintainer**:

> [ythecombinator.me](https://ythecombinator.me) &nbsp;&middot;&nbsp;
> GitHub [@ythecombinator](https://github.com/ythecombinator) &nbsp;&middot;&nbsp;
> Twitter [@ythecombinator](https://twitter.com/ythecombinator)
