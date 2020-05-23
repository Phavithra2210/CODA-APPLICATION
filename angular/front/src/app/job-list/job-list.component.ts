import { Component, OnInit } from '@angular/core';
import { JobListServiceService } from 'E:/BOSCH/pavi/pavi/angular/front/src/app/job-list-service.service'

@Component({
  selector: 'app-job-list',
  template: `
  
    <div id="jobtable" >
    <table>
    <tr class="table100-head">
      <th class="column1">Title</th>
      <th class="column1">Company</th>
      <th class="column1">Location</th>
      <th class="column1">JOB ID</th>
      <th class="column1">Description</th>
    </tr>
    <tr *ngFor="let job of jobData">
       <td class="column1">{{job.title}}</td>
       <td class="column1">{{job.company}}</td>
       <td class="column1">{{job.location}}</td>
       <td class="column1">{{job.jobID}}</td>
       <td class="column1">{{job.desc}}</td>
    </tr>
    </table>
  </div>

  `,
  styles: [`
  table {
    border-spacing: 1;
    border-collapse: collapse;
    background: white;
    border-radius: 10px;
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
    position: relative;
  }
  table * {
    position: relative;
  }
  table td, table th {
    padding-left: 8px;
  }
  
  table th{
    background-color : #20B2AA;
  }
  
  table td{
    background-color :#E0FFFF
  }

  table td:hover{
    background-color :#AFEEEE
  }

    `
  ]
})
export class JobListComponent implements OnInit {
  
  public jobData=[];
  constructor(private jobList:JobListServiceService) {

    this.jobList.getList().subscribe(
      data  => {
        this.jobData=data;
        console.log(this.jobData[3].title);
        console.log(data)},
      err =>  console.log("could not fetch data")
    );


   }

  ngOnInit(): void {
  }

}
