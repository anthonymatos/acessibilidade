/* CONFIGURAÇÕES INICIAIS DO APLICATIVO */

// Consigurações da conexão com o Google Firebase
var firebaseConfig = {
    apiKey: "AIzaSyABs5qS6VMsadw-m1lh3NRrQOiEU-te0bk",
    authDomain: "app-teste-botafogo-38f46.firebaseapp.com",
    databaseURL: "https://app-teste-botafogo-38f46.firebaseio.com",
    projectId: "app-teste-botafogo-38f46",
    storageBucket: "app-teste-botafogo-38f46.appspot.com",
    messagingSenderId: "917077571124",
    appId: "1:917077571124:web:296d571fb0a37876ebfc61"
}

// Nome da 'key' que armasena as configurações locais
var localStorageKeyName = 'config';

// Configuração inicial do App
var initialConfig = {
    tema : 'light' // Tema inicial (light | dark)
}