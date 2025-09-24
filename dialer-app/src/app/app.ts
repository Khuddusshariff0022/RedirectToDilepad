import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('dialer-app');
  phoneNumber: string = '+919876543210'; // your number here

  constructor() {
    // Try auto-dial after load
    setTimeout(() => {
      window.location.href = `tel:${this.phoneNumber}`;
    }, 500);
  }

  callNow(): void {
    window.location.href = `tel:${this.phoneNumber}`;
  }
}
