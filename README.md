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

## Table of Contents

<!-- DO NOT EDIT THE COMMENTS BELOW -->

<!-- toc -->

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
    + [On The TV](#on-the-tv)

<!-- tocstop -->

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

#### On The TV

<p align="center">
	<img src="http://i.imgur.com/4ujnxdN.png" alt="stalkr  TV tab 'New Dashboard'" width="650px">
</p>

1. Install the Stalkr on your  TV

1. Go to `New Dashboard` tab.

    > We recommend the use of one iPhone or remote keyboard to set the config in inputs.

1. You don't need to fill all the steps, but only the section `Dashboard` and, in the next sections, you'll need to fill only if you want this cell in your dashboard.

1. In order to know how to set a "Pusher Key" parameter, see the [Pusher](#Pusher) section.

---

**Maintainer**:

> [ythecombinator.me](https://ythecombinator.me) &nbsp;&middot;&nbsp;
> GitHub [@ythecombinator](https://github.com/ythecombinator) &nbsp;&middot;&nbsp;
> Twitter [@ythecombinator](https://twitter.com/ythecombinator)
