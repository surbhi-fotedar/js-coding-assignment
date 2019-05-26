import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  dataSource: any = [];
  connectedTo: any = [];
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

  ngOnInit() { }

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

  editEName(event): void {
    let spanChild = event.currentTarget.parentNode.firstChild;

    spanChild.classList.add('active');
    spanChild.nextSibling.classList.add('active');
    this.value = event.target.innerText;
  }

  saveEName(event, deptName, emplName): void {

    let spanChild = event.currentTarget.parentNode.firstChild;

    spanChild.innerText = event.currentTarget.value;
    spanChild.classList.remove('active');
    event.currentTarget.classList.remove('active');

    this.updateData(deptName, emplName, event.currentTarget.value);
  }

  // Update the actual data in Order to drag the updated value in different department

  updateData(deptName, emplName, updatedValue): void {

    this.dataSource.forEach((data) => {
      if (data.departmentName === deptName) {
        data.empName.forEach((name) => {
          if (name === emplName) {
            data.empName[data.empName.indexOf(emplName)] = updatedValue;
          }
        });
      }
    });
  }
}