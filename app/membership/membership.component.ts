import { Component } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent {

  selectedState: string | null = null;
  selectedCity: string | null = null;

  states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Delhi',
    'Maharashtra',
    'West Bengal'

  ];

  cities: { [state: string]: string[] } = {
    'Andhra Pradesh': ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Rajahmundry", "Tirupati", "Kakinada", "Anantapur", "Vizianagaram", "Eluru", "Ongole", "Nandyal", "Machilipatnam", "Adoni", "Tenali", "Proddatur", "Chittoor", "Hindupur"],
    'Arunachal Pradesh': ["Itanagar", "Naharlagun", "Tawang", "Bomdila", "Pasighat", "Along", "Tezu", "Khonsa", "Ziro", "Daporijo", "Aalo", "Roing", "Namsai"],
    'Delhi': ["New Delhi", "Delhi Cantonment", "Noida", "Gurgaon", "Faridabad", "Ghaziabad", "Greater Noida", "Bahadurgarh", "Loni", "Mandi", "Hapur"],
    'Maharashtra': ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Akola", "Latur", "Dhule", "Ahmednagar", "Chandrapur", "Jalgaon", "Parbhani", "Ichalkaranji", "Buldhana", "Panvel"],
    'West Bengal': ["Kolkata", "Asansol", "Durgapur", "Siliguri", "Howrah", "Malda", "Darjeeling", "Kharagpur", "Haldia", "Bardhaman", "Krishnanagar", "Baharampur", "Serampore", "Medinipur", "Jalpaiguri", "Raiganj", "Cooch Behar", "Alipurduar", "Ranaghat", "Purulia", "Bankura", "Suri", "Balurghat", "Rampurhat", "Haldibari"]

  }

  gymData: { [city: string]: { name: string; price: string; }[] } = {
    'New Delhi': [
      {
        name: 'Fluid Gym N Spa',
        price: '5000',

      },
      {
        name: 'The Gym Health Planet',
        price: '4000'
      },
      {
        name: 'Fitness',
        price: '3000'
      },
      {
        name: 'Anytime Fitness',
        price: '2000'
      },
      {
        name: 'Olympia Gym',
        price: '1000'
      }
    ]

    // Add gym data for other cities
  };
  get selectedCityGyms() {
    return this.selectedCity ? this.gymData[this.selectedCity] : [];
  }


}

