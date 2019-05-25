import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  dataSource: any=[
    {departmentName: "Frontend", empName : [ "Rohini","Mohini","Sarojini","Bala","Venkat" ]},
    {departmentName:"Operations",empName : [ "Sriram","Nitin","Raghav","Preeti","Vijay" ]},
    {departmentName:"Finance",empName : [ "Vishnu","Vardhan","Ganesh","Dinesh","Raju" ]},
    {departmentName: "Business Developmet" ,empName : [ "Aditya","Senthil","Kavipriya","john","Happy" ]},
    {departmentName:"Backend" ,empName: [ "Jitendra","Pradeep","Yoganandh","Heena","Rohit" ]},
    {departmentName:"QA" ,empName: [ "Maitri","Vaishnavi","Sushmita","Sadik","Sreenivas" ]}
 ];
 list: any[];
 value: any ='hello';
  constructor() {
   }

  ngOnInit() {
    console.log(this.dataSource);
  }

  drop(event: CdkDragDrop<string[]>,list) {
    // this.dataSource.forEach((data)=>{
    //   this.list = [];
    //   this.list.push(data.empName);
    //   console.log(this.list);
    // });
    if (event.previousContainer !== event.container) {
      transferArrayItem(event.previousContainer.data,event.container.data,
      event.previousIndex, event.currentIndex)
      } else {
    moveItemInArray(list, event.previousIndex, event.currentIndex);
      }
     }

    click() {
      console.log("hello");
    }
}
