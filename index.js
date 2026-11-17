const mineflayer = require('mineflayer');

const botArgs = {
  host: 'Rahimcraftbacj.aternos.me', // <--- تم وضعه هنا بنجاح
  port: 25565,                      // <--- تأكد من بورت سيرفرك الحالي من أترونس
  username: 'AFK_Bot_247',          // اسم البوت داخل السيرفر
  version: false
};

function createBot() {
  const bot = mineflayer.createBot(botArgs);

  bot.on('spawn', () => {
    console.log('تم دخول البوت إلى السيرفر بنجاح!');
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 500);
    }, 30000);
  });

  bot.on('kicked', (reason) => console.log('تم طرد البوت:', reason));
  bot.on('error', (err) => console.log('حدث خطأ:', err));

  bot.on('end', () => {
    console.log('انقطع الاتصال، جاري إعادة المحاولة...');
    setTimeout(createBot, 10000);
  });
}

createBot();
