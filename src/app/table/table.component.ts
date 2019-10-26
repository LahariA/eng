import { Component, OnInit } from '@angular/core';
import { TableserviceService } from '../tableservice.service';
import { Subscription, timer } from 'rxjs';
import {switchMap} from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  sub: Subscription;
  data;
  table: any;
  id: any;
  th: any;
  selectedTitle: any;

  constructor(private service:TableserviceService,private ht:HttpClient) { }

  ngOnInit() {
   this.sub=timer(0,3000).pipe(
     switchMap(()=>this.service.getdata())
     ).subscribe(resp=>{
                                    //  console.log(resp);
                                     this.data=resp;
                                     this.table=this.data.hits
                                  })
    }
    button(details){
this.th = details;
this.selectedTitle = details.title;
this.ht.post("http://localhost:3000/details",details).subscribe(resp=>console.log(resp)
)
    }

}

