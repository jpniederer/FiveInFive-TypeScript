import { getInputValue } from './helpers';
import { User } from './user';

document.getElementById('addIdea')!.addEventListener('click', () => {
  console.log("Clicked the add button");
  let name = getInputValue('username');
  let user: User = new User(name);

  user.displayName();
})