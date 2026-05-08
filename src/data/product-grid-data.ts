export interface Product {
  name: string
  description?: string
  image: string
  link?: string
  category?: string
}

export interface ProductData {
  title: string
  subtitle: string
  products: Product[]
}

export const homepageData: Record<string, ProductData> = {
  '': {
    title: 'WELOCK',
    subtitle: 'Smart Home Access Solutions',
    products: [
      { name: 'Fingerprint Door Lock', description: 'Biometric entry with fingerprint recognition', image: '/images/fingerprint-door-lock-cylinder.png', link: '/fingerprint-door-lock', category: 'Locks' },
      { name: 'Keypad Door Lock', description: 'Code-based access with touch keypad', image: '/images/keypad-door-lock-cylinder.png', category: 'Locks' },
      { name: 'Wi-Fi Gateway', description: 'Connect your locks to the cloud', image: '/images/wi-fi-gateway.png', link: '/wifi-gateway/', category: 'Accessories' },
      { name: 'Welock App', description: 'Control all your devices remotely', image: '/images/welock-app.png', category: 'App' },
      { name: 'RFID Card', description: 'Contactless card entry', image: '/images/rfid-card.png', category: 'Accessories' },
      { name: 'Battery', description: 'Long-lasting power source', image: '/images/battery.png', category: 'Accessories' },
    ],
  },
  ja: {
    title: 'WELOCK',
    subtitle: 'スマートホームアクセスソリューション',
    products: [
      { name: '指紋認証ドアロック', description: '指紋認識による生体認証エントリー', image: '/images/fingerprint-door-lock-cylinder.png', category: 'ロック' },
      { name: 'キーパッド式ドアロック', description: 'タッチキーパッドによる暗証番号アクセス', image: '/images/keypad-door-lock-cylinder.png', category: 'ロック' },
      { name: 'Wi-Fiゲートウェイ', description: 'クラウドに接続', image: '/images/wi-fi-gateway.png', link: '/ja/wifi-gateway/', category: 'アクセサリー' },
      { name: 'Welockアプリ', description: 'リモートで全てを管理', image: '/images/welock-app.png', category: 'アプリ' },
      { name: 'RFIDカード', description: '非接触カードエントリー', image: '/images/rfid-card.png', category: 'アクセサリー' },
      { name: 'バッテリー', description: '長時間駆動電源', image: '/images/battery.png', category: 'アクセサリー' },
    ],
  },
  de: {
    title: 'WELOCK',
    subtitle: 'Intelligente Zutrittslösungen',
    products: [
      { name: 'Fingerabdruck-Türschloss', description: 'Biometrischer Zugang mit Fingerabdruck', image: '/images/fingerprint-door-lock-cylinder.png', category: 'Schlösser' },
      { name: 'Tastatur-Türschloss', description: 'Code-basierter Zugang mit Touchpad', image: '/images/keypad-door-lock-cylinder.png', category: 'Schlösser' },
      { name: 'Wi-Fi-Gateway', description: 'Verbinden Sie Ihre Schlösser mit der Cloud', image: '/images/wi-fi-gateway.png', link: '/de/wifi-gateway/', category: 'Zubehör' },
      { name: 'Welock App', description: 'Steuern Sie alle Ihre Geräte fern', image: '/images/welock-app.png', category: 'App' },
      { name: 'RFID-Karte', description: 'Kontaktloser Kartenzugang', image: '/images/rfid-card.png', category: 'Zubehör' },
      { name: 'Batterie', description: 'Langlebige Stromversorgung', image: '/images/battery.png', category: 'Zubehör' },
    ],
  },
  es: {
    title: 'WELOCK',
    subtitle: 'Soluciones de Acceso Inteligente',
    products: [
      { name: 'Cerradura de Huella', description: 'Entrada biométrica con reconocimiento', image: '/images/fingerprint-door-lock-cylinder.png', category: 'Cerraduras' },
      { name: 'Cerradura de Teclado', description: 'Acceso por código con panel táctil', image: '/images/keypad-door-lock-cylinder.png', category: 'Cerraduras' },
      { name: 'Puerta de Enlace Wi-Fi', description: 'Conecte sus cerraduras a la nube', image: '/images/wi-fi-gateway.png', link: '/es/wifi-gateway/', category: 'Accesorios' },
      { name: 'Welock App', description: 'Controle todos sus dispositivos remotely', image: '/images/welock-app.png', category: 'App' },
      { name: 'Tarjeta RFID', description: 'Entrada sin contacto', image: '/images/rfid-card.png', category: 'Accesorios' },
      { name: 'Batería', description: 'Fuente de energía de larga duración', image: '/images/battery.png', category: 'Accesorios' },
    ],
  },
  fr: {
    title: 'WELOCK',
    subtitle: 'Solutions d\'Accès Intelligent',
    products: [
      { name: 'Serrure à Empreinte', description: 'Entrée biométrique par empreinte', image: '/images/fingerprint-door-lock-cylinder.png', category: 'Serrures' },
      { name: 'Serrure à Clavier', description: 'Accès par code avec pavé tactile', image: '/images/keypad-door-lock-cylinder.png', category: 'Serrures' },
      { name: 'Passerelle Wi-Fi', description: 'Connectez vos serrures au cloud', image: '/images/wi-fi-gateway.png', link: '/fr/wifi-gateway/', category: 'Accessoires' },
      { name: 'Welock App', description: 'Contrôlez tous vos appareils à distance', image: '/images/welock-app.png', category: 'App' },
      { name: 'Carte RFID', description: 'Entrée sans contact', image: '/images/rfid-card.png', category: 'Accessoires' },
      { name: 'Batterie', description: 'Source d\'alimentation longue durée', image: '/images/battery.png', category: 'Accessoires' },
    ],
  },
  it: {
    title: 'WELOCK',
    subtitle: 'Soluzioni di Accesso Intelligente',
    products: [
      { name: 'Serratura a Impronta', description: 'Ingresso biometrico con riconoscimento', image: '/images/fingerprint-door-lock-cylinder.png', category: 'Serrature' },
      { name: 'Serratura a Tastiera', description: 'Accesso tramite codice con touchpad', image: '/images/keypad-door-lock-cylinder.png', category: 'Serrature' },
      { name: 'Gateway Wi-Fi', description: 'Collega le serrature al cloud', image: '/images/wi-fi-gateway.png', link: '/it/wifi-gateway/', category: 'Accessori' },
      { name: 'Welock App', description: 'Controlla tutti i tuoi dispositivi da remoto', image: '/images/welock-app.png', category: 'App' },
      { name: 'Scheda RFID', description: 'Ingresso senza contatto', image: '/images/rfid-card.png', category: 'Accessori' },
      { name: 'Batteria', description: 'Alimentazione di lunga durata', image: '/images/battery.png', category: 'Accessori' },
    ],
  },
}

export default homepageData