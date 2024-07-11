// Завдання 5 
// У вас є перелік UserRole, який використовується для 
// класифікації користувачів у вашому додатку. 
// Ви хочете створити об'єкт RoleDescription, який 
// зіставлятиме кожну роль користувача з її описом.

export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }

type RoleDescription = Record<UserRole, string>;

const RoleDescription: RoleDescription = {
    [UserRole.admin]: 'Admin User',
    [UserRole.editor]: 'Editor User',
    [UserRole.guest]: 'Guest User',
};
  
export {};


//   const RoleDescription: Record<UserRole, string> = {
//     [UserRole.admin]: 'Admin User',
//     [UserRole.editor]: 'Editor User',
//     [UserRole.guest]: 'Guest User',
//   }; 