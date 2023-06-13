Chame a função ```setConsoleTable``` para alimentar o método console.table

* Passe um array de objetos como primeiro parâmetro
* O segundo parâmetro indica se deseja exibir os objetos filhos.

```js
setConsoleTable()
const obj = [ 
  { nome: 'Joao', cidade: 'Belo Horizonte', idade: 27 },  
  { nome: 'Maria', cidade: [{"ola":"mundo!","oi":"ok"}], idade: 35 },     
  { nome: 'Carlos', cidade: 'Belo Horizonte', idade: 2 } 
]

console.table(obj, true)




/*
+--------+------------------------------+-------+
| nome   | cidade                       | idade |
+--------+------------------------------+-------+
| Joao   | Belo Horizonte               | 27    |
| Maria  | [{"ola":"mundo!","oi":"ok"}] | 35    |
| Carlos | Belo Horizonte               | 2     |
+--------+------------------------------+-------+
*/

```
