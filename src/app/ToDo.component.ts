import { Component } from '@angular/core';

interface ToDo  {
  chore: string;
  complete: boolean; 
  hideTitle: boolean;
}


@Component({
  selector: 'app-root',
  templateUrl: './ToDo.component.html',
  styleUrls: ['./ToDo.component.css']
})
export class AppComponent {
  choreInput: string;
  completeClick: boolean= true;
  stylesList: boolean= true;
  filterText: string;
  ToDo: string;


 choreList: ToDo[] =  [
    {chore: 'Brushing teeth and wash face', complete: true}, 
    {chore: 'Iron clothes', complete: false},
    {chore: 'Cook and eat breakfast', complete: true},
    {chore: 'Go to work', complete: false},
  ];

  // filteredToDos = [...this.ToDos];

  addTask = () => {
    const newChore = {
      chore: this.choreInput,
    };
    this.choreList.push(newChore);
    this.choreInput = null;
   }

  completeTask = (index) => {
    // this.stylesList = !this.stylesList;

    this.choreList.splice(index,1)
  }
   
// toggleHeader= () => {
//   this.stylesList = !this.stylesList;
// };

// toggleStrike= () => {
//   this.hideTitle = !this.hideTitle;
// }

removeTask = (index) =>  {
  this.choreList.splice(index,1);
  // this.choreInput = null;
};

// togglestylesList= () => {
//    stylesList = !stylesList;
// }
filterToDos = () => {
  this.filterToDos = this.filterToDos.filter(todo =>
    todo.name.includes(this.filterText)
  );
  };


}