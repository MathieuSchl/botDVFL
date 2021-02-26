const config = require("../storage/config.json");
const Discord = require("discord.js");

async function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports.run = async (bot) => {
    console.log(" ");
    console.log("Logged in as : " + bot.user.tag);
    console.log(" ");

    try {
        bot.basicFunctions.get("activity").run(bot);

        bot.enventIndex.get("cronTab").run(bot);
        bot.enventIndex.get("catchMessageInSpecialChannels").run(bot);

        bot.specialTextChannel.git.get("pull").ready(bot);

        bot.specialTextChannel["console"].get("reloadConsole").run(bot);

        bot.basicFunctions.get("DbConfiguration").verifyTable(bot);

        const channel = await bot.channels.fetch("810136225037025290");

        const message = await channel.messages.fetch("814220060838330378");
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Rôles jeux')
            .setDescription('Cliquez sur la réaction pour être ping lorsqu\'il y a:\n\n' +
                "🥳 => <@&813534071116005416>\n");

        message.edit("")

    } catch (e) {
        const disk = config.location.split("")[0];
        if (["C", "D", "E"].includes(disk)) {
            console.log("Error in ready.js")
            console.log(e)
            bot.commands.get("destroy").run(bot, null, null);
            require('../storage/commands/destroy.js').run(bot, null, null);
        } else {
            await wait(10000);
            require("./cronTab.js").stop(bot);
            bot.destroy();
            await wait(5000);
            require("../storage/specialTextChannel/dataCenter/reboot.js").run(bot, null, null);
        }
    }
};


module.exports.help = {
    name: "ready"
};