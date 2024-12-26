// Qs. You are creating a website for your college. Create a class User with 2 properties, name &email. It also has a method called viewData( ) that allows user to view website data
let data = "web info"
class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("web data :", data);
    }
}

let std1 = new user("ahmed", "ahmedraz312@gmail.com");
let std2 = new user("ahmvd", "a11hmedraz312@gmail.com");
// Qs. Create a new class called Admin which inherits from User. Add a new method callededitData to Admin that allows it to edit website data.

class Admin extends user {
    constructor(name,email) {
        super(name,email);
    }
    editData() {
        data = "new info ";
    }    
}

let admin1 = new Admin("admin", "admin@clg,edu.pk");