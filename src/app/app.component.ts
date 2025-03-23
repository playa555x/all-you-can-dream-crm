import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatCommonModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-root',
    imports: [
        CommonModule,
        RouterModule,
        MatCommonModule,
        MatRippleModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatBadgeModule,
        MatExpansionModule,
        MatDividerModule
    ],
    template: `
    <div class="app-container">
      <mat-toolbar class="toolbar">
        <div class="flex items-center">
          <img src="assets/logo.svg" alt="Logo" class="h-8 mr-4">
          <span class="text-xl font-semibold">All You Can Dream CRM</span>
        </div>
        <div class="flex items-center gap-4">
          <button mat-icon-button class="notification-btn" [matMenuTriggerFor]="notificationMenu">
            <mat-icon [matBadge]="3" matBadgeColor="accent">notifications</mat-icon>
          </button>
          <button mat-icon-button class="profile-btn" [matMenuTriggerFor]="profileMenu">
            <mat-icon>account_circle</mat-icon>
          </button>
        </div>
      </mat-toolbar>

      <mat-menu #notificationMenu="matMenu" class="notification-menu">
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">Benachrichtigungen</h3>
          <div class="notification-item" *ngFor="let notification of notifications">
            <mat-icon [class]="notification.type">{{notification.icon}}</mat-icon>
            <div class="notification-content">
              <p class="font-medium">{{notification.title}}</p>
              <p class="text-sm text-gray-600">{{notification.message}}</p>
              <span class="text-xs text-gray-500">{{notification.time}}</span>
            </div>
          </div>
        </div>
      </mat-menu>

      <mat-menu #profileMenu="matMenu" class="profile-menu">
        <button mat-menu-item>
          <mat-icon>person</mat-icon>
          <span>Mein Profil</span>
        </button>
        <button mat-menu-item>
          <mat-icon>settings</mat-icon>
          <span>Einstellungen</span>
        </button>
        <mat-divider></mat-divider>
        <button mat-menu-item class="text-red-600">
          <mat-icon>exit_to_app</mat-icon>
          <span>Abmelden</span>
        </button>
      </mat-menu>

      <mat-sidenav-container class="sidenav-container">
        <mat-sidenav #drawer class="sidenav" fixedInViewport [mode]="'side'" [opened]="true">
          <div class="sidenav-content">
            <mat-nav-list>
              <a mat-list-item routerLink="/dashboard" routerLinkActive="active">
                <mat-icon matListItemIcon>dashboard</mat-icon>
                <span matListItemTitle>Dashboard</span>
              </a>
              
              <mat-expansion-panel class="nav-expansion">
                <mat-expansion-panel-header>
                  <mat-panel-title>
                    <mat-icon>work</mat-icon>
                    <span>Deals</span>
                  </mat-panel-title>
                </mat-expansion-panel-header>
                <a mat-list-item routerLink="/deals/pipeline">Pipeline-Ansicht</a>
                <a mat-list-item routerLink="/deals/list">Listendarstellung</a>
                <a mat-list-item routerLink="/deals/statistics">Statistiken</a>
                <a mat-list-item routerLink="/deals/forecast">Prognosen</a>
              </mat-expansion-panel>

              <mat-expansion-panel class="nav-expansion">
                <mat-expansion-panel-header>
                  <mat-panel-title>
                    <mat-icon>people</mat-icon>
                    <span>Kontakte</span>
                  </mat-panel-title>
                </mat-expansion-panel-header>
                <a mat-list-item routerLink="/contacts/persons">Personen</a>
                <a mat-list-item routerLink="/contacts/organizations">Organisationen</a>
                <a mat-list-item routerLink="/contacts/import">Import</a>
              </mat-expansion-panel>

              <mat-expansion-panel class="nav-expansion">
                <mat-expansion-panel-header>
                  <mat-panel-title>
                    <mat-icon>calendar_today</mat-icon>
                    <span>Aktivitäten</span>
                  </mat-panel-title>
                </mat-expansion-panel-header>
                <a mat-list-item routerLink="/activities/calendar">Kalender</a>
                <a mat-list-item routerLink="/activities/tasks">Aufgaben</a>
                <a mat-list-item routerLink="/activities/emails">E-Mails</a>
                <a mat-list-item routerLink="/activities/calls">Anrufe</a>
              </mat-expansion-panel>

              <mat-expansion-panel class="nav-expansion">
                <mat-expansion-panel-header>
                  <mat-panel-title>
                    <mat-icon>inventory_2</mat-icon>
                    <span>Produkte</span>
                  </mat-panel-title>
                </mat-expansion-panel-header>
                <a mat-list-item routerLink="/products/catalog">Produktkatalog</a>
                <a mat-list-item routerLink="/products/prices">Preislisten</a>
                <a mat-list-item routerLink="/products/categories">Kategorien</a>
              </mat-expansion-panel>

              <mat-expansion-panel class="nav-expansion">
                <mat-expansion-panel-header>
                  <mat-panel-title>
                    <mat-icon>insights</mat-icon>
                    <span>Berichte</span>
                  </mat-panel-title>
                </mat-expansion-panel-header>
                <a mat-list-item routerLink="/reports/sales">Verkaufsberichte</a>
                <a mat-list-item routerLink="/reports/activities">Aktivitätsberichte</a>
                <a mat-list-item routerLink="/reports/pipeline">Pipeline-Berichte</a>
                <a mat-list-item routerLink="/reports/custom">Benutzerdefiniert</a>
              </mat-expansion-panel>

              <mat-expansion-panel class="nav-expansion">
                <mat-expansion-panel-header>
                  <mat-panel-title>
                    <mat-icon>settings</mat-icon>
                    <span>Einstellungen</span>
                  </mat-panel-title>
                </mat-expansion-panel-header>
                <a mat-list-item routerLink="/settings/company">Unternehmen</a>
                <a mat-list-item routerLink="/settings/users">Benutzer</a>
                <a mat-list-item routerLink="/settings/customization">Anpassungen</a>
                <a mat-list-item routerLink="/settings/integrations">Integrationen</a>
              </mat-expansion-panel>

              <a mat-list-item routerLink="/pv-calculator" routerLinkActive="active">
                <mat-icon matListItemIcon>calculate</mat-icon>
                <span matListItemTitle>PV-Rechner</span>
              </a>
            </mat-nav-list>
          </div>
        </mat-sidenav>

        <mat-sidenav-content>
          <div class="content-container">
            <router-outlet></router-outlet>
          </div>
        </mat-sidenav-content>
      </mat-sidenav-container>
    </div>
  `,
    styles: [`
    .app-container {
      height: 100vh;
      display: flex;
      flex-direction: column;
      background-color: #f8fafc;
      overflow: hidden;
    }

    .toolbar {
      background-color: white;
      color: #1e293b;
      display: flex;
      justify-content: space-between;
      padding: 0 1.5rem;
      border-bottom: 1px solid #e2e8f0;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      height: 64px;
      position: relative;
      z-index: 10;
    }

    .notification-btn, .profile-btn {
      color: #64748b;
      transition: all 0.2s;

      &:hover {
        color: #1e293b;
        background-color: #f1f5f9;
      }
    }

    .sidenav-container {
      flex: 1;
      background-color: #f8fafc;
      overflow: hidden;
    }

    .sidenav {
      width: 280px;
      background-color: white;
      border-right: 1px solid #e2e8f0;
      overflow-y: auto;
      overflow-x: hidden;

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

    .sidenav-content {
      padding: 0.5rem 0;
      height: 100%;
    }

    .nav-expansion {
      background: transparent;
      box-shadow: none;
      margin: 0;
      border-radius: 0;

      ::ng-deep {
        .mat-expansion-panel-body {
          padding: 0 0 0 1rem;
        }

        .mat-expansion-panel-header {
          padding: 0 1rem;
          height: 48px;
          font-size: 0.875rem;

          &:hover {
            background-color: #f1f5f9 !important;
          }
        }

        .mat-expansion-panel-header-title {
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 0.75rem;

          mat-icon {
            font-size: 20px;
            width: 20px;
            height: 20px;
          }
        }

        .mat-expanded {
          .mat-expansion-panel-header-title {
            color: #1e293b;
          }
        }
      }
    }

    mat-nav-list {
      a {
        color: #64748b;
        height: 40px;
        transition: all 0.2s;
        border-radius: 0.5rem;
        margin: 0.125rem 0.75rem;
        font-size: 0.875rem;

        &:hover {
          background-color: #f1f5f9;
          color: #1e293b;
        }

        &.active {
          background-color: #e2e8f0;
          color: #1e293b;
          font-weight: 500;
        }

        mat-icon {
          color: inherit;
          margin-right: 0.75rem;
          font-size: 20px;
          width: 20px;
          height: 20px;
        }
      }
    }

    .content-container {
      height: calc(100vh - 64px);
      padding: 1.5rem;
      max-width: 1920px;
      margin: 0 auto;
      overflow-y: auto;
      overflow-x: hidden;

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

    .notification-menu {
      max-width: 320px;
      margin-top: 0.5rem;
      
      ::ng-deep .mat-menu-content {
        padding: 0;
      }
      
      .notification-item {
        display: flex;
        padding: 1rem;
        gap: 1rem;
        border-bottom: 1px solid #e2e8f0;
        transition: background-color 0.2s;

        &:hover {
          background-color: #f8fafc;
        }

        &:last-child {
          border-bottom: none;
        }

        mat-icon {
          &.info { color: #3b82f6; }
          &.success { color: #22c55e; }
          &.warning { color: #f59e0b; }
          &.error { color: #ef4444; }
        }

        .notification-content {
          flex: 1;
          min-width: 0;

          p {
            margin: 0;
            white-space: normal;
            
            &.font-medium {
              color: #1e293b;
              margin-bottom: 0.25rem;
            }
          }

          .text-gray-600 {
            color: #64748b;
          }

          .text-gray-500 {
            color: #94a3b8;
            display: block;
            margin-top: 0.25rem;
          }
        }
      }
    }

    .profile-menu {
      min-width: 200px;
      margin-top: 0.5rem;

      ::ng-deep .mat-menu-content {
        padding: 0.5rem 0;
      }

      button {
        height: 40px;
        line-height: 40px;
        
        mat-icon {
          margin-right: 0.75rem;
        }

        &.text-red-600 {
          color: #dc2626;
        }
      }
    }

    @media (max-width: 768px) {
      .toolbar {
        padding: 0 1rem;
      }

      .sidenav {
        width: 100%;
      }

      .content-container {
        padding: 1rem;
      }
    }
  `]
})
export class AppComponent {
  notifications = [
    {
      type: 'info',
      icon: 'info',
      title: 'Neue Anfrage',
      message: 'Ein neuer Lead wurde erstellt',
      time: 'Vor 5 Minuten'
    },
    {
      type: 'success',
      icon: 'check_circle',
      title: 'Deal gewonnen',
      message: 'Solaranlage-Projekt abgeschlossen',
      time: 'Vor 2 Stunden'
    },
    {
      type: 'warning',
      icon: 'warning',
      title: 'Aktivität fällig',
      message: 'Nachfassen bei Kunde XYZ',
      time: 'Vor 1 Tag'
    }
  ];
}
