import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movement-calculator',
  templateUrl: './movement-calculator.component.html',
  styleUrls: ['./movement-calculator.component.css']
})
export class MovementCalculatorComponent implements OnInit {
  max = 40; // one rep max entered by user
  perc = 100; // percentage of one rep max
  cweight!: number; // calculated weight
  rweight!: number; // rounded weight
  pweight!: number; // plate weight
  hpweight!: number; // plate weight for one side
  n20!: number; // number of 20kg plates
  n15!: number; // number of 15kg plates
  n10!: number; // number of 10kg plates
  n5!: number; // number of 5kg plates
  n2half!: number; // number of 2.5kg plates
  n1qtr!: number; // number of 1.25kg plates

  temp!: string | null

  constructor() { }

  ngOnInit(): void {
    var sMax = localStorage.getItem("max");
    var sPerc = localStorage.getItem("perc");
    if (sMax !== null) {
      this.max = Number(sMax);
    }
    if (sPerc !== null) {
      this.perc = Number(sPerc);
    }
    this.update();
  }

  update(): void {
    localStorage.setItem("max", this.max.toString());
    localStorage.setItem("perc", this.perc.toString());

    //  calculate weight as percentage of 1 rep max
    this.cweight = this.max * this.perc / 100;

    // round to nearest 2.5kg (todo make var)
    this.rweight = Math.round(this.cweight / 2.5) * 2.5;

    // subtract bar weight 20kg (todo make var)
    this.pweight = this.rweight - 20;

    // half as plates come in pairs
    this.hpweight = this.pweight / 2;

    // calculate number of plates needed
    var runningTotal = this.hpweight;
    this.n20 = Math.floor(runningTotal / 20);
    runningTotal = runningTotal - (this.n20 * 20);

    this.n15 = Math.floor(runningTotal / 15);
    runningTotal = runningTotal - (this.n15 * 15);

    this.n10 = Math.floor(runningTotal / 10);
    runningTotal = runningTotal - (this.n10 * 10);

    this.n5 = Math.floor(runningTotal / 5);
    runningTotal = runningTotal - (this.n5 * 5);

    this.n2half = Math.floor(runningTotal / 2.5);
    runningTotal = runningTotal - (this.n2half * 2.5);

    this.n1qtr = Math.floor(runningTotal / 1.25);
    runningTotal = runningTotal - (this.n1qtr * 1.25);
  }
}
