import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-paypie-detail',
  templateUrl: './paypie-detail.component.html',
  styleUrls: ['./paypie-detail.component.scss']
})
export class PaypieDetailComponent implements OnInit {
  panelOpenState = false;
  sprint1 = [
    { task: 'task1',
    assign: 'Rajan',
    Status: 'done'
    },
    { task: 'task2',
    assign: 'Utsah',
    Status: 'done'
    },
    { task: 'task3',
    assign: 'Virapal',
    Status: 'done'
    },
    { task: 'task4',
    assign: 'Rajan',
    Status: 'done'
    },
    { task: 'task5',
    assign: 'Rajan',
    Status: 'Progress'
    },
    { task: 'task6',
    assign: 'Rajan',
    Status: 'done'
    },
    { task: 'task7',
    assign: 'Rajan',
    Status: 'done'
  }
  ];
  sprint2 = [
    { task: 'task1',
    assign: 'Rajan',
    Status: 'done'
    },
    { task: 'task2',
    assign: 'Utsah',
    Status: 'done'
    },
    { task: 'task3',
    assign: 'Virapal',
    Status: 'done'
    },
    { task: 'task4',
    assign: 'Rajan',
    Status: 'done'
    },
    { task: 'task5',
    assign: 'Rajan',
    Status: 'Progress'
    },
    { task: 'task6',
    assign: 'Rajan',
    Status: 'done'
    },
    { task: 'task7',
    assign: 'Rajan',
    Status: 'done'
  }
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
