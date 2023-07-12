import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Tournament Central',
        icon: 'pi pi-star',
        items: [
          {
            label: 'View',
            icon: 'pi pi-eye'
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Tournament',
                icon: 'bi bi-bookmark-star'
              },
              {
                label: 'Leaderboard',
                icon: 'bi bi-list-ol'
              }
            ]
          },
        ]
      },
      {
        label: 'Golfers',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'View',
            icon: 'pi pi-eye',
          },
          {
            label: 'New',
            icon: 'pi pi-user-plus'
          },
        ]
      },
      {
        label: 'Golf Courses',
        icon: 'pi pi-flag',
        items: [
          {
            label: 'View',
            icon: 'pi pi-eye',
            routerLink: 'golf-course-list'
          },
          {
            label: 'Edit',
            icon: 'pi pi-pencil',
            items: [
              {
                label: 'New',
                icon: 'pi pi-plus'
              }
            ]
          }
        ]
      },
    ];
  }
}
