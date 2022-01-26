# Telegraf User Block

[Telegraf (Telegram bot framework)](https://github.com/telegraf/telegraf) middleware that helps you to handle users who blocked your bot.

## Installation

```js
$ npm i telegraf-userblock
```

## Example

```js
const Telegraf = require('telegraf');
const userBlock = require('telegraf-userblock');

const bot = new Telegraf(process.env.TOKEN);

bot.use(
    userBlock({
        onUserBlock: (ctx, next, userId) => {
            console.log('This user %s has blocked the bot.', userId);
            return next();
        },
    })
);

bot.launch();
```

## API

### Options

-   `onUserBlock`: action after some user blocked your bot.

```js
{
    onUserBlock: (ctx, next, userId) => {
        // ctx — current context
        // next — go ahead after work of middleware's done
        // userId — id of the user who blocked the bot, alternatively you could use ctx.update.my_chat_member.from.id
    },
};
```
