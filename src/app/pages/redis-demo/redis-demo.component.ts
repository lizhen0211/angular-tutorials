import {Component, OnInit} from '@angular/core';
import {RedisService} from "../../request/redis.service";

@Component({
  selector: 'app-redis-demo',
  templateUrl: './redis-demo.component.html',
  styleUrls: ['./redis-demo.component.less']
})
export class RedisDemoComponent implements OnInit {

  constructor(private redisService: RedisService) {
  }

  ngOnInit(): void {
  }

  public onSetCacheClick(): void {
    this.redisService.setRedisCache().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

  public onGetCacheClick(): void {
    this.redisService.getRedisCache().subscribe(res => {
      console.log(res.body);
    }, err => {
      console.log(err);
    });
  }

  public onNativeSetCacheClick(): void {
    this.redisService.native_set_cache().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  public native_set_cache_param(): void {
    this.redisService.native_set_cache_param().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  public native_set_cache_list(): void {
    this.redisService.native_set_cache_list().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

  public native_set_cache_set(): void {
    this.redisService.native_set_cache_set().subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
  }

}
