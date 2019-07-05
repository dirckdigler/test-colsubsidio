import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TestService } from '../../services/test.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  arr: any[] = [];
  onSubmit(form: NgForm) {
    this.arr = form.value
    console.log('array', this.arr);
    console.log('value', form.value);
  }
  users: any = {};

  constructor(private http: HttpClient,
              private test: TestService )  {
  }

  ngOnInit() {
    this.test.getUsers().subscribe(data => {
      this.users = data;
      console.log(data);
    });
  }

}
