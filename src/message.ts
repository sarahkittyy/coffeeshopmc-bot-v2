import * as Discord from 'discord.js';

import { parseCommand, error } from './util';

import setrole from './commands/setrole';

export default function onMessage(msg: Discord.Message) {
	let data = parseCommand(msg);
	if(!data) return;
	
	let map = {
		setrole
	};
	
	if (data.command in map) {
		map[data.command](data);
	} else {
		msg.channel.send(error('command not found.'));
	}
};