let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

let last = contacts.length - 1;
let op = prompt("¿Que desea hacer: \nElija una opcion.\n1. Mostrar el 1er contacto. \n2. Mostrar el ultimo contacto. \n3. Añadir un nuevo contacto.")

switch (op) {
    case "1": 
        alert(`El primer contacto es: \n${contacts[0].name} \n${contacts[0].phone} \n${contacts[0].email}`);
        break;
    case "2": 
        alert(`El ultimo contacto es: \n${contacts[last].name} \n${contacts[last].phone} \n${contacts[last].email}`);
        break;
    case "3": {
        let a = prompt("Ingresa el nombre: ");
        let b = prompt("Ingresa el telefono: ");
        let c = prompt("Ingresa el email: ");

        if (a !== "" && b !== "" && c !== "" ) {
            contacts.push({name:a, phone:b, email:c});
            alert(`Usted ingreso el usuario: \nNombre: ${a} \nCon telefono: ${b} \nEmail: ${c}`);
        } else {
            alert("No ha ingresado bien los 3 campos. El usuario no se puede añadir.");
        }
    }
    break;     
}

