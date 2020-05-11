import * as Discord from 'discord.js';

export interface Command {
	command: string;
	args: string[];
	msg: Discord.Message;
};

export default function parseCommand(msg: Discord.Message): Command | undefined {
	let str = msg.content;
	if (!str.startsWith(process.env.PREFIX) || str.startsWith(process.env.PREFIX + ' ')) return;
	
	let split = str.split(' ')
		.filter(x => !!x)
		.map(s => s.trim());
		
	return {
		command: split[0].slice(process.env.PREFIX.length),
		args: split.slice(1),
		msg
	};
};