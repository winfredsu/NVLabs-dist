import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'nvlabs-about',
	templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
	lat: number = 40.005217;
	lng: number = 116.336007;
	zoom: number = 13;
  styleArray = [{
      featureType: "all",
      stylers: [{
          saturation: -80
      }]
  }, {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{
          hue: "#00ffee"
      }, {
          saturation: 50
      }]
  }, {
      featureType: "poi.business",
      elementType: "labels",
      stylers: [{
          visibility: "off"
      }]
  }];

	constructor(title: Title) {
		title.setTitle('About | NVLabs');
	}

	ngOnInit(): void {
		$("#sponsor-list").owlCarousel({
			loop: true,
			margin: 50,
			autoplay: true,
			autoplayTimeout: 2500,
			autoWidth: true,
			items: 4
			//responsive: {
				//0: { 
					//items: 2
				//},
				//768: {
					//items: 3
				//},
				//1200: {
					//items: 4
				//}
			//}
		});
	}
}

