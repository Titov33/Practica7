import getValidEmails from './moduls/getValidEmails.js';

let allList = ['mail1@mail.ru', 'mail2@mail.ru', 'mail3@mail.ru', 'mail4@mail.ru', 'mail5@mail.ru', 'mail6@mail.ru', 'mail7@mail.ru', 'mail8@mail.ru', 'mail9@mail.ru',
 'nemail1@mail.ru', 'nemail2@mail.ru', 'nemail3@mail.ru', 'nemail4@mail.ru', 'nemail5@mail.ru', 'nemail6@mail.ru', 'nemail7@mail.ru'];

let blackList = ['nemail1@mail.ru', 'nemail2@mail.ru', 'nemail3@mail.ru', 'nemail4@mail.ru', 'nemail5@mail.ru', 'nemail6@mail.ru', 'nemail7@mail.ru'];
 
console.log(getValidEmails(allList, blackList));
  
