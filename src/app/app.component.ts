import { Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = signal('');
  users = signal<UserInterface[]>([]);
  titleChangeEffect = effect(() => {
    console.log('titleChangeEffect', this.title());
  });
  usersTotal = computed(() => this.users().length);

  ngOnInit(): void {
    setTimeout(() => {
      // this.users.set([
      //   {
      //     id: '1',
      //     firstName: 'sou',
      //     lastName: 'souheil',
      //   },
      // ]);

      this.users.update((prevUsers) => [
        ...prevUsers,
        { id: '1', firstName: 'ahla', lastName: 'bik' },
      ]);
      console.log(this.users());
    }, 2000);
  }

  changeTitle(event: Event) {
    const title = (event.target as HTMLInputElement).value;
    this.title.set(title);
  }
}

export interface UserInterface {
  id: string;
  firstName: string;
  lastName: string;
}
