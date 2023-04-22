/* eslint-disable */
// @ts-nocheck
import { Injectable } from '@nestjs/common';
import * as echarts from 'echarts';
import { createCanvas } from 'canvas';
import { OptionDto } from './option';
var fs = require('fs');
var path = require('path');
@Injectable()
export class AppService {
  // option echarts shuju
  // 宽度高度
  // path 导出的图片地址, 如果不给返回Buffer
  // 返回一个true and false
  getHello(option: OptionDto) {
    const canvas = createCanvas(Number(option.width), Number(option.height));
    const baseOption = {
      backgroundColor: '#fff',
      title: {
        text: 'test',
      },
      tooltip: {},
      legend: {
        data: ['test'],
      },
      xAxis: {
        data: ['a', 'b', 'c', 'd', 'f', 'g'],
      },
      yAxis: {},
      series: [
        {
          name: 'test',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
    console.log(canvas, 'canvas');
    const chart = echarts.init(canvas);
    console.log(typeof option?.option);
    chart.setOption(option?.option);
    // chart.setOption({
    //   backgroundColor: '#fff',
    //   title: { text: 'test' },
    //   tooltip: {},
    //   legend: { data: ['test'] },
    //   xAxis: { data: ['a', 'b', 'c', 'd', 'f', 'g'] },
    //   yAxis: {},
    //   series: [{ name: 'test', type: 'bar', data: [5, 20, 36, 10, 10, 20] }],
    // });
    console.log(__dirname, '__dirname');
    fs.writeFileSync(__dirname + '/' + option.path, chart.getDom().toBuffer());
    return true;
  }
}
