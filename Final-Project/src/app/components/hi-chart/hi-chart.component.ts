import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';
import { CibilScore } from 'src/app/shared/helpers/cibilscore';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hi-chart',
  templateUrl: './hi-chart.component.html',
  styleUrls: ['./hi-chart.component.scss']
})
export class HiChartComponent implements OnInit {

constructor(public authService: AuthService,private data:CibilScore) { }
 UserData : number = this.data.getData() * 0.01;
flag = false
  options :any
  
  ngOnInit(): void {
    console.log("Got Data")
    console.log(this.UserData);
    if(this.UserData > 3.5){
        this.flag = true
    }
  }

  chartOption: EChartsOption = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '90%',
        min: 0,
        max: 10,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.25, '#FF6E76'],
              [0.5, '#FDDD60'],
              [0.75, '#58D9F9'],
              [1, '#7CFFB2']
            ]
          }
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '12%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: {
            color: 'inherit'
          }
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'inherit',
            width: 2
          }
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: 'inherit',
            width: 5
          }
        },
        axisLabel: {
          color: '#464646',
          fontSize: 20,
          distance: -90,
          formatter: function (value: number) {
            if (value === 0.875) {
              return 'Grade A';
            } else if (value === 0.625) {
              return 'Grade B';
            } else if (value === 0.375) {
              return 'Grade C';
            } else if (value === 0.125) {
              return 'Grade D';
            }
            return '';
          }
        },
        title: {
          offsetCenter: [0, '-10%'],
          fontSize: 20
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '-35%'],
          valueAnimation: true,
          formatter: function (value: number) {
            return Math.round(value * 100) + '';
          },
          color: 'inherit'
        },
        data: [
          {
            value: this.UserData,
            name: 'Grade Rating'
          }
        ]
      }
    ]
  };

  
  showMsg(){
    Swal.fire({
   html: '<small><ul style="list-style:none;"><li class="item4">Improve your savings</li><li class="item4">Messages related to improving cibil score.</li></ul></small>',
   showCloseButton: true
 });
 
}
}
