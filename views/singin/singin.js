const Btn_Singin = document.querySelector('.nav_btn_singin');
const Form_Singin = document.querySelector('.conteiner_form_Singin');
const Form_singin_data = document.querySelector('.form_singin');
const x_singin = document.getElementById("xs");
const check_user = function(data){


    if (data.email === "" || data.password === "" || data.name === "") {
        alert("מלא את כל השדות");
        return false;
    }

    if (data.password.includes(" ")) {
        alert("אין אפשרות להזין רווחים בסיסמה");
        return false;
    }
    if (data.password.length < 6) {
        alert("סיסמא קצרה מדי");
        return false;
    } if (data.password.length > 20) {
        alert("סיסמא ארוכה מדי");
        return false;
    } if (data.name.length < 3) {
        alert("שם קצר מדי");
        return false;
    } if (data.name.length > 50) {
        alert("שם ארוך מדי");
        return false;
    }
    return true;


}

function close_singin() {
    x_singin.addEventListener('click', function () {
        Form_Singin.style.display = 'none';
        window.location = "http://localhost:3121/";

    }
    );
}

close_singin();




Form_singin_data.addEventListener('submit', (e) => {
    e.preventDefault();
    const Data_singin = new FormData(Form_singin_data);
    const data = {}

    for (const [key, value] of Data_singin.entries()) {

        data[key] = value;

        const DatJSON = JSON.stringify(data);


    }
    console.log(data);

   
 
    if (check_user(data) === false) {
   
        alert("מלא את כל השדות");


    }
    else {  




        fetch('http://localhost:3121/singin', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }


        })

            .then((res) => {
                console.log(res);



            })

        }









}
);


