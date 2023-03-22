/**Jesus */

const inputs = document.querySelectorAll('.input__create'); //inputs form
let btnsDelete = document.querySelectorAll('.btn--delete');//Aqui btnsDelete es estático
const btnCreate = document.querySelector('#btn-create');
const newUser = {};
const usersList = [
  {
    nombre: 'Jesús',
    apellido: 'Mendoza',
    correo: 'jesusmendoza@example.com',
  },
];

inputs.forEach(element => {
  element.addEventListener('keyup', (e) => {
    let property = e.target.name;
    let text = e.target.value;
    newUser[property] = text;
    //Se almacenarán los datos del nuevo usuario en newUser de acuerdo a los valores de los inputs (identificados con target)
  });
});

const renderList = (arr) => {//Función global para renderizar la lista de usuarios
  arr.forEach((user, index) => {
    let {nombre, apellido, correo} = user;
    //Se crea una table row para cada usuario, con los datos del usuario en tables data
    let tr = document.createElement('tr');
    let tdName = document.createElement('td');
    let tdApellidos = document.createElement('td');
    let tdCorreo = document.createElement('td');
    let tdBoton = document.createElement('td');
    let boton = document.createElement('button');
    let icon = document.createElement('i');

    let nameTxt = document.createTextNode(nombre);
    let apellidosTxt = document.createTextNode(apellido);
    let correoTxt = document.createTextNode(correo);

    tr.classList.add('user');
    boton.classList.add('btn', 'btn--delete');
    icon.classList.add('bi', 'bi-person-dash');

    tdName.appendChild(nameTxt);
    tdApellidos.appendChild(apellidosTxt);
    tdCorreo.appendChild(correoTxt);
    boton.appendChild(icon);
    tdBoton.appendChild(boton);

    tr.append(tdName, tdApellidos, tdCorreo, tdBoton);
    document.querySelector('tbody').appendChild(tr);
  });
  //btnsDelete se actualiza cada vez que se renderiza la lista de usuarios
  btnsDelete = document.querySelectorAll('.btn--delete');
  //Funcion para eliminar usuario de la tabla
  //Se crea aquí porque en el bloque global btnsDelete tendria el valor estático del comienzo
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      //currentTarget accede al elemento que maneja el event y nodeParent accede al elemento padre
      //target accede al elemento que originó el evento
      e.currentTarget.parentNode.parentNode.remove();
    });
  });
};
//Se llama a la función renderList para renderizar la lista de usuarios con sus datos actuales
renderList(usersList);

/*Crear un nuevo usuario
-Antes se comprueba si los datos del formulario han sido llenados, si no se lanza una alerta
-De lo contrario el usuario es creado con los datos del formulario*/
btnCreate.addEventListener(('click'), (e) => {
  if (newUser.nombre === undefined || newUser.apellido === undefined || newUser.correo === undefined) {
    return alert('LLena todos los campos');
  };
  document.querySelectorAll('.user').forEach((user) => user.remove());
  usersList.push({...newUser});
  inputs.forEach(element => {element.value = ''});
  renderList(usersList);
});