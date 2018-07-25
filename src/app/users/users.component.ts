import { Component, OnInit, ViewChild } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { MatTableDataSource, MatSort } from '../../../node_modules/@angular/material';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public StorageService: StorageService) { }
 displayedColumns: string[] = ['email', 'password', 'name', 'surname', 'birthday'];
 dataSource = new MatTableDataSource(this.StorageService.users);

  applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.dataSource.sort = this.sort;
  }

}
