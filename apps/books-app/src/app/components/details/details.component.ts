import { Component, OnInit } from '@angular/core';
import { Subject} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
import { AppiService } from '../../service/appi.service';

@Component({
  selector: 'books-app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  form!: FormGroup;
  constructor(private formbuilder: FormBuilder,
    private service : AppiService,
    private router: Router) { }

    $endsub : Subject<any> = new Subject();

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name : ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      phoneNumber:['',Validators.required],
      noOfSigners: ['',Validators.required],
      noOfNotarizations:['',Validators.required]
    });
  }

  onSubmit() {
    if(this.form.invalid){
      return;
    }
    const data = {
      name : this.form.controls.name.value,
      email : this.form.controls.email.value,
      phoneNumber : this.form.controls.phoneNumber.value,
      noOfSigners:this.form.controls.noOfSigners.value,
      noOfNotarizations:this.form.controls.noOfNotarizations.value
    }
    console.log(data);
    this.service.post(data).pipe(takeUntil(this.$endsub)).subscribe(data1=>{
      if(data1.status == true) {
        console.log(data1);
        this.router.navigate(['/success']);
      }
      else{
        console.log(data1);
        this.router.navigate(['/']);
      }
    });
  }

}
