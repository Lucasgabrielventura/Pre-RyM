export default function validation(userData){
    const regexEmail = /\S+@\S+\.\S+/;
    let errors = {};

    if(!regexEmail.test(userData.username)){
        errors.username = 'Debe ser un correo electrónico';
    }
    if(!userData.username){
        errors.username = 'Por favor, complete este campo';
    }
    if(userData.username.length > 35){
        errors.username = 'Ha excedido el limite de caracteres permitidos';
    }
    if(!userData.password.match(/\d/)){
        errors.password = 'La contraseña debe contener al menos un numero';
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña tiene que tener una longitud entre 6 y 10 caracteres';
    }
    return errors;
}