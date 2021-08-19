import {Component, OnInit} from '@angular/core';
import {NormalService} from "../../service/normal.service";
import {RealService} from "../../service/real.service";

@Component({
  selector: 'app-prodivers-demo',
  templateUrl: './prodivers-demo.component.html',
  styleUrls: ['./prodivers-demo.component.less']
})
//https://segmentfault.com/a/1190000009612113 依赖注入教程
//https://blog.csdn.net/i042416/article/details/109383340 useExisting useClass
export class ProdiversDemoComponent implements OnInit {

  constructor(private normalService: NormalService, private realService: RealService) {
  }

  ngOnInit(): void {
  }

  public onCallServiceClick(): void {
    console.log('onCallServiceClick');
    this.normalService.text = 'abc';
    //如果值相同，说明是同一个实例
    //如果值不同，说明是不同实例
    console.log(this.normalService.text);
    console.log(this.realService.text);
  }
}
