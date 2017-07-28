import {
  Component,
  OnInit
} from '@angular/core';
import {
  Meta,
  Title
} from '@angular/platform-browser';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';
import {GoodsService} from "../goods.service";
@Component({
  selector: 'app-good-list',
  templateUrl: './good-list.component.html',
  styleUrls: ['./good-list.component.scss']
})
export class GoodListComponent implements OnInit {
@Input() good:any
  goods:Array<any>=[];
  deleteLast() {
    this.goods.pop()
  }
  // saveNewGood() {
  //   this.goods.push({
  //     "index": Math.round(Math.random() * 100),
  //     "prodtype": "新家电",
  //     "prodname": "电吹风",
  //     "price": Math.round(Math.random() * 100),
  //     "brand": "飞利浦",
  //     "zhishu": "5",
  //     "pinglun": 100,
  //     "monthcnt": 99
  //   })
  // }
  
  delete(good){
    let goodIndex = good.index;
    this.goodServ.goods.forEach((item,index,array)=>{
      if(item.index == goodIndex){
        array.splice(index,1)
      }
    })
  }
  sortByAsccending() {
    // 参考MDN Array操作的API文档 Array相关方法方法
    this.goods.sort(function (a, b) {
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
  sortByDesccending() {
    this.goods.sort(function (a, b) {
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
  sortByRadom() {
    this.goods.sort(function (a, b) {
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

  constructor(meta: Meta, title: Title, private goodServ:GoodsService) {

    this.goods = this.goodServ.getGoods();

    title.setTitle('My Home Page');

    meta.addTags([{
        name: 'author',
        content: 'eddic'
      },
      {
        name: 'keywords',
        content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description',
        content: 'This is my great description.'
      },
    ])
  }

  ngOnInit() {}

}
