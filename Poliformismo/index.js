class Vehicle {
  //classe mãe chamada veiculo //
  move() {
    //Aqui vamos criar um metodo para a classe mãe//
    console.log("O veículo está se movendo...");
  }
}

class Car extends Vehicle {
  // aqui vamos criar uma subclasse que se extend, que herda informações da classe mãe//
  move() {
    //herdar inclusive o metodo,só que nesse caso vamos subescrever o metodo, vamos reescrever o metodo de uma outra forma//
    console.log("O carro está se movendo..."); //Ao invés do console apresentar "o veiculo está se movendo", ele vai apresentar "o carro está se movendo".//
  }
}

class Ship extends Vehicle {
  // aqui vamos criar uma subclasse que se extend, que herda informações da classe mãe//
  move() {
    //herdar inclusive o metodo,só que nesse caso vamos subescrever o metodo, vamos reescrever o metodo de uma outra forma//
    console.log("O navio está navegando..."); //Ao invés do console apresentar "o veiculo está se movendo", ele vai apresentar "o navio está navegando".//
  }
}

class Aircraft extends Vehicle {
  // aqui vamos criar uma subclasse que se extend, que herda informações da classe mãe//
  move(speed) {
    //herdar inclusive o metodo,só que nesse caso vamos sobrescrever o metodo, vamos reescrever o metodo de uma outra forma//
    console.log(`A aeronave está voando a ${speed} Km/h.`); //Ao invés do console apresentar "o veiculo está se movendo", ele vai apresentar "a aeronave está voando...".//
  }
}

const BMW = new Car(); //Aqui vamos criar a intancia BMW da subclasse Car//
const BlackForce = new Ship(); //Aqui vamos criar a instancia BlackForce da subclasse Ship//
const AirFrance = new Aircraft(); //Aqui vamos criar a instancia AirFrance da subclasse Aircraft//

//Outra maneira é usar de forma genérica objetos que obedecem a mesma interface//
function start(Vehicle) {
  console.log("Iniciando um veículo...");
  Vehicle.move();
}

start(BMW);
start(BlackForce);
start(AirFrance);
