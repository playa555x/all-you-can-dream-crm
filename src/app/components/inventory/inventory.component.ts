import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>Lager</h1>
      <p>Lagerverwaltung wird implementiert...</p>
    </div>
  `
})
export class InventoryComponent {} 