const handler = {
    async fetch(request) {
        const form = await request.formData();
        const message = (form.get("Body") || "").toString().toLowerCase();
        const sender = form.get("From") || "unknown";
        let reply = "🤖 Neon Covenant AI: Reply with 'confirm', 'reschedule', or 'help'.";
        if (message.includes("confirm")) {
            reply = "✅ Delivery confirmed for Dec 1 at 3pm. Thank you.";
        }
        else if (message.includes("reschedule")) {
            reply = "📆 Please reply with your new desired delivery time.";
        }
        else if (message.includes("help")) {
            reply = "🧙‍♂️ Support: Visit https://help.neoncovenant.com for assistance.";
        }
        const twiml = `<Response><Message>${reply}</Message></Response>`;
        return new Response(twiml, {
            headers: {
                "Content-Type": "application/xml",
            },
        });
    },
};
export default handler;
