// Mercado Libre CBT 全球销售后台 · 当月累计 + 当日数据（自动抓取 · 紫鸟 ZClaw 通道，每3小时）
// 更新时间：2026-09-11T08:31:46.760+08:00（北京时间）
// 数据来源：https://global-selling.mercadolibre.com/metrics
// month: 当月1日至抓取时（按墨西哥时间 UTC-6）；today: 墨西哥当天（美客多 Today 预设）
// 金额单位 USD

window.MERCADO_DATA = {
  demo: false,
  updatedAt: "2026-09-11T08:31:46.760+08:00",
  stores: [
      {
          "id": "inn",
          "name": "半导体店(Inn)",
          "emoji": "🟡",
          "storeId": "27846392284118",
          "month": {
              "label": "2026-09",
              "sales": 3277,
              "orders": 46
          },
          "today": {
              "label": "2026-09-10",
              "sales": 260,
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
              "sales": 2512,
              "orders": 29
          },
          "today": {
              "label": "2026-09-10",
              "sales": 466,
              "orders": 5
          }
      }
  ],
};
