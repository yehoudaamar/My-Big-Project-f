
// const form_photo = document.querySelector('.Create_Phto_pasport');
// const my_photo = document.querySelector('.my_photo');

// form_photo.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const data = {}
//     const Data_photo = new FormData(form_photo);

//     for (const [key, value] of Data_photo.entries()) {

//         data[key] = value;
   
//         console.log(data);

//         console.log(data.file.name);

    

//     my_photo.innerHTML  = `<div class="image_pasport">
//         <img src="${data.file.name}" alt="">
//         </div>`;
 


    

    
//     }
//     // fetch('http://localhost:3121/photo', {
//     //     method: 'POST',
//     //     body: JSON.stringify(data),
//     //     headers: {
//     //         'Content-Type': 'application/json'
//     //     }
//     // }).then(res => res.json())
//     //     .then(data => {
//     //         console.log(data);
//     //     }
//     //     )

// }
//     );

const image_input = document.querySelector('#image_input');

   var veribal_file = "";

   
image_input.addEventListener('change', function() {

        const reader = new FileReader();
        reader.addEventListener("load" , () => {
            
            veribal_file = reader.result;
            document.querySelector('.My_potoh1').style.backgroundImage = `url(${veribal_file})` 
            document.querySelector('.My_potoh2').style.backgroundImage = `url(${veribal_file})`
            document.querySelector('.My_potoh3').style.backgroundImage = `url(${veribal_file})`
            document.querySelector('.My_potoh4').style.backgroundImage = `url(${veribal_file})`
            document.querySelector('.My_potoh5').style.backgroundImage = `url(${veribal_file})`
            document.querySelector('.My_potoh6').style.backgroundImage = `url(${veribal_file})`


        


        } );
        reader.readAsDataURL(this.files[0]);
    });

    
    


