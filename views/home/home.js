
// const Btn_Login = document.querySelector('.nav_btn_login');
// const Form_Login = document.querySelector('.conteiner_form_Login');
// const Form_login_data = document.querySelector('.form_login');
// const Body_home = document.querySelector('.body_home');
// const x_login = document.getElementById("x");
// const Sub_login = document.querySelector('.btn_login');
// // singin
// const Btn_Singin = document.querySelector('.nav_btn_singin');
// const Form_Singin = document.querySelector('.conteiner_form_Singin');
// const Form_singin_data = document.querySelector('.form_singin');
// const x_singin = document.getElementById("xs");



// function Data_Login() {
   
//     Form_login_data.addEventListener('submit',(e) =>{
//         e.preventDefault();
//         const data ={}
//         const Data_login = new FormData(Form_login_data);

//         for (const [key, value] of Data_login.entries()) {
//             data[key] = value;
//             const DatJSON = JSON.stringify(data);
//             console.log(DatJSON);

//         }
   
      
    //   fetch('http://localhost:3000/login', {
    //     method: 'POST',
    //     body: DatJSON,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // }
    // )

//     }
//     );
// }
// Data_Login();

// function Data_singin() {    
//     Form_singin_data.addEventListener('submit',(e) =>{
//         e.preventDefault();
//         const data ={}
//         const Data_singin = new FormData(Form_singin_data);

//         for (const [key, value] of Data_singin.entries()) {
//             data[key] = value;
//             const DatJSON = JSON.stringify(data);
//             console.log(DatJSON);

//         }
   
      
    //   fetch('http://localhost:3000/singin', {
    //     method: 'POST',
    //     body: DatJSON,
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(res => res.json())
    // .then(data => {
    //     console.log(data);
    // }
    // )

//     }
//     );
// }
// Data_singin();

 

  
// function login() {
   
//     Btn_Login.addEventListener('click', function() {
//         Form_Login.style.display = 'block';
      
//     }
//     );
      
// }
// login();

// function close_login() {
//     x_login.addEventListener('click', function() {
//         Form_Login.style.display = 'none';
       

//     }
//     );
// }
// close_login();

// function singin() {
//     Btn_Singin.addEventListener('click', function() {
//         Form_Singin.style.display = 'block';
      

//     });
// }
// singin();
//     function close_singin() {
//         x_singin.addEventListener('click', function() {
//             Form_Singin.style.display = 'none';
         

//         }
//         );
//     }

// close_singin();