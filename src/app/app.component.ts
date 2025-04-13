import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice-firestore-crud';

  // Injecting UserService from user.service.ts
  userService = inject(UserService);

  // This is the user object that will be used in the form
  user: User = {
    id: '',
    name: '',
    email: ''
  }

  // This is the id of the user that will be edited
  editUserId!: string | null;

  // This is the array of users that will be displayed in the template
  users: User[] = []


  // This is the hook method that will be called when the component is initialized
  ngOnInit(){
    this.userService.getUsers().subscribe(users => this.users = users);
  }


  addUser(){
    this.userService.addUser(this.user);
  }


  // This method will be called when the user clicks on the edit button
  // It will set the editUserId to the id of the user that will be edited
  setEditUser(editUser: User){
    this.editUserId = editUser.id ?? null;
    this.user = { ... editUser}
  }

  // This method will be called when the user clicks on the update button
  // It will call the updateUser method from the userService and pass the user object to it 
  updateUser(user: User){
    this.userService.updateUser(user);
    this.editUserId = null;
    this.user =  {
    id: '',
    name: '',
    email: ''
  }
  }

  // This method will be called when the user clicks on the delete button
  deleteUser(id:string){
    this.userService.deleteUser(id);
  }

  // This method will be called when the user clicks on the reset button
  resetForm(){
    this.user = {
    id: '',
    name: '',
    email: ''
  };
  }
}
