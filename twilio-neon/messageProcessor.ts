export function generateReply(msg: string): string {
  msg = msg.toLowerCase();
  if (msg.includes('confirm')) return '✅ Confirmed. Thank you!';
  if (msg.includes('reschedule')) return '📆 Let us know a new time.';
  if (msg.includes('help')) return '🧠 How can we assist you today?';
  return '🤖 Message received. A representative will reply shortly.';
}
