/**
 * This middleware helps you to deal with users who blocked your bot.
 * @param {Object} options To handle user block pass onUserBlock function.
 */
module.exports = (options) => {
    const config = Object.assign({ onUserBlock: () => {} }, options);

    return (ctx, next) => {
        if (!ctx.updateType) {
            const chatType = ctx.update?.my_chat_member?.chat?.type;
            const userId = ctx.update?.my_chat_member?.from?.id;
            const action = ctx.update?.my_chat_member?.new_chat_member?.status;

            return chatType === 'private' && action === 'kicked' ? config.onUserBlock(ctx, next, userId) : next();
        }

        return next();
    };
};
