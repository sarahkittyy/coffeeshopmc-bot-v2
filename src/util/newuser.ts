import { MessageEmbed, GuildMember } from 'discord.js';

export default function newuser(m: GuildMember): MessageEmbed {
	return new MessageEmbed()
		.setColor('#00ff00')
		.setTitle('new friend!!!')
		.setDescription(`welcome, ${m.user.username}! <3`)
		.setThumbnail(m.user.avatarURL())
		.setFooter(`thewe are nyow ${m.guild.memberCount} people here <3`)
		.setTimestamp(new Date());
};