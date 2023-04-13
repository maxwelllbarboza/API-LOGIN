export type UserCreate = {
    username: String;
    name: String;
    email: String;
    senha: String;
}
export type UserSave = {
    username: String;
    name: String;
    email: String;
    senha: String;
    id: String;
}



//export interface IUserRepository{
//    save(data : UserCreate): promise<UserSave>;
//}