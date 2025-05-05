import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteServiceService } from './core/services/FlowbiteService/flowbite-service.service';
import { NavbarComponent } from './pages/navbar/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private flowbiteService: FlowbiteServiceService) {}

  ngOnInit(): void {
    this.flowbiteService.loadFlowbite((flowbite) => {
      
    });
  }


}
