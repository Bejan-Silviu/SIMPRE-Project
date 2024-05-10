<h1>SIMPRE-Project</h1>
<p>Proiect Cloud Computing Bejan-Gherasim Silviu</p>
<h2>1. Introducere</h2>

<p>Această aplicație web MERN (MongoDB, Express.js, React.js, Node.js) este creată pentru a gestiona notițe personale. Utilizatorii pot să-și creeze un cont, să se autentifice și să-și gestioneze notițele. Backend-ul este construit folosind Node.js și Express.js, iar datele sunt stocate într-o bază de date MongoDB. Frontend-ul este creat folosind React.js.</p>

<h2>2. Descriere problemă</h2>

<p>Aplicația vine în întâmpinarea utilizatorilor care doresc să-și organizeze notițele într-un mod eficient și să le acceseze de oriunde. Problema abordată este cea a gestionării și accesării notițelor personale într-un mod simplu și intuitiv.</p>

<h2>3. Descriere API</h2>

<p>Rute disponibile:</p>
<ul>
    <li>/user: Rutele pentru gestionarea utilizatorilor (autentificare, înregistrare etc.)</li>
    <li>/api/notes: Rutele pentru gestionarea notițelor (creare, citire, actualizare, ștergere)</li>
</ul>

<h2>4. Flux de date</h2>

<p>Exemple de request / response:</p>

<p>POST https://my-simpre-project.vercel.app/user/register</p>

<p>Body:</p>
<pre>
{
    "username": "example",
    "email": "example@example.com",
    "password": "password123"
}
</pre>

<p>Response:</p>
<pre>
Status: 200 OK
Body:
{
    "msg": "Sign up successful"
}
</pre>

<p>POST https://my-simpre-project.vercel.app/user/login</p>

<p>Body:</p>
<pre>
{
    "email": "example@example.com",
    "password": "password123"
}
</pre>

<p>Response:</p>
<pre>
Status: 200 OK
Body:
{
    "token": "&lt;jwt_token&gt;"
}
</pre>

<p>Metode HTTP:</p>
<ul>
    <li>POST: Pentru a crea resurse noi (utilizatori, notițe)</li>
    <li>GET: Pentru a obține resurse existente</li>
    <li>PUT: Pentru a actualiza resurse existente</li>
    <li>DELETE: Pentru a șterge resurse existente</li>
</ul>


<h2>5. Capturi de ecran</h2>
<img src="https://raw.githubusercontent.com/Bejan-Silviu/SIMPRE-Project/main/images/1.png" alt="Image 1">
<img src="https://raw.githubusercontent.com/Bejan-Silviu/SIMPRE-Project/main/images/2.png" alt="Image 2">
<img src="https://raw.githubusercontent.com/Bejan-Silviu/SIMPRE-Project/main/images/3.png" alt="Image 3">
<img src="https://raw.githubusercontent.com/Bejan-Silviu/SIMPRE-Project/main/images/4.png" alt="Image 4">
<img src="https://raw.githubusercontent.com/Bejan-Silviu/SIMPRE-Project/main/images/5.png" alt="Image 5">


<p>Demonstrare aplicație:</p>
https://youtu.be/g8dKAXWRlwY

<p>Link Github:</p>
https://github.com/Bejan-Silviu/SIMPRE-Project

<p>Link aplicație</p>
https://simpre-project-frontend.vercel.app/

</html>
