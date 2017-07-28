
import {
  Meta,
  Title
} from '@angular/platform-browser';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { GoodsService } from '../goods.service';
@Component({
  selector: 'app-good-edit',
  templateUrl: './good-edit.component.html',
  styleUrls: ['./good-edit.component.scss']
})
export class GoodEditComponent implements OnInit,OnDestroy {
goodId:string="";
  good:any={
    prodname:""
  };
  isNew:boolean = false;
  // saveNewUser() {
  //   this.users.push({
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

getGoodSubscribe:any;
  constructor(private route: ActivatedRoute,
  private goodServ:GoodsService,
  private location: Location) {
    
  }

  
  back(){
    this.location.back();
  }
  save(){
    this.goodServ.goods.push(this.good)
    this.location.back();
  }

  ngOnInit() {
    this.getGoodSubscribe = this.route.params.subscribe(params=>{
      this.getGood(params['gid']).then(good=>{
      console.log(good)
      this.goodId = good.index;
      this.good = good;
    }).catch(err=>{
      console.log(err)
    })
    })
  }
  ngOnDestroy(){
    this.getGoodSubscribe.unsubscribe();
  }
 getGood(id: any): Promise<any> {
    
    let p = new Promise((resolve,reject)=>{
      if(id=="new"){
        let good = {name:""}
        this.isNew = true;
        resolve(good)
      }
      let good = this.goodServ.goods.find(item=>item.index == id)
      if(good){
        resolve(good)
      }else{
        reject("good not found")
      }
    })
    return p
}

}
