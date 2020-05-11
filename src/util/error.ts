import { MessageEmbed } from 'discord.js';

export default function error(msg: string, submsg: string = ''): MessageEmbed {
	return new MessageEmbed()
		.setColor('#ff0000')
		.setTitle(msg)
		.setTimestamp(new Date())
		.setDescription(submsg);
}