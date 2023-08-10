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
        disabled: true,
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
            routerLink: 'golfer-list'
          },
          {
            label: 'New',
            icon: 'pi pi-user-plus',
            routerLink: 'createGolfer'
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
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink: 'createGolfCourse'
          }
        ]
      },
      {
        label: 'About',
        icon: 'pi pi-info-circle',
        routerLink: 'about'
      },
    ];
  }
}
