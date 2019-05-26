import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { empty } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  dataSource: any = [];
  connectedTo: any = [];
  list: any[];
  value: any = " ";
  

  constructor() {
    this.dataSource = [
      { departmentName: "Frontend", empName: ["Rohini", "Mohini", "Sarojini", "Bala", "Venkat"] },
      { departmentName: "Operations", empName: ["Sriram", "Nitin", "Raghav", "Preeti", "Vijay"] },
      { departmentName: "Finance", empName: ["Vishnu", "Vardhan", "Ganesh", "Dinesh", "Raju"] },
      { departmentName: "Business Developmet", empName: ["Aditya", "Senthil", "Kavipriya", "john", "Happy"] },
      { departmentName: "Backend", empName: ["Jitendra", "Pradeep", "Yoganandh", "Heena", "Rohit"] },
      { departmentName: "QA", empName: ["Maitri", "Vaishnavi", "Sushmita", "Sadik", "Sreenivas"] }
    ];

    this.dataSource.forEach((data) => {
      this.connectedTo.push(data.departmentName);
    });
  }

  ngOnInit() {
    console.log(this.dataSource);
  }

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

  edit(event) {
    let employeeParent = event.currentTarget.parentNode;
    const spanChild = employeeParent.firstChild;

    spanChild.classList.add('active');
    spanChild.nextSibling.classList.add('active');
    this.value = event.target.innerText;
  }

  save(event) {
    let employeeParent = event.currentTarget.parentNode;
    const spanChild = employeeParent.firstChild;
    
    console.log(event.currentTarget.value);
    spanChild.innerText = event.currentTarget.value;
    spanChild.classList.remove('active');
    event.currentTarget.classList.remove('active');
  }
}
