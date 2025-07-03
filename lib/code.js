if (body === '.code.') {
  let codeLink = `https://katabump.com/install?phone=${sender}`; // أو أي رابط خاص بالتنصيب

  await conn.sendMessage(m.chat, {
    text: `📲 كود التنصيب بتاعك جاهز يا زول!\nهاك الرابط:\n${codeLink}\n\nلو ما اشتغل معاك قول لي نعدل ليك فيهو 😎`
  }, { quoted: m });
}
