//Vamos começar importando os arquivos das subclasses e da classe mãe.//

import { component } from "./component.js";
import { form } from "./form.js";
import { input } from "./input.js";
import { label } from "./label.js";

//Agora vamos criar uma instancia da classe mãe para colocar os valores dos elementos que vamos criar.
const title = new component("h1", "body", { textContent: "Olá mundo!" }); //Aqui vamos criar uma instancia da classe component, dizendo que queremos criar uma tag h1, dentro do parent body, isso quer dizer que vai ser criado um h1 dentro de body no elemento html. Vamos dizer também que o título que vamos colocar no h1  é o "Olá mundo!", que colocamos no textContent setado lá na subclasse label.

//Vamos agora chamar essa instancia no navegador//
console.log(title);

title.render(); //Vamos fazer com que o resultado dessa instancia apareça na tela do usuário, renderizando esse elemento, o title.//

//Caso queiramos modificar a tag que vamos construir no html,temos que fazer o seguinte: vamos setar novamente a tag (title.tag = "h3") e depois vamos chamar o metodo build que colocamos na classe mãe (title.build) e depois vamos renderizar novamente a tag (title.build().render())

title.tag = "h3";
title.build().render();

//Feito isso, vamos agora criar as instancias das outras subclasses. //
const form = new form("body"); // Vamos criar uma instancia da subclasse form, tendo como parent o elemento body do html.

const label = new label("Nome:", form, { htmlFor: "nameInput" }); //Vamos criar uma instancia label da subclasse label, tendo como texto o "Nome:", tendo como parent, o form, elemento do html que é aonde o label vai ficar dentro e por fim, vamos criar um ID htmlFor com o valor "nameInput".
const input = new input(form, { id: "nameInput", name: "name" }); // Vamos criar uma instancia input da subclasse input, tendo como parent form, ou seja o input vai ficar dentro de form, com o id com o valor de "nameInput" e o nome do input como "name".

//Feito isso, vamos redenrizar as instancias criadas//
form.render();
label.render();
//Agora vamos usar o metodo addChildren para acrescentar o input dentro do form//
form.addChildren(input);

//Podemos também inserir todas as instancias dentro do form usando o metodo addChildren//
form.addChildren(
  new component("br"),
  new component("br"),
  new label("Data de nascimento:", form, { htmlFor: "birthdayInput" })
  new input(form, {id: "birthdayInput", name:"birthday", type: "date"})
);
