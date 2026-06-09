
export class Account {
  userName;
  email;
  password;
  constructor(email=null,password=null,userName="User") {
    this.email=email;
    this.password=password;
    this.userName=userName;
  }
  createUser(){}
  getInfo(){
    return {
      email:this.email,
      password:this.password,
      userName:this.userName
    }
  }
}
export class User extends Account {
  createUser(){
    const form = document.getElementById("singUp"); // id збігається
    this.userName=form.elements["username"].value;
    this.email=form.elements["email"].value;
    this.password=form.elements["password"].value;
    const user = {
      username: String(form.elements["username"].value),
      email: String(form.elements["email"].value),
      password: String(form.elements["password"].value),
    };
    fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
    .then(data => console.log(data))
    fetch(`https://fakestoreapi.com/users`, {})
      .then(response => response.json())
      .then(data => console.log(data));
  }
  getInfo(){
    let text=document.getElementById("u-info");
    let un=document.createElement("p");
    let em=document.createElement("p");
    let ps=document.createElement("p");
    un.textContent="userName:"+this.userName;
    em.textContent="email:"+this.email;
    ps.textContent="password:"+this.password;
    text.appendChild(un);
    text.appendChild(em);
    text.appendChild(ps);
  }




}
