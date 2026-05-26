export const WHATSAPP_NUMBER = '27773561532';
export const WHATSAPP_ORDER_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=NEWORDER`;
export const WHATSAPP_GENERAL_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const EMAIL = 'ops@fit-form.co.za';

export function whatsappProductUrl(productName: string) {
  const text = `NEWORDER I'm interested in ${productName}`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
