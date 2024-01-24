class books {
  Price() {
    console.log("O livro custa....");
  }
}

class terror extends books {
  Price() {
    console.log("O livro de terror custa....");
  }
}

class romance extends books {
  Price() {
    console.log("O livro de romance custa....");
  }
}

class suspense extends books {
  Price() {
    console.log("O livro de suspense custa....");
  }
}

const ladyKillers = new terror();
const diarioDeUmaPaixao = new romance();
const assassinatoNoRioNilo = new suspense();

ladyKillers.Price();
diarioDeUmaPaixao.Price();
assassinatoNoRioNilo.Price();
