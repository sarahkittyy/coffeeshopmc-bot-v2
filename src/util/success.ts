import { MessageEmbed } from 'discord.js';

export default function success(msg: string, submsg: string = ''): MessageEmbed {
	return new MessageEmbed()
		.setColor('#00ff00')
		.setTitle(msg)
		.setTimestamp(new Date())
		.setDescription(submsg);
}