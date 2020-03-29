import { Pipe, PipeTransform } from '@angular/core';

import { User } from '../User';

@Pipe({
  name: 'searchByMail'
})
export class SearchByMailPipe implements PipeTransform {

  transform( users :User[], searchTerm :string ): User[] {
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter(user =>
      user.email.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  }
}
