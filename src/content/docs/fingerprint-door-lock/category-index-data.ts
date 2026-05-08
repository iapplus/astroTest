import type { LocaleData } from '../components/CategoryIndex.vue'

export const wifiGatewayData: Record<string, LocaleData> = {
  '': {
    categories: [
      { id: 'FAQ', label: 'FAQ', icon: '❓' },
      { id: 'Features', label: 'Features', icon: '✨' },
      { id: 'How To Install', label: 'How To Install', icon: '🔧' },
      { id: 'Installation Requirements', label: 'Installation Requirements', icon: '📋' },
      { id: 'Troubleshooting', label: 'Troubleshooting', icon: '🔍' },
    ],
    articles: {
      'FAQ': [
        { title: 'How to connect Wi-Fi Gateway', slug: 'fingerprint-door-lock/faq/how-to-connect' },
        { title: 'Troubleshooting connection issues', slug: 'fingerprint-door-lock/faq/troubleshooting-connection' },
      ],
      'Features': [
        { title: 'Wireless Connectivity', slug: 'fingerprint-door-lock/features/wireless-connectivity' },
        { title: 'Remote Control', slug: 'fingerprint-door-lock/features/remote-control' },
      ],
      'How To Install': [
        { title: 'Step-by-step Installation', slug: 'fingerprint-door-lock/how-to-install/step-by-step' },
      ],
      'Installation Requirements': [
        { title: 'Wi-Fi Requirements', slug: 'fingerprint-door-lock/installation-requirements/wifi-requirements' },
      ],
      'Troubleshooting': [
        { title: 'LED Indicators', slug: 'fingerprint-door-lock/troubleshooting/led-indicators' },
      ],
    },
    noArticles: 'No articles yet',
  },
  ja: {
    categories: [
      { id: 'FAQ', label: 'FAQ', icon: '❓' },
      { id: 'Features', label: '機能', icon: '✨' },
      { id: 'How To Install', label: '設置方法', icon: '🔧' },
      { id: 'Installation Requirements', label: '設置要件', icon: '📋' },
      { id: 'Troubleshooting', label: 'トラブルシューティング', icon: '🔍' },
    ],
    articles: {
      'FAQ': [
        { title: 'Wi-Fiゲートウェイの接続方法', slug: 'fingerprint-door-lock/faq/how-to-connect' },
        { title: '接続の問題のトラブルシューティング', slug: 'fingerprint-door-lock/faq/troubleshooting-connection' },
      ],
      'Features': [
        { title: 'ワイヤレス接続', slug: 'fingerprint-door-lock/features/wireless-connectivity' },
        { title: 'リモートコントロール', slug: 'fingerprint-door-lock/features/remote-control' },
      ],
      'How To Install': [
        { title: 'ステップバイステップ設置', slug: 'fingerprint-door-lock/how-to-install/step-by-step' },
      ],
      'Installation Requirements': [
        { title: 'Wi-Fi要件', slug: 'fingerprint-door-lock/installation-requirements/wifi-requirements' },
      ],
      'Troubleshooting': [
        { title: 'LEDインジケーター', slug: 'fingerprint-door-lock/troubleshooting/led-indicators' },
      ],
    },
    noArticles: '記事がありません',
  },
  de: {
    categories: [
      { id: 'FAQ', label: 'FAQ', icon: '❓' },
      { id: 'Features', label: 'Funktionen', icon: '✨' },
      { id: 'How To Install', label: 'Installation', icon: '🔧' },
      { id: 'Installation Requirements', label: 'Anforderungen', icon: '📋' },
      { id: 'Troubleshooting', label: 'Fehlerbehebung', icon: '🔍' },
    ],
    articles: {
      'FAQ': [
        { title: 'Wie man das Wi-Fi-Gateway verbindet', slug: 'fingerprint-door-lock/faq/how-to-connect' },
        { title: 'Fehlerbehebung bei Verbindungsproblemen', slug: 'fingerprint-door-lock/faq/troubleshooting-connection' },
      ],
      'Features': [
        { title: 'Drahtlose Verbindung', slug: 'fingerprint-door-lock/features/wireless-connectivity' },
        { title: 'Fernsteuerung', slug: 'fingerprint-door-lock/features/remote-control' },
      ],
      'How To Install': [
        { title: 'Schritt-für-Schritt-Installation', slug: 'fingerprint-door-lock/how-to-install/step-by-step' },
      ],
      'Installation Requirements': [
        { title: 'Wi-Fi-Anforderungen', slug: 'fingerprint-door-lock/installation-requirements/wifi-requirements' },
      ],
      'Troubleshooting': [
        { title: 'LED-Anzeigen', slug: 'fingerprint-door-lock/troubleshooting/led-indicators' },
      ],
    },
    noArticles: 'Noch keine Artikel',
  },
  es: {
    categories: [
      { id: 'FAQ', label: 'FAQ', icon: '❓' },
      { id: 'Features', label: 'Características', icon: '✨' },
      { id: 'How To Install', label: 'Cómo instalar', icon: '🔧' },
      { id: 'Installation Requirements', label: 'Requisitos de instalación', icon: '📋' },
      { id: 'Troubleshooting', label: 'Solución de problemas', icon: '🔍' },
    ],
    articles: {
      'FAQ': [
        { title: 'Cómo conectar la puerta de enlace Wi-Fi', slug: 'fingerprint-door-lock/faq/how-to-connect' },
        { title: 'Solución de problemas de conexión', slug: 'fingerprint-door-lock/faq/troubleshooting-connection' },
      ],
      'Features': [
        { title: 'Conectividad inalámbrica', slug: 'fingerprint-door-lock/features/wireless-connectivity' },
        { title: 'Control remoto', slug: 'fingerprint-door-lock/features/remote-control' },
      ],
      'How To Install': [
        { title: 'Instalación paso a paso', slug: 'fingerprint-door-lock/how-to-install/step-by-step' },
      ],
      'Installation Requirements': [
        { title: 'Requisitos de Wi-Fi', slug: 'fingerprint-door-lock/installation-requirements/wifi-requirements' },
      ],
      'Troubleshooting': [
        { title: 'Indicadores LED', slug: 'fingerprint-door-lock/troubleshooting/led-indicators' },
      ],
    },
    noArticles: 'Aún no hay artículos',
  },
  fr: {
    categories: [
      { id: 'FAQ', label: 'FAQ', icon: '❓' },
      { id: 'Features', label: 'Caractéristiques', icon: '✨' },
      { id: 'How To Install', label: 'Comment installer', icon: '🔧' },
      { id: 'Installation Requirements', label: "Exigences d'installation", icon: '📋' },
      { id: 'Troubleshooting', label: 'Dépannage', icon: '🔍' },
    ],
    articles: {
      'FAQ': [
        { title: 'Comment connecter la passerelle Wi-Fi', slug: 'fingerprint-door-lock/faq/how-to-connect' },
        { title: 'Dépannage des problèmes de connexion', slug: 'fingerprint-door-lock/faq/troubleshooting-connection' },
      ],
      'Features': [
        { title: 'Connectivité sans fil', slug: 'fingerprint-door-lock/features/wireless-connectivity' },
        { title: 'Télécommande', slug: 'fingerprint-door-lock/features/remote-control' },
      ],
      'How To Install': [
        { title: "Installation étape par étape", slug: 'fingerprint-door-lock/how-to-install/step-by-step' },
      ],
      'Installation Requirements': [
        { title: 'Exigences Wi-Fi', slug: 'fingerprint-door-lock/installation-requirements/wifi-requirements' },
      ],
      'Troubleshooting': [
        { title: 'Indicateurs LED', slug: 'fingerprint-door-lock/troubleshooting/led-indicators' },
      ],
    },
    noArticles: 'Pas encore d\'articles',
  },
  it: {
    categories: [
      { id: 'FAQ', label: 'FAQ', icon: '❓' },
      { id: 'Features', label: 'Caratteristiche', icon: '✨' },
      { id: 'How To Install', label: 'Come installare', icon: '🔧' },
      { id: 'Installation Requirements', label: 'Requisiti di installazione', icon: '📋' },
      { id: 'Troubleshooting', label: 'Risoluzione dei problemi', icon: '🔍' },
    ],
    articles: {
      'FAQ': [
        { title: 'Come connettere il gateway Wi-Fi', slug: 'fingerprint-door-lock/faq/how-to-connect' },
        { title: 'Risoluzione dei problemi di connessione', slug: 'fingerprint-door-lock/faq/troubleshooting-connection' },
      ],
      'Features': [
        { title: 'Connettività wireless', slug: 'fingerprint-door-lock/features/wireless-connectivity' },
        { title: 'Controllo remoto', slug: 'fingerprint-door-lock/features/remote-control' },
      ],
      'How To Install': [
        { title: 'Installazione passo passo', slug: 'fingerprint-door-lock/how-to-install/step-by-step' },
      ],
      'Installation Requirements': [
        { title: 'Requisiti Wi-Fi', slug: 'fingerprint-door-lock/installation-requirements/wifi-requirements' },
      ],
      'Troubleshooting': [
        { title: 'Indicatori LED', slug: 'fingerprint-door-lock/troubleshooting/led-indicators' },
      ],
    },
    noArticles: 'Nessun articolo ancora',
  },
}

export default wifiGatewayData