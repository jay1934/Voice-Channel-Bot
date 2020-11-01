<div align="center">

![](/assets/banner.png)

## Voice Channels Bot

[Installation](#Installation) • [How to use](#How-To-Use) • [Demo](#Full-Demo)

---

## Installation

</div>

##### Prerequisite

- To use this bot, Node.js 12.0.0 or newer must be [installed](https://nodejs.org/en/download/).

##### Downloading and installing steps

1.  **[Download](https://github.com/jay1934/Voice-Channels-Bot/archive/main.zip)** the `zip` file.

2.  Configure the Bot:

    - Run `npm i`
    - You will need to [create a bot application](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot) in the **[developers space](https://discordapp.com/developers/applications/me)**
      - [**Make sure you enable the `GUILD_MEMBERS` and `GUILD_PRESENCES` intent**](https://media.discordapp.net/attachments/769862166131245066/771303808390266900/image0.png?width=1359&height=671)
    - Replace the placeholder values in [`config.js`](/config.js) (basically a JSON file, but I can add comments)

3.  Invite the Bot to your Server:

    - In your bot's application page, navigate to [OAUTH2](https://discord.com/developers/applications/771430839250059274/oauth2)
    - In the "scopes" section, select `bot`
    - In the "bot permission" section, select:

      - `ADMINISTRATOR`

      Theoretically, the bot would only need the `MOVE_MEMBERS` and `MANAGE_CHANNELS` permissions, although they can be quite janky in my experience, so I find it much easier just to give the bot every permission.

    - Copy and paste the generated invite link!

4.  Get the Bot Online
    - Run `node index.js`
    - **The bot is now operational ! 🎉**

---

<div align="center">

## How to Use

</div>

This bot's only feature is, when you join the channel specified in [`config.js`](/config.js), it will immediately create a channel specifically for you, and automatically move you there.

<br>

You will have all the permissions in this channel, such as to add other people, change the permissions, mute and move members, etc.

<br>

If the join back into the base voice channel while your channel is still available, it will simply move you back to that channel.

---

<div align="center">

## Full Demo

</div>

![](/assets/demo.gif)

I set the delay before deletion to just five seconds for the purpose of the video.
