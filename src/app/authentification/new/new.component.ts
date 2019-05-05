import { Component, OnInit } from '@angular/core';

import { AuthentificationService } from '../../service/authentification.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private authentificationService:AuthentificationService) { }

  ngOnInit() {
    this.authentificationService.getUsers()
    .subscribe(data => console.log(data))
  }

}
