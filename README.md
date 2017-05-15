<h1 align="center">
	<img src="logo.png" alt="stalkr | GitHub | Commits Feed">
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

<!-- tocstop -->

## Getting Started

1. Make sure you define the `ENV` variables below:

    ```sh
    # Pusher credentials
    export PUSHER_ID='300844'
    export PUSHER_KEY='5cdc3c711f606f43aada'
    export PUSHER_SECRET='7bf9214d039b830b3b3c'

    # GitHub credentials
    export GITHUB_TOKEN='f039816270db489b0a062b659ff51be6a73cee69'

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

If everything goes okay, it should now be running at `localhost:3000`.
