import type{Level}from'./Types';
/** Verified base and full-board storage puzzles; feasible routes are not optimality claims. */
export const LEVELS:Level[]=[
  {
    "id": 1,
    "name": "交错备餐",
    "width": 6,
    "height": 7,
    "entities": [
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
        "x": 0,
        "y": 5
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
        "y": 2
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
        "x": 0,
        "y": 0
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
        "x": 2,
        "y": 1
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
        "x": 2,
        "y": 3
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
        "y": 6
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
        "x": 1,
        "y": 1
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
        "x": 1,
        "y": 0
      }
    ],
    "orders": [
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
        "entityId": "tray3",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "tray0",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "food3",
        "dx": 3,
        "dy": 4
      },
      {
        "entityId": "tray3",
        "dx": -2,
        "dy": 3
      },
      {
        "entityId": "food2",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray2",
        "dx": 3,
        "dy": -1
      },
      {
        "entityId": "food1",
        "dx": -2,
        "dy": -4
      },
      {
        "entityId": "tray1",
        "dx": -3,
        "dy": 1
      },
      {
        "entityId": "food0",
        "dx": -2,
        "dy": 2
      },
      {
        "entityId": "tray0",
        "dx": 2,
        "dy": 1
      }
    ],
    "timeLimitSeconds": 300
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 3
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
        "x": 0,
        "y": 1
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
        "y": 1
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
        "x": 5,
        "y": 5
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 7
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
        "x": 4,
        "y": 7
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
        "x": 5,
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
        "x": 4,
        "y": 0
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
        "x": 2,
        "y": 1
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
        "y": 7
      },
      {
        "id": "food3",
        "kind": "berry",
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
        "y": 6
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
        "y": 1
      },
      {
        "id": "food5",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
      }
    ],
    "orders": [
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
            "kind": "sushi",
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
        "id": "order3",
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
            "kind": "berry",
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray3",
        "dx": 2,
        "dy": -2
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray4",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "tray1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "food5",
        "dx": 4,
        "dy": 4
      },
      {
        "entityId": "tray5",
        "dx": 3,
        "dy": -5
      },
      {
        "entityId": "food4",
        "dx": -2,
        "dy": 3
      },
      {
        "entityId": "tray4",
        "dx": 0,
        "dy": -5
      },
      {
        "entityId": "food3",
        "dx": 4,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": -5,
        "dy": -2
      },
      {
        "entityId": "food2",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "tray2",
        "dx": -3,
        "dy": 3
      },
      {
        "entityId": "food1",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray1",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "food0",
        "dx": -4,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": -1,
        "dy": 3
      }
    ],
    "timeLimitSeconds": 300
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 3,
        "y": 2
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
        "x": 6,
        "y": 0
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
        "y": 6
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
        "y": 7
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
        "x": 4,
        "y": 1
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
        "x": 0,
        "y": 2
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
        "x": 3,
        "y": 3
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
        "x": 5,
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
        "x": 0,
        "y": 6
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
        "y": 0
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
        "y": 5
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
        "y": 8
      },
      {
        "id": "food4",
        "kind": "berry",
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
        "y": 6
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
        "x": 4,
        "y": 4
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
        "y": 5
      },
      {
        "id": "food7",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 3
      }
    ],
    "orders": [
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
            "kind": "sushi",
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
            "kind": "berry",
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray2",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray6",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "tray4",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray4",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "buffer1",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "buffer0",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "tray2",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "tray2",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "tray6",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "buffer1",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "tray2",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "food7",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": 5,
        "dy": 0
      },
      {
        "entityId": "food6",
        "dx": 3,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": -1,
        "dy": -6
      },
      {
        "entityId": "food5",
        "dx": -4,
        "dy": -2
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "food4",
        "dx": -4,
        "dy": -6
      },
      {
        "entityId": "tray4",
        "dx": -3,
        "dy": 4
      },
      {
        "entityId": "food3",
        "dx": 6,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": -3,
        "dy": 1
      },
      {
        "entityId": "food2",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "tray2",
        "dx": 2,
        "dy": -7
      },
      {
        "entityId": "food1",
        "dx": 5,
        "dy": 6
      },
      {
        "entityId": "tray1",
        "dx": -2,
        "dy": 2
      },
      {
        "entityId": "food0",
        "dx": 6,
        "dy": -6
      },
      {
        "entityId": "tray0",
        "dx": 1,
        "dy": 2
      }
    ],
    "timeLimitSeconds": 300
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 2
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
        "x": 5,
        "y": 6
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 4,
        "y": 8
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
        "x": 6,
        "y": 0
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
        "x": 1,
        "y": 9
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 9
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
        "x": 0,
        "y": 4
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
        "x": 3,
        "y": 5
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
        "x": 1,
        "y": 6
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
        "x": 4,
        "y": 2
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
        "y": 5
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
        "x": 7,
        "y": 3
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
        "y": 2
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
        "x": 2,
        "y": 3
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
        "x": 6,
        "y": 7
      },
      {
        "id": "food3",
        "kind": "berry",
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
        "x": 2,
        "y": 7
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
        "y": 1
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
        "y": 8
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
        "x": 7,
        "y": 6
      },
      {
        "id": "food8",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
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
        "y": 1
      }
    ],
    "orders": [
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
            "kind": "sushi",
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
        "id": "order3",
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
            "kind": "berry",
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray7",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "tray7",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "buffer2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray2",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "tray6",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "tray7",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "food9",
        "dx": 1,
        "dy": 3
      },
      {
        "entityId": "tray9",
        "dx": 0,
        "dy": -5
      },
      {
        "entityId": "food8",
        "dx": 3,
        "dy": 5
      },
      {
        "entityId": "tray8",
        "dx": 4,
        "dy": -3
      },
      {
        "entityId": "food7",
        "dx": -2,
        "dy": -6
      },
      {
        "entityId": "tray7",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "food6",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray6",
        "dx": 3,
        "dy": 3
      },
      {
        "entityId": "food5",
        "dx": -2,
        "dy": 4
      },
      {
        "entityId": "tray5",
        "dx": 1,
        "dy": -6
      },
      {
        "entityId": "food4",
        "dx": -2,
        "dy": -3
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "food3",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "tray3",
        "dx": -7,
        "dy": -4
      },
      {
        "entityId": "food2",
        "dx": -6,
        "dy": 2
      },
      {
        "entityId": "tray2",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "food1",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "tray1",
        "dx": -2,
        "dy": 5
      },
      {
        "entityId": "food0",
        "dx": 6,
        "dy": -2
      },
      {
        "entityId": "tray0",
        "dx": 1,
        "dy": 2
      }
    ],
    "timeLimitSeconds": 300
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 3
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
        "y": 4
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 2
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
        "x": 6,
        "y": 0
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
        "x": 4,
        "y": 8
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
        "x": 5,
        "y": 5
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
        "x": 3,
        "y": 4
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 9
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
        "x": 1,
        "y": 7
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
        "x": 0,
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
        "y": 10
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 3,
        "y": 6
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
        "x": 4,
        "y": 0
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
        "x": 6,
        "y": 3
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
        "x": 3,
        "y": 1
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
        "y": 1
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
        "x": 4,
        "y": 3
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
        "x": 6,
        "y": 7
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
        "x": 6,
        "y": 9
      },
      {
        "id": "food3",
        "kind": "berry",
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
        "x": 4,
        "y": 7
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
        "x": 2,
        "y": 0
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
        "y": 10
      },
      {
        "id": "food7",
        "kind": "berry",
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
        "id": "food8",
        "kind": "tart",
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
        "id": "food9",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 5,
        "y": 2
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
        "x": 5,
        "y": 0
      },
      {
        "id": "food11",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 4
      }
    ],
    "orders": [
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
            "kind": "sushi",
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
            "kind": "sushi",
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
        "id": "order3",
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
            "kind": "berry",
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
        "id": "order7",
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
            "kind": "berry",
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray6",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray11",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "buffer2",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "buffer0",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray10",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray10",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray10",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray10",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "buffer0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray6",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray8",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray4",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray7",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "food11",
        "dx": -1,
        "dy": -3
      },
      {
        "entityId": "tray11",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "food10",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "tray10",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food9",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "tray9",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "food8",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray8",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "food7",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": -5,
        "dy": 0
      },
      {
        "entityId": "food6",
        "dx": 5,
        "dy": 1
      },
      {
        "entityId": "tray6",
        "dx": -3,
        "dy": 1
      },
      {
        "entityId": "food5",
        "dx": -2,
        "dy": 9
      },
      {
        "entityId": "tray5",
        "dx": 4,
        "dy": -10
      },
      {
        "entityId": "food4",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": -3,
        "dy": -1
      },
      {
        "entityId": "food3",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "tray3",
        "dx": -2,
        "dy": -3
      },
      {
        "entityId": "food2",
        "dx": -3,
        "dy": -5
      },
      {
        "entityId": "tray2",
        "dx": 0,
        "dy": 7
      },
      {
        "entityId": "food1",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "tray1",
        "dx": 1,
        "dy": -3
      },
      {
        "entityId": "food0",
        "dx": -1,
        "dy": 5
      },
      {
        "entityId": "tray0",
        "dx": 4,
        "dy": -6
      }
    ],
    "timeLimitSeconds": 300
  },
  {
    "id": 6,
    "name": "开拓备餐区",
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 4,
        "y": 1
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
        "y": 5
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
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
        "x": 0,
        "y": 0
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
        "x": 2,
        "y": 2
      },
      {
        "id": "tray2",
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
        "y": 6
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
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
        "id": "tray5",
        "type": "tray",
        "color": "red",
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
        "id": "dense-0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 4
      },
      {
        "id": "shift-0",
        "type": "tray",
        "color": "red",
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
        "id": "shift-1",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 3
      },
      {
        "id": "shift-2",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 6
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
        "x": 5,
        "y": 5,
        "id": "food0-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 5,
        "id": "food0-part1"
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
        "y": 3
      },
      {
        "id": "food2",
        "kind": "berry",
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
        "id": "food3",
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
        "x": 3,
        "y": 5
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
        "x": 2,
        "y": 0
      },
      {
        "id": "food5",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 1
      }
    ],
    "orders": [
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
            "kind": "sushi",
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
        "id": "order4",
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
            "kind": "berry",
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
          },
          {
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
        "width": 2,
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray2",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "tray2",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "buffer2",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray2",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "buffer0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "buffer1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "buffer2",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "buffer1",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "buffer1",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "buffer1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "food5",
        "dx": -3,
        "dy": 1
      },
      {
        "entityId": "shift-1",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray5",
        "dx": 4,
        "dy": 1
      },
      {
        "entityId": "food4",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "food3",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray3",
        "dx": -3,
        "dy": 0
      },
      {
        "entityId": "food2",
        "dx": 5,
        "dy": 0
      },
      {
        "entityId": "tray2",
        "dx": -6,
        "dy": -3
      },
      {
        "entityId": "food1",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "tray1",
        "dx": 0,
        "dy": 5
      },
      {
        "entityId": "shift-2",
        "dx": -1,
        "dy": -6
      },
      {
        "entityId": "food0-part0",
        "dx": -5,
        "dy": -4
      },
      {
        "entityId": "food0-part1",
        "dx": -5,
        "dy": -4
      },
      {
        "entityId": "shift-0",
        "dx": -4,
        "dy": -2
      },
      {
        "entityId": "tray0",
        "dx": 6,
        "dy": 1
      }
    ],
    "lockedAreas": [
      {
        "id": "reserve",
        "cells": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          }
        ],
        "requiredDeliveries": 1
      }
    ],
    "timeLimitSeconds": 300
  },
  {
    "id": 7,
    "name": "两单开新桌",
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 3,
        "y": 8
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
        "x": 2,
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 0
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
        "x": 4,
        "y": 7
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
        "x": 2,
        "y": 1
      },
      {
        "id": "tray2",
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
        "x": 6,
        "y": 5
      },
      {
        "id": "tray3",
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
        "y": 0
      },
      {
        "id": "tray4",
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
        "y": 6
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
        "x": 0,
        "y": 4
      },
      {
        "id": "tray6",
        "type": "tray",
        "color": "red",
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
        "id": "tray7",
        "type": "tray",
        "color": "yellow",
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
        "id": "dense-0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 6
      },
      {
        "id": "dense-1",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 7
      },
      {
        "id": "dense-2",
        "type": "tray",
        "color": "green",
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
        "id": "dense-3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 8
      },
      {
        "id": "shift-0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 2
      },
      {
        "id": "shift-1",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 6
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
        "x": 2,
        "y": 4,
        "id": "food0-part0"
      },
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
        "x": 2,
        "y": 5,
        "id": "food0-part1"
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
        "x": 1,
        "y": 7
      },
      {
        "id": "food2",
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
        "y": 6
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
        "y": 0
      },
      {
        "id": "food4",
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
        "x": 2,
        "y": 3
      },
      {
        "id": "food5",
        "kind": "berry",
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
        "id": "food6",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 4
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
        "x": 3,
        "y": 1
      }
    ],
    "orders": [
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
        "id": "order6",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "sushi",
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
            "kind": "berry",
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
          },
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
            "y": 1
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray4",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "tray1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer3",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "buffer2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "tray5",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "buffer3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer3",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray6",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "tray6",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray7",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "buffer3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "shift-1",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray4",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer3",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "tray6",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "tray1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food7",
        "dx": 3,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "food6",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray6",
        "dx": 3,
        "dy": -1
      },
      {
        "entityId": "food5",
        "dx": 0,
        "dy": 3
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "food4",
        "dx": 0,
        "dy": 3
      },
      {
        "entityId": "tray4",
        "dx": 1,
        "dy": 3
      },
      {
        "entityId": "food3",
        "dx": -3,
        "dy": 2
      },
      {
        "entityId": "tray3",
        "dx": 0,
        "dy": -3
      },
      {
        "entityId": "food2",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "tray2",
        "dx": -7,
        "dy": -1
      },
      {
        "entityId": "shift-0",
        "dx": 3,
        "dy": -2
      },
      {
        "entityId": "food1",
        "dx": 1,
        "dy": -6
      },
      {
        "entityId": "tray1",
        "dx": 1,
        "dy": 7
      },
      {
        "entityId": "food0-part0",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "food0-part1",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray0",
        "dx": 3,
        "dy": -2
      }
    ],
    "lockedAreas": [
      {
        "id": "reserve",
        "cells": [
          {
            "x": 2,
            "y": 4
          },
          {
            "x": 3,
            "y": 4
          },
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 2,
            "y": 5
          },
          {
            "x": 3,
            "y": 5
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          }
        ],
        "requiredDeliveries": 2
      }
    ],
    "timeLimitSeconds": 300
  },
  {
    "id": 8,
    "name": "红单开锁",
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
            "x": 1,
            "y": 0
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
        "x": 0,
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 5,
        "y": 8
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
        "x": 4,
        "y": 3
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
        "x": 6,
        "y": 2
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
        "x": 3,
        "y": 3
      },
      {
        "id": "tray2",
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
        "y": 4
      },
      {
        "id": "tray3",
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
        "y": 0
      },
      {
        "id": "tray4",
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
        "x": 0,
        "y": 5
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
        "x": 5,
        "y": 4
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
        "x": 7,
        "y": 4
      },
      {
        "id": "dense-0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 6
      },
      {
        "id": "dense-1",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 7
      },
      {
        "id": "dense-2",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 7
      },
      {
        "id": "dense-3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 8
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
        "x": 5,
        "y": 6,
        "id": "food0-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 6,
        "id": "food0-part1"
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
        "x": 2,
        "y": 0
      },
      {
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 5,
        "id": "food2-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 5,
        "y": 5,
        "id": "food2-part1"
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
        "y": 0
      },
      {
        "id": "food4",
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
        "y": 7
      },
      {
        "id": "food5",
        "kind": "berry",
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
        "id": "food6",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 2
      },
      {
        "id": "food7",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 2
      }
    ],
    "orders": [
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
            "kind": "sushi",
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
            "kind": "berry",
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
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
          },
          {
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray2",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "buffer3",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "buffer0",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "buffer2",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray0",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "buffer1",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "buffer3",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "buffer0",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray7",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray3",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "tray7",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "buffer3",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "tray1",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer3",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "tray5",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "buffer3",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "buffer0",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "buffer2",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food7",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "tray7",
        "dx": 5,
        "dy": 3
      },
      {
        "entityId": "food6",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray6",
        "dx": 1,
        "dy": -4
      },
      {
        "entityId": "food5",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "food4",
        "dx": 4,
        "dy": 1
      },
      {
        "entityId": "tray4",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "food3",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "food2-part0",
        "dx": -4,
        "dy": -3
      },
      {
        "entityId": "food2-part1",
        "dx": -4,
        "dy": -3
      },
      {
        "entityId": "tray2",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "food1",
        "dx": 0,
        "dy": 3
      },
      {
        "entityId": "tray1",
        "dx": 1,
        "dy": 5
      },
      {
        "entityId": "food0-part0",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food0-part1",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "tray0",
        "dx": 1,
        "dy": -2
      }
    ],
    "lockedAreas": [
      {
        "id": "reserve",
        "cells": [
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 5,
            "y": 7
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          }
        ],
        "requiredDeliveries": 1,
        "color": "red"
      }
    ],
    "timeLimitSeconds": 300
  },
  {
    "id": 9,
    "name": "蓝单备餐区",
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 0
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
        "x": 4,
        "y": 6
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 7
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
        "x": 3,
        "y": 3
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
        "y": 7
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
        "x": 0,
        "y": 8
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 1
      },
      {
        "id": "tray4",
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
        "y": 0
      },
      {
        "id": "tray5",
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
        "y": 9
      },
      {
        "id": "tray6",
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
        "id": "tray7",
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
        "y": 6
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
        "x": 1,
        "y": 1
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
        "x": 6,
        "y": 3
      },
      {
        "id": "dense-0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
      },
      {
        "id": "dense-1",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 6
      },
      {
        "id": "dense-2",
        "type": "tray",
        "color": "green",
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
        "id": "shift-0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 8
      },
      {
        "id": "chain-4-0",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 0
      },
      {
        "id": "chain-1-8",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 8
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
        "x": 6,
        "y": 4,
        "id": "food0-part0"
      },
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
        "x": 6,
        "y": 5,
        "id": "food0-part1"
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
        "x": 6,
        "y": 6
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
        "x": 3,
        "y": 6
      },
      {
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 2,
        "id": "food3-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 2,
        "id": "food3-part1"
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
        "y": 2
      },
      {
        "id": "food5",
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
        "x": 6,
        "y": 9
      },
      {
        "id": "food6",
        "kind": "berry",
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
        "y": 3
      },
      {
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 4,
        "id": "food7-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 4,
        "id": "food7-part1"
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
        "y": 2
      },
      {
        "id": "food9",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 2
      }
    ],
    "orders": [
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
            "kind": "sushi",
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
        "id": "order3",
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
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          }
        ]
      },
      {
        "id": "order6",
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
            "kind": "berry",
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
        "id": "order7",
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
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
          },
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
            "y": 1
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray6",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray9",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray4",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray8",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "chain-1-8",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-1-8",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray6",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "chain-1-8",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-8",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray3",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray8",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "tray9",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "tray9",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "buffer2",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray6",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray8",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray5",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "chain-4-0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "tray6",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-1-8",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-1-8",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "food9",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "tray9",
        "dx": 3,
        "dy": 2
      },
      {
        "entityId": "food8",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "chain-4-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray8",
        "dx": 3,
        "dy": -2
      },
      {
        "entityId": "food7-part0",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food7-part1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray7",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "food6",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "tray6",
        "dx": -3,
        "dy": 0
      },
      {
        "entityId": "chain-1-8",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "food5",
        "dx": -5,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "food4",
        "dx": 2,
        "dy": -2
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": -3,
        "dy": -1
      },
      {
        "entityId": "food3-part0",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food3-part1",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "tray3",
        "dx": -3,
        "dy": 5
      },
      {
        "entityId": "chain-1-8",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-8",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "food2",
        "dx": -3,
        "dy": 2
      },
      {
        "entityId": "tray2",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "chain-1-8",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-1-8",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "shift-0",
        "dx": -7,
        "dy": -8
      },
      {
        "entityId": "food1",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "chain-1-8",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray1",
        "dx": -2,
        "dy": 2
      },
      {
        "entityId": "food0-part0",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food0-part1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray0",
        "dx": 3,
        "dy": -2
      }
    ],
    "lockedAreas": [
      {
        "id": "reserve",
        "cells": [
          {
            "x": 4,
            "y": 4
          },
          {
            "x": 5,
            "y": 4
          },
          {
            "x": 6,
            "y": 4
          },
          {
            "x": 7,
            "y": 4
          },
          {
            "x": 4,
            "y": 5
          },
          {
            "x": 5,
            "y": 5
          },
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 4,
            "y": 6
          },
          {
            "x": 5,
            "y": 6
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          }
        ],
        "requiredDeliveries": 1,
        "color": "blue"
      }
    ],
    "timeLimitSeconds": 300
  },
  {
    "id": 10,
    "name": "双区联动",
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 6,
        "y": 3
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 9
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
        "x": 4,
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
        "x": 4,
        "y": 7
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
        "x": 2,
        "y": 2
      },
      {
        "id": "tray2",
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
        "y": 6
      },
      {
        "id": "tray3",
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
        "x": 1,
        "y": 4
      },
      {
        "id": "tray4",
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
        "y": 9
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
        "x": 4,
        "y": 9
      },
      {
        "id": "tray6",
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
        "y": 7
      },
      {
        "id": "tray7",
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
        "y": 6
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
        "x": 7,
        "y": 2
      },
      {
        "id": "dense-0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 6
      },
      {
        "id": "dense-1",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 5
      },
      {
        "id": "chain-0-0",
        "type": "tray",
        "color": "blue",
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
        "id": "chain-1-0",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
      },
      {
        "id": "chain-4-1",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 1
      },
      {
        "id": "chain-5-3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 5,
        "y": 3
      },
      {
        "id": "chain-3-4",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 4
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
        "x": 6,
        "y": 0,
        "id": "food0-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 0,
        "id": "food0-part1"
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
        "x": 6,
        "y": 7
      },
      {
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 5,
        "id": "food2-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 5,
        "y": 5,
        "id": "food2-part1"
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
        "x": 5,
        "y": 0
      },
      {
        "id": "food4",
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
        "x": 6,
        "y": 9
      },
      {
        "id": "food5",
        "kind": "berry",
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
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 5,
        "id": "food6-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 5,
        "id": "food6-part1"
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
        "x": 7,
        "y": 4
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
        "y": 1
      },
      {
        "id": "food9",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 3
      }
    ],
    "orders": [
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
            "kind": "sushi",
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
        "id": "order3",
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
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
            "kind": "berry",
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
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
          },
          {
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray3",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray4",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "buffer1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-0-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray1",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-3-4",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "buffer3",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "buffer2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "chain-0-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-0-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-0-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray1",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "chain-0-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-0-0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray2",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray2",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "buffer3",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "chain-5-3",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "chain-5-3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "tray0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-1",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "chain-5-3",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "chain-3-4",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "chain-3-4",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray9",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "buffer3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray3",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray8",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "buffer3",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray8",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "chain-3-4",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-5-3",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-1",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "buffer1",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "tray4",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "food9",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "tray9",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "chain-5-3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-4-1",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "food8",
        "dx": 3,
        "dy": 3
      },
      {
        "entityId": "chain-4-1",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray8",
        "dx": -2,
        "dy": -5
      },
      {
        "entityId": "food7",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "chain-5-3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-5-3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray7",
        "dx": -3,
        "dy": -7
      },
      {
        "entityId": "food6-part0",
        "dx": -2,
        "dy": 2
      },
      {
        "entityId": "food6-part1",
        "dx": -2,
        "dy": 2
      },
      {
        "entityId": "tray6",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "food5",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": -3,
        "dy": -2
      },
      {
        "entityId": "food4",
        "dx": -4,
        "dy": -3
      },
      {
        "entityId": "tray4",
        "dx": 1,
        "dy": 4
      },
      {
        "entityId": "chain-4-1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-4-1",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "chain-3-4",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-3-4",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food3",
        "dx": -3,
        "dy": 1
      },
      {
        "entityId": "chain-4-1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": 2,
        "dy": -2
      },
      {
        "entityId": "food2-part0",
        "dx": -4,
        "dy": -1
      },
      {
        "entityId": "food2-part1",
        "dx": -4,
        "dy": -1
      },
      {
        "entityId": "tray2",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "chain-0-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-0-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-0-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food1",
        "dx": -6,
        "dy": -6
      },
      {
        "entityId": "tray1",
        "dx": 3,
        "dy": 8
      },
      {
        "entityId": "chain-0-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food0-part0",
        "dx": -2,
        "dy": 6
      },
      {
        "entityId": "food0-part1",
        "dx": -2,
        "dy": 6
      },
      {
        "entityId": "chain-5-3",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray0",
        "dx": 3,
        "dy": -4
      }
    ],
    "lockedAreas": [
      {
        "id": "reserve-a",
        "cells": [
          {
            "x": 6,
            "y": 5
          },
          {
            "x": 7,
            "y": 5
          },
          {
            "x": 6,
            "y": 6
          },
          {
            "x": 7,
            "y": 6
          },
          {
            "x": 6,
            "y": 7
          },
          {
            "x": 7,
            "y": 7
          },
          {
            "x": 6,
            "y": 8
          },
          {
            "x": 7,
            "y": 8
          }
        ],
        "requiredDeliveries": 1
      },
      {
        "id": "reserve-b",
        "cells": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "requiredDeliveries": 3
      }
    ],
    "timeLimitSeconds": 300
  },
  {
    "id": 11,
    "name": "高峰分区",
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 8
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
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 0
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
        "y": 6
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
        "x": 6,
        "y": 6
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
        "y": 10
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
        "x": 3,
        "y": 6
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
        "x": 0,
        "y": 10
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
        "x": 3,
        "y": 8
      },
      {
        "id": "tray6",
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
        "y": 0
      },
      {
        "id": "tray7",
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
        "y": 9
      },
      {
        "id": "tray8",
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
        "y": 7
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
        "x": 7,
        "y": 3
      },
      {
        "id": "tray10",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 4
      },
      {
        "id": "tray11",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 4
      },
      {
        "id": "dense-0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 2
      },
      {
        "id": "dense-1",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 8
      },
      {
        "id": "dense-2",
        "type": "tray",
        "color": "green",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 4
      },
      {
        "id": "dense-3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 0
      },
      {
        "id": "dense-4",
        "type": "tray",
        "color": "red",
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
        "id": "dense-5",
        "type": "tray",
        "color": "yellow",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 10
      },
      {
        "id": "shift-0",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 6
      },
      {
        "id": "shift-1",
        "type": "tray",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 10
      },
      {
        "id": "chain-4-0",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 0
      },
      {
        "id": "chain-3-1",
        "type": "tray",
        "color": "blue",
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
        "id": "chain-1-3",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 3
      },
      {
        "id": "chain-0-5",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 5
      },
      {
        "id": "chain-4-7",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 7
      },
      {
        "id": "chain-2-10",
        "type": "tray",
        "color": "blue",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 10
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
        "x": 1,
        "y": 1,
        "id": "food0-part0"
      },
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
        "x": 1,
        "y": 2,
        "id": "food0-part1"
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
        "x": 6,
        "y": 0
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
        "x": 7,
        "y": 5
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
        "x": 2,
        "y": 3
      },
      {
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 9,
        "id": "food4-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 7,
        "y": 9,
        "id": "food4-part1"
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
        "x": 5,
        "y": 8
      },
      {
        "id": "food6",
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
        "y": 5
      },
      {
        "id": "food7",
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
        "x": 2,
        "y": 9
      },
      {
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 9,
        "id": "food8-part0"
      },
      {
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 9,
        "id": "food8-part1"
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
        "y": 5
      },
      {
        "id": "food10",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 6,
        "y": 4
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
        "x": 5,
        "y": 2
      }
    ],
    "orders": [
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
      },
      {
        "id": "order10",
        "color": "red",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "sushi",
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
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
        "id": "order8",
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
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          }
        ]
      },
      {
        "id": "order7",
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
        "id": "order6",
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
          },
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
            "y": 1
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
        "width": 1,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "tray7",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-3-1",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "buffer2",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray9",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "tray7",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "tray10",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "tray8",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "chain-4-7",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-4-7",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray5",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "buffer2",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "tray11",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray9",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "chain-4-7",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray8",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray10",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "buffer2",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray7",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "tray2",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "buffer3",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "chain-4-7",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray8",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "buffer1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-2-10",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-2-10",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray10",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray11",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "buffer1",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "buffer0",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "buffer0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "chain-3-1",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray9",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "tray10",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray11",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray4",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "shift-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-3",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "dense-2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-1-3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-0-5",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "tray4",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray3",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray11",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "shift-1",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "tray2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer2",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray11",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "chain-4-7",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "buffer0",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray11",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "chain-4-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-3-1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "tray9",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "dense-2",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-1-3",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray11",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "food11",
        "dx": -2,
        "dy": 3
      },
      {
        "entityId": "chain-4-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-3-1",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-3-1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "tray11",
        "dx": 1,
        "dy": -6
      },
      {
        "entityId": "food10",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "tray10",
        "dx": 4,
        "dy": -1
      },
      {
        "entityId": "food9",
        "dx": -3,
        "dy": -4
      },
      {
        "entityId": "tray9",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "shift-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "shift-0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "food8-part1",
        "dx": 2,
        "dy": -2
      },
      {
        "entityId": "food8-part0",
        "dx": 2,
        "dy": -2
      },
      {
        "entityId": "shift-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "shift-0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "shift-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "chain-0-5",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray8",
        "dx": -3,
        "dy": -1
      },
      {
        "entityId": "food7",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "tray7",
        "dx": -1,
        "dy": 3
      },
      {
        "entityId": "food6",
        "dx": 0,
        "dy": -5
      },
      {
        "entityId": "tray6",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "chain-4-7",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food5",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "tray5",
        "dx": -5,
        "dy": -1
      },
      {
        "entityId": "food4-part0",
        "dx": -6,
        "dy": 2
      },
      {
        "entityId": "food4-part1",
        "dx": -6,
        "dy": 2
      },
      {
        "entityId": "tray4",
        "dx": -1,
        "dy": -5
      },
      {
        "entityId": "dense-2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "food3",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "shift-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray3",
        "dx": 2,
        "dy": 7
      },
      {
        "entityId": "dense-2",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food2",
        "dx": -1,
        "dy": 5
      },
      {
        "entityId": "tray2",
        "dx": -2,
        "dy": -11
      },
      {
        "entityId": "food1",
        "dx": 0,
        "dy": 6
      },
      {
        "entityId": "chain-4-7",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "chain-2-10",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "tray1",
        "dx": -3,
        "dy": 5
      },
      {
        "entityId": "chain-1-3",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food0-part0",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "food0-part1",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "dense-2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "dense-2",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "chain-4-0",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "tray0",
        "dx": 7,
        "dy": -1
      }
    ],
    "lockedAreas": [
      {
        "id": "reserve-a",
        "cells": [
          {
            "x": 5,
            "y": 0
          },
          {
            "x": 6,
            "y": 0
          },
          {
            "x": 7,
            "y": 0
          },
          {
            "x": 5,
            "y": 1
          },
          {
            "x": 6,
            "y": 1
          },
          {
            "x": 7,
            "y": 1
          }
        ],
        "requiredDeliveries": 1,
        "color": "yellow"
      },
      {
        "id": "reserve-b",
        "cells": [
          {
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 2,
            "y": 1
          },
          {
            "x": 0,
            "y": 2
          },
          {
            "x": 1,
            "y": 2
          },
          {
            "x": 2,
            "y": 2
          }
        ],
        "requiredDeliveries": 4
      }
    ],
    "timeLimitSeconds": 300
  },
  {
    "id": 12,
    "name": "八味错盒",
    "width": 4,
    "height": 4,
    "timeLimitSeconds": 300,
    "entities": [
      {
        "id": "box0",
        "type": "tray",
        "color": "red",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 1
      },
      {
        "id": "box1",
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
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 1
      }
    ],
    "foods": [
      {
        "id": "food0-0",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 3
      },
      {
        "id": "food0-1",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 0
      },
      {
        "id": "food0-2",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 3
      },
      {
        "id": "food0-3",
        "kind": "tart",
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
        "id": "food1-0",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
      },
      {
        "id": "food1-1",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
      },
      {
        "id": "food1-2",
        "kind": "sushi",
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
        "id": "food1-3",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 3
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
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
          },
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "tart",
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
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "right",
        "start": 1,
        "width": 2,
        "color": "red"
      },
      {
        "side": "left",
        "start": 1,
        "width": 2,
        "color": "blue"
      }
    ],
    "solution": [
      {
        "entityId": "food0-0",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "food0-0",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food1-3",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food0-2",
        "dx": -2,
        "dy": -2
      },
      {
        "entityId": "food1-1",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "food1-2",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food1-2",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "food0-1",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "food0-1",
        "dx": -3,
        "dy": 1
      },
      {
        "entityId": "box1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food0-3",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "food1-0",
        "dx": 2,
        "dy": 2
      },
      {
        "entityId": "box0",
        "dx": 1,
        "dy": 0
      }
    ]
  },
  {
    "id": 13,
    "name": "夹缝换装",
    "width": 5,
    "height": 4,
    "timeLimitSeconds": 300,
    "entities": [
      {
        "id": "box0",
        "type": "tray",
        "color": "red",
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
        "id": "box1",
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
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 2
      },
      {
        "id": "box2",
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
        "y": 3
      }
    ],
    "foods": [
      {
        "id": "food2-0",
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
        "x": 3,
        "y": 0
      },
      {
        "id": "food0-0",
        "kind": "tart",
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
        "id": "food0-1",
        "kind": "sushi",
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
        "id": "food0-2",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 1
      },
      {
        "id": "food0-3",
        "kind": "sushi",
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
        "id": "food1-0",
        "kind": "sushi",
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
        "id": "food1-1",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 2
      },
      {
        "id": "food1-2",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 2
      },
      {
        "id": "food1-3",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
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
          },
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "tart",
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
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
      }
    ],
    "exits": [
      {
        "side": "right",
        "start": 1,
        "width": 2,
        "color": "red"
      },
      {
        "side": "left",
        "start": 1,
        "width": 2,
        "color": "blue"
      },
      {
        "side": "bottom",
        "start": 1,
        "width": 2,
        "color": "green"
      }
    ],
    "solution": [
      {
        "entityId": "food1-3",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "food1-3",
        "dx": -1,
        "dy": -3
      },
      {
        "entityId": "food0-0",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food0-0",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food0-1",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "food0-2",
        "dx": -3,
        "dy": 0
      },
      {
        "entityId": "food1-1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food2-0",
        "dx": 0,
        "dy": 3
      },
      {
        "entityId": "food1-2",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "food1-0",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "box1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food1-2",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "box0",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "food0-3",
        "dx": 1,
        "dy": 3
      },
      {
        "entityId": "box1",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "box2",
        "dx": -2,
        "dy": 1
      }
    ]
  },
  {
    "id": 14,
    "name": "连盒借位",
    "width": 4,
    "height": 6,
    "timeLimitSeconds": 300,
    "entities": [
      {
        "id": "box0",
        "type": "tray",
        "color": "red",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 2
      },
      {
        "id": "box1",
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
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 2
      },
      {
        "id": "box2",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 4
      }
    ],
    "foods": [
      {
        "id": "food1-0",
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
      },
      {
        "id": "food2-0",
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
        "x": 2,
        "y": 1
      },
      {
        "id": "food2-1",
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
        "y": 0
      },
      {
        "id": "food0-0",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 4
      },
      {
        "id": "food0-1",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 5
      },
      {
        "id": "food0-2",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 5
      },
      {
        "id": "food0-3",
        "kind": "sushi",
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
        "id": "food1-1",
        "kind": "sushi",
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
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
          },
          {
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
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
          },
          {
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
          },
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
            "y": 1
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "right",
        "start": 1,
        "width": 2,
        "color": "red"
      },
      {
        "side": "left",
        "start": 1,
        "width": 2,
        "color": "blue"
      },
      {
        "side": "bottom",
        "start": 1,
        "width": 2,
        "color": "green"
      }
    ],
    "solution": [
      {
        "entityId": "food0-3",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food1-0",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "food1-0",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "food0-1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food0-1",
        "dx": 0,
        "dy": -3
      },
      {
        "entityId": "food0-0",
        "dx": -3,
        "dy": 0
      },
      {
        "entityId": "food0-0",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "food0-2",
        "dx": -3,
        "dy": -1
      },
      {
        "entityId": "food0-2",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "box0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "box1",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "food2-0",
        "dx": -2,
        "dy": 3
      },
      {
        "entityId": "food1-1",
        "dx": -2,
        "dy": 2
      },
      {
        "entityId": "box0",
        "dx": 3,
        "dy": 0
      },
      {
        "entityId": "box1",
        "dx": -3,
        "dy": -3
      },
      {
        "entityId": "food2-1",
        "dx": -1,
        "dy": 5
      },
      {
        "entityId": "box2",
        "dx": 1,
        "dy": 1
      }
    ]
  },
  {
    "id": 15,
    "name": "回收再组",
    "width": 4,
    "height": 5,
    "timeLimitSeconds": 300,
    "entities": [
      {
        "id": "box0",
        "type": "tray",
        "color": "red",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 2
      },
      {
        "id": "box1",
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
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 0
      },
      {
        "id": "box2",
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
        "y": 1
      }
    ],
    "foods": [
      {
        "id": "food2-0",
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
        "y": 4
      },
      {
        "id": "food0-0",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
      },
      {
        "id": "food0-1",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 4
      },
      {
        "id": "food0-2",
        "kind": "tart",
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
        "id": "food0-3",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
      },
      {
        "id": "food1-0",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 2
      },
      {
        "id": "food1-1",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 3
      },
      {
        "id": "food1-2",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 2
      },
      {
        "id": "food1-3",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 4
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
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
          },
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "tart",
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
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
      }
    ],
    "exits": [
      {
        "side": "right",
        "start": 1,
        "width": 2,
        "color": "red"
      },
      {
        "side": "left",
        "start": 1,
        "width": 2,
        "color": "blue"
      },
      {
        "side": "bottom",
        "start": 1,
        "width": 2,
        "color": "green"
      }
    ],
    "solution": [
      {
        "entityId": "food0-0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "food0-0",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "food0-2",
        "dx": 3,
        "dy": 0
      },
      {
        "entityId": "food0-2",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "box2",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "food1-0",
        "dx": 2,
        "dy": -2
      },
      {
        "entityId": "food1-2",
        "dx": 2,
        "dy": -2
      },
      {
        "entityId": "food1-1",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food0-3",
        "dx": 3,
        "dy": 0
      },
      {
        "entityId": "food0-1",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "food2-0",
        "dx": -1,
        "dy": -4
      },
      {
        "entityId": "box2",
        "dx": 1,
        "dy": 5
      },
      {
        "entityId": "box0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food1-3",
        "dx": 0,
        "dy": -3
      },
      {
        "entityId": "box0",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "box1",
        "dx": -3,
        "dy": 1
      },
      {
        "entityId": "box0",
        "dx": 1,
        "dy": -1
      }
    ]
  },
  {
    "id": 16,
    "name": "满载接力",
    "width": 4,
    "height": 6,
    "timeLimitSeconds": 300,
    "entities": [
      {
        "id": "box0",
        "type": "tray",
        "color": "red",
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
        "id": "box1",
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
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 2
      },
      {
        "id": "box2",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
      }
    ],
    "foods": [
      {
        "id": "food1-0",
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
        "x": 2,
        "y": 3
      },
      {
        "id": "food2-0",
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
        "x": 2,
        "y": 2
      },
      {
        "id": "food2-1",
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
        "x": 2,
        "y": 5
      },
      {
        "id": "food0-0",
        "kind": "tart",
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
        "id": "food0-1",
        "kind": "sushi",
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
        "id": "food0-2",
        "kind": "tart",
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
        "id": "food0-3",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 3
      },
      {
        "id": "food1-1",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 0
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
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
          },
          {
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
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
          },
          {
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
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
          },
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
            "y": 1
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "right",
        "start": 1,
        "width": 2,
        "color": "red"
      },
      {
        "side": "left",
        "start": 1,
        "width": 2,
        "color": "blue"
      },
      {
        "side": "bottom",
        "start": 1,
        "width": 2,
        "color": "green"
      }
    ],
    "solution": [
      {
        "entityId": "food2-0",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food2-0",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food0-3",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "food0-2",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food0-2",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "food0-3",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "food1-0",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "food0-0",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food0-1",
        "dx": -2,
        "dy": 2
      },
      {
        "entityId": "box2",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "box1",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "box0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "food0-0",
        "dx": -3,
        "dy": 3
      },
      {
        "entityId": "food2-1",
        "dx": 0,
        "dy": -4
      },
      {
        "entityId": "food1-1",
        "dx": 1,
        "dy": 4
      },
      {
        "entityId": "box0",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "box2",
        "dx": -1,
        "dy": 5
      },
      {
        "entityId": "box0",
        "dx": 3,
        "dy": -1
      }
    ]
  },
  {
    "id": 17,
    "name": "交叉出餐",
    "width": 5,
    "height": 4,
    "timeLimitSeconds": 300,
    "entities": [
      {
        "id": "box0",
        "type": "tray",
        "color": "red",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 0,
        "y": 1
      },
      {
        "id": "box1",
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
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 3,
        "y": 2
      },
      {
        "id": "box2",
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
        "y": 1
      }
    ],
    "foods": [
      {
        "id": "food2-0",
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
        "y": 3
      },
      {
        "id": "food0-0",
        "kind": "tart",
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
        "id": "food0-1",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 2
      },
      {
        "id": "food0-2",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 1
      },
      {
        "id": "food0-3",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 0
      },
      {
        "id": "food1-0",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
      },
      {
        "id": "food1-1",
        "kind": "sushi",
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
        "id": "food1-2",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
      },
      {
        "id": "food1-3",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 0
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
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
          },
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "tart",
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
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
      }
    ],
    "exits": [
      {
        "side": "right",
        "start": 1,
        "width": 2,
        "color": "red"
      },
      {
        "side": "left",
        "start": 1,
        "width": 2,
        "color": "blue"
      },
      {
        "side": "bottom",
        "start": 1,
        "width": 2,
        "color": "green"
      }
    ],
    "solution": [
      {
        "entityId": "food0-1",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "food2-0",
        "dx": -1,
        "dy": -1
      },
      {
        "entityId": "food2-0",
        "dx": 2,
        "dy": -1
      },
      {
        "entityId": "food1-2",
        "dx": 4,
        "dy": -1
      },
      {
        "entityId": "food1-0",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "food1-0",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "food1-1",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "food1-1",
        "dx": 3,
        "dy": 2
      },
      {
        "entityId": "food1-3",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "food0-0",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "food1-3",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "box0",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "food0-3",
        "dx": -2,
        "dy": 3
      },
      {
        "entityId": "food0-2",
        "dx": -3,
        "dy": 2
      },
      {
        "entityId": "box2",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "box1",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "box0",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "box2",
        "dx": 1,
        "dy": 3
      },
      {
        "entityId": "box1",
        "dx": -4,
        "dy": 1
      },
      {
        "entityId": "box0",
        "dx": 1,
        "dy": -1
      }
    ]
  },
  {
    "id": 18,
    "name": "十四味满盘",
    "width": 5,
    "height": 6,
    "timeLimitSeconds": 300,
    "entities": [
      {
        "id": "box0",
        "type": "tray",
        "color": "red",
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
        "id": "box1",
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
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 3,
        "y": 1
      },
      {
        "id": "box2",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 4
      },
      {
        "id": "box3",
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
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 0,
        "y": 2
      }
    ],
    "foods": [
      {
        "id": "food3-0",
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
        "y": 3
      },
      {
        "id": "food0-0",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
      },
      {
        "id": "food0-1",
        "kind": "tart",
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
        "id": "food0-2",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 3
      },
      {
        "id": "food0-3",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 0
      },
      {
        "id": "food1-0",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 1
      },
      {
        "id": "food1-1",
        "kind": "sushi",
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
        "id": "food1-2",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 0
      },
      {
        "id": "food1-3",
        "kind": "sushi",
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
        "id": "food2-0",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 2
      },
      {
        "id": "food2-1",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 2
      },
      {
        "id": "food2-2",
        "kind": "tart",
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
        "id": "food2-3",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 3
      },
      {
        "id": "food3-1",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 5
      }
    ],
    "orders": [
      {
        "id": "order1",
        "color": "blue",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
          }
        ]
      },
      {
        "id": "order0",
        "color": "red",
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
          },
          {
            "x": 1,
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
          },
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "tart",
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
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
          },
          {
            "x": 1,
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
          },
          {
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "tart",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
          }
        ]
      },
      {
        "id": "order3",
        "color": "yellow",
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
          },
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "right",
        "start": 1,
        "width": 2,
        "color": "red"
      },
      {
        "side": "left",
        "start": 1,
        "width": 2,
        "color": "blue"
      },
      {
        "side": "bottom",
        "start": 1,
        "width": 2,
        "color": "green"
      },
      {
        "side": "top",
        "start": 2,
        "width": 2,
        "color": "yellow"
      }
    ],
    "solution": [
      {
        "entityId": "food0-1",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "food0-2",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food1-3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "food2-3",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food2-0",
        "dx": 0,
        "dy": 3
      },
      {
        "entityId": "food1-0",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "food1-1",
        "dx": 3,
        "dy": 4
      },
      {
        "entityId": "food0-0",
        "dx": -1,
        "dy": 2
      },
      {
        "entityId": "food0-0",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "food1-2",
        "dx": -2,
        "dy": 3
      },
      {
        "entityId": "food2-1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food3-1",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food0-2",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food2-2",
        "dx": -1,
        "dy": 4
      },
      {
        "entityId": "box1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food2-1",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "food0-3",
        "dx": -4,
        "dy": 2
      },
      {
        "entityId": "box2",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "food3-1",
        "dx": -3,
        "dy": 1
      },
      {
        "entityId": "food3-0",
        "dx": -1,
        "dy": -2
      },
      {
        "entityId": "food0-3",
        "dx": 1,
        "dy": 3
      },
      {
        "entityId": "food1-2",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "box1",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "box2",
        "dx": 1,
        "dy": 1
      },
      {
        "entityId": "box3",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "box1",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "food3-0",
        "dx": -1,
        "dy": 1
      },
      {
        "entityId": "box0",
        "dx": 4,
        "dy": -3
      },
      {
        "entityId": "box2",
        "dx": -2,
        "dy": 1
      },
      {
        "entityId": "box3",
        "dx": 0,
        "dy": -3
      }
    ],
    "customerSlots": 1
  },
  {
    "id": 19,
    "name": "十三味封局",
    "width": 6,
    "height": 5,
    "timeLimitSeconds": 300,
    "entities": [
      {
        "id": "box0",
        "type": "tray",
        "color": "red",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 2,
        "y": 0
      },
      {
        "id": "box1",
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
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 4,
        "y": 1
      },
      {
        "id": "box2",
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
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "x": 1,
        "y": 3
      },
      {
        "id": "box3",
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
          },
          {
            "x": 1,
            "y": 1
          }
        ],
        "x": 0,
        "y": 1
      }
    ],
    "foods": [
      {
        "id": "food2-0-top",
        "kind": "tart",
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
        "id": "food2-0-bottom",
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
        "x": 3,
        "y": 3
      },
      {
        "id": "food3-0",
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
        "y": 3
      },
      {
        "id": "food0-0",
        "kind": "tart",
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
        "id": "food0-1",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 0
      },
      {
        "id": "food0-2",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 4
      },
      {
        "id": "food0-3",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 2,
        "y": 2
      },
      {
        "id": "food1-0",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 0,
        "y": 3
      },
      {
        "id": "food1-1",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 0
      },
      {
        "id": "food1-2",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 4,
        "y": 4
      },
      {
        "id": "food1-3",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 1,
        "y": 1
      },
      {
        "id": "food2-1",
        "kind": "sushi",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 3,
        "y": 4
      },
      {
        "id": "food3-1",
        "kind": "tart",
        "shape": [
          {
            "x": 0,
            "y": 0
          }
        ],
        "x": 5,
        "y": 0
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
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
          },
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "tart",
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
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
          }
        ]
      },
      {
        "id": "order3",
        "color": "yellow",
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
          },
          {
            "kind": "tart",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
            "x": 0,
            "y": 1
          },
          {
            "x": 1,
            "y": 1
          },
          {
            "x": 1,
            "y": 0
          }
        ],
        "foods": [
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          },
          {
            "kind": "sushi",
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
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 1
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
          },
          {
            "x": 1,
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
          },
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
            "y": 1
          },
          {
            "kind": "sushi",
            "shape": [
              {
                "x": 0,
                "y": 0
              }
            ],
            "x": 1,
            "y": 0
          }
        ]
      }
    ],
    "exits": [
      {
        "side": "right",
        "start": 1,
        "width": 2,
        "color": "red"
      },
      {
        "side": "left",
        "start": 1,
        "width": 2,
        "color": "blue"
      },
      {
        "side": "bottom",
        "start": 1,
        "width": 2,
        "color": "green"
      },
      {
        "side": "top",
        "start": 2,
        "width": 2,
        "color": "yellow"
      }
    ],
    "solution": [
      {
        "entityId": "food0-0",
        "dx": 1,
        "dy": 2
      },
      {
        "entityId": "food0-1",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "food0-3",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "food1-0",
        "dx": 2,
        "dy": 0
      },
      {
        "entityId": "food1-1",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food3-0",
        "dx": 0,
        "dy": -2
      },
      {
        "entityId": "food0-2",
        "dx": 1,
        "dy": -1
      },
      {
        "entityId": "food1-3",
        "dx": 1,
        "dy": 0
      },
      {
        "entityId": "food2-1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food1-2",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food0-3",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food3-1",
        "dx": -2,
        "dy": 0
      },
      {
        "entityId": "food2-0-bottom",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food2-0-top",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food1-3",
        "dx": 2,
        "dy": 1
      },
      {
        "entityId": "box3",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "food0-2",
        "dx": 1,
        "dy": -2
      },
      {
        "entityId": "box2",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food2-0-top",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "food2-0-bottom",
        "dx": -1,
        "dy": 0
      },
      {
        "entityId": "box1",
        "dx": 0,
        "dy": 2
      },
      {
        "entityId": "box0",
        "dx": 3,
        "dy": 1
      },
      {
        "entityId": "box3",
        "dx": 0,
        "dy": 1
      },
      {
        "entityId": "food3-0",
        "dx": -5,
        "dy": -2
      },
      {
        "entityId": "box3",
        "dx": 2,
        "dy": -2
      },
      {
        "entityId": "food2-1",
        "dx": 5,
        "dy": 0
      },
      {
        "entityId": "food1-2",
        "dx": 4,
        "dy": -1
      },
      {
        "entityId": "box1",
        "dx": -5,
        "dy": -2
      },
      {
        "entityId": "box2",
        "dx": 0,
        "dy": -1
      },
      {
        "entityId": "food2-0-top",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "food2-0-bottom",
        "dx": -2,
        "dy": -1
      },
      {
        "entityId": "box2",
        "dx": 1,
        "dy": 2
      }
    ],
    "customerSlots": 1
  }
];
export const levels=LEVELS;export const solutions=LEVELS.map(l=>l.solution);
