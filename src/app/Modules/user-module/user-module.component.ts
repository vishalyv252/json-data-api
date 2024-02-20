import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UserModuleService } from './user-module.service';
import { users_module } from './user-module';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.component.html',
  styleUrls: ['./user-module.component.scss']
})
export class UserModuleComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name'];
  dataSource = new MatTableDataSource<users_module>();
  totalItems: number = 0;
  pageIndex: number = 0;
  pageSize: number = 5; // Initially set to 5
  pageSizeOptions: number[] = [5, 10, 25, 100]; // Provide options for page size

  constructor(private users_module_service: UserModuleService) {}

  users_list: users_module[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.get_All_Users();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  get_All_Users(): void {
    this.users_module_service.get_All_Users().subscribe(
      (data: users_module[]) => {
        this.users_list = data;
        this.totalItems = data.length; // Set total items count
        this.updateDataSource(); // Update data source with pagination
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  updateDataSource(): void {
    const startIndex = this.pageIndex * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.dataSource.data = this.users_list.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updateDataSource(); // Update data source with new pagination settings
  }
}
