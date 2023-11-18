import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  // Whether the menu is open or not
  public isMenuOpen = true

  // Switches state of mobile menu
  public switchMenu(): void {
    this.isMenuOpen = !this.isMenuOpen
  }

}
