let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = ` 𝐌𝐞𝐧𝐬𝐚𝐣𝐞 : ${pesan}`
let teks = `🗨⟶𝗥𝗲𝘃𝗶𝘃𝗮𝗻 ⏤ 𝐒𝐈𝐍𝐎 𝐋@𝐒 𝐌𝐀𝐓𝐎! \n\n❏ ${oi}\n\n❏  𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚𝐬 :\n`
for (let mem of participants) {
teks +=`🔥 @${mem.id.split('@')[0]}\n`}
teks += `➥𝐁𝐀𝐁𝐘 𝐁𝐎𝐓 `
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
    