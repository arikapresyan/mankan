module.exports = {
  roles: {
    CPM_ADMIN: 1,
    CPM_USER: 2,
    COMPANY_ADMIN: 3,
    COMPANY_USER: 4,
  },
  providers: {
    INFOBIP: 1,
    FLOWROUTE: 2,
    INFOBIP_SIMULATOR: 3,
  },
  report_types: {
    CAMPAIGN: 1,
    QUIZ: 2,
    DASHBOARD_SHARE: 3,
  },
  source_types: {
    CAMPAIGN: 1,
    ALERT: 2,
    CHAT: 3,
    QUIZ: 4,
    AUTOMATED_TASK: 5,
    AUTOMATED_TASK_IN: 7,
    DASHBOARD_SHARE: 6,
    SMS_EXTERNAL_SENT: 8,
    RETARGET_SALE: 9,
  },
  products: {
    SMS: 1,
    MENU: 2,
    ORDERING: 3,
  },
  campaign_types: {
    SELL_BY_CATEGORY: {
      id: 1,
      name: 'Target by Category',
      trigger: 'SMS:sendSellByCategoryCampaign',

    },
    INCREASE_SPECIFIC_TIME: {
      id: 2,
      name: 'Target by Time',
      trigger: 'SMS:sendIncreaseDayTimeCampaign',
    },
    LAST_PURCHASE: {
      id: 3,
      name: 'Target by Last Purchase',
      trigger: 'SMS:sendSinceLastPurchaseCampaign',
    },
    FLASH_SALE: {
      id: 4,
      name: 'Flash Sale',
      trigger: 'SMS:sendFlashSaleCampaign',
    },
    CUSTOM_CAMPAIGN: {
      id: 5,
      name: 'Custom',
      trigger: 'SMS:sendListCampaign',
    },
    INCREASE_SPECIFIC_DAY: {
      id: 6,
      name: 'Target by Day',
      trigger: 'SMS:sendIncreaseDayCampaign',
    },
    SELL_BY_TYPE: {
      id: 7,
      name: 'Target by Type',
      trigger: 'SMS:sendSellByTypeCampaign',
    },
    SELL_BY_PRODUCT: {
      id: 8,
      name: 'Sell by Product',
      trigger: 'SMS:sendSellByProductCampaign',
    },
    RETARGET_SALE: {
      id: 9,
      name: 'Retarget Sale',
      trigger: 'SMS:sendRetargetSaleCampaign',
    },
    SINCE_LAST_PURCHASE: {
      id: 10,
      name: 'Since last Purchase',
      trigger: 'SMS:sendSinceLastPurchaseReversedCampaign',
    },
    TARGET_BY_VISITS: {
      id: 11,
      name: 'Target by visits',
      trigger: 'SMS:sendByLastVisit',
    },
    TARGET_BY_SPEND: {
      id: 12,
      name: 'Target by spend',
      trigger: 'SMS:sendBySpend',
    },
    TARGET_BY_LOYALTY_POINTS: {
      id: 13,
      name: 'Target by loyalty points',
      trigger: 'SMS:sendByLoyaltyPoints',
    },
    TARGET_BY_CAMPAIGN_PURCHASERS: {
      id: 14,
      name: 'Target by campaign purchasers',
      trigger: 'SMS:sendByCampaignPurchasers',
    },
  },
  schedule_types: {
    SEND_NOW: {
      id: 1,
      name: 'Send now',
    },
    SCHEDULE_LATER: {
      id: 2,
      name: 'Schedule later',
    },
    SMART_SEND: {
      id: 3,
      name: 'Smart send',
    },
  },
  automated_task_types: {
    BIRTHDAY: {
      id: 1,
      name: 'Birthday',
    },
    CUSTOMER_ANNIVERSARY: {
      id: 2,
      name: 'Customer Anniversary',
    },
    MED_CARD_RENEWAL: {
      id: 3,
      name: 'Med Card Renewal',
    },
    ADDRESS: {
      id: 4,
      name: 'Address',
      keyword: 'address',
    },
    HOURS: {
      id: 5,
      name: 'Hours',
      keyword: 'hours',
    },
  },
  chat_types: {
    SEND: 1,
    RECEIVED: 2,
  },
  chat_reply_types: {
    AUTO_IN: 4,
    AUTO: 1,
    QUICK: 2,
    MANUAL: 3,
  },
  slack: {
    ticket: 'https://hooks.slack.com/services/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',
    test_sync: 'https://hooks.slack.com/services/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',
    app_error: {
      stage: 'https://hooks.slack.com/services/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',
      development: 'https://hooks.slack.com/services/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',
      production: '',
    },
  },
  stripe: {
    stripe_api_key: process.env.stripe_api_key || 'sk_test_3myPQQCqEWvt8eyZ1FAbhJJw',
  },
  alert_types: {
    WELCOME: 1,
    UNSTOP: 2,
    REPLY_MESSAGE: 3,
  },
  crypto: {
    generator: {
      algorithm: 'sha512',
      saltLength: 8,
      iterations: 1,
      tokenLength: 12,
    },
  },
  services: {
    Email: {
      // TODO: (%40) is @
      smtp: 'smtps://info%40dataowl.io:pass@smtp.gmail.com',
      from: 'info@dataowl.io',
      path: '../templates/Email/',
      ext: '.html',
    },
    AWS: {
      credentials: {
        apiVersion: '2006-03-01',
        accessKeyId: process.env.AWS_S3_KEY_ID || 'AKIAI6GTQO6WSPOQGLFA',
        secretAccessKey: process.env.AWS_S3_ACCESS_KEY || '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',
      },
      bucket: process.env.AWS_S3_BUCKET || 'dataowl-2',
      link: 'https://s3.amazonaws.com',
      downloadURL: 'https://s3-us-west-1.amazonaws.com',
      bucketFolder: process.env.NODE_ENV || 'test',
    },
  },
  environments: {
    login_url: {
      production: 'https://app.dataowl.net/login',
      stage: 'http://stageclient.dataowl.net/login',
      development: 'http://devclient.dataowl.net/login',
    },
    email_activation_url: {
      production: 'https://app.dataowl.net/register/:code',
      stage: 'http://stageclient.dataowl.net/register/:code',
      development: 'http://devclient.dataowl.net/register/:code',
    },
    reset_password_url: {
      production: 'https://app.dataowl.net/reset/:code',
      stage: 'http://stageclient.dataowl.net/reset/:code',
      development: 'http://devclient.dataowl.net/reset/:code',
    },
  },
  get login_url() { return this.environments.login_url[process.env.NODE_ENV]; },
  get email_activation_url() { return this.environments.email_activation_url[process.env.NODE_ENV]; },
  get reset_password_url() { return this.environments.reset_password_url[process.env.NODE_ENV]; },
  related_url: process.env.NODE_ENV === 'production' ? 'gfo.io/' : 'ozl.io/',
  SUPPORT_PIN_VALIDITY_PERIOD: 90, // in minutes
  smart_campaign: {
    day_times: [
      { id: 1, name: 'Morning' },
      { id: 2, name: 'Afternoon' },
      { id: 3, name: 'Night' },
    ],
    targets: [
      { id: 1, name: 'Low' },
      { id: 2, name: 'Medium' },
      { id: 3, name: 'High' },
    ],
  },
  payment_statuses: {
    WAITING_FOR_PAYMENT: 0,
    PAYED: 1,
    UNPAID: 2,
  },
  url_detector: /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/g,
  widgets_types: {
    bi: [
      'bi-category',
      'bi-vendor',
      'bi-inventory',
      'bi-product',
    ],
    sms: [
      'messaging-statistics',
      'recent-campaign-report',
      'scheduled-campaign-report',
      'subscribers',
      'recent-campaigns',
      'inbound-messages',
      'scheduled-campaigns',
      'automated-tasks',
    ],
    quiz: [
      'poll-results',
    ],
  },
  checkin_statuses: {
    added_to_que: 0,
    ready: 1,
    processed: 2,
    canceled: -1,
  },
};
