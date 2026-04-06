import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, UserService } from './user.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'practice-firestore-crud';

  // Injecting UserService from user.service.ts
  userService = inject(UserService);

  name = signal<string>('');
  email = signal<string>('');

  selectedUser = signal<User | null>(null);

  // This is the hook method that will be called when the component is initialized
  ngOnInit() {
    this.userService.loadUsers();
  }

  addUser() {
    const user: User = { name: this.name(), email: this.email() };
    this.userService.addUser(user);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.email.set('');
    this.selectedUser.set(null);
  }

  selectUser(user: User) {
    this.selectedUser.set(user);
    this.name.set(user.name);
    this.email.set(user.email);
  }

  updateUser() {
    const user = this.selectedUser();
    const edited_user = { name: this.name(), email: this.email() };
    this.userService.updateUser(user?.id!, edited_user);
    this.resetForm();
  }
}


