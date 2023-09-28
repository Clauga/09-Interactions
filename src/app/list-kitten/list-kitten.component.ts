import { Component, OnInit } from '@angular/core';
import { Kitten } from '../kitten.model';
import { KittenService } from '../kitten.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit {
  kittens: Kitten[] = [];
  showInfo = false;

  constructor(private kittenService: KittenService) { }

  ngOnInit(): void {
    this.kittens = this.kittenService.getKittens();
  }
  adoptKitten(kitten: Kitten) {
    this.kittenService.adoptKitten(kitten);
    this.kittenService.getAdoptedKittens().push(kitten);
    const index = this.kittens.indexOf(kitten);
    if (index > -1) {
      this.kittens.splice(index, 1);
    }
  }
}

