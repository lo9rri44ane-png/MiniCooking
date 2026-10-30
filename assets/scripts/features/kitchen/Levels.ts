import type {Level} from './Rules';
export const LEVELS: Level[] = [
  {
    "id": 1,
    "name": "第一份沙拉",
    "tip": "沿途拾取。停在料理台前的绿色格，自动制作。",
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
    "budget": 5,
    "optimal": 2,
    "solution": [
      "right",
      "up"
    ]
  },
  {
    "id": 2,
    "name": "绕个弯开饭",
    "tip": "设备本身会挡路；先规划停靠方向。",
    "width": 5,
    "height": 5,
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
        3,
        1
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
        "y": 2,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
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
        "id": "c0",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c1",
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
    "budget": 9,
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
    "id": 3,
    "name": "两种厨房设备",
    "tip": "六份材料会挤满安全空间，适时制作腾背包。",
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
      ],
      [
        2,
        1
      ],
      [
        1,
        2
      ]
    ],
    "items": [
      {
        "x": 4,
        "y": 3,
        "type": "leaf"
      },
      {
        "x": 2,
        "y": 4,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 3,
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
      },
      {
        "id": "c1",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
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
    "budget": 10,
    "optimal": 8,
    "solution": [
      "right",
      "left",
      "down",
      "right",
      "down",
      "left",
      "right",
      "up"
    ]
  },
  {
    "id": 4,
    "name": "饮料也要准备",
    "tip": "新增饮料机：先收什么、先做什么都影响路线。",
    "width": 6,
    "height": 6,
    "start": [
      2,
      3
    ],
    "walls": [
      [
        1,
        0
      ],
      [
        2,
        1
      ],
      [
        0,
        4
      ],
      [
        0,
        0
      ],
      [
        4,
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
        "x": 0,
        "y": 3,
        "type": "tomato"
      },
      {
        "x": 0,
        "y": 1,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 3,
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
        "id": "c0",
        "name": "客人1",
        "orders": [
          {
            "recipe": "salad",
            "count": 1
          }
        ]
      },
      {
        "id": "c1",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
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
    "budget": 11,
    "optimal": 9,
    "solution": [
      "left",
      "up",
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
    "id": 5,
    "name": "客人接着来",
    "tip": "三位客人后还有候场，提前查看后续需求。",
    "width": 6,
    "height": 6,
    "start": [
      1,
      2
    ],
    "walls": [
      [
        1,
        1
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
        0,
        1
      ],
      [
        3,
        1
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
        "x": 1,
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
        "y": 3,
        "type": "water"
      },
      {
        "x": 4,
        "y": 0,
        "type": "berry"
      },
      {
        "x": 0,
        "y": 4,
        "type": "bread"
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
          "meat": 1
        },
        "device": "pan"
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
      },
      {
        "id": "c1",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
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
    "optimal": 11,
    "solution": [
      "left",
      "down",
      "up",
      "right",
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
    "id": 6,
    "name": "下班前的高峰",
    "tip": "五位客人、多菜谱、共享面包。第七份材料立即失败！",
    "width": 6,
    "height": 6,
    "start": [
      1,
      2
    ],
    "walls": [
      [
        0,
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
        0,
        3
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
        "x": 2,
        "y": 5,
        "type": "leaf"
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
        "x": 5,
        "y": 3,
        "type": "cheese"
      },
      {
        "x": 0,
        "y": 4,
        "type": "water"
      },
      {
        "x": 5,
        "y": 4,
        "type": "berry"
      },
      {
        "x": 3,
        "y": 5,
        "type": "bread"
      },
      {
        "x": 5,
        "y": 2,
        "type": "meat"
      },
      {
        "x": 2,
        "y": 0,
        "type": "leaf"
      },
      {
        "x": 1,
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
          "meat": 1
        },
        "device": "pan"
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
      },
      {
        "id": "c1",
        "name": "客人2",
        "orders": [
          {
            "recipe": "toast",
            "count": 1
          }
        ]
      },
      {
        "id": "c2",
        "name": "客人3",
        "orders": [
          {
            "recipe": "juice",
            "count": 1
          }
        ]
      },
      {
        "id": "c3",
        "name": "客人4",
        "orders": [
          {
            "recipe": "burger",
            "count": 1
          }
        ]
      },
      {
        "id": "c4",
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
    "optimal": 15,
    "solution": [
      "right",
      "down",
      "left",
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
      "right"
    ]
  }
];

