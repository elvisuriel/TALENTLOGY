   class Agenda {
      constructor(nombre, telefono, email) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._email = email;
      }

      get nombre() {
        return this._nombre;
      }
      set nombre(nombre) {
        this._nombre = nombre;
      }

      get telefono() {
        return this._telefono;
      }
      set telefono(telefono) {
        this._telefono = telefono;
      }

      get email() {
        return this._email;
      }
      set email(email) {
        this._email = email;
      }

      toString() {
        return `Nombre :${this._nombre}\n - Telefono: ${this._telefono}\n - Email: ${this._email} \n`;
      }
    }

    class Contacto {
      constructor() {
        this.array = new Array();
      }

      anadir(agenda) {
        const agendas = new Agenda(agenda);

        this.array.push(agenda);
      }

      listado() {
        return this.array;
      }

      buscar(telefono) {
        let results = this.array.filter((obj) => obj.telefono == telefono);

        let agenda = results[0];

        console.log("nombre buscado: " + agenda._nombre);
        console.log("telefono buscado : " + agenda._telefono);
        console.log("email buscado : " + agenda._email);

        return agenda;
      }

      editar(nombre, telefono, email, deseo) {
        this.array.map(function (obj) {
          if (obj.nombre == deseo) {
            obj.nombre = nombre;
            obj.telefono = telefono;
            obj.emial = email;
          }
        });

        return this.array;
      }
    }
    const contacto = new Contacto();
    let option;
    let nombre;
    let telefono;
    let email;
    let busca;
    do {
      option = prompt(
        `selecione la opcion \n -1.Añadir contacto :\n - 2.Lista de contacto \n - 3.Bucar contacto \n - 4.editar contacto \n  -5.Cerrar contacto `
      );

      switch (+option) {
        case 1:
          nombre = prompt(" nombre");
          telefono = prompt(" telefono");
          email = prompt(" email");

          const agenda = new Agenda(nombre, telefono, email);

          contacto.anadir(agenda);

          break;
        case 2:
          alert(contacto.listado());
          console.log(contacto.listado());
          break;

        case 3:
          busca = prompt(
            "Digite el numero de telefono de la persona que desea buscar "
          );

          document.write("persona encontrada " + contacto.buscar(busca));

          break;

        case 4:
          busca = prompt("nombre d ela persona la cual desea editar");
          nombre = prompt("nombre editado");
          telefono = prompt("telefono editado");
          email = prompt(" email editado ");

          contacto.editar(nombre, telefono, email, busca);

          break;
      }
    } while (option != 5);

    console.log(contacto.listado());
  
