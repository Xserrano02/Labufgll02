import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  salary: number = 0;
  renta: number = 0;
  afp: number = 0;
  isss: number = 0;
  netSalary: number = 0;
  showResults: boolean = false;

  calculate() {
    this.calculateRenta();
    this.calculateAFP();
    this.calculateISSS();
    this.netSalary = this.salary - this.renta - this.afp - this.isss;
    this.showResults = true;
  }

  calculateRenta() {
    
    this.renta = this.salary * 0.10;  
  }

  calculateAFP() {
    const AFP_PERCENTAGE = 0.0725;  
    this.afp = this.salary * AFP_PERCENTAGE;
  }

  calculateISSS() {
    const ISSS_PERCENTAGE = 0.03;  
    this.isss = this.salary * ISSS_PERCENTAGE;
  }
}
