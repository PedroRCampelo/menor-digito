# Menor-digito

Função que retorna o menor número da string digitada pelo user.

No script.js citei duas formas de se obter o objetivo.


## Forma 1

O For irá varrer toda a array 'valor' e para cada número digitado irá realizar uma análise.

- Se o valor for menor que o anterior ele irá armazenar dentro da variável 'aux'
- Sempre que novo valor for menor que o que está no 'aux' ele irá substitui-lo, gerando uma ordenação.

## Forma 2

Através do .sort podemos ordenar arrays, neste caso utilizei o split para separar os valores digitados pelo user.

Após isso joguei no .sort e peguei o primeiro valor (menor dígito da array).