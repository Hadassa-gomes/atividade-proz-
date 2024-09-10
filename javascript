
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.querySelector('a');
const listaOrdenada = document.getElementById('lista-ordenada');


titulo.innerText = 'Conexão com um arquivo JavaScript';
link.innerText = 'Proz Educação';


listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;


listaOrdenada.innerHTML = `
    <li><a href="https://example.com">Link 1</a></li>
    <li><a href="https://example.org">Link 2</a></li>
    <li><a href="https://example.net">Link 3</a></li>
`;

