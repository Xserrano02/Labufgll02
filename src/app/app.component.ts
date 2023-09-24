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
  SalaryAfpIsss: number = 0;

  calculate() {
    this.calculateAFP();
    this.calculateISSS();
    this.SalaryAfpIsss = this.salary - this.afp - this.isss;
    this.calculateRenta();
    this.netSalary = this.salary - this.renta - this.afp - this.isss;
    this.showResults = true;
  }

  calculateRenta() {

    if (this.SalaryAfpIsss > 0.01 && this.SalaryAfpIsss <= 472.00) {
      
      this.renta = 0;
    } else if (this.SalaryAfpIsss > 472.01 && this.SalaryAfpIsss <= 895.24) {
      
      const exceso = this.SalaryAfpIsss - 472;
      this.renta = exceso * 0.10 + 17.67;
    } else if (this.SalaryAfpIsss > 895.25 && this.SalaryAfpIsss <= 2038.10) {
      
      const exceso = this.SalaryAfpIsss - 895.24;
      this.renta = exceso * 0.20 + 60.00;
    } else if (this.SalaryAfpIsss > 2038.11) {
      
      const exceso = this.SalaryAfpIsss - 2038.10;
      this.renta = exceso * 0.30 + 288.57;
    }
    
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