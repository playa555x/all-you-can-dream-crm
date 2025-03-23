import { Component, OnInit, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatRippleModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTreeModule } from '@angular/material/tree';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'app-dashboard',
    imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule,
        MatListModule,
        MatDividerModule,
        MatChipsModule,
        MatTooltipModule,
        MatMenuModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatDialogModule,
        MatSnackBarModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatSlideToggleModule,
        MatExpansionModule,
        MatTabsModule,
        MatStepperModule,
        MatRadioModule,
        MatCheckboxModule,
        MatSliderModule,
        MatSidenavModule,
        MatToolbarModule,
        MatButtonToggleModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatRippleModule,
        MatGridListModule,
        MatTreeModule,
        MatProgressSpinnerModule
    ],
    template: `
    <div class="dashboard-container">
      <div class="content-wrapper">
        <div class="welcome-section">
          <h1>Willkommen im CRM-System</h1>
          <p>Verwalten Sie Ihre Kundenbeziehungen effizient und effektiv</p>
        </div>

        <div class="quick-actions">
          <button mat-raised-button color="primary">
            <mat-icon>add</mat-icon>
            Neuer Kontakt
          </button>
          <button mat-raised-button color="accent">
            <mat-icon>assignment</mat-icon>
            Neue Aufgabe
          </button>
          <button mat-raised-button color="warn">
            <mat-icon>event</mat-icon>
            Termin planen
          </button>
        </div>

        <div class="stats-grid">
          <mat-card class="stat-card">
            <mat-card-header>
              <mat-card-title>Aktive Projekte</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="stat-value">{{activeProjects}}</div>
              <mat-progress-bar mode="determinate" [value]="75"></mat-progress-bar>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-header>
              <mat-card-title>Kunden gesamt</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="stat-value">{{totalCustomers}}</div>
              <mat-progress-bar mode="determinate" [value]="85"></mat-progress-bar>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-header>
              <mat-card-title>Offene Rechnungen</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="stat-value">{{openInvoices}}</div>
              <mat-progress-bar mode="determinate" [value]="45"></mat-progress-bar>
            </mat-card-content>
          </mat-card>

          <mat-card class="stat-card">
            <mat-card-header>
              <mat-card-title>Lagerbestand</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <div class="stat-value">{{inventoryItems}}</div>
              <mat-progress-bar mode="determinate" [value]="60"></mat-progress-bar>
            </mat-card-content>
          </mat-card>
        </div>

        <div class="charts-container">
          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Projektstatus</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <canvas id="projectStatusChart"></canvas>
            </mat-card-content>
          </mat-card>

          <mat-card class="chart-card">
            <mat-card-header>
              <mat-card-title>Umsatzentwicklung</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <canvas id="revenueChart"></canvas>
            </mat-card-content>
          </mat-card>
        </div>

        <div class="recent-activities">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Letzte Aktivitäten</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <mat-list>
                <mat-list-item *ngFor="let activity of recentActivities">
                  <mat-icon matListItemIcon>{{activity.icon}}</mat-icon>
                  <div matListItemTitle>{{activity.title}}</div>
                  <div matListItemLine>{{activity.description}}</div>
                </mat-list-item>
              </mat-list>
            </mat-card-content>
          </mat-card>
        </div>
      </div>
    </div>
  `,
    styles: [`
    .dashboard-container {
      height: 100vh;
      width: 100%;
      overflow: auto;
      padding: 20px;
      box-sizing: border-box;
      background-color: #f5f5f5;
      scrollbar-width: none;
      -ms-overflow-style: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }

    .content-wrapper {
      max-width: 1400px;
      margin: 0 auto;
      padding: 20px;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .welcome-section {
      text-align: center;
      margin-bottom: 32px;
      h1 {
        font-size: 2.5rem;
        margin: 0;
        color: #2c3e50;
      }
      p {
        font-size: 1.2rem;
        color: #7f8c8d;
        margin: 8px 0 0;
      }
    }

    .quick-actions {
      display: flex;
      gap: 16px;
      justify-content: center;
      margin-bottom: 32px;
      button {
        min-width: 160px;
        mat-icon {
          margin-right: 8px;
        }
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .stat-card {
      border-radius: 12px;
      transition: transform 0.2s, box-shadow 0.2s;
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0,0,0,0.1);
      }
      mat-card-header {
        padding: 16px;
      }
      mat-card-content {
        padding: 0 16px 16px;
      }
      .stat-value {
        font-size: 2.5rem;
        font-weight: bold;
        margin: 16px 0;
        color: #2c3e50;
      }
    }

    .charts-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .chart-card {
      border-radius: 12px;
      mat-card-content {
        height: 300px;
        padding: 16px;
      }
    }

    .recent-activities {
      mat-card {
        border-radius: 12px;
      }
      mat-list-item {
        height: auto;
        margin-bottom: 8px;
        &:hover {
          background-color: #f8f9fa;
        }
      }
    }

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }
      .charts-container {
        grid-template-columns: 1fr;
      }
      .quick-actions {
        flex-direction: column;
        button {
          width: 100%;
        }
      }
    }
  `]
})
export class DashboardComponent implements OnInit {
  activeProjects = 0;
  totalCustomers = 0;
  openInvoices = 0;
  inventoryItems = 0;
  recentActivities = [
    {
      icon: 'work',
      title: 'Neues Projekt erstellt',
      description: 'Solaranlage Installation',
      time: 'Vor 5 Minuten'
    },
    {
      icon: 'people',
      title: 'Neuer Kunde hinzugefügt',
      description: 'Max Mustermann',
      time: 'Vor 15 Minuten'
    },
    {
      icon: 'receipt',
      title: 'Rechnung erstellt',
      description: 'Rechnung #12345',
      time: 'Vor 30 Minuten'
    },
    {
      icon: 'inventory_2',
      title: 'Lagerbestand aktualisiert',
      description: 'Solarpanels',
      time: 'Vor 1 Stunde'
    }
  ];

  upcomingTasks = [
    {
      title: 'Angebot für Solaranlage erstellen',
      dueDate: 'Heute, 14:00',
      completed: false
    },
    {
      title: 'Kundentermin vorbereiten',
      dueDate: 'Morgen, 10:00',
      completed: false
    },
    {
      title: 'Projektbesprechung',
      dueDate: 'Übermorgen, 15:30',
      completed: false
    },
    {
      title: 'Rechnungen prüfen',
      dueDate: 'Diese Woche',
      completed: true
    }
  ];

  deals: any[] = [];
  organizations: any[] = [];
  
  constructor() {}
  
  ngOnInit() {
    // Hier können wir später unsere eigene CRM-Logik implementieren
    this.loadDashboardData();
  }

  private loadDashboardData() {
    // Beispieldaten für das Dashboard
    this.deals = [
      { title: 'Solar-Anlage Projekt A', value: 15000, stage: 'In Verhandlung' },
      { title: 'Wartungsvertrag B', value: 5000, stage: 'Angebot erstellt' },
      { title: 'PV-Installation C', value: 25000, stage: 'Abgeschlossen' }
    ];

    this.organizations = [
      { name: 'Mustermann GmbH', industry: 'Energie' },
      { name: 'Solar AG', industry: 'Erneuerbare Energien' },
      { name: 'Green Power Ltd', industry: 'Umwelttechnik' }
    ];
  }
} 