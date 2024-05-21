import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IAnimal } from '../../models/animal';
import { Farm } from '../../models/farm';
import { FarmService } from '../farm.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {

  data: IAnimal[] = [];

  constructor(
    private farmService:FarmService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.getAnimals();
  }
  getAnimals(){
    this.farmService.getAnimals().subscribe(data => {
      this.data = data;
    });
  }
  gotoItem(animalId:number){
    this.router.navigate(['animals', animalId]);
  }
  deleteItem(animalId:number)  {
    this.farmService.deleteAnimal(animalId).subscribe({
      next: (res) => {
        console.log('Animal Deleted');        
        this.getAnimals();
        this.toastr.success('Animal Deleted');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Animal Not Deleted: ' + err.error, 'Error');
      }
    });

  }
}
