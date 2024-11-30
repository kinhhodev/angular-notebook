import { Component, inject, OnInit,  } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { IRole } from '../../models/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {

  httpClient = inject( HttpClient );
  roles: Array<IRole> = [];

  ngOnInit(): void {
    this.getRoles();    
  }

  getRoles() {
    this.httpClient.get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
    .subscribe((res: any) => {
      this.roles = res.data;
    });
  }
}
