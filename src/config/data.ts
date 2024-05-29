import { T_Category } from "../types";

export const data: T_Category[] = [
  {
    id: "1",
    name: "Mobile Phones",
    brands: [
      {
        id: "11",
        name: "Apple",
        models: [
          {
            id: "111",
            name: "iPhone 6",
            variants: [
              {
                id: "1111",
                name: "128 GB",
              },
              {
                id: "1112",
                name: "256 GB",
              },
            ],
          },
          {
            id: "112",
            name: "iPhone 7",
            variants: [
              {
                id: "1121",
                name: "128 GB",
              },
              {
                id: "1122",
                name: "256 GB",
              },
            ],
          },
        ],
      },
      {
        id: "12",
        name: "Nokia",
        models: [
          {
            id: "121",
            name: "Nokia 8",
            variants: [
              {
                id: "1211",
                name: "64GB",
              },
              {
                id: "1212",
                name: "128GB",
              },
            ],
          },
          {
            id: "122",
            name: "Nokia 7",
            variants: [
              {
                id: "1221",
                name: "64GB",
              },
              {
                id: "1221",
                name: "128GB",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Laptops",
    brands: [
      {
        id: "21",
        name: "Apple",
        models: [
          {
            id: "211",
            name: "MacBook Air",
            variants: [
              {
                id: "2111",
                name: "13-inch - 128GB",
              },
              {
                id: "2112",
                name: "13-inch - 256GB",
              },
              {
                id: "2113",
                name: "13-inch - 512GB",
              },
            ],
          },
          {
            id: "212",
            name: "MacBook Pro",
            variants: [
              {
                id: "2121",
                name: "13-inch - 256GB",
              },
              {
                id: "2122",
                name: "13-inch - 512GB",
              },
            ],
          },
        ],
      },
      {
        id: "22",
        name: "Dell",
        models: [
          {
            id: "221",
            name: "Dell XPS",
            variants: [
              {
                id: "2211",
                name: "256GB",
              },
              {
                id: "2212",
                name: "512GB",
              },
            ],
          },
          {
            id: "222",
            name: "Dell Inspiron",
            variants: [
              {
                id: "2221",
                name: "256GB",
              },
              {
                id: "2222",
                name: "512GB",
              },
            ],
          },
        ],
      },
    ],
  },
];
