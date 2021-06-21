import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Ripple } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private primeNgConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeNgConfig.ripple = true;
  }
}
