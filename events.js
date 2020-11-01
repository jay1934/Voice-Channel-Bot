const { Permissions, Collection } = require('discord.js');
const {
  categoryID,
  channelID,
  newChannelName: name,
  delayBeforeDeletion: delay,
} = require('./config.js');

const channels = new Collection();

module.exports = (client) => {
  client.on(
    'voiceStateUpdate',
    async ({ channel: oldChannel }, { guild, member, channel }) => {
      if (channel && channel.id === channelID) {
        const existing = channels.get(member.id);
        if (existing) return member.voice.setChannel(existing);
        guild.channels
          .create(
            name
              .replace(/{tag}/g, member.user.tag)
              .replace(/{user}/g, member.user.username),
            {
              type: 'voice',
              parent: categoryID,
              permissionOverwrites: [
                { id: guild.id, deny: ['VIEW_CHANNEL', 'CONNECT'] },
                { id: member.id, allow: Permissions.ALL },
              ],
            }
          )
          .then((vc) => {
            member.voice.setChannel(vc);
            channels.set(member.id, vc.id);
          });
      } else if (
        oldChannel &&
        channels.some((id) => id === oldChannel.id) &&
        !oldChannel.members.size
      ) {
        setTimeout(() => {
          if (!oldChannel.deleted && !oldChannel.members.size)
            oldChannel.delete();
        }, delay);
      }
    }
  );
  client.on('channelDelete', (channel) => {
    const user = channels.findKey((id) => id === channel.id);
    if (user) channels.delete(user);
  });
};
