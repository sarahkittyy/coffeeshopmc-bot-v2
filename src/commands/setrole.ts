import * as Discord from 'discord.js';
import { Command } from '../util/parseCommand';

import { success, error } from '../util';

export default function setrole(data: Command) {
	let { msg, args } = data;
	let guild = msg.guild;
	let author = msg.member;
	
	let color = args[0];
	let pronouns = args.slice(1).join(' ');
	
	console.log('checking args');
	if(args.length < 2) {
		return msg.channel.send(error('format: =>setrole <color> <pronouns>'));
	}
	
	console.log('creating role!!');
	guild.roles.create({
		data: {
			color,
			name: `== ${pronouns} ==`
		},
		reason: 'pronouns / color'
	}).then((requiredRole: Discord.Role) => {
		console.log('removing old role');
		let previous = author.roles.cache.find(r => {
			return r.name.startsWith('==') && r.name.endsWith('==');
		});
		
		if(previous) {
			console.log('previous role found, removing!');
			author.roles.remove(previous, 'new pronoun role requested')
			.catch(e => {
				msg.channel.send(error('couldn\'t remove old role ;-;'));
				console.error(`couldn\'t remove old role: ${e}`);
			})
			.then((m: Discord.GuildMember) => {
				console.log('addin the new role');
				m.roles.add(requiredRole, 'new role requested!! <33')
				.catch(e => {
					msg.channel.send(error('couldn\'t add new requested role ;-;'));
					console.error(`couldn't add the new role: ${e}`);
				})
				.then(() => {
					msg.channel.send(success('done!! <33'));
					console.log('role added!!');
				});
			})
		} else {
			console.log('no old role found, adding fresh role');
			author.roles.add(requiredRole, 'new role requested!! <33')
			.catch(e => {
				msg.channel.send(error('couldn\'t add new requested role ;-;'));
				console.error(`couldn\'t add new role: ${e}`);
			})
			.then(() => {
				msg.channel.send(success('done!! <33'));
				console.log('role added!!');
			});
		}
	}).catch(e => {
		msg.channel.send(error('couldn\'t create the role? for some reason???', '@ sarah for me plz thank u <33'));
		console.error(`creating role failed: ${e}`);
	});
};