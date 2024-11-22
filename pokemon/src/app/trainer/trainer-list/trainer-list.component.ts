import { Component, OnInit } from '@angular/core';
import { TrainerService } from '../trainer.service';
import { TrainerDetail } from '../trainer-detail';

@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.css'],
})
export class TrainerListComponent implements OnInit {
  trainers: TrainerDetail[] = [];
  selected: boolean = false;
  selectedTrainer!: TrainerDetail;

  constructor(private trainerService: TrainerService) {}

  getTrainersList(): void {
    this.trainerService.getListTrainer().subscribe({
      next: (apiData) => {
        this.trainers = apiData;
      }

    });
  }

  ngOnInit(): void {
    this.getTrainersList();
  }

  onSelected(trainer: TrainerDetail): void {
    this.selected = true;
    this.selectedTrainer = trainer;
  }
}
