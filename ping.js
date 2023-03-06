const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {

	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pinga o bot'),

	async execute(interaction) {

        const embed = new EmbedBuilder()
            .setDescription(`${interaction.user}, meu ping é \`${interaction.client.ws.ping}.\``)
            .setColor("Green")

	    await interaction.reply({ embeds: [embed], ephemeral: true });
	},
};
