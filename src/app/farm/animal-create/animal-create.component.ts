import { Component, OnInit } from '@angular/core';
import { FarmService } from '../farm.service';
import { IPlot } from '../../models/plot';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAnimal } from '../../models/animal';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-animal-create',
  templateUrl: './animal-create.component.html',
  styleUrl: './animal-create.component.css'
})
export class AnimalCreateComponent implements OnInit{
  
  plots: IPlot[] = [];
  form!: FormGroup;
  id!: number | null;
  Animal!: IAnimal;

  constructor(
    private formBuilder: FormBuilder,
    private farmService: FarmService,
    private toastr: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nameAnimal: [''],
      plotId: ['']
    });

    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id !== 0 && this.id !== null){
        this.farmService.getAnimal(this.id).subscribe(animal => {
          if(animal){
            this.Animal = animal;
            this.form.patchValue(animal);
          }
        });
      }
    });

    this.getPlots();
  }

  onSubmit(newAnimal: IAnimal){
    console.log(newAnimal);
    if(this.Animal){
      this.updateAnimal(newAnimal);
    }else{
      this.createNewAnimal(newAnimal);
    }
  }

  updateAnimal(newAnimal: IAnimal) {
    newAnimal.id = this.Animal.id;
    this.farmService.updateAnimal(newAnimal).subscribe({
      next: (res) => {
        console.log('Animal Updated');
        this.toastr.success('Animal Updated');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Animal Not Updated: ' + err.error, 'Error');
      }
    });
  }

  createNewAnimal(newAnimal: IAnimal) {
    this.farmService.createAnimal(newAnimal).subscribe({
      next: (res) => {
        console.log('Animal Created');
        this.toastr.success('Animal Created');
      },
      error: (err) => {
        console.log(err);
        this.toastr.error('Animal Not Created: ' + err.error, 'Error');
      }
    });
  }

  getPlots() {
    this.farmService.getPlots().subscribe(data => {
      this.plots = data;
    });
  }

}
