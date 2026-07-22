# 🔐 Configurar o login real da Área do Cabeleireiro

Isso ativa o cadastro e login de verdade dos seus parceiros (Instituto/Cabeleireiros), com
aprovação manual feita por você. É gratuito (plano Spark do Firebase) e leva uns 15 minutos,
uma vez só.

---

## Etapa 1 — Criar o projeto no Firebase

1. Entre em **console.firebase.google.com** com sua conta Google.
2. **Adicionar projeto** → nome sugerido: `angels-beauty` → pode desativar o Google Analytics (não é necessário) → **Criar projeto**.

## Etapa 2 — Ativar o login por e-mail e senha

1. No menu esquerdo: **Build → Authentication → Get started**.
2. Na aba **Sign-in method**, clique em **E-mail/senha** → ative o primeiro botão → **Salvar**.

## Etapa 3 — Criar o banco de dados (Firestore)

1. Menu esquerdo: **Build → Firestore Database → Criar banco de dados**.
2. Escolha **modo de produção** → selecione a localização mais próxima (ex: `southamerica-east1`) → **Ativar**.
3. Vá na aba **Regras** (Rules) do Firestore, apague o conteúdo e cole exatamente isto:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /parceiros/{uid} {
         allow read: if request.auth != null &&
           (request.auth.uid == uid || request.auth.token.email == 'contato.araujolana@gmail.com');
         allow create: if request.auth != null && request.auth.uid == uid;
         allow update: if request.auth != null && request.auth.token.email == 'contato.araujolana@gmail.com';
         allow delete: if false;
       }
     }
   }
   ```

   Isso garante que cada cabeleireira só vê o próprio cadastro, e só a sua conta
   (`contato.araujolana@gmail.com`) pode ver todos os cadastros e aprovar/recusar.
   Se quiser usar outro e-mail como administradora, troque nas duas linhas acima
   **e também** no arquivo `js/firebase-config.js` (`AB_ADMIN_EMAILS`).
4. Clique em **Publicar**.

## Etapa 4 — Pegar as chaves do site

1. Clique na engrenagem (canto superior esquerdo) → **Configurações do projeto**.
2. Desça até **Seus apps** → clique no ícone **`</>`** (Web) → dê um nome (ex: `angels-beauty-site`) → **Registrar app**.
3. Copie o bloco `const firebaseConfig = { ... }` que aparece.
4. Abra o arquivo **`js/firebase-config.js`** do site e substitua os valores de exemplo
   (`"COLE_AQUI"`) pelos valores reais que você copiou — `apiKey`, `authDomain`, `projectId`,
   `storageBucket`, `messagingSenderId`, `appId`.
5. Salve o arquivo e publique o site de novo na Netlify (arrastar a pasta de novo).

## Pronto! Como usar

- **Cabeleireiras** se cadastram em `parceiros.html` (menu "Cabeleireiros"). O cadastro fica
  com status **pendente**.
- **Você** aprova ou recusa em `admin-parceiros.html` (não aparece no menu — acesse direto pela
  URL, ex: `angelsbeauty.netlify.app/admin-parceiros.html`), fazendo login com o e-mail
  administrador definido na Etapa 3.
- Assim que você aprovar, a próxima vez que a cabeleireira abrir `parceiros.html` e entrar,
  ela já vê a tela de parceira aprovada com o botão para falar no WhatsApp e pegar a tabela de kits.

## Perguntas frequentes

**Preciso pagar alguma coisa?**
Não. Login por e-mail/senha e o Firestore no volume desse cadastro ficam dentro do plano
gratuito do Firebase (Spark).

**Posso ter mais de uma administradora?**
Sim — adicione todos os e-mails na lista `AB_ADMIN_EMAILS` em `js/firebase-config.js` **e**
repita o e-mail nas duas linhas da regra do Firestore (Etapa 3), separando com `||` se forem vários, ex:
`request.auth.token.email == 'email1@x.com' || request.auth.token.email == 'email2@x.com'`.

**E se eu esquecer de configurar isso?**
A página `parceiros.html` continua no ar normalmente e mostra um aviso amigável pedindo para
falar pelo WhatsApp, sem quebrar o site.
