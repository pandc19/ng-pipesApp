import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'jonathan';
  public nameUpper: string = 'JONATHAN';
  public fullName: string = 'jOnATan PiLLAjO';

  public customDate: Date = new Date();
}
