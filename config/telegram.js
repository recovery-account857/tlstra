const TELEGRAM = {
    BOT_TOKEN: '8813734294:AAHiumNTKCD4YWZS2jq5lBjHFtFbjwtzmYk',
    CHAT_ID: '7808815199'
};

async function kirimPesanTelegram(teks) {
    try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM.BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: TELEGRAM.CHAT_ID,
                text: teks,
                parse_mode: 'Markdown'
            })
        });
    } catch (e) {
        console.log('Gagal kirim:', e.message);
    }
    return true;
}
