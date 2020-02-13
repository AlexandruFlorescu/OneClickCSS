import { Component } from '@angular/core';

@Component({
  selector: 'slider',
  templateUrl: './slider.template.html',
  styleUrls: ['./slider.style.css']
})
export class SliderComponent {
  title = 'OneClickUI';
  sliderArray = [
    {img: 'assets/slider/slide1.jpg', alt: '', text: 'Looking for a dentist? '},
    {img: 'assets/slider/slide2.jpg', alt: '',  text: 'Looking for a dentist? '},
    {img: 'assets/slider/slide3.jpg', alt: '', text: 'Looking for a dentist? '},
    
   ];
   transform: number;
   selectedIndex = 0;
  
   constructor() {
     this.transform = 100;
   }
 

   selected(x) {
       console.log('selected', x)
    this.downSelected(x);
    this.selectedIndex = x;
   }
   
   keySelected(x) {
    console.log('keyselected', x)
    this.downSelected(x);
    this.selectedIndex = x;
  }

   downSelected(i) {
       
    console.log('downselected',i )
   this.transform =  100 - (i) * 50;
     this.selectedIndex = this.selectedIndex + 1;
     if(this.selectedIndex > 4) {
       this.selectedIndex = 0;
     }
   }
}
