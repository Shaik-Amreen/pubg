import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  errorStatus: any = false
  formdata: any = FormGroup
  submitStatus: any = 'Submit'
  constructor(private http: HttpClient, private router: Router) {


    this.formdata = new FormGroup(
      {
        mail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@gmail+\.com+$")]),
        utr: new FormControl('', Validators.required),
        mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        name: new FormControl('', Validators.required),
        teamid: new FormControl('', Validators.required),
        teamoneid: new FormControl('', Validators.required),
        teamtwoid: new FormControl('', Validators.required),
        teamthird: new FormControl('', Validators.required),
        teamname: new FormControl('', Validators.required),
        status: new FormControl('pending', Validators.required),
      }
    )

  }



  submit() {
    this.submitStatus = 'Submitting ... please wait !!!'
    if (this.formdata.status == 'VALID') {
      this.http.post('/postdata', this.formdata.value).subscribe(
        res => {
          sessionStorage.setItem('mail', this.formdata.value.mail)
          this.router.navigate(['/response'])
        },
        err => { console.log(err) }
      )
    }
    else {
      this.errorStatus = true
    }
  }

  ngOnInit(): void {
  }

}
