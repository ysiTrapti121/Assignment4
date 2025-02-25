import { Component } from '@angular/core';

@Component({
  selector: 'app-body-section',
  standalone: false,
  templateUrl: './body-section.component.html',
  styleUrl: './body-section.component.css'
})
export class BodySectionComponent {
     tableContent= {
      id: 1,
      taskName: 'Design',
      assignedTo:'John',
      dueDate: '2025-24-2'
    }
}
