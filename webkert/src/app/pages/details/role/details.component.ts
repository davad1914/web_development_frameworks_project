import { FbBaseService } from './../../../services/fb-base.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  form: FormGroup = new FormGroup({
    href: new FormControl('', [Validators.minLength(5), Validators.required]),
    involvementRole: new FormControl('', [Validators.minLength(5), Validators.required]),
    function: new FormControl('', [Validators.minLength(5), Validators.required]),
    action: new FormControl('', [Validators.minLength(5), Validators.required])
  });

  id = '';
  dataNameStr = '';
  inData: Observable<any> | null = null;
  role = '';

  constructor(private route: ActivatedRoute, private service: FbBaseService<any>, private location: Location, private router: Router) {
  }

  ngOnInit(): void {
    const params = this.route.snapshot.params;
    if (params?.id) {
      this.id = params.id;
      this.dataNameStr = params.dataNameStr;
      this.getItem();
    }
    console.log(this.id, this.dataNameStr);
  }

  ngOnDestroy(): void{
    alert("Módosítás felület elhagyása!");
  }

  getItem(): void {
    this.inData = this.service.getById(this.dataNameStr + 's', this.id);
  }

  close(): void {
    this.location.back();
  }

  update(): void {
    let role = 
      {
        "action": '',
        "function": '',
        "href": '',
        "involvementRole": ''
      }
      role.action = this.form.value.action;
      role.function = this.form.value.function;
      role.href = this.form.value.href;
      role.involvementRole = this.form.value.involvementRole;
    this.service.update(this.dataNameStr + 's', this.id, role);
    this.router.navigateByUrl('/home/roles');
  }

  delete(){
    this.service.delete(this.dataNameStr + 's', this.id);
  }
}
