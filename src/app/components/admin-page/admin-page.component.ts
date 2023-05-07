import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  users: MatTableDataSource<User> = new MatTableDataSource();

  displayedColumns: string[] = [
    'id',
    'username',
    'accessLevel',
    'birthdate',
    'deleteButton',
  ];

  constructor(private readonly userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((result) => {
      this.users = new MatTableDataSource(result.dataArray as User[]);
    });
  }

  deleteUser(user: User): void {
    return;
  }

}
