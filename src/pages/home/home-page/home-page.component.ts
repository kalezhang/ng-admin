import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  users:Array<any> = [
    {"index":19,
    "prodtype":"家电",
      "prodname":"电吹风",
      "price":"189",
      "brand":"飞利浦",
      "zhishu":"5",
      "pinglun":100,
      "monthcnt":99},
      {"index":7,
      "prodtype":"零食",
      "prodname":"薯片",
      "price":"4.9",
      "brand":"未知",
      "zhishu":5,
      "pinglun":20000,
      "monthcnt":22266},
      {"index":14,
      "prodtype":"日用品",
      "prodname":"纸抽",
      "price":"50",
      "brand":"清风",
      "zhishu":4,
      "pinglun":2222,
      "monthcnt":66666}
  ]
deleteLast(){
  this.users.pop()
}
saveNewUser(){
  this.users.push({"index":19,
    "prodtype":"家电2",
      "prodname":"电吹风",
      "price":"189",
      "brand":"飞利浦",
      "zhishu":"5",
      "pinglun":100,
      "monthcnt":99})
}
  sortByAsccending(){
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.users.sort(function (a, b) {
        if (a.index > b.index) {
          return 1;
        }
        if (a.index < b.index) {
          return -1;
        }
        // a 必须等于 b
        return 0;
      });
  }
  sortByDesccending(){
    this.users.sort(function (a, b) {
        if (a.index < b.index) {
          return 1;
        }
        if (a.index > b.index) {
          return -1;
        }
        // a 必须等于 b
        return 0;
      });
    // 参考MDN Array操作的API文档 Array相关方法
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
  }
  sortByRadom(){
    this.users.sort(function (a, b) {
        if (Math.random() > 0.5) {
          return 1;
        }
        if (Math.random() < 0.5) {
          return -1;
        }
        // a 必须等于 b
        return 0;
      });
    // 参考MDN Array操作的API文档 Math相关方法
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
  }

  constructor(meta: Meta, title: Title) {
    title.setTitle('My Home Page');

    meta.addTags([ 
      {
        name: 'author', content: 'eddic'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {
  }

}
