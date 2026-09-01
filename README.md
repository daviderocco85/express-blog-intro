 
# Express Blog Intro

Il progetto consiste nella realizzazione di un’applicazione backend **Node.js/Express** che funge da base per un blog personale. L’obiettivo è costruire un’architettura incrementale, estendibile e modulare, che possa essere arricchita progressivamente con nuove funzionalità man mano che si acquisiscono competenze aggiuntive.

# Obiettivi

- Creare il progetto base con una rotta base `/` che ritorni un testo semplice con scritto ”Server del mio blog”.
- Creare un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags che sarà un array di stringhe.
- Creare una rotta `/bacheca` che restituisca un oggetto json con la lista dei post.
- Configurare gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
- Testare su Postman.

# Screenshot Test Postman

## Test rotta base

![Test rotta /](./postman/images_test/postman-root.png)

## Test rotta bacheca

![Test rotta /bacheca](./postman/images_test/postman-bacheca_1.png)

![Test rotta /bacheca](./postman/images_test/postman-bacheca_2.png)

![Test rotta /bacheca](./postman/images_test/postman-bacheca_3.png)

## Test asset statici

![Test rotta /images](./postman/images_test/postman-images.png)