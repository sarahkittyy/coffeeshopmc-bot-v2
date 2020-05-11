import { config } from 'dotenv';
config();

import * as Discord from 'discord.js';
import onMessage from './message';

const bot = new Discord.Client();

bot.on('error', e => {
	console.error('an error occured! twyin to login again...');
	login();
});

bot.on('disconnect', () => {
	console.error('disconnected, twyin to log in again :))');
	login();
});

bot.on('message', onMessage);

function login() {
	bot.login(process.env.TOKEN)
	.catch(() => {
		console.error('couldn\'t log in!! ;-;');
	})
	.then(() => {
		console.log('logged in!! <3');
	})
}
login();