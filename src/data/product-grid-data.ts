export interface ProductData {
  products: {
    name: string
    image: string
    link?: string
  }[]
}

export const homepageData: Record<string, ProductData> = {
  '': {
    products: [
      { name: 'Fingerprint Door Lock Cylinder', image: '/images/fingerprint-door-lock-cylinder.png' },
      { name: 'Keypad Door Lock Cylinder', image: '/images/keypad-door-lock-cylinder.png' },
      { name: 'Wi-Fi Gateway', image: '/images/wi-fi-gateway.png', link: '/wifi-gateway/' },
      { name: 'Welock APP', image: '/images/welock-app.png' },
      { name: 'RFID Card', image: '/images/rfid-card.png' },
      { name: 'Battery', image: '/images/battery.png' },
    ],
  },
  ja: {
    products: [
      { name: '指纹门锁 cylinder', image: '/images/fingerprint-door-lock-cylinder.png' },
      { name: 'キーパッド式ドアロックcylinder', image: '/images/keypad-door-lock-cylinder.png' },
      { name: 'Wi-Fiゲートウェイ', image: '/images/wi-fi-gateway.png', link: '/ja/wifi-gateway/' },
      { name: 'Welock APP', image: '/images/welock-app.png' },
      { name: 'RFIDカード', image: '/images/rfid-card.png' },
      { name: 'バッテリー', image: '/images/battery.png' },
    ],
  },
  de: {
    products: [
      { name: 'Fingerabdruck-Türschloss Zylinder', image: '/images/fingerprint-door-lock-cylinder.png' },
      { name: 'Tastatur-Türschloss Zylinder', image: '/images/keypad-door-lock-cylinder.png' },
      { name: 'Wi-Fi-Gateway', image: '/images/wi-fi-gateway.png', link: '/de/wifi-gateway/' },
      { name: 'Welock APP', image: '/images/welock-app.png' },
      { name: 'RFID-Karte', image: '/images/rfid-card.png' },
      { name: 'Batterie', image: '/images/battery.png' },
    ],
  },
  es: {
    products: [
      { name: 'Cerradura de puerta con huella digital', image: '/images/fingerprint-door-lock-cylinder.png' },
      { name: 'Cerradura de puerta con teclado', image: '/images/keypad-door-lock-cylinder.png' },
      { name: 'Puerta de enlace Wi-Fi', image: '/images/wi-fi-gateway.png', link: '/es/wifi-gateway/' },
      { name: 'Welock APP', image: '/images/welock-app.png' },
      { name: 'Tarjeta RFID', image: '/images/rfid-card.png' },
      { name: 'Batería', image: '/images/battery.png' },
    ],
  },
  fr: {
    products: [
      { name: 'Serrure de porte à empreinte digitale', image: '/images/fingerprint-door-lock-cylinder.png' },
      { name: 'Serrure de porte à clavier', image: '/images/keypad-door-lock-cylinder.png' },
      { name: 'Passerelle Wi-Fi', image: '/images/wi-fi-gateway.png', link: '/fr/wifi-gateway/' },
      { name: 'Welock APP', image: '/images/welock-app.png' },
      { name: 'Carte RFID', image: '/images/rfid-card.png' },
      { name: 'Batterie', image: '/images/battery.png' },
    ],
  },
  it: {
    products: [
      { name: 'Serratura porta a impronta digitale', image: '/images/fingerprint-door-lock-cylinder.png' },
      { name: 'Serratura porta con tastiera', image: '/images/keypad-door-lock-cylinder.png' },
      { name: 'Gateway Wi-Fi', image: '/images/wi-fi-gateway.png', link: '/it/wifi-gateway/' },
      { name: 'Welock APP', image: '/images/welock-app.png' },
      { name: 'Scheda RFID', image: '/images/rfid-card.png' },
      { name: 'Batteria', image: '/images/battery.png' },
    ],
  },
}

export default homepageData