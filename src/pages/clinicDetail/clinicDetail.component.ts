import { Component } from '@angular/core';

@Component({
  selector: 'clinicDetail',
  templateUrl: './clinicDetail.template.html',
  styleUrls: ['./clinicDetail.style.css']
})
export class ClinicDetailPageComponent {
  title = 'OneClickUI';
  clinic = { 'Name': 'Clinica Mea',
            'Email': 'acdc152@gmail.com',
            'PhoneNumber': '0727318727',
            'Address':'Iuliu Maniu 28',
            'Rating': '4',
            'Description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat',
            'Facebook': 'https://www.facebook.com/AlexMetalhead',
            'Instagram': 'https://www.instagram.com/flowerdts/',
            'Twitter': 'https://twitter.com/FlowerDTS',
        }
}
