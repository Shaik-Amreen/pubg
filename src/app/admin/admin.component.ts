import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  data: any = []
  constructor(private http: HttpClient) {
    this.http.post('/findata', '').subscribe(
      res => { this.data = res },
      err => { console.log(err) }
    )
  }

  ngOnInit(): void {
  }

  submit(c: any, i: any) {

    this.http.post('/updatedata', { mail: c.mail, status: 'accepted' }).subscribe(
      res => {
        this.data[i].status = 'accepted'
      },
      err => { console.log(err) }
    )
  }
}
