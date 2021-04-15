import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IgxNavigationDrawerComponent } from "igniteui-angular";

@Component({
  selector: "app-nav-drawer-simple",
  styleUrls: ["./nav.component.scss"],
  templateUrl: "./nav.component.html"
})
export class NavDrawerSimpleComponent {
  public navItems = [
    { name: "account_circle", text: "grid" },
    { name: "error", text: "form" },
  ];

  public selected = "Avatar";

  @ViewChild(IgxNavigationDrawerComponent, { static: true })
  public drawer: IgxNavigationDrawerComponent;
  constructor(private router: Router) {

  }

  public navigate(item) {
    this.selected = item.text;
    this.router.navigate([item.text]);
    this.drawer.close();
  }
}
