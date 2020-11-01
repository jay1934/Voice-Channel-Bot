const { Client } = require('discord.js');

const client = new Client();

const { token } = require('./config.js');
require('./events.js')(client);

client.login(token);
