const elementos = document.querySelectorAll('h2'); 
const topicos = new Array();
elementos.forEach(elemento => {
	topicos.push(elemento.textContent);
	const link = document.createElement('a'); 
	link.setAttribute('name', elemento.textContent);
	elemento.append(link);
	const volta = document.createElement('a');
	volta.setAttribute('href','#'); 
	volta.textContent ='  -' + 'Voltar'; 
	elemento.append(volta); 
});
lista = document.querySelector('ol'); 
topicos.forEach(topico => { 
	const item = document.createElement('li');
	item.textContent = topico;
	lista.append(item); 
	const link = document.createElement('a'); 
	link.setAttribute('href', `#${topico}`);   
	link.textContent = ' - ' + topico; 
	item.append(link);
});
