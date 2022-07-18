import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'assets';
  clickedElement: string = '';

  armadietti = ['048', '049', '050', '051', '052', '053'];
  // ['048', '049', '050', '051', '052'],
  // ['048', '049', '050', '051', '052'],
  // ['048', '049', '050', '051', '052'],

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.makeCircle();
  }

  makeCircle() {
    let pallino = d3
      .select('body')
      .select('#results')

      //   .select('#results')
      //   .append('div')
      //   .attr('class', 'pallino')
      .selectAll('.pallino')
      .data(this.armadietti)
    //   .text(function (d, i) {
      
    //     return d;
    //   })
      .append('svg')
      .on('click',  (d, i) => {
        // console.log(i);

        this.clickedElement = i
        
        
      })
      .attr('height', 80)
      .attr('width', 80)
      .attr('fill', 'red')
      .append('circle')
      .attr('cy', 40)
      .attr('cx', 40)
      .attr('r', 25)
      .data(this.armadietti)
      .enter();
  }

  
}
