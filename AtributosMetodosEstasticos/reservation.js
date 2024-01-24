class Reservation {
  //Vamos criar uma classe
  constructor(Hospedes, Quartos, Dias) {
    //Com construtores e seus parametros//
    this.Hospedes = Hospedes; //Aqui vamos fazer a referencia do parametro com o próprio parametro//
    this.Quartos = Quartos;
    this.Dias = Dias;
    this.total = Dias * Reservation.diaria;
  }

  static diaria = 200; //Vamos usar o atributo e metodo estático "static" para definir o valor da diária da reserva//

  static MostrarDiaria() {
    //Aqui vamos criar um metodo para mostrar a diaria da reserva
    console.log(`A Diária é $${Reservation.diaria}`);
  }
}

Reservation.MostrarDiaria(); //Aqui vamos chamar o metodo que fizemos com o static//

//Aqui vamos fazer a instancia da classe com os valores que desejamos//
const reservatioOne = new Reservation(10, 102, 10);
console.log(reservatioOne);

Reservation.diaria = 500;
const reservatioTwo = new Reservation(2, 90, 30);
console.log(reservatioTwo);

//Para usarmos os atributos e métodos estáticos basta declará-los diretamente na classe precedidos pela palavra reservada static. E para utilizá-los só precisamos acessar a partir da própria classe ao invés de a partir de uma instância//

//Obs: Não precisamos usar a instancia com o static, mas precisamos usa a instancia para obter o resultado no terminal//

//PODEMOS USAR O ATRIBUTO E METODOS ESTÁTICO COM O GET E SET//

class Reservation {
  constructor(Hospedes, Quartos, Dias) {
    this.Hospedes = Hospedes;
    this.Quartos = Quartos;
    this.Dias = Dias;
    this.total = Dias * Reservation.diaria;
  }
  static diaria = 300;
  static MostrarDiaria() {
    console.log(`A diária da reserva é $${Reservation.diaria}`);
  }

  static get diariaPremium() {
    return Reservation.diaria * 1.5;
  }
}
Reservation.MostrarDiaria();
console.log(`A Diária Premium é $${Reservation.diariaPremium}`);

const r1 = new Reservation(80, 304, 30);
console.log(r1);
