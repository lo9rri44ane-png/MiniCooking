import type {Level} from './Rules';
import type {Restaurant} from './CampaignStore';
export const RESTAURANTS:Restaurant[]=[
  {
    "id": "breakfast",
    "name": "暖心早餐店",
    "description": "从第一份沙拉到早餐高峰，学习三种设备和背包管理。",
    "levelIds": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
      45,
      46,
      47,
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57,
      58,
      59,
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80
    ]
  },
  {
    "id": "street",
    "name": "街角简餐店",
    "description": "加入鸡蛋、牛奶咖啡、鱼饭和奶昔，练习更复杂的配方与订单。",
    "levelIds": [
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95,
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109,
      110,
      111,
      112,
      113,
      114,
      115,
      116,
      117,
      118,
      119,
      120,
      121,
      122,
      123,
      124,
      125,
      126,
      127,
      128,
      129,
      130,
      131,
      132,
      133,
      134,
      135,
      136,
      137,
      138,
      139,
      140,
      141,
      142,
      143,
      144,
      145,
      146,
      147,
      148,
      149,
      150,
      151,
      152,
      153,
      154,
      155,
      156,
      157,
      158,
      159,
      160
    ]
  }
];
export const CAMPAIGN_LEVELS:Level[]=[
  {
    "id": 1,
    "name": "开工第一课",
    "tip": "订单看材料与设备，滑行收集后停靠制作。",
    "width": 4,
    "height": 4,
    "start": [
      0,
      3
    ],
    "walls": [],
    "items": [
      {
        "x": 2,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 3,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            3,
            1
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c0",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 6,
    "optimal": 2,
    "solution": [
      "right",
      "up"
    ],
    "availableProps": [],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 1,
    "chapter": "开店第一课",
    "introductions": [
      "basic"
    ]
  },
  {
    "id": 2,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 4,
    "height": 4,
    "start": [
      1,
      3
    ],
    "walls": [],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 3,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 3,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            3,
            1
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 9,
    "availableProps": [],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 2,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 5,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 3,
    "name": "开店第一课·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 4,
    "height": 4,
    "start": [
      2,
      3
    ],
    "walls": [],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 3,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            3,
            1
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 9,
    "availableProps": [
      "undo"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 3,
    "chapter": "开店第一课",
    "introductions": [
      "undo"
    ],
    "optimal": 5,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 4,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 4,
    "height": 4,
    "start": [
      0,
      1
    ],
    "walls": [
      [
        2,
        0
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 3,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            3,
            1
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 8,
    "availableProps": [
      "undo"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 4,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 4,
    "solution": [
      "up",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 5,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 4,
    "height": 4,
    "start": [
      2,
      0
    ],
    "walls": [],
    "items": [
      {
        "x": 2,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 3,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            3,
            1
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 8,
    "availableProps": [
      "undo"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 5,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 4,
    "solution": [
      "left",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 6,
    "name": "开店第一课·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 5,
    "height": 5,
    "start": [
      2,
      2
    ],
    "walls": [
      [
        0,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 6,
    "chapter": "开店第一课",
    "introductions": [
      "pan"
    ],
    "optimal": 8,
    "solution": [
      "right",
      "left",
      "up",
      "right",
      "down",
      "left",
      "right",
      "up"
    ]
  },
  {
    "id": 7,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      1,
      1
    ],
    "walls": [
      [
        2,
        2
      ],
      [
        0,
        2
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 4,
        "type": "cheese"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 10,
    "availableProps": [
      "undo"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 7,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 6,
    "solution": [
      "up",
      "down",
      "right",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 8,
    "name": "开店第一课·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 5,
    "height": 5,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        3,
        2
      ],
      [
        0,
        3
      ],
      [
        4,
        3
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 4,
        "type": "cheese"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo",
      "overtime"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 8,
    "chapter": "开店第一课",
    "introductions": [
      "overtime"
    ],
    "optimal": 8,
    "solution": [
      "down",
      "right",
      "left",
      "up",
      "left",
      "right",
      "down",
      "right"
    ]
  },
  {
    "id": 9,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      3,
      3
    ],
    "walls": [
      [
        3,
        1
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 13,
    "availableProps": [
      "undo",
      "overtime"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 9,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 9,
    "solution": [
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 10,
    "name": "开店第一课·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      0,
      3
    ],
    "walls": [
      [
        3,
        3
      ],
      [
        4,
        4
      ],
      [
        0,
        0
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "cheese"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo",
      "overtime"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 10,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 11,
    "solution": [
      "right",
      "up",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right",
      "down",
      "up"
    ]
  },
  {
    "id": 11,
    "name": "背包与设备·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 5,
    "height": 5,
    "start": [
      1,
      1
    ],
    "walls": [
      [
        3,
        0
      ],
      [
        1,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 11,
    "chapter": "背包与设备",
    "introductions": [
      "bag-pressure",
      "ad-slot"
    ],
    "optimal": 13,
    "solution": [
      "up",
      "right",
      "down",
      "right",
      "up",
      "left",
      "down",
      "up",
      "right",
      "down",
      "left",
      "right",
      "up"
    ]
  },
  {
    "id": 12,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      0,
      1
    ],
    "walls": [
      [
        3,
        3
      ],
      [
        2,
        3
      ],
      [
        3,
        2
      ],
      [
        2,
        0
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 9,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 12,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 6,
    "solution": [
      "up",
      "down",
      "right",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 13,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      0,
      0
    ],
    "walls": [
      [
        1,
        1
      ],
      [
        2,
        1
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 13,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 9,
    "solution": [
      "right",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "right",
      "up"
    ]
  },
  {
    "id": 14,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      3,
      0
    ],
    "walls": [
      [
        3,
        3
      ],
      [
        2,
        0
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 13,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 14,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 10,
    "solution": [
      "down",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "right"
    ]
  },
  {
    "id": 15,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      0,
      2
    ],
    "walls": [
      [
        3,
        0
      ],
      [
        0,
        3
      ],
      [
        2,
        3
      ],
      [
        2,
        2
      ],
      [
        0,
        1
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 13,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 15,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 10,
    "solution": [
      "right",
      "up",
      "left",
      "right",
      "down",
      "right",
      "down",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 16,
    "name": "背包与设备·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      2
    ],
    "walls": [
      [
        2,
        0
      ],
      [
        5,
        4
      ],
      [
        3,
        1
      ],
      [
        4,
        0
      ],
      [
        5,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 16,
    "chapter": "背包与设备",
    "introductions": [
      "drink"
    ],
    "optimal": 9,
    "solution": [
      "down",
      "up",
      "right",
      "down",
      "right",
      "left",
      "right",
      "up",
      "right"
    ]
  },
  {
    "id": 17,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      2
    ],
    "walls": [
      [
        5,
        3
      ],
      [
        1,
        1
      ],
      [
        4,
        3
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 14,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 17,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 11,
    "solution": [
      "down",
      "up",
      "left",
      "right",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 18,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      2
    ],
    "walls": [
      [
        1,
        1
      ],
      [
        3,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 4,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 18,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 9,
    "solution": [
      "left",
      "down",
      "up",
      "right",
      "down",
      "left",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 19,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      5
    ],
    "walls": [
      [
        3,
        4
      ],
      [
        1,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 2,
        "type": "water"
      },
      {
        "x": 5,
        "y": 3,
        "type": "berry"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 19,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "left",
      "up",
      "right",
      "down",
      "up",
      "left",
      "up",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "up",
      "right"
    ]
  },
  {
    "id": 20,
    "name": "背包与设备·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      3
    ],
    "walls": [
      [
        0,
        1
      ],
      [
        1,
        1
      ],
      [
        0,
        4
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 20,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 21,
    "name": "候场客人·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      3
    ],
    "walls": [
      [
        5,
        4
      ],
      [
        2,
        5
      ],
      [
        1,
        1
      ],
      [
        4,
        2
      ],
      [
        0,
        3
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 21,
    "chapter": "候场客人",
    "introductions": [
      "queue"
    ],
    "optimal": 13,
    "solution": [
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right",
      "up",
      "right",
      "up",
      "down",
      "left",
      "down"
    ]
  },
  {
    "id": 22,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        5,
        3
      ],
      [
        1,
        4
      ],
      [
        4,
        0
      ],
      [
        1,
        2
      ],
      [
        3,
        4
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 2,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 22,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "left",
      "down",
      "up",
      "right",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "down",
      "left",
      "right",
      "up",
      "right"
    ]
  },
  {
    "id": 23,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      0
    ],
    "walls": [
      [
        1,
        3
      ],
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 23,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 12,
    "solution": [
      "down",
      "left",
      "up",
      "left",
      "up",
      "right",
      "down",
      "right",
      "left",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 24,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      0
    ],
    "walls": [
      [
        4,
        3
      ],
      [
        1,
        2
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "water"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 24,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left",
      "down",
      "left",
      "right",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 25,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      4
    ],
    "walls": [
      [
        2,
        1
      ],
      [
        4,
        0
      ],
      [
        4,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 11,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 25,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 8,
    "solution": [
      "up",
      "right",
      "down",
      "left",
      "right",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 26,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      2
    ],
    "walls": [
      [
        3,
        1
      ],
      [
        2,
        3
      ],
      [
        4,
        3
      ],
      [
        0,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 26,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "down",
      "up",
      "left",
      "up",
      "left",
      "right",
      "down",
      "left",
      "down",
      "right",
      "up",
      "left",
      "right",
      "up"
    ]
  },
  {
    "id": 27,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      1
    ],
    "walls": [
      [
        0,
        3
      ],
      [
        2,
        3
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 1,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 14,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 27,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 11,
    "solution": [
      "left",
      "up",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "down",
      "up"
    ]
  },
  {
    "id": 28,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      2
    ],
    "walls": [
      [
        4,
        4
      ],
      [
        2,
        3
      ],
      [
        1,
        3
      ],
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 28,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "up",
      "left",
      "down",
      "up",
      "right",
      "down",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "right"
    ]
  },
  {
    "id": 29,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        4,
        3
      ],
      [
        0,
        0
      ],
      [
        1,
        4
      ],
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 1,
        "type": "water"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 29,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "up",
      "down",
      "right",
      "up",
      "right",
      "up",
      "left",
      "down",
      "up",
      "right",
      "down",
      "left",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 30,
    "name": "候场客人·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        1,
        3
      ],
      [
        3,
        1
      ],
      [
        1,
        4
      ],
      [
        4,
        3
      ],
      [
        3,
        3
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 2,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 30,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "up",
      "left",
      "down",
      "up",
      "right",
      "down",
      "right",
      "up",
      "down",
      "up",
      "down",
      "left",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 31,
    "name": "共享食材·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      5
    ],
    "walls": [
      [
        0,
        1
      ],
      [
        5,
        4
      ],
      [
        0,
        2
      ],
      [
        4,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 31,
    "chapter": "共享食材",
    "introductions": [
      "burger"
    ],
    "optimal": 13,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 32,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      3
    ],
    "walls": [
      [
        1,
        1
      ],
      [
        4,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 32,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 12,
    "solution": [
      "left",
      "up",
      "right",
      "down",
      "right",
      "down",
      "up",
      "left",
      "down",
      "left",
      "right",
      "left"
    ]
  },
  {
    "id": 33,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      2
    ],
    "walls": [
      [
        1,
        1
      ],
      [
        1,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 33,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "right",
      "up",
      "left",
      "down",
      "left",
      "up",
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 34,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      0
    ],
    "walls": [
      [
        0,
        3
      ],
      [
        0,
        2
      ],
      [
        3,
        3
      ],
      [
        1,
        3
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 34,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 12,
    "solution": [
      "right",
      "down",
      "left",
      "up",
      "left",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 35,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        5,
        4
      ],
      [
        3,
        3
      ],
      [
        0,
        2
      ],
      [
        2,
        4
      ],
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 35,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "left",
      "down",
      "right",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 36,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        4,
        2
      ],
      [
        4,
        0
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 36,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 9,
    "solution": [
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 37,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      2
    ],
    "walls": [
      [
        0,
        2
      ],
      [
        1,
        4
      ],
      [
        3,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 2,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 37,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 9,
    "solution": [
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 38,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      5
    ],
    "walls": [
      [
        4,
        1
      ],
      [
        5,
        4
      ],
      [
        3,
        1
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "water"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 38,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "left",
      "up",
      "left",
      "down",
      "right",
      "down",
      "up",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 39,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      3
    ],
    "walls": [
      [
        2,
        2
      ],
      [
        0,
        2
      ],
      [
        3,
        2
      ],
      [
        2,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 39,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 12,
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right"
    ]
  },
  {
    "id": 40,
    "name": "共享食材·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      5
    ],
    "walls": [
      [
        4,
        4
      ],
      [
        3,
        4
      ],
      [
        1,
        0
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "water"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 40,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "up",
      "right",
      "down",
      "right",
      "down",
      "up",
      "left",
      "up",
      "down",
      "right",
      "down",
      "left",
      "right",
      "left"
    ]
  },
  {
    "id": 41,
    "name": "多道菜订单·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      2
    ],
    "walls": [
      [
        3,
        3
      ],
      [
        2,
        2
      ],
      [
        1,
        1
      ],
      [
        2,
        1
      ],
      [
        0,
        0
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 4,
        "type": "water"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 41,
    "chapter": "多道菜订单",
    "introductions": [
      "multi-order"
    ],
    "optimal": 17,
    "solution": [
      "right",
      "left",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 42,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      0
    ],
    "walls": [
      [
        1,
        1
      ],
      [
        2,
        1
      ],
      [
        5,
        4
      ],
      [
        0,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 0,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 42,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "right",
      "down",
      "left",
      "up",
      "left",
      "right",
      "up",
      "down",
      "left",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 43,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      2
    ],
    "walls": [
      [
        2,
        0
      ],
      [
        2,
        4
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 43,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "left",
      "right",
      "down",
      "up",
      "left",
      "up",
      "down",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 44,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      1
    ],
    "walls": [
      [
        0,
        1
      ],
      [
        1,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 14,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 44,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 12,
    "solution": [
      "left",
      "down",
      "left",
      "right",
      "down",
      "up",
      "left",
      "up",
      "left",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 45,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      1
    ],
    "walls": [
      [
        0,
        3
      ],
      [
        3,
        3
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 13,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 45,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 11,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "down",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 46,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      3
    ],
    "walls": [
      [
        4,
        0
      ],
      [
        1,
        0
      ],
      [
        0,
        4
      ],
      [
        2,
        1
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 46,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "left",
      "up",
      "down",
      "right",
      "down",
      "left",
      "down",
      "right",
      "up",
      "right",
      "left",
      "up",
      "left",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 47,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      4
    ],
    "walls": [
      [
        2,
        4
      ],
      [
        4,
        4
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 1,
        "type": "water"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 47,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "up",
      "right",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right",
      "down",
      "up"
    ]
  },
  {
    "id": 48,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      3
    ],
    "walls": [
      [
        1,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 48,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 49,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      3
    ],
    "walls": [
      [
        3,
        1
      ],
      [
        4,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "water"
      },
      {
        "x": 0,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 49,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "up",
      "right",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left",
      "up",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "down"
    ]
  },
  {
    "id": 50,
    "name": "多道菜订单·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      1
    ],
    "walls": [
      [
        3,
        5
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          },
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 50,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "left",
      "up",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 51,
    "name": "批量出餐·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      2
    ],
    "walls": [
      [
        3,
        2
      ],
      [
        3,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 51,
    "chapter": "批量出餐",
    "introductions": [
      "portions"
    ],
    "optimal": 15,
    "solution": [
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "down",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 52,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      4
    ],
    "walls": [
      [
        0,
        0
      ],
      [
        1,
        4
      ],
      [
        0,
        4
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 52,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "left",
      "up",
      "left",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 53,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        4,
        3
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 0,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 53,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down"
    ]
  },
  {
    "id": 54,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      0
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        3,
        2
      ],
      [
        0,
        2
      ],
      [
        5,
        4
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 2,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 3,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 54,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "right",
      "left",
      "down",
      "right",
      "down",
      "up",
      "down",
      "left",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 55,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      2
    ],
    "walls": [
      [
        1,
        1
      ],
      [
        1,
        0
      ],
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 2,
        "type": "water"
      },
      {
        "x": 2,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 55,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "left",
      "right",
      "down",
      "up",
      "down",
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "up",
      "down",
      "right",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 56,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      4
    ],
    "walls": [
      [
        4,
        4
      ],
      [
        2,
        3
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 2,
        "type": "water"
      },
      {
        "x": 0,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 56,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "up",
      "right",
      "down",
      "right",
      "down",
      "up",
      "left",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 57,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      3
    ],
    "walls": [
      [
        0,
        3
      ],
      [
        3,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "water"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 14,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 57,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 12,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "up",
      "down",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 58,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      5
    ],
    "walls": [
      [
        1,
        2
      ],
      [
        1,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 1,
        "type": "water"
      },
      {
        "x": 0,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 58,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 59,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      2
    ],
    "walls": [
      [
        5,
        4
      ],
      [
        2,
        0
      ],
      [
        3,
        5
      ],
      [
        3,
        4
      ],
      [
        3,
        3
      ],
      [
        0,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 4,
        "type": "water"
      },
      {
        "x": 5,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 1,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 59,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "up",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "down",
      "up",
      "left",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 60,
    "name": "批量出餐·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        2,
        3
      ],
      [
        4,
        0
      ],
      [
        4,
        1
      ],
      [
        5,
        4
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "water"
      },
      {
        "x": 0,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 60,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 20,
    "solution": [
      "left",
      "up",
      "down",
      "right",
      "down",
      "left",
      "right",
      "up",
      "right",
      "up",
      "down",
      "left",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 61,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      1
    ],
    "walls": [
      [
        1,
        0
      ],
      [
        4,
        2
      ],
      [
        0,
        2
      ],
      [
        0,
        4
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 61,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "up",
      "right",
      "left",
      "down",
      "left",
      "up",
      "left",
      "up",
      "down",
      "right",
      "down",
      "left",
      "down",
      "right",
      "up",
      "left",
      "right",
      "up"
    ]
  },
  {
    "id": 62,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      3
    ],
    "walls": [
      [
        3,
        4
      ],
      [
        2,
        3
      ],
      [
        4,
        2
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 5,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 62,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "up",
      "left",
      "up",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right",
      "down",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 63,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      3
    ],
    "walls": [
      [
        2,
        4
      ],
      [
        4,
        3
      ],
      [
        4,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 2,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 63,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "down",
      "up",
      "left",
      "down",
      "right",
      "up",
      "down",
      "up",
      "right",
      "down",
      "left",
      "right",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 64,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      2
    ],
    "walls": [
      [
        2,
        3
      ],
      [
        0,
        2
      ],
      [
        4,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 64,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "up",
      "right",
      "down",
      "right"
    ]
  },
  {
    "id": 65,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      0
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        4,
        0
      ],
      [
        0,
        3
      ],
      [
        3,
        5
      ],
      [
        3,
        4
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 2,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 65,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "down",
      "up",
      "left",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "up",
      "left",
      "down",
      "up",
      "right",
      "down",
      "left",
      "down"
    ]
  },
  {
    "id": 66,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      0
    ],
    "walls": [
      [
        1,
        2
      ],
      [
        2,
        1
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 1,
        "type": "berry"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 66,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 67,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        3,
        5
      ],
      [
        5,
        4
      ],
      [
        0,
        3
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 67,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 68,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        4,
        4
      ],
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 68,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "up",
      "right",
      "down",
      "left",
      "right",
      "down",
      "up",
      "left",
      "right",
      "left",
      "down",
      "right",
      "down",
      "left",
      "up",
      "down",
      "right"
    ]
  },
  {
    "id": 69,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      2
    ],
    "walls": [
      [
        4,
        0
      ],
      [
        5,
        4
      ],
      [
        0,
        3
      ],
      [
        3,
        2
      ],
      [
        1,
        3
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 69,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "left",
      "up",
      "right",
      "down",
      "right",
      "down",
      "left",
      "down",
      "right",
      "left",
      "up",
      "left",
      "right",
      "down"
    ]
  },
  {
    "id": 70,
    "name": "路线组合·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      5
    ],
    "walls": [
      [
        2,
        0
      ],
      [
        0,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "meat"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "deluxe",
        "name": "丰盛沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1,
          "cheese": 1
        },
        "device": "table"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "deluxe",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 70,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "up",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "right"
    ]
  },
  {
    "id": 71,
    "name": "下班大挑战·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      1
    ],
    "walls": [
      [
        5,
        4
      ],
      [
        2,
        0
      ],
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "meat"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 71,
    "chapter": "下班大挑战",
    "introductions": [
      "tight-budget"
    ],
    "optimal": 18,
    "solution": [
      "right",
      "down",
      "left",
      "down",
      "right",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 72,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      2
    ],
    "walls": [
      [
        3,
        3
      ],
      [
        3,
        1
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 4,
        "type": "meat"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 72,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 73,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      3
    ],
    "walls": [
      [
        3,
        0
      ],
      [
        0,
        4
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "meat"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 73,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "left",
      "up",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 74,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      0
    ],
    "walls": [
      [
        5,
        4
      ],
      [
        0,
        0
      ],
      [
        2,
        3
      ],
      [
        1,
        3
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 1,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "meat"
      },
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 74,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "right",
      "down",
      "left",
      "right",
      "up",
      "left",
      "down",
      "left",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 75,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      2
    ],
    "walls": [
      [
        0,
        1
      ],
      [
        4,
        0
      ],
      [
        2,
        1
      ],
      [
        2,
        3
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 2,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "meat"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 75,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left",
      "up",
      "down",
      "up",
      "left",
      "right",
      "down",
      "right",
      "up",
      "right"
    ]
  },
  {
    "id": 76,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      2
    ],
    "walls": [
      [
        4,
        0
      ],
      [
        4,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "meat"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 76,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "up",
      "right",
      "down",
      "right",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 77,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      4
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 0,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "meat"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 77,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "down",
      "up",
      "left",
      "up",
      "down",
      "left",
      "right",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 78,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      4
    ],
    "walls": [
      [
        4,
        3
      ],
      [
        2,
        4
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 0,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "meat"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 78,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "left",
      "down",
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 79,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      2
    ],
    "walls": [
      [
        3,
        4
      ],
      [
        2,
        4
      ],
      [
        1,
        2
      ],
      [
        4,
        3
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 2,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "meat"
      },
      {
        "x": 4,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 79,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "up",
      "right",
      "up",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 80,
    "name": "下班大挑战·挑战关",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      2
    ],
    "walls": [
      [
        2,
        0
      ],
      [
        2,
        1
      ],
      [
        4,
        0
      ],
      [
        2,
        5
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "meat"
      },
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "toast",
        "name": "芝士吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1
        },
        "device": "pan"
      },
      {
        "id": "juice",
        "name": "莓果饮料",
        "ingredients": {
          "water": 1,
          "berry": 1
        },
        "device": "drink"
      },
      {
        "id": "burger",
        "name": "牛肉汉堡",
        "ingredients": {
          "bread": 1,
          "leaf": 1,
          "meat": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 22,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "breakfast",
    "restaurantName": "暖心早餐店",
    "stageNumber": 80,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 21,
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "left",
      "up",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "up",
      "down",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "down"
    ]
  },
  {
    "id": 81,
    "name": "开店第一课·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 5,
    "height": 5,
    "start": [
      1,
      2
    ],
    "walls": [],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 1,
    "chapter": "开店第一课",
    "introductions": [
      "restaurant:street",
      "egg"
    ],
    "optimal": 8,
    "solution": [
      "up",
      "right",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 82,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      2,
      2
    ],
    "walls": [
      [
        2,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 4,
        "type": "egg"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 12,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 2,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 8,
    "solution": [
      "left",
      "up",
      "right",
      "down",
      "right",
      "left",
      "right",
      "up"
    ]
  },
  {
    "id": 83,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      1,
      1
    ],
    "walls": [],
    "items": [
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 2,
        "type": "egg"
      },
      {
        "x": 3,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 1,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 13,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 3,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 9,
    "solution": [
      "left",
      "down",
      "up",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 84,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      1,
      0
    ],
    "walls": [],
    "items": [
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 2,
        "type": "egg"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 11,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 4,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 7,
    "solution": [
      "right",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 85,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      3,
      3
    ],
    "walls": [
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 1,
        "type": "egg"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 13,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 5,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 9,
    "solution": [
      "down",
      "left",
      "up",
      "right",
      "down",
      "left",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 86,
    "name": "开店第一课·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 5,
    "height": 5,
    "start": [
      2,
      3
    ],
    "walls": [
      [
        0,
        0
      ],
      [
        0,
        1
      ],
      [
        4,
        2
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 2,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 14,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 6,
    "chapter": "开店第一课",
    "introductions": [
      "coffee"
    ],
    "optimal": 10,
    "solution": [
      "left",
      "up",
      "right",
      "up",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 87,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      0,
      0
    ],
    "walls": [
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 2,
        "type": "egg"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 4,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 4,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 14,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 7,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 10,
    "solution": [
      "down",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 88,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      2,
      0
    ],
    "walls": [
      [
        1,
        0
      ],
      [
        0,
        3
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "egg"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 1,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 8,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 11,
    "solution": [
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 89,
    "name": "开店第一课·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        0,
        3
      ],
      [
        2,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 4,
        "type": "egg"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 0,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 14,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 9,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 10,
    "solution": [
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "left",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 90,
    "name": "开店第一课·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      2,
      0
    ],
    "walls": [
      [
        4,
        3
      ],
      [
        2,
        2
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 4,
        "y": 2,
        "type": "water"
      },
      {
        "x": 4,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 3,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 9,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 10,
    "chapter": "开店第一课",
    "introductions": [],
    "optimal": 8,
    "solution": [
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 91,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      0,
      3
    ],
    "walls": [
      [
        2,
        1
      ],
      [
        0,
        1
      ],
      [
        0,
        0
      ],
      [
        1,
        3
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 4,
        "type": "egg"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 4,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 4,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 1,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 11,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 12,
    "solution": [
      "up",
      "right",
      "down",
      "up",
      "left",
      "right",
      "left",
      "up",
      "left",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 92,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      0,
      2
    ],
    "walls": [
      [
        0,
        3
      ],
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 4,
        "y": 3,
        "type": "water"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 2,
        "type": "coffee"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 3,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 13,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 12,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 10,
    "solution": [
      "up",
      "right",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 93,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      0,
      3
    ],
    "walls": [
      [
        2,
        3
      ],
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 3,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 2,
        "type": "coffee"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 11,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 13,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 8,
    "solution": [
      "up",
      "right",
      "down",
      "right",
      "down",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 94,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      2,
      2
    ],
    "walls": [
      [
        0,
        0
      ],
      [
        3,
        2
      ],
      [
        3,
        3
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 1,
        "type": "egg"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 4,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 14,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "down",
      "up",
      "right",
      "down",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 95,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 5,
    "height": 5,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        1,
        2
      ],
      [
        0,
        3
      ],
      [
        0,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 1,
        "type": "egg"
      },
      {
        "x": 4,
        "y": 2,
        "type": "water"
      },
      {
        "x": 4,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 4,
        "type": "coffee"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 4,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            4,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 4,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            4
          ]
        ]
      },
      {
        "x": 4,
        "y": 4,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            3,
            4
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 13,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 15,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 10,
    "solution": [
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 96,
    "name": "背包与设备·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      4
    ],
    "walls": [
      [
        4,
        2
      ],
      [
        5,
        4
      ],
      [
        4,
        0
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 1,
        "type": "coffee"
      },
      {
        "x": 5,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 2,
        "y": 0,
        "type": "rice"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 16,
    "chapter": "背包与设备",
    "introductions": [
      "rice"
    ],
    "optimal": 13,
    "solution": [
      "up",
      "right",
      "down",
      "right",
      "up",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 97,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      5
    ],
    "walls": [
      [
        1,
        2
      ],
      [
        2,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 4,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 4,
        "type": "rice"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 17,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 12,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "down"
    ]
  },
  {
    "id": 98,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        3,
        2
      ],
      [
        4,
        0
      ],
      [
        5,
        1
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 1,
        "y": 0,
        "type": "rice"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 18,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "down",
      "up",
      "right",
      "down",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left",
      "up",
      "down"
    ]
  },
  {
    "id": 99,
    "name": "背包与设备·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      2
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        4,
        1
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 3,
        "type": "egg"
      },
      {
        "x": 0,
        "y": 1,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "coffee"
      },
      {
        "x": 5,
        "y": 4,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rice"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 19,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "up",
      "right",
      "down",
      "left",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 100,
    "name": "背包与设备·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      1
    ],
    "walls": [
      [
        2,
        5
      ],
      [
        2,
        4
      ],
      [
        2,
        2
      ],
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 0,
        "y": 1,
        "type": "water"
      },
      {
        "x": 5,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 3,
        "type": "coffee"
      },
      {
        "x": 5,
        "y": 2,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 2,
        "type": "rice"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 20,
    "chapter": "背包与设备",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "left",
      "up",
      "right",
      "down",
      "right",
      "down",
      "up",
      "left",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "down"
    ]
  },
  {
    "id": 101,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      1
    ],
    "walls": [
      [
        1,
        3
      ],
      [
        0,
        3
      ],
      [
        3,
        1
      ],
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "egg"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 2,
        "type": "fish"
      },
      {
        "x": 1,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 21,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "right",
      "left",
      "up",
      "left",
      "right",
      "up",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 102,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        2,
        4
      ],
      [
        0,
        3
      ],
      [
        5,
        4
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 2,
        "type": "coffee"
      },
      {
        "x": 2,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 22,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left",
      "up",
      "right",
      "up"
    ]
  },
  {
    "id": 103,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      1
    ],
    "walls": [
      [
        5,
        4
      ],
      [
        2,
        4
      ],
      [
        4,
        2
      ],
      [
        3,
        3
      ],
      [
        1,
        0
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 23,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "up",
      "left",
      "down",
      "left",
      "down",
      "right",
      "down",
      "right",
      "up",
      "right",
      "up",
      "left",
      "up",
      "down",
      "right",
      "down"
    ]
  },
  {
    "id": 104,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      1
    ],
    "walls": [
      [
        4,
        0
      ],
      [
        0,
        0
      ],
      [
        0,
        4
      ],
      [
        2,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 24,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 12,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "up",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down"
    ]
  },
  {
    "id": 105,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        4,
        0
      ],
      [
        5,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "egg"
      },
      {
        "x": 3,
        "y": 5,
        "type": "water"
      },
      {
        "x": 1,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 1,
        "type": "coffee"
      },
      {
        "x": 2,
        "y": 5,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 25,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "left",
      "right",
      "up",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 106,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      1
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        3,
        4
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "egg"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 3,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 26,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "up",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 107,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      5
    ],
    "walls": [
      [
        5,
        3
      ],
      [
        4,
        0
      ],
      [
        5,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 1,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "egg"
      },
      {
        "x": 3,
        "y": 0,
        "type": "water"
      },
      {
        "x": 2,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 1,
        "type": "coffee"
      },
      {
        "x": 5,
        "y": 2,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 27,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 108,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      4
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        1,
        1
      ],
      [
        1,
        0
      ],
      [
        0,
        3
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "egg"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 3,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 28,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "left",
      "up",
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 109,
    "name": "候场客人·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        2,
        5
      ],
      [
        0,
        4
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "egg"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 1,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 29,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down"
    ]
  },
  {
    "id": 110,
    "name": "候场客人·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      1
    ],
    "walls": [
      [
        2,
        2
      ],
      [
        2,
        1
      ],
      [
        4,
        3
      ],
      [
        2,
        3
      ],
      [
        5,
        4
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 0,
        "y": 2,
        "type": "water"
      },
      {
        "x": 0,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 1,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 2,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 30,
    "chapter": "候场客人",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "up",
      "down",
      "right",
      "down",
      "left",
      "up",
      "right",
      "down",
      "left",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right",
      "down",
      "up"
    ]
  },
  {
    "id": 111,
    "name": "共享食材·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      5
    ],
    "walls": [
      [
        3,
        2
      ],
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 2,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 1,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 31,
    "chapter": "共享食材",
    "introductions": [
      "platter"
    ],
    "optimal": 14,
    "solution": [
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left"
    ]
  },
  {
    "id": 112,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      1
    ],
    "walls": [
      [
        0,
        1
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 5,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 0,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 32,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "down",
      "left",
      "up",
      "left",
      "right",
      "up",
      "left",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 113,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      4
    ],
    "walls": [
      [
        4,
        3
      ],
      [
        2,
        4
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 4,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 4,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 33,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right",
      "up",
      "right",
      "up",
      "down",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 114,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      5
    ],
    "walls": [
      [
        1,
        3
      ],
      [
        3,
        2
      ],
      [
        0,
        0
      ],
      [
        5,
        4
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 0,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 1,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 34,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "up",
      "right",
      "left",
      "down",
      "left",
      "down",
      "up",
      "right",
      "down",
      "left",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 115,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      0
    ],
    "walls": [
      [
        2,
        0
      ],
      [
        4,
        4
      ],
      [
        2,
        2
      ],
      [
        3,
        0
      ],
      [
        0,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 1,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 35,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "down",
      "left",
      "down",
      "up",
      "right",
      "down",
      "up",
      "left",
      "up",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right"
    ]
  },
  {
    "id": 116,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      4
    ],
    "walls": [
      [
        5,
        2
      ],
      [
        0,
        0
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ],
      [
        0,
        1
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 0,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 14,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 36,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 11,
    "solution": [
      "up",
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "up",
      "right"
    ]
  },
  {
    "id": 117,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      0
    ],
    "walls": [
      [
        3,
        1
      ],
      [
        0,
        4
      ],
      [
        2,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 13,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 37,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 10,
    "solution": [
      "right",
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "left",
      "right"
    ]
  },
  {
    "id": 118,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      0
    ],
    "walls": [
      [
        0,
        2
      ],
      [
        1,
        1
      ],
      [
        4,
        4
      ],
      [
        1,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 5,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 38,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "left",
      "down",
      "up",
      "right",
      "down",
      "left",
      "right",
      "up",
      "down",
      "up",
      "left",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 119,
    "name": "共享食材·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      3
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        1,
        0
      ],
      [
        0,
        2
      ],
      [
        3,
        1
      ],
      [
        4,
        4
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 22,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 39,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "down",
      "up",
      "right",
      "down",
      "right",
      "up",
      "left",
      "up",
      "left",
      "down",
      "left",
      "up",
      "left",
      "up",
      "down",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 120,
    "name": "共享食材·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      0
    ],
    "walls": [
      [
        3,
        3
      ],
      [
        4,
        4
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 4,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 40,
    "chapter": "共享食材",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "right",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 121,
    "name": "多道菜订单·新内容",
    "tip": "新内容登场，店长会带你认识新规则。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      3
    ],
    "walls": [
      [
        4,
        1
      ],
      [
        2,
        2
      ],
      [
        4,
        0
      ],
      [
        5,
        0
      ],
      [
        5,
        1
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 3,
        "type": "egg"
      },
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 2,
        "type": "water"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 2,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 41,
    "chapter": "多道菜订单",
    "introductions": [
      "milkberry"
    ],
    "optimal": 14,
    "solution": [
      "right",
      "left",
      "up",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 122,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        5,
        1
      ],
      [
        2,
        3
      ],
      [
        1,
        1
      ],
      [
        5,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 4,
        "type": "egg"
      },
      {
        "x": 5,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 0,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 42,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left",
      "right",
      "up",
      "right",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 123,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      0
    ],
    "walls": [
      [
        4,
        2
      ],
      [
        4,
        1
      ],
      [
        1,
        1
      ],
      [
        2,
        0
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "egg"
      },
      {
        "x": 3,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 43,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 124,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      4
    ],
    "walls": [
      [
        2,
        2
      ],
      [
        0,
        2
      ],
      [
        5,
        4
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 4,
        "type": "egg"
      },
      {
        "x": 5,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 44,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "up",
      "right",
      "down",
      "left",
      "down",
      "right",
      "down",
      "left",
      "up",
      "left",
      "right",
      "down",
      "left",
      "down",
      "right",
      "down"
    ]
  },
  {
    "id": 125,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      1
    ],
    "walls": [
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        2
      ],
      [
        1,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "egg"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 1,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 45,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "down",
      "right",
      "up",
      "right",
      "up",
      "down",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 126,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      2
    ],
    "walls": [
      [
        1,
        0
      ],
      [
        4,
        3
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "egg"
      },
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 46,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "left",
      "right",
      "up",
      "left",
      "down",
      "left",
      "up",
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 127,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      2
    ],
    "walls": [
      [
        0,
        0
      ],
      [
        0,
        4
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 5,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "egg"
      },
      {
        "x": 4,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 0,
        "type": "water"
      },
      {
        "x": 1,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 47,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "down",
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 128,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      3
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        2,
        0
      ],
      [
        2,
        5
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 1,
        "type": "egg"
      },
      {
        "x": 5,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 2,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 15,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 48,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 13,
    "solution": [
      "right",
      "left",
      "up",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 129,
    "name": "多道菜订单·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      4
    ],
    "walls": [
      [
        0,
        4
      ],
      [
        4,
        0
      ],
      [
        5,
        0
      ],
      [
        0,
        3
      ],
      [
        1,
        0
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 3,
        "type": "egg"
      },
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 2,
        "type": "water"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 2,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 49,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "down",
      "up",
      "left",
      "up",
      "down",
      "right",
      "down",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 130,
    "name": "多道菜订单·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      0
    ],
    "walls": [
      [
        3,
        2
      ],
      [
        0,
        0
      ],
      [
        5,
        1
      ],
      [
        4,
        4
      ],
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 4,
        "type": "egg"
      },
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 2,
        "type": "coffee"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          },
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 50,
    "chapter": "多道菜订单",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "left",
      "down",
      "right",
      "left",
      "up",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 131,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      0
    ],
    "walls": [
      [
        5,
        0
      ],
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 2,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 1,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 51,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "left",
      "right",
      "down",
      "up",
      "left",
      "down",
      "up",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 132,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      3
    ],
    "walls": [
      [
        2,
        1
      ],
      [
        5,
        1
      ],
      [
        2,
        4
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 4,
        "y": 0,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 52,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "right",
      "left",
      "up",
      "down",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right"
    ]
  },
  {
    "id": 133,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      3
    ],
    "walls": [
      [
        4,
        0
      ],
      [
        2,
        2
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 2,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 4,
        "type": "coffee"
      },
      {
        "x": 5,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 0,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 53,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "up",
      "left",
      "up",
      "right",
      "down",
      "right",
      "left",
      "right",
      "up",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 134,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      3
    ],
    "walls": [
      [
        4,
        1
      ],
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 1,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 2,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 3,
        "type": "coffee"
      },
      {
        "x": 5,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 54,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "up",
      "left",
      "up",
      "right",
      "down",
      "left",
      "right",
      "up",
      "right",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 135,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      2
    ],
    "walls": [
      [
        1,
        2
      ],
      [
        2,
        4
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 4,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 1,
        "type": "coffee"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 3,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 55,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "up",
      "down",
      "left",
      "up",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "down",
      "right"
    ]
  },
  {
    "id": 136,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      4
    ],
    "walls": [
      [
        2,
        1
      ],
      [
        1,
        3
      ],
      [
        2,
        2
      ],
      [
        1,
        1
      ],
      [
        3,
        1
      ],
      [
        5,
        2
      ],
      [
        5,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 56,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "left",
      "down",
      "left",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "up",
      "down",
      "right",
      "down",
      "left"
    ]
  },
  {
    "id": 137,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      0
    ],
    "walls": [
      [
        2,
        3
      ],
      [
        3,
        1
      ],
      [
        2,
        4
      ],
      [
        4,
        3
      ],
      [
        1,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 2,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 4,
        "type": "water"
      },
      {
        "x": 0,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 57,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "left",
      "down",
      "right",
      "down",
      "right",
      "up",
      "right",
      "up",
      "down",
      "left",
      "down",
      "right",
      "up",
      "right",
      "up",
      "left",
      "down",
      "right",
      "down"
    ]
  },
  {
    "id": 138,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      4
    ],
    "walls": [
      [
        1,
        2
      ],
      [
        3,
        0
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 1,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 3,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 5,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 0,
        "type": "water"
      },
      {
        "x": 0,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 4,
        "type": "coffee"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 1,
        "y": 0,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 17,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 58,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 15,
    "solution": [
      "left",
      "right",
      "up",
      "left",
      "down",
      "left",
      "right",
      "left",
      "up",
      "left",
      "up",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 139,
    "name": "批量出餐·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      3
    ],
    "walls": [
      [
        5,
        3
      ],
      [
        0,
        2
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 2,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 1,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 1,
        "type": "water"
      },
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 4,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 3,
        "type": "bread"
      },
      {
        "x": 2,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 0,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 59,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "left",
      "down",
      "up",
      "right",
      "up",
      "right",
      "down",
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 140,
    "name": "批量出餐·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      4
    ],
    "walls": [
      [
        3,
        3
      ],
      [
        4,
        0
      ],
      [
        3,
        0
      ],
      [
        5,
        0
      ],
      [
        0,
        4
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 1,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 1,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 2,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 2
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 60,
    "chapter": "批量出餐",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "left",
      "up",
      "left",
      "right",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 141,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        2,
        1
      ],
      [
        0,
        0
      ],
      [
        3,
        1
      ],
      [
        4,
        3
      ],
      [
        2,
        2
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 2,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 4,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 4,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 61,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "up",
      "left",
      "up",
      "right",
      "up",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 142,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      5
    ],
    "walls": [
      [
        3,
        4
      ],
      [
        4,
        0
      ],
      [
        0,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 2,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 4,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 22,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 62,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 20,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left",
      "down",
      "left",
      "up",
      "right",
      "down",
      "left",
      "down",
      "up",
      "right",
      "up",
      "left",
      "down"
    ]
  },
  {
    "id": 143,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      3
    ],
    "walls": [
      [
        4,
        4
      ],
      [
        1,
        0
      ]
    ],
    "items": [
      {
        "x": 3,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 5,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 3,
        "type": "berry"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 1,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 0,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 63,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "right",
      "down",
      "right",
      "down",
      "up",
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left",
      "right",
      "left"
    ]
  },
  {
    "id": 144,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      1
    ],
    "walls": [
      [
        4,
        3
      ],
      [
        3,
        4
      ],
      [
        2,
        0
      ],
      [
        2,
        2
      ],
      [
        0,
        1
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 4,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 4,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 3,
        "y": 5,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 64,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "up",
      "left",
      "down",
      "left",
      "up",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "down",
      "right",
      "up",
      "right",
      "up",
      "left",
      "down"
    ]
  },
  {
    "id": 145,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      1
    ],
    "walls": [
      [
        3,
        1
      ],
      [
        4,
        3
      ],
      [
        4,
        4
      ],
      [
        2,
        4
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 5,
        "type": "fish"
      },
      {
        "x": 2,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 1,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 2,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 2,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 22,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 65,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 20,
    "solution": [
      "right",
      "up",
      "right",
      "down",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "down",
      "up",
      "left",
      "right",
      "down",
      "right",
      "down",
      "up"
    ]
  },
  {
    "id": 146,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      2
    ],
    "walls": [
      [
        0,
        2
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 3,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 22,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 66,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 20,
    "solution": [
      "down",
      "up",
      "left",
      "up",
      "left",
      "down",
      "up",
      "right",
      "down",
      "left",
      "up",
      "right",
      "down",
      "left",
      "up",
      "right",
      "up",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 147,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      5,
      4
    ],
    "walls": [
      [
        2,
        0
      ],
      [
        3,
        0
      ],
      [
        3,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 1,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 4,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 2,
        "y": 5,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 22,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 67,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 20,
    "solution": [
      "left",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "right",
      "up",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down"
    ]
  },
  {
    "id": 148,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      4
    ],
    "walls": [
      [
        2,
        2
      ],
      [
        3,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 3,
        "y": 5,
        "type": "fish"
      },
      {
        "x": 1,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 0,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 3,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 21,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 68,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 19,
    "solution": [
      "right",
      "up",
      "left",
      "down",
      "left",
      "up",
      "down",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "down"
    ]
  },
  {
    "id": 149,
    "name": "路线组合·路线练习",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      1
    ],
    "walls": [
      [
        4,
        0
      ],
      [
        2,
        4
      ],
      [
        0,
        0
      ],
      [
        4,
        2
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 4,
        "type": "fish"
      },
      {
        "x": 1,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 3,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 3,
        "y": 0,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 2,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 23,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 69,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 21,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "up",
      "down",
      "left",
      "down",
      "left"
    ]
  },
  {
    "id": 150,
    "name": "路线组合·挑战关",
    "tip": "看清订单与设备，适时制作腾出背包。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        2,
        1
      ],
      [
        3,
        0
      ],
      [
        3,
        4
      ],
      [
        5,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 1,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 5,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 0,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 5,
        "y": 2,
        "type": "egg"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "eggtoast",
        "name": "鸡蛋吐司",
        "ingredients": {
          "bread": 1,
          "cheese": 1,
          "egg": 1
        },
        "device": "pan"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "eggtoast",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 23,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 70,
    "chapter": "路线组合",
    "introductions": [],
    "optimal": 22,
    "solution": [
      "down",
      "right",
      "up",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right",
      "up",
      "right",
      "up",
      "down",
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left"
    ]
  },
  {
    "id": 151,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      0
    ],
    "walls": [
      [
        5,
        4
      ],
      [
        0,
        4
      ],
      [
        5,
        3
      ],
      [
        4,
        2
      ],
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      },
      {
        "x": 2,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 1,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 2,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 1,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 20,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 71,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 18,
    "solution": [
      "left",
      "right",
      "down",
      "left",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right"
    ]
  },
  {
    "id": 152,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      2
    ],
    "walls": [
      [
        0,
        1
      ],
      [
        1,
        0
      ],
      [
        0,
        0
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 2,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 2,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 5,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 3,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 16,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 72,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 14,
    "solution": [
      "left",
      "down",
      "right",
      "up",
      "left",
      "down",
      "right",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "right"
    ]
  },
  {
    "id": 153,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      3,
      3
    ],
    "walls": [
      [
        1,
        2
      ],
      [
        0,
        2
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 5,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 3,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 2,
        "type": "coffee"
      },
      {
        "x": 4,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 2,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 1,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 23,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 73,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 21,
    "solution": [
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down",
      "left",
      "up",
      "left",
      "right",
      "up",
      "left",
      "up",
      "right",
      "down"
    ]
  },
  {
    "id": 154,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      3
    ],
    "walls": [
      [
        4,
        0
      ],
      [
        5,
        4
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 2,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 5,
        "y": 3,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 1,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 4,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 19,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 74,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 17,
    "solution": [
      "up",
      "left",
      "right",
      "down",
      "right",
      "up",
      "right",
      "down",
      "up",
      "left",
      "down",
      "right",
      "down",
      "left",
      "right",
      "up",
      "right"
    ]
  },
  {
    "id": 155,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      0,
      4
    ],
    "walls": [
      [
        0,
        2
      ],
      [
        2,
        0
      ]
    ],
    "items": [
      {
        "x": 1,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 5,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 4,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 5,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 2,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 1,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 22,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 75,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 20,
    "solution": [
      "up",
      "down",
      "right",
      "up",
      "left",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right",
      "up",
      "left",
      "right",
      "down",
      "left",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 156,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      0
    ],
    "walls": [
      [
        4,
        3
      ],
      [
        2,
        2
      ],
      [
        2,
        4
      ],
      [
        4,
        2
      ],
      [
        2,
        3
      ],
      [
        0,
        4
      ],
      [
        1,
        2
      ]
    ],
    "items": [
      {
        "x": 2,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 4,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
        "type": "water"
      },
      {
        "x": 3,
        "y": 5,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      },
      {
        "x": 5,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 18,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 76,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 16,
    "solution": [
      "right",
      "down",
      "right",
      "left",
      "up",
      "down",
      "right",
      "down",
      "right",
      "up",
      "right",
      "up",
      "down",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 157,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      4
    ],
    "walls": [
      [
        4,
        0
      ],
      [
        2,
        1
      ],
      [
        1,
        1
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 1,
        "type": "water"
      },
      {
        "x": 0,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 2,
        "y": 5,
        "type": "coffee"
      },
      {
        "x": 5,
        "y": 2,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 5,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 1,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 3,
        "y": 5,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 23,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 77,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 21,
    "solution": [
      "up",
      "right",
      "up",
      "left",
      "up",
      "left",
      "right",
      "down",
      "right",
      "up",
      "right",
      "down",
      "left",
      "up",
      "down",
      "right",
      "up",
      "left",
      "down",
      "left",
      "right"
    ]
  },
  {
    "id": 158,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      2
    ],
    "walls": [
      [
        3,
        3
      ],
      [
        4,
        2
      ],
      [
        0,
        1
      ],
      [
        1,
        1
      ],
      [
        1,
        3
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 2,
        "type": "rice"
      },
      {
        "x": 3,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 4,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 5,
        "y": 3,
        "type": "water"
      },
      {
        "x": 0,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 1,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 2,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 0,
        "type": "fish"
      },
      {
        "x": 0,
        "y": 4,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 24,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 78,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 22,
    "solution": [
      "left",
      "down",
      "up",
      "right",
      "up",
      "right",
      "down",
      "right",
      "left",
      "up",
      "left",
      "right",
      "down",
      "left",
      "down",
      "left",
      "up",
      "right",
      "up",
      "left",
      "down",
      "right"
    ]
  },
  {
    "id": 159,
    "name": "下班大挑战·路线练习",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      4
    ],
    "walls": [
      [
        1,
        0
      ],
      [
        3,
        1
      ],
      [
        3,
        2
      ]
    ],
    "items": [
      {
        "x": 0,
        "y": 0,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 5,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 4,
        "y": 0,
        "type": "water"
      },
      {
        "x": 5,
        "y": 3,
        "type": "milk"
      },
      {
        "x": 0,
        "y": 4,
        "type": "coffee"
      },
      {
        "x": 2,
        "y": 0,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 5,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 1,
        "type": "fish"
      },
      {
        "x": 2,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 0,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 2,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 22,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 79,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 20,
    "solution": [
      "left",
      "right",
      "up",
      "left",
      "up",
      "down",
      "left",
      "up",
      "left",
      "right",
      "up",
      "right",
      "down",
      "left",
      "up",
      "left",
      "up",
      "down",
      "right",
      "up"
    ]
  },
  {
    "id": 160,
    "name": "下班大挑战·挑战关",
    "tip": "综合挑战：先规划制作顺序，再收集材料。",
    "width": 6,
    "height": 6,
    "start": [
      4,
      2
    ],
    "walls": [
      [
        4,
        4
      ],
      [
        3,
        1
      ],
      [
        0,
        2
      ]
    ],
    "items": [
      {
        "x": 5,
        "y": 3,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 4,
        "type": "leaf"
      },
      {
        "x": 1,
        "y": 0,
        "type": "tomato"
      },
      {
        "x": 2,
        "y": 5,
        "type": "water"
      },
      {
        "x": 0,
        "y": 1,
        "type": "milk"
      },
      {
        "x": 3,
        "y": 0,
        "type": "coffee"
      },
      {
        "x": 0,
        "y": 4,
        "type": "milk"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 3,
        "type": "fish"
      },
      {
        "x": 3,
        "y": 5,
        "type": "rice"
      },
      {
        "x": 5,
        "y": 2,
        "type": "leaf"
      },
      {
        "x": 0,
        "y": 0,
        "type": "tomato"
      }
    ],
    "devices": [
      {
        "x": 5,
        "y": 0,
        "type": "table",
        "name": "料理台",
        "stations": [
          [
            5,
            1
          ]
        ]
      },
      {
        "x": 0,
        "y": 5,
        "type": "pan",
        "name": "煎锅",
        "stations": [
          [
            1,
            5
          ]
        ]
      },
      {
        "x": 5,
        "y": 5,
        "type": "drink",
        "name": "饮料机",
        "stations": [
          [
            4,
            5
          ]
        ]
      }
    ],
    "recipes": [
      {
        "id": "salad",
        "name": "蔬菜沙拉",
        "ingredients": {
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "coffee",
        "name": "牛奶咖啡",
        "ingredients": {
          "water": 1,
          "milk": 1,
          "coffee": 1
        },
        "device": "drink"
      },
      {
        "id": "fishrice",
        "name": "香煎鱼饭",
        "ingredients": {
          "fish": 1,
          "rice": 1
        },
        "device": "pan"
      },
      {
        "id": "platter",
        "name": "田园饭碗",
        "ingredients": {
          "rice": 1,
          "leaf": 1,
          "tomato": 1
        },
        "device": "table"
      },
      {
        "id": "milkberry",
        "name": "莓果奶昔",
        "ingredients": {
          "milk": 1,
          "berry": 1
        },
        "device": "drink"
      }
    ],
    "customers": [
      {
        "id": "c1",
        "name": "客人1",
        "orders": [
          {
            "recipe": "platter",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人2",
        "orders": [
          {
            "recipe": "coffee",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人3",
        "orders": [
          {
            "recipe": "milkberry",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
        "name": "客人4",
        "orders": [
          {
            "recipe": "fishrice",
            "count": 1
          }
        ]
      },
      {
        "id": "c5",
        "name": "客人5",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      }
    ],
    "capacity": 7,
    "budget": 23,
    "availableProps": [
      "undo",
      "overtime",
      "ad-slot"
    ],
    "restaurantId": "street",
    "restaurantName": "街角简餐店",
    "stageNumber": 80,
    "chapter": "下班大挑战",
    "introductions": [],
    "optimal": 22,
    "solution": [
      "up",
      "down",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "right",
      "left",
      "down",
      "right",
      "down",
      "right",
      "left",
      "up",
      "right",
      "down",
      "right",
      "down",
      "up"
    ]
  }
];
