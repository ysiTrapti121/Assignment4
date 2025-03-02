import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  taskArray : any[] = [];
     isLoaded=  false;
     isUpdateFormActive= false;
     
     
     Task_Description : string = "";
     Assigned_To: string= "";
     Due_Date: string = "";
     currentTaskID= "";
     
     constructor(private http: HttpClient){
       this.getAllTasks();
     }
     
     ngOnInit(): void{
     
     }
     
      getAllTasks(){
       this.http.get("http://localhost:4000/api/tasks").subscribe((resultData: any)=>{
         this.isLoaded  = true;
          console.log(resultData.data);
          this.taskArray = resultData.data;
       })
      }
    register(){
        let Data={
          "Task_Description": this.Task_Description,
          "Assigned_To" : this.Assigned_To,
          "Due_Date" : this.Due_Date
        }
        
        this.http.post("http://localhost:4000/api/tasks/add", Data).subscribe((resultData: any)=>{
          console.log(resultData);
          alert("Successfully added");
          this.getAllTasks();
        })
    }

    setUpdate(data: any){
          this.Task_Description= data.Task_Description;
          this.Assigned_To = data.Assigned_To;
          this.Due_Date= data.Due_Date;

          this.currentTaskID = data.Task_ID;
    }

    UpdateRecords(){
      let Data= {
        "Task_Description": this.Task_Description,
          "Assigned_To" : this.Assigned_To,
          "Due_Data" : this.Due_Date
      }
      this.http.put("http:localhost:4000/api/tasks/update" +"/"+ this.currentTaskID, Data).subscribe((
         resultData: any
      )=>{
        console.log(resultData);
        alert("Updated successfully");
        this.getAllTasks()
      })
    }

    save(){
           if(this.currentTaskID){
            this.register();
           }
           else{
            this.UpdateRecords();
           }
    }

     setDelete(data: any){
      this.http.delete("http://localhost: 4000/api/tasks/delete"+ "/"+data.Task_ID).subscribe((resultData: any)=>{
        console.log(resultData);
        alert("Deleted the task");
        this.getAllTasks();
      })

     }
}





