export interface Warlord {
  id: number;
  nameJa: string;
  nameEn: string;
  territory: string;
  years: string;
  epithet: string;
  description: string;
  color: string;
  mapPosition: [number, number];
}

export const WARLORDS: Warlord[] = [
  {
    id: 1,
    nameJa: '織田信長',
    nameEn: 'Oda Nobunaga',
    territory: '尾張・美濃 (Owari / Mino)',
    years: '1534 – 1582',
    epithet: '天下布武の覇王',
    description:
      '尾張の大名から天下統一を目指した革命的指導者。鉄砲の集中運用や楽市楽座など革新的な政策を推進し、戦国時代の常識を覆した。本能寺の変で明智光秀に討たれた。',
    color: '#dc2626',
    mapPosition: [0.52, 0.58],
  },
  {
    id: 2,
    nameJa: '豊臣秀吉',
    nameEn: 'Toyotomi Hideyoshi',
    territory: '大坂 (Osaka)',
    years: '1537 – 1598',
    epithet: '天下人への道',
    description:
      '農民出身から天下統一を成し遂げた唯一の人物。信長の死後、その遺志を継ぎ全国を統一。刀狩りや太閤検地など中央集権化を推進した。',
    color: '#eab308',
    mapPosition: [0.48, 0.62],
  },
  {
    id: 3,
    nameJa: '徳川家康',
    nameEn: 'Tokugawa Ieyasu',
    territory: '三河・江戸 (Mikawa / Edo)',
    years: '1543 – 1616',
    epithet: '忍耐の天下取り',
    description:
      '関ヶ原の戦いに勝利し、江戸幕府を開いた。約260年続く太平の世の礎を築いた忍耐の武将。「鳴かぬなら鳴くまで待とう時鳥」の逸話で知られる。',
    color: '#16a34a',
    mapPosition: [0.55, 0.55],
  },
  {
    id: 4,
    nameJa: '武田信玄',
    nameEn: 'Takeda Shingen',
    territory: '甲斐 (Kai)',
    years: '1521 – 1573',
    epithet: '甲斐の虎',
    description:
      '「風林火山」の旗印で知られる甲斐の虎。騎馬軍団を率いて戦場を支配し、上杉謙信との川中島の戦いは戦国史に残る名勝負として語り継がれている。',
    color: '#7c3aed',
    mapPosition: [0.57, 0.5],
  },
  {
    id: 5,
    nameJa: '上杉謙信',
    nameEn: 'Uesugi Kenshin',
    territory: '越後 (Echigo)',
    years: '1530 – 1578',
    epithet: '越後の龍・軍神',
    description:
      '「義」を重んじた越後の龍。戦の天才と呼ばれ、生涯の戦績で圧倒的な勝率を誇った。武田信玄との川中島の戦いでは互いに知略を尽くした。',
    color: '#2563eb',
    mapPosition: [0.55, 0.42],
  },
  {
    id: 6,
    nameJa: '伊達政宗',
    nameEn: 'Date Masamune',
    territory: '陸奥・仙台 (Mutsu / Sendai)',
    years: '1567 – 1636',
    epithet: '独眼竜',
    description:
      '「独眼竜」の異名を持つ奥州の覇者。右目を失いながらも東北地方を制圧し、仙台藩の基礎を築いた。スペインに使節を派遣するなど国際的な視野も持っていた。',
    color: '#0891b2',
    mapPosition: [0.58, 0.32],
  },
  {
    id: 7,
    nameJa: '毛利元就',
    nameEn: 'Mouri Motonari',
    territory: '安芸 (Aki)',
    years: '1497 – 1571',
    epithet: '謀神・三本の矢',
    description:
      '中国地方を統一した謀略の達人。「三本の矢」の教えで息子たちの結束を説いた逸話は有名。小国から一代で西国の大勢力を築き上げた。',
    color: '#ea580c',
    mapPosition: [0.35, 0.62],
  },
  {
    id: 8,
    nameJa: '島津義弘',
    nameEn: 'Shimazu Yoshihiro',
    territory: '薩摩 (Satsuma)',
    years: '1535 – 1619',
    epithet: '鬼島津',
    description:
      '「鬼島津」と恐れられた薩摩の猛将。関ヶ原の戦いでの「島津の退き口」は壮絶な撤退戦として語り継がれる。朝鮮出兵でも鬼神の如き活躍を見せた。',
    color: '#be185d',
    mapPosition: [0.28, 0.82],
  },
  {
    id: 9,
    nameJa: '北条氏康',
    nameEn: 'Houjou Ujiyasu',
    territory: '相模・小田原 (Sagami / Odawara)',
    years: '1515 – 1571',
    epithet: '相模の獅子',
    description:
      '小田原城を拠点に関東を支配した名将。上杉・武田の両雄を相手に領土を守り抜き、善政によって民衆から慕われた。税制改革にも先進的に取り組んだ。',
    color: '#4f46e5',
    mapPosition: [0.6, 0.52],
  },
  {
    id: 10,
    nameJa: '明智光秀',
    nameEn: 'Akechi Mitsuhide',
    territory: '丹波 (Tanba)',
    years: '1528 – 1582',
    epithet: '本能寺の変',
    description:
      '織田信長の重臣でありながら、本能寺の変で主君を討った謀反人。しかし天下は僅か13日間。「三日天下」と呼ばれるその治世は日本史最大の謎の一つとなっている。',
    color: '#64748b',
    mapPosition: [0.45, 0.58],
  },
];
