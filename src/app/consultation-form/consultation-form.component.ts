import { Component } from '@angular/core';
import { Consultation } from '../model/consultation';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultationService } from '../service/consultation-service.service';

@Component({
  selector: 'app-consultation-form',
  templateUrl: './consultation-form.component.html',
  styleUrls: ['./consultation-form.component.css']
})
export class ConsultationFormComponent {

  consultation: Consultation = new Consultation;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: ConsultationService) {
    this.consultation = new Consultation();
  }

  onSubmit() {
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}

}
