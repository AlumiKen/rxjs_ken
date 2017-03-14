import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MyNameValidator, ValidatorWithParams } from '../validators/myname.validator';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {

  constructor(private fb:FormBuilder) {

  }

  types = [1,2,3,4,5];
  form:any;
  ngOnInit() {
    this.form = this.fb.group({
      'title': ['123', [Validators.required,Validators.maxLength(10), MyNameValidator, ValidatorWithParams('pica')]],
      'subTitle': ['456', Validators.required],
      'types':this.fb.array(
        this.types.map((value, index)=>
          {
            return this.fb.control(value, Validators.required)
          }
        )
      )
    });
  }


}
