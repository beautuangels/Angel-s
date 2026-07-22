/* ═══════════════════════════════════════════
   ANGEL'S BEAUTY — Configuração do Firebase
   Área do Cabeleireiro (login real) + Painel Admin
   ═══════════════════════════════════════════
   COMO CONFIGURAR (uma única vez):
   1. Crie um projeto gratuito em https://console.firebase.google.com
   2. Build > Authentication > Sign-in method > ative "E-mail/senha"
   3. Build > Firestore Database > Criar banco de dados (modo produção)
   4. Configurações do projeto (ícone de engrenagem) > Seus apps > </> (Web)
      > registre o app > copie o objeto "firebaseConfig" e cole abaixo,
      substituindo os valores de exemplo.
   5. Em Firestore > Regras, cole as regras do arquivo GUIA-FIREBASE-PARCEIROS.md
      (na raiz do projeto) e publique.
   Sem esses passos, esta página funciona normalmente mas mostra um aviso
   e não permite cadastro/login real — é só um placeholder até você configurar. */
window.AB_FIREBASE_CONFIG = {
  apiKey: "COLE_AQUI",
  authDomain: "COLE_AQUI.firebaseapp.com",
  projectId: "COLE_AQUI",
  storageBucket: "COLE_AQUI.appspot.com",
  messagingSenderId: "COLE_AQUI",
  appId: "COLE_AQUI"
};

/* e-mail(s) com acesso ao painel de aprovação (admin-parceiros.html) */
window.AB_ADMIN_EMAILS = ["contato.araujolana@gmail.com"];

window.AB_FIREBASE_READY = window.AB_FIREBASE_CONFIG.apiKey !== "COLE_AQUI";
