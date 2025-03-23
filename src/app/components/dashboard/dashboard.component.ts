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
      <div class="welcome-section">
        <h1>Willkommen zurück!</h1>
        <p class="text-gray-600">Hier ist Ihr Überblick für heute</p>
      </div>

      <div class="quick-actions">
        <button mat-raised-button color="primary" class="action-button">
          <mat-icon>add</mat-icon>
          Neuer Deal
        </button>
        <button mat-raised-button color="accent" class="action-button">
          <mat-icon>person_add</mat-icon>
          Kontakt anlegen
        </button>
        <button mat-raised-button color="warn" class="action-button">
          <mat-icon>event</mat-icon>
          Termin planen
        </button>
        <button mat-raised-button class="action-button">
          <mat-icon>mail</mat-icon>
          E-Mail verfassen
        </button>
      </div>

      <div class="stats-grid">
        <mat-card class="stat-card" [class.positive]="true">
          <mat-card-content>
            <div class="stat-icon">
              <mat-icon>work</mat-icon>
            </div>
            <div class="stat-info">
              <h3>Aktive Projekte</h3>
              <p class="stat-value">{{ activeProjects }}</p>
              <div class="stat-trend">
                <mat-icon class="trend-icon">trending_up</mat-icon>
                <span>+12% vs. letzten Monat</span>
              </div>
              <mat-progress-bar mode="determinate" [value]="75"></mat-progress-bar>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card" [class.neutral]="true">
          <mat-card-content>
            <div class="stat-icon">
              <mat-icon>people</mat-icon>
            </div>
            <div class="stat-info">
              <h3>Kunden</h3>
              <p class="stat-value">{{ totalCustomers }}</p>
              <div class="stat-trend">
                <mat-icon class="trend-icon">trending_flat</mat-icon>
                <span>Stabil vs. letzten Monat</span>
              </div>
              <mat-progress-bar mode="determinate" [value]="60"></mat-progress-bar>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card" [class.negative]="true">
          <mat-card-content>
            <div class="stat-icon">
              <mat-icon>receipt</mat-icon>
            </div>
            <div class="stat-info">
              <h3>Offene Rechnungen</h3>
              <p class="stat-value">{{ openInvoices }}</p>
              <div class="stat-trend">
                <mat-icon class="trend-icon">trending_down</mat-icon>
                <span>-5% vs. letzten Monat</span>
              </div>
              <mat-progress-bar mode="determinate" [value]="45"></mat-progress-bar>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="stat-card" [class.positive]="true">
          <mat-card-content>
            <div class="stat-icon">
              <mat-icon>inventory_2</mat-icon>
            </div>
            <div class="stat-info">
              <h3>Lagerbestand</h3>
              <p class="stat-value">{{ inventoryItems }}</p>
              <div class="stat-trend">
                <mat-icon class="trend-icon">trending_up</mat-icon>
                <span>+8% vs. letzten Monat</span>
              </div>
              <mat-progress-bar mode="determinate" [value]="80"></mat-progress-bar>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <div class="charts-container">
        <mat-card class="chart-card">
          <mat-card-header>
            <mat-card-title>Pipeline-Übersicht</mat-card-title>
            <div class="card-actions">
              <mat-button-toggle-group>
                <mat-button-toggle value="week">Woche</mat-button-toggle>
                <mat-button-toggle value="month" checked>Monat</mat-button-toggle>
                <mat-button-toggle value="quarter">Quartal</mat-button-toggle>
              </mat-button-toggle-group>
              <button mat-icon-button [matMenuTriggerFor]="chartMenu">
                <mat-icon>more_vert</mat-icon>
              </button>
            </div>
          </mat-card-header>
          <mat-card-content>
            <div class="chart-placeholder">
              <mat-progress-spinner mode="determinate" [value]="75"></mat-progress-spinner>
              <p>Pipeline-Übersicht wird geladen...</p>
            </div>
          </mat-card-content>
        </mat-card>

        <mat-card class="chart-card">
          <mat-card-header>
            <mat-card-title>Umsatzentwicklung</mat-card-title>
            <div class="card-actions">
              <mat-button-toggle-group>
                <mat-button-toggle value="week">Woche</mat-button-toggle>
                <mat-button-toggle value="month" checked>Monat</mat-button-toggle>
                <mat-button-toggle value="quarter">Quartal</mat-button-toggle>
              </mat-button-toggle-group>
              <button mat-icon-button [matMenuTriggerFor]="chartMenu">
                <mat-icon>more_vert</mat-icon>
              </button>
            </div>
          </mat-card-header>
          <mat-card-content>
            <div class="chart-placeholder">
              <mat-progress-spinner mode="determinate" [value]="60"></mat-progress-spinner>
              <p>Umsatzentwicklung wird geladen...</p>
            </div>
          </mat-card-content>
        </mat-card>
      </div>

      <div class="bottom-grid">
        <mat-card class="recent-activities">
          <mat-card-header>
            <mat-card-title>Aktuelle Aktivitäten</mat-card-title>
            <button mat-button color="primary">Alle anzeigen</button>
          </mat-card-header>
          <mat-card-content>
            <mat-list>
              <mat-list-item *ngFor="let activity of recentActivities">
                <div class="activity-item">
                  <div class="activity-icon" [class]="activity.icon">
                    <mat-icon>{{ activity.icon }}</mat-icon>
                  </div>
                  <div class="activity-content">
                    <h4>{{ activity.title }}</h4>
                    <p>{{ activity.description }}</p>
                    <span class="activity-time">{{ activity.time }}</span>
                  </div>
                </div>
              </mat-list-item>
            </mat-list>
          </mat-card-content>
        </mat-card>

        <mat-card class="upcoming-tasks">
          <mat-card-header>
            <mat-card-title>Anstehende Aufgaben</mat-card-title>
            <button mat-button color="primary">Alle anzeigen</button>
          </mat-card-header>
          <mat-card-content>
            <mat-list>
              <mat-list-item *ngFor="let task of upcomingTasks">
                <div class="task-item">
                  <mat-checkbox [checked]="task.completed">{{ task.title }}</mat-checkbox>
                  <span class="task-due">{{ task.dueDate }}</span>
                </div>
              </mat-list-item>
            </mat-list>
          </mat-card-content>
        </mat-card>
      </div>
    </div>

    <mat-menu #chartMenu="matMenu">
      <button mat-menu-item>
        <mat-icon>file_download</mat-icon>
        <span>Exportieren</span>
      </button>
      <button mat-menu-item>
        <mat-icon>share</mat-icon>
        <span>Teilen</span>
      </button>
      <button mat-menu-item>
        <mat-icon>refresh</mat-icon>
        <span>Aktualisieren</span>
      </button>
    </mat-menu>
  `,
    styles: [`
    .dashboard-container {
      min-height: 100%;
      background: #f8fafc;
      overflow-x: hidden;
    }

    .welcome-section {
      margin-bottom: 2rem;

      h1 {
        font-size: 2rem;
        font-weight: 600;
        color: #1e293b;
        margin: 0;
        line-height: 1.2;
      }

      p {
        margin-top: 0.5rem;
        font-size: 1.1rem;
        color: #64748b;
      }
    }

    .quick-actions {
      display: flex;
      gap: 1rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;

      .action-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0 1.5rem;
        height: 42px;
        border-radius: 0.5rem;
        font-weight: 500;
        font-size: 0.875rem;
        transition: all 0.2s;

        &:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }

        mat-icon {
          font-size: 20px;
          width: 20px;
          height: 20px;
        }
      }
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
      overflow: hidden;
      
      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
      }

      &.positive .trend-icon {
        color: #22c55e;
      }

      &.neutral .trend-icon {
        color: #64748b;
      }

      &.negative .trend-icon {
        color: #ef4444;
      }

      mat-card-content {
        display: flex;
        padding: 1.5rem;
        gap: 1rem;
      }
    }

    .stat-icon {
      background: #f1f5f9;
      border-radius: 0.75rem;
      width: 56px;
      height: 56px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;

      mat-icon {
        font-size: 28px;
        width: 28px;
        height: 28px;
        color: #64748b;
      }
    }

    .stat-info {
      flex: 1;
      min-width: 0;

      h3 {
        margin: 0;
        font-size: 0.875rem;
        font-weight: 500;
        color: #64748b;
      }

      .stat-value {
        margin: 0.5rem 0;
        font-size: 1.875rem;
        font-weight: 600;
        color: #1e293b;
        line-height: 1.2;
      }

      .stat-trend {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: #64748b;

        .trend-icon {
          font-size: 20px;
          width: 20px;
          height: 20px;
        }
      }

      mat-progress-bar {
        border-radius: 4px;
        height: 6px;
      }
    }

    .charts-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;

      @media (max-width: 1024px) {
        grid-template-columns: 1fr;
      }
    }

    .chart-card {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      overflow: hidden;

      mat-card-header {
        padding: 1.5rem 1.5rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e2e8f0;
        margin-bottom: 0;

        mat-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
        }
      }

      mat-card-content {
        padding: 1.5rem;
      }
    }

    .card-actions {
      display: flex;
      align-items: center;
      gap: 1rem;

      mat-button-toggle-group {
        border: none;
        border-radius: 0.5rem;
        background: #f1f5f9;
        height: 36px;
        
        mat-button-toggle {
          background: transparent;
          color: #64748b;
          border: none;
          font-size: 0.875rem;
          line-height: 36px;
          height: 36px;
          
          &.mat-button-toggle-checked {
            background: #e2e8f0;
            color: #1e293b;
          }
        }
      }
    }

    .chart-placeholder {
      height: 300px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #f8fafc;
      border-radius: 0.75rem;
      color: #64748b;
      gap: 1rem;

      mat-progress-spinner {
        ::ng-deep circle {
          stroke: #3b82f6;
        }
      }

      p {
        margin: 0;
        font-size: 0.875rem;
      }
    }

    .bottom-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 1.5rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }

    .recent-activities, .upcoming-tasks {
      background: white;
      border-radius: 1rem;
      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
      overflow: hidden;

      mat-card-header {
        padding: 1.5rem 1.5rem 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #e2e8f0;
        margin: 0;

        mat-card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1e293b;
          margin: 0;
        }
      }

      mat-card-content {
        padding: 0 1.5rem;
        max-height: 400px;
        overflow-y: auto;

        &::-webkit-scrollbar {
          width: 8px;
        }

        &::-webkit-scrollbar-track {
          background: transparent;
        }

        &::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 4px;
          
          &:hover {
            background-color: #94a3b8;
          }
        }
      }
    }

    .activity-item {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      padding: 1rem 0;
      border-bottom: 1px solid #e2e8f0;

      &:last-child {
        border-bottom: none;
      }

      .activity-icon {
        background: #f1f5f9;
        border-radius: 0.5rem;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;

        &.work { color: #3b82f6; }
        &.people { color: #22c55e; }
        &.receipt { color: #f59e0b; }
        &.inventory_2 { color: #8b5cf6; }

        mat-icon {
          font-size: 20px;
          width: 20px;
          height: 20px;
        }
      }

      .activity-content {
        flex: 1;
        min-width: 0;

        h4 {
          margin: 0;
          font-size: 0.875rem;
          font-weight: 500;
          color: #1e293b;
        }

        p {
          margin: 0.25rem 0;
          font-size: 0.875rem;
          color: #64748b;
        }

        .activity-time {
          font-size: 0.75rem;
          color: #94a3b8;
          display: block;
          margin-top: 0.25rem;
        }
      }
    }

    .task-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid #e2e8f0;

      &:last-child {
        border-bottom: none;
      }

      mat-checkbox {
        ::ng-deep .mat-checkbox-label {
          font-size: 0.875rem;
          color: #1e293b;
        }
      }

      .task-due {
        font-size: 0.75rem;
        color: #64748b;
        white-space: nowrap;
      }
    }

    @media (max-width: 768px) {
      .dashboard-container {
        padding: 1rem;
      }

      .welcome-section {
        margin-bottom: 1.5rem;

        h1 {
          font-size: 1.5rem;
        }
      }

      .quick-actions {
        margin-bottom: 1.5rem;
        
        .action-button {
          width: 100%;
          justify-content: center;
        }
      }

      .stats-grid {
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .charts-container {
        gap: 1rem;
        margin-bottom: 1.5rem;
      }

      .bottom-grid {
        gap: 1rem;
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