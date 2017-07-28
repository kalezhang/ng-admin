import { Injectable } from "@angular/core";

@Injectable()
export class GoodsService{
    // isLogined:boolean = false;
    goods: Array < any > = [{
      "index": 19,
      "prodtype": "家电",
      "prodname": "电吹风",
      "price": "189",
      "brand": "飞利浦",
      "zhishu": "5",
      "pinglun": 100,
      "monthcnt": 99
    },
    {
      "index": 7,
      "prodtype": "零食",
      "prodname": "薯片",
      "price": "4.9",
      "brand": "未知",
      "zhishu": 5,
      "pinglun": 20000,
      "monthcnt": 22266
    },
    {
      "index": 14,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 1,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 2,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 3,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 5,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 6,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    },
    {
      "index": 8,
      "prodtype": "日用品",
      "prodname": "纸抽",
      "price": "50",
      "brand": "清风",
      "zhishu": 4,
      "pinglun": 2222,
      "monthcnt": 66666
    }
  ];

    constructor(){

    }

    getGoods(){
        return this.goods;
    }

}

