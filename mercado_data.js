// Mercado Libre CBT 全球销售后台 · 当月累计 + 当日数据（自动抓取 · 紫鸟 ZClaw 通道，每3小时）
// 更新时间：2026-09-16T12:37:48.929+08:00（北京时间）
// 数据来源：https://global-selling.mercadolibre.com/metrics
// month: 当月1日至抓取时（按墨西哥时间 UTC-6）；today: 墨西哥当天（美客多 Today 预设）
// 金额单位 USD

window.MERCADO_DATA = {
  demo: false,
  updatedAt: "2026-09-16T12:37:48.929+08:00",
  stores: [
      {
          "id": "inn",
          "name": "半导体店(Inn)",
          "emoji": "🟡",
          "storeId": "27846392284118",
          "month": {
              "label": "2026-09",
              "sales": 4505,
              "orders": 62
          },
          "today": {
              "label": "2026-09-15",
              "sales": 209,
              "orders": 4
          }
      },
      {
          "id": "beauty",
          "name": "美妆店",
          "emoji": "💄",
          "storeId": "27845287373055",
          "month": {
              "label": "2026-09",
              "sales": 3427,
              "orders": 40
          },
          "today": {
              "label": "2026-09-15",
              "sales": 76,
              "orders": 1
          }
      }
  ],
};
