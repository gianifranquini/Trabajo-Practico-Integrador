const botonEnviar = document.getElementById('button');
const limpiar=document.getElementById("limpiar")
const nombre=document.getElementById("from_name")
const mail=document.getElementById("email_id")
const mensaje=document.getElementById("message")
const formulario=document.getElementById("form")




/*document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_l0x5k8k';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
*/

/*
emailjs.send("service_n2lxghc","template_l0x5k8k",{
  from_name: nombre.value,
  message: mensaje.value,
  email_id: mail.value,
  to_email: "fermkoss@gmail.com",
  });
*/



/*
botonEnviar.addEventListener("submit",()=>{

  emailjs.send("service_n2lxghc","template_l0x5k8k",{
    from_name: "ghfghf",
    message: "hola",
    email_id: "asdasd@sadasd",
    to_email: "fermkoss@gmail.com",
  })
})
*/




botonEnviar.addEventListener("click",()=>{
  if(validarEmail(mail.value) && mensaje.value!="" && nombre.value!=""){
  enviarMail()
  limpiarInput()
  }
})





async function enviarMail(){
  try {
    emailjs.send("service_n2lxghc","template_l0x5k8k",{
    
      from_name: nombre.value,
      message: mensaje.value,
      email_id: mail.value,
      to_email: "sbruselario@gmail.com",
      email_id_copia: "hgerardo@gmail.com"
      }
    )
    alert("Formulario enviado correctamente")
    //sbruselario@gmail.com

  }catch(error){alert("El error es: "+error)}
}

limpiar.addEventListener("click",limpiarInput=()=>{
    nombre.value=""
    mail.value=""
    mensaje.value=""
})


//USD Dolar Oficial/892.5/932.5/2024-07-01,USD cripto/1373/1375/2024-07-01,USD tarjeta/1428/1492/2024-07-01,USD bolsa/1338.5/1348.6/2024-07-01,USD contadoconliqui/1347/1349.8/2024-07-01,USD mayorista/890.72/930.64/2024-07-01,USD blue/1345/1365/2024-07-01,EUR Euro Oficial/982.11/984.09/2024-07-01,BRL Real Brasileño/163.87/164.18/2024-07-01,CLP Peso Chileno/97.14/97.37/2024-07-01,UYU Peso Uruguayo/23.14/23.2/2024-07-01,USD Dolar Oficial/892.5/942.5/2024-07-02,USD contadoconliqui/1390.7/1392.1/2024-07-02,USD blue/1370/1390/2024-07-02,USD bolsa/1391.5/1392.7/2024-07-02,USD cripto/1383/1416/2024-07-02,EUR Euro Oficial/979.36/980.27/2024-07-02,BRL Real Brasileño/163.7/163.81/2024-07-02,CLP Peso Chileno/96.88/96.99/2024-07-02,UYU Peso Uruguayo/22.83/22.86/2024-07-02,USD Dolar Oficial/893.5/933.5/2024-07-03,USD bolsa/1398.8/1402.5/2024-07-03,USD tarjeta/1429.6/1493.6/2024-07-03,USD cripto/1406/1434/2024-07-03,USD mayorista/891.71/931.63/2024-07-03,USD blue/1405/1425/2024-07-03,USD contadoconliqui/1397.4/1398.6/2024-07-03,EUR Euro Oficial/988.48/989.75/2024-07-03,BRL Real Brasileño/163.99/164.22/2024-07-03,CLP Peso Chileno/97.6/97.77/2024-07-03,UYU Peso Uruguayo/22.68/22.72/2024-07-03