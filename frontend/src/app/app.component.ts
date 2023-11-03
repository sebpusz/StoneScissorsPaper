import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
    ) {
    this.matIconRegistry.addSvgIcon(
      `stone`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/svg/stone.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `scissors`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/svg/scissors.svg`)
    );
    this.matIconRegistry.addSvgIcon(
      `paper`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(`../assets/svg/paper.svg`)
    );
  }
  title = 'StoneSissorsPaper';
}
