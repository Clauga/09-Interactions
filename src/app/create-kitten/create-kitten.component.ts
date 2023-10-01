import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { KittenService } from '../kitten.service';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit{
kittenForm!: FormGroup;

constructor(private fb: FormBuilder, private kittenService: KittenService) {}

ngOnInit(): void {
  this.kittenForm = this.fb.group({
    name: ['', Validators.required],
    birthDate: ['', Validators.required],
    breed: ['', Validators.required],
    imgUrl: ['', Validators.required],
      });
    }
    onSubmit(): void {
      // if (this.kittenForm.valid) {
      //   this.kittenService.addKitten(this.kittenForm.value);
      //   this.kittenForm.reset();
      console.log("Form validity:", this.kittenForm.valid);
      if (this.kittenForm.valid) {
        this.kittenService.addKitten(this.kittenForm.value);
        this.kittenForm.reset();
      }
    }
}
