import type{Level}from'./Types';
/** Seeded reverse construction; every stored route is replayed with shipping actDrag. */
export const LEVELS:Level[]=[
  {
    "id": 1,
    "name": "交错备餐",
    "width": 6,
    "height": 7,
    "entities": [
      {
        "id": "pan0",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 1,
        "y": 1
      },
      {
        "id": "tray0",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 4,
        "y": 1
      },
      {
        "id": "pan1",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 4,
        "y": 6
      },
      {
        "id": "tray1",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 5
      },
      {
        "id": "pan2",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 3,
        "y": 0
      },
      {
        "id": "tray2",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 2,
        "y": 0
      },
      {
        "id": "pan3",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
      },
      {
        "id": "tray3",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 4,
        "y": 3
      }
    ],
    "foods": [
      {
        "id": "food0",
        "kind": "waffle",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 1,
        "y": 1,
        "carrierId": "pan0"
      },
      {
        "id": "food1",
        "kind": "fish",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 4,
        "y": 6,
        "carrierId": "pan1"
      },
      {
        "id": "food2",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 3,
        "y": 0,
        "carrierId": "pan2"
      },
      {
        "id": "food3",
        "kind": "bread",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3,
        "carrierId": "pan3"
      }
    ],
    "orders": [
      {
        "id": "order0",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "waffle",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              },
              {
                "x": 1,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order1",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "fish",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order2",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order3",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "bread",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "top",
        "start": 3,
        "width": 1,
        "color": "yellow"
      },
      {
        "side": "right",
        "start": 2,
        "width": 1,
        "color": "red"
      },
      {
        "side": "bottom",
        "start": 2,
        "width": 2,
        "color": "green"
      },
      {
        "side": "left",
        "start": 3,
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "pan3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "tray0",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "tray1",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "pan3",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "pan2",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "pan2",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food3",
        "dx": 4,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": -2,
        "dy": 2
      },
      {
        "entityId": "pan3",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "food2",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray2",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "pan2",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "food1",
        "dx": -4,
        "dy": 0
      },
      {
        "entityId": "tray1",
        "dx": -1,
        "dy": -3
      },
      {
        "entityId": "pan1",
        "dx": -5,
        "dy": -3
      },
      {
        "entityId": "food0",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "tray0",
        "dx": -1,
        "dy": 3
      }
    ]
  },
  {
    "id": 2,
    "name": "双向借位",
    "width": 7,
    "height": 8,
    "entities": [
      {
        "id": "buffer0",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 3,
        "y": 6
      },
      {
        "id": "buffer1",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
      },
      {
        "id": "pan0",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 0
      },
      {
        "id": "tray0",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 4,
        "y": 2
      },
      {
        "id": "pan1",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 6,
        "y": 6
      },
      {
        "id": "tray1",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 6,
        "y": 4
      },
      {
        "id": "pan2",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 4
      },
      {
        "id": "tray2",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 5
      },
      {
        "id": "pan3",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 4,
        "y": 0
      },
      {
        "id": "tray3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 5,
        "y": 6
      },
      {
        "id": "pan4",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 5,
        "y": 4
      },
      {
        "id": "tray4",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 2
      },
      {
        "id": "pan5",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 1
      },
      {
        "id": "tray5",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 6
      }
    ],
    "foods": [
      {
        "id": "food0",
        "kind": "fish",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 0,
        "carrierId": "pan0"
      },
      {
        "id": "food1",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 6,
        "y": 6,
        "carrierId": "pan1"
      },
      {
        "id": "food2",
        "kind": "bread",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 4,
        "carrierId": "pan2"
      },
      {
        "id": "food3",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 4,
        "y": 0,
        "carrierId": "pan3"
      },
      {
        "id": "food4",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 5,
        "y": 4,
        "carrierId": "pan4"
      },
      {
        "id": "food5",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 1,
        "carrierId": "pan5"
      }
    ],
    "orders": [
      {
        "id": "order0",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "fish",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order1",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order2",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "bread",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order3",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order4",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order5",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "top",
        "start": 3,
        "width": 1,
        "color": "yellow"
      },
      {
        "side": "right",
        "start": 2,
        "width": 1,
        "color": "red"
      },
      {
        "side": "bottom",
        "start": 2,
        "width": 2,
        "color": "green"
      },
      {
        "side": "left",
        "start": 4,
        "width": 2,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "pan2",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "tray2",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "tray4",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "pan4",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray2",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "pan5",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "tray0",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "food5",
        "dx": -2,
        "dy": 3
      },
      {
        "entityId": "tray5",
        "dx": 6,
        "dy": -4
      },
      {
        "entityId": "pan5",
        "dx": -4,
        "dy": 2
      },
      {
        "entityId": "food4",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": -4
      },
      {
        "entityId": "pan4",
        "dx": -2,
        "dy": -6
      },
      {
        "entityId": "food3",
        "dx": 1,
        "dy": 6
      },
      {
        "entityId": "tray3",
        "dx": -6,
        "dy": -2
      },
      {
        "entityId": "pan3",
        "dx": -1,
        "dy": 7
      },
      {
        "entityId": "food2",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "tray2",
        "dx": 0,
        "dy": 4
      },
      {
        "entityId": "pan2",
        "dx": 6,
        "dy": 0
      },
      {
        "entityId": "food1",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "tray1",
        "dx": -3,
        "dy": -5
      },
      {
        "entityId": "pan1",
        "dx": -7,
        "dy": -2
      },
      {
        "entityId": "food0",
        "dx": -4,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": -2,
        "dy": 3
      }
    ]
  },
  {
    "id": 3,
    "name": "回旋厨房",
    "width": 8,
    "height": 9,
    "entities": [
      {
        "id": "buffer0",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 4,
        "y": 5
      },
      {
        "id": "buffer1",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
      },
      {
        "id": "buffer2",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 6,
        "y": 1
      },
      {
        "id": "pan0",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 6,
        "y": 4
      },
      {
        "id": "tray0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 5,
        "y": 6
      },
      {
        "id": "pan1",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 0,
        "y": 1
      },
      {
        "id": "tray1",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 0,
        "y": 7
      },
      {
        "id": "pan2",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 4,
        "y": 7
      },
      {
        "id": "tray2",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 3,
        "y": 2
      },
      {
        "id": "pan3",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
      },
      {
        "id": "tray3",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 6,
        "y": 8
      },
      {
        "id": "pan4",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 5,
        "y": 4
      },
      {
        "id": "tray4",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 2,
        "y": 1
      },
      {
        "id": "pan5",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 7
      },
      {
        "id": "tray5",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 5
      },
      {
        "id": "pan6",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 4
      },
      {
        "id": "tray6",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 6
      },
      {
        "id": "pan7",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 0
      },
      {
        "id": "tray7",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 0
      }
    ],
    "foods": [
      {
        "id": "food0",
        "kind": "lasagna",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 6,
        "y": 4,
        "carrierId": "pan0"
      },
      {
        "id": "food1",
        "kind": "waffle",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 0,
        "y": 1,
        "carrierId": "pan1"
      },
      {
        "id": "food2",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 4,
        "y": 7,
        "carrierId": "pan2"
      },
      {
        "id": "food3",
        "kind": "bread",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3,
        "carrierId": "pan3"
      },
      {
        "id": "food4",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 5,
        "y": 4,
        "carrierId": "pan4"
      },
      {
        "id": "food5",
        "kind": "fish",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 7,
        "carrierId": "pan5"
      },
      {
        "id": "food6",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 4,
        "carrierId": "pan6"
      },
      {
        "id": "food7",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 0,
        "carrierId": "pan7"
      }
    ],
    "orders": [
      {
        "id": "order0",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "lasagna",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              },
              {
                "x": 1,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order1",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "waffle",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              },
              {
                "x": 1,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order2",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order3",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "bread",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order4",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order5",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "fish",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order6",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order7",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "top",
        "start": 4,
        "width": 1,
        "color": "yellow"
      },
      {
        "side": "right",
        "start": 2,
        "width": 2,
        "color": "red"
      },
      {
        "side": "bottom",
        "start": 3,
        "width": 2,
        "color": "green"
      },
      {
        "side": "left",
        "start": 4,
        "width": 2,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray7",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "buffer2",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "pan7",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "buffer2",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "tray2",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "pan6",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "tray2",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "pan2",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "pan2",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "pan6",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "pan6",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food7",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": 3,
        "dy": 0
      },
      {
        "entityId": "pan7",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "food6",
        "dx": -3,
        "dy": 5
      },
      {
        "entityId": "tray6",
        "dx": 2,
        "dy": -7
      },
      {
        "entityId": "pan6",
        "dx": -6,
        "dy": 3
      },
      {
        "entityId": "food5",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "pan5",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "food4",
        "dx": -3,
        "dy": -3
      },
      {
        "entityId": "tray4",
        "dx": -3,
        "dy": 3
      },
      {
        "entityId": "pan4",
        "dx": -2,
        "dy": 4
      },
      {
        "entityId": "food3",
        "dx": 6,
        "dy": 5
      },
      {
        "entityId": "tray3",
        "dx": -3,
        "dy": 1
      },
      {
        "entityId": "pan3",
        "dx": 3,
        "dy": 6
      },
      {
        "entityId": "food2",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "tray2",
        "dx": 0,
        "dy": -3
      },
      {
        "entityId": "pan2",
        "dx": 1,
        "dy": 4
      },
      {
        "entityId": "food1",
        "dx": 0,
        "dy": 6
      },
      {
        "entityId": "tray1",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "pan1",
        "dx": 3,
        "dy": 7
      },
      {
        "entityId": "food0",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "tray0",
        "dx": 2,
        "dy": -4
      }
    ]
  },
  {
    "id": 4,
    "name": "拥挤出餐",
    "width": 8,
    "height": 10,
    "entities": [
      {
        "id": "buffer0",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 3,
        "y": 6
      },
      {
        "id": "buffer1",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 3,
        "y": 8
      },
      {
        "id": "buffer2",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 1,
        "y": 5
      },
      {
        "id": "buffer3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 9
      },
      {
        "id": "pan0",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 1,
        "y": 1
      },
      {
        "id": "tray0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 2,
        "y": 3
      },
      {
        "id": "pan1",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 4,
        "y": 4
      },
      {
        "id": "tray1",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 5,
        "y": 0
      },
      {
        "id": "pan2",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 4
      },
      {
        "id": "tray2",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 8
      },
      {
        "id": "pan3",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 1,
        "y": 3
      },
      {
        "id": "tray3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 6,
        "y": 7
      },
      {
        "id": "pan4",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 7
      },
      {
        "id": "tray4",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 5
      },
      {
        "id": "pan5",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 7,
        "y": 6
      },
      {
        "id": "tray5",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 7,
        "y": 3
      },
      {
        "id": "pan6",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 6
      },
      {
        "id": "tray6",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 4,
        "y": 7
      },
      {
        "id": "pan7",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 1
      },
      {
        "id": "tray7",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 2
      },
      {
        "id": "pan8",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 0
      },
      {
        "id": "tray8",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 3
      },
      {
        "id": "pan9",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 1
      },
      {
        "id": "tray9",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 0
      }
    ],
    "foods": [
      {
        "id": "food0",
        "kind": "lasagna",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 1,
        "y": 1,
        "carrierId": "pan0"
      },
      {
        "id": "food1",
        "kind": "waffle",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 4,
        "y": 4,
        "carrierId": "pan1"
      },
      {
        "id": "food2",
        "kind": "bread",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 4,
        "carrierId": "pan2"
      },
      {
        "id": "food3",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 1,
        "y": 3,
        "carrierId": "pan3"
      },
      {
        "id": "food4",
        "kind": "fish",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 7,
        "carrierId": "pan4"
      },
      {
        "id": "food5",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 7,
        "y": 6,
        "carrierId": "pan5"
      },
      {
        "id": "food6",
        "kind": "bread",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 6,
        "carrierId": "pan6"
      },
      {
        "id": "food7",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 1,
        "carrierId": "pan7"
      },
      {
        "id": "food8",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 0,
        "carrierId": "pan8"
      },
      {
        "id": "food9",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 1,
        "carrierId": "pan9"
      }
    ],
    "orders": [
      {
        "id": "order0",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "lasagna",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              },
              {
                "x": 1,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order1",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "waffle",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              },
              {
                "x": 1,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order2",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "bread",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order3",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order4",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "fish",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order5",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order6",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "bread",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order7",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order8",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order9",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "top",
        "start": 4,
        "width": 1,
        "color": "yellow"
      },
      {
        "side": "right",
        "start": 2,
        "width": 2,
        "color": "red"
      },
      {
        "side": "bottom",
        "start": 3,
        "width": 2,
        "color": "green"
      },
      {
        "side": "left",
        "start": 5,
        "width": 2,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "pan9",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "pan4",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray1",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "pan9",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "pan7",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "pan7",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "pan9",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "buffer1",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "pan8",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "pan7",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "pan3",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "buffer3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray1",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "buffer1",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "food9",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": -3
      },
      {
        "entityId": "pan9",
        "dx": 5,
        "dy": 1
      },
      {
        "entityId": "food8",
        "dx": 2,
        "dy": 3
      },
      {
        "entityId": "tray8",
        "dx": 4,
        "dy": 0
      },
      {
        "entityId": "pan8",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "food7",
        "dx": 5,
        "dy": 3
      },
      {
        "entityId": "tray7",
        "dx": -1,
        "dy": -4
      },
      {
        "entityId": "pan7",
        "dx": 8,
        "dy": 3
      },
      {
        "entityId": "food6",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "tray6",
        "dx": -1,
        "dy": 3
      },
      {
        "entityId": "pan6",
        "dx": -2,
        "dy": 4
      },
      {
        "entityId": "food5",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "tray5",
        "dx": -3,
        "dy": -5
      },
      {
        "entityId": "pan5",
        "dx": -3,
        "dy": -7
      },
      {
        "entityId": "food4",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "tray4",
        "dx": -3,
        "dy": 0
      },
      {
        "entityId": "pan4",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "food3",
        "dx": 6,
        "dy": 6
      },
      {
        "entityId": "tray3",
        "dx": -7,
        "dy": -2
      },
      {
        "entityId": "pan3",
        "dx": -1,
        "dy": 4
      },
      {
        "entityId": "food2",
        "dx": -5,
        "dy": 4
      },
      {
        "entityId": "tray2",
        "dx": 3,
        "dy": 2
      },
      {
        "entityId": "pan2",
        "dx": -6,
        "dy": 1
      },
      {
        "entityId": "food1",
        "dx": 1,
        "dy": -4
      },
      {
        "entityId": "tray1",
        "dx": -2,
        "dy": 9
      },
      {
        "entityId": "pan1",
        "dx": 3,
        "dy": -2
      },
      {
        "entityId": "food0",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "tray0",
        "dx": 5,
        "dy": -1
      }
    ]
  },
  {
    "id": 5,
    "name": "长桌高峰",
    "width": 8,
    "height": 12,
    "entities": [
      {
        "id": "buffer0",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 4,
        "y": 6
      },
      {
        "id": "buffer1",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 11
      },
      {
        "id": "buffer2",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 2,
        "y": 4
      },
      {
        "id": "buffer3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 4
      },
      {
        "id": "buffer4",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 0,
        "y": 4
      },
      {
        "id": "pan0",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 0,
        "y": 2
      },
      {
        "id": "tray0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 1,
        "y": 0
      },
      {
        "id": "pan1",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 3,
        "y": 4
      },
      {
        "id": "tray1",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 2,
        "y": 2
      },
      {
        "id": "pan2",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 0,
        "y": 9
      },
      {
        "id": "tray2",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 5,
        "y": 5
      },
      {
        "id": "pan3",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 7,
        "y": 0
      },
      {
        "id": "tray3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 4,
        "y": 10
      },
      {
        "id": "pan4",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 6,
        "y": 10
      },
      {
        "id": "tray4",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 3,
        "y": 8
      },
      {
        "id": "pan5",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 5,
        "y": 9
      },
      {
        "id": "tray5",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 5,
        "y": 2
      },
      {
        "id": "pan6",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 9
      },
      {
        "id": "tray6",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 3,
        "y": 9
      },
      {
        "id": "pan7",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 2,
        "y": 7
      },
      {
        "id": "tray7",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 1,
        "y": 7
      },
      {
        "id": "pan8",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 1
      },
      {
        "id": "tray8",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 6
      },
      {
        "id": "pan9",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 2
      },
      {
        "id": "tray9",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 0
      },
      {
        "id": "pan10",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 1
      },
      {
        "id": "tray10",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 9
      },
      {
        "id": "pan11",
        "type": "pan",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 2
      },
      {
        "id": "tray11",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 5
      }
    ],
    "foods": [
      {
        "id": "food0",
        "kind": "lasagna",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 0,
        "y": 2,
        "carrierId": "pan0"
      },
      {
        "id": "food1",
        "kind": "lasagna",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 3,
        "y": 4,
        "carrierId": "pan1"
      },
      {
        "id": "food2",
        "kind": "waffle",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 0,
        "y": 9,
        "carrierId": "pan2"
      },
      {
        "id": "food3",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 7,
        "y": 0,
        "carrierId": "pan3"
      },
      {
        "id": "food4",
        "kind": "fish",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 6,
        "y": 10,
        "carrierId": "pan4"
      },
      {
        "id": "food5",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 5,
        "y": 9,
        "carrierId": "pan5"
      },
      {
        "id": "food6",
        "kind": "bread",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 9,
        "carrierId": "pan6"
      },
      {
        "id": "food7",
        "kind": "omelette",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "x": 2,
        "y": 7,
        "carrierId": "pan7"
      },
      {
        "id": "food8",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 1,
        "carrierId": "pan8"
      },
      {
        "id": "food9",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 2,
        "carrierId": "pan9"
      },
      {
        "id": "food10",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 1,
        "carrierId": "pan10"
      },
      {
        "id": "food11",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 2,
        "carrierId": "pan11"
      }
    ],
    "orders": [
      {
        "id": "order0",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "lasagna",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              },
              {
                "x": 1,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order1",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "lasagna",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              },
              {
                "x": 1,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order2",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "waffle",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              },
              {
                "x": 1,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order3",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order4",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "fish",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order5",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order6",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "bread",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 1,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order7",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          },
          {
            "x": 0,
            "y": 1
          }
        ],
        "foods": [
          {
            "kind": "omelette",
            "shape": [
              {
                "x": 0,
                "y": 0
              },
              {
                "x": 0,
                "y": 1
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order8",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order9",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order10",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      },
      {
        "id": "order11",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 0,
            "y": 0
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "top",
        "start": 4,
        "width": 1,
        "color": "yellow"
      },
      {
        "side": "right",
        "start": 2,
        "width": 2,
        "color": "red"
      },
      {
        "side": "bottom",
        "start": 3,
        "width": 2,
        "color": "green"
      },
      {
        "side": "left",
        "start": 6,
        "width": 2,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "buffer4",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "buffer4",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "pan4",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "pan8",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray10",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "pan11",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray11",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "tray10",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray11",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "tray9",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray8",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "buffer4",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray7",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "pan4",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray7",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "pan4",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "pan8",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "tray11",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "pan4",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "pan11",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "pan9",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "food11",
        "dx": 2,
        "dy": 4
      },
      {
        "entityId": "tray11",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "pan11",
        "dx": 3,
        "dy": 2
      },
      {
        "entityId": "food10",
        "dx": 1,
        "dy": 7
      },
      {
        "entityId": "tray10",
        "dx": -3,
        "dy": -9
      },
      {
        "entityId": "pan10",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "food9",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "tray9",
        "dx": 5,
        "dy": 1
      },
      {
        "entityId": "pan9",
        "dx": 3,
        "dy": -1
      },
      {
        "entityId": "food8",
        "dx": -1,
        "dy": 8
      },
      {
        "entityId": "tray8",
        "dx": -1,
        "dy": -9
      },
      {
        "entityId": "pan8",
        "dx": -7,
        "dy": 7
      },
      {
        "entityId": "food7",
        "dx": -1,
        "dy": -3
      },
      {
        "entityId": "tray7",
        "dx": -2,
        "dy": 2
      },
      {
        "entityId": "pan7",
        "dx": -3,
        "dy": -1
      },
      {
        "entityId": "food6",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": 0,
        "dy": 3
      },
      {
        "entityId": "pan6",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "food5",
        "dx": -1,
        "dy": -7
      },
      {
        "entityId": "tray5",
        "dx": 0,
        "dy": -3
      },
      {
        "entityId": "pan5",
        "dx": -6,
        "dy": -3
      },
      {
        "entityId": "food4",
        "dx": -1,
        "dy": -3
      },
      {
        "entityId": "tray4",
        "dx": -6,
        "dy": -1
      },
      {
        "entityId": "pan4",
        "dx": -7,
        "dy": -4
      },
      {
        "entityId": "food3",
        "dx": -5,
        "dy": 10
      },
      {
        "entityId": "tray3",
        "dx": -3,
        "dy": -4
      },
      {
        "entityId": "pan3",
        "dx": -8,
        "dy": 6
      },
      {
        "entityId": "food2",
        "dx": 5,
        "dy": -4
      },
      {
        "entityId": "tray2",
        "dx": -2,
        "dy": 6
      },
      {
        "entityId": "pan2",
        "dx": 3,
        "dy": 2
      },
      {
        "entityId": "food1",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray1",
        "dx": 5,
        "dy": 0
      },
      {
        "entityId": "pan1",
        "dx": 4,
        "dy": -2
      },
      {
        "entityId": "food0",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "tray0",
        "dx": 6,
        "dy": 2
      }
    ]
  }
];
export const levels=LEVELS;export const solutions=LEVELS.map(l=>l.solution);
