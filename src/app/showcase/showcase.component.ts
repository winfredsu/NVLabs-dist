import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
	moduleId: module.id,
	selector: 'nvlabs-showcase',
	templateUrl: './showcase.component.html'
})
export class ShowcaseComponent {
	constructor( router: Router, title: Title ) {
		if ( router.url === '/showcase') {
			title.setTitle('Showcase | NVLabs');
		}
	}	
}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-self-powered-wearables',
	templateUrl: './self-powered-wearables.component.html'
})
export class SelfPoweredWearablesComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-transient-computing',
	templateUrl: './transient-computing.component.html'
})
export class TransientComputingComponent {

}

@Component({
	moduleId: module.id,
	selector: 'nvlabs-low-power-iot',
	templateUrl: './low-power-iot.component.html'
})
export class LowPowerIoTComponent {

}
