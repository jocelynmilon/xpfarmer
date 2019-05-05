import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { AuthentificationService } from "../../service/authentification.service";

@Component({
  selector: "app-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  form: FormGroup;
  users = [];
  error = "";

  stat = [
    { id: 1, name: "money", value: 1 },
    { id: 2, name: "level", value: 1 },
    { id: 3, name: "levelPoint", value: 1 }
  ];

  constructor(
    private authentificationService: AuthentificationService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.authentificationService.getUsers().subscribe(
      data => (this.users = data),
      error => {
        console.error(error);
        this.error = error;
      }
    );
    this.form = this.formBuilder.group({
      firstName: "",
      lastName: "",
      avatar: "",
      stats: ""
    });
  }
  createUser() {
    console.log(this.form.value);
  }
}
