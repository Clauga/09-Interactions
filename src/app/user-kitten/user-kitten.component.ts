import { Component, OnInit } from '@angular/core';
import { Kitten } from '../kitten.model';
import { KittenService } from '../kitten.service';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit{
  adoptedKittens: Kitten[] = [];
  showInfo = false;
  selectedKitten: Kitten | null = null;

  constructor(private kittenService: KittenService) { }

  ngOnInit(): void {
    this.adoptedKittens = this.kittenService.getAdoptedKittens();
  }

  showKittenInfo(kitten: Kitten): void {
    this.selectedKitten = kitten;
    this.showInfo = true;
  }
  hideKittenInfo(): void {
    this.selectedKitten = null;
    this.showInfo = false;
  }

}
