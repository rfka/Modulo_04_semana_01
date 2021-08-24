const http = new XMLHttpRequest(); //Objeto que fornece alguns métodos para fazer a comunicação entre a nossa aplicação e a API.

http.open("GET","http://localhost:3000/profile") //Abre a comunicação entre a minha aplicação e a API. Possui dois argumentos: 1 - Método, 2 - Endereço para onde vai a requisição.

http.send(); //Envia a requisição

//onload
http.onload = () => {
    const data = http.response; //res

    console.log(data);
}