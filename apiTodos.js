// Éléments du DOM
const postSection = document.querySelector(".todo");

// Requête GET
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json()) // Transformation de la réponse reçu au format JSON
    .then(posts => {    // Extraction de l'ensemble des post du JSON

        // Pour chaque post extrait, créer une arboresence à ajouter au DOM
        posts.forEach(post => {

            // Contenu de chaque post
            let title = document.createTextNode("Task Name : " + post.title);
            let content = document.createTextNode("Task status : " + post.completed);
            let id = document.createTextNode("Task ID : " + post.id);

            // Création des élments HTML du post à ajouter au DOM
            let postDiv = document.createElement("div");
            postDiv.classList.add("post");
            if (post.completed == true) {
                postDiv.classList.add("taskdone");
            }
            else {
                postDiv.classList.add("tasktodo");
            }
            let idParagraph = document.createElement("p");
            let titleParagraph = document.createElement("p");
            let contentParagraph = document.createElement("p");
            contentParagraph.classList.add("content");

            // Ajout du post au DOM
            titleParagraph.appendChild(title);
            contentParagraph.appendChild(content);
            idParagraph.appendChild(id);

            postDiv.appendChild(idParagraph)
            postDiv.appendChild(titleParagraph);
            postDiv.appendChild(contentParagraph);
            postSection.appendChild(postDiv);

            const displayall = document.getElementById("displayall");
            const displaydone = document.getElementById("displaydone");
            const displaytodo = document.getElementById("displaytodo");


            displaydone.addEventListener("click", event => {
                if (post.completed == false) {
                    postDiv.style.display = "none";
                }
                else {
                    postDiv.style.display = "block";
                }
            })
            displaytodo.addEventListener("click", event => {
                if (post.completed == true) {
                    postDiv.style.display = "none";
                }
                else {
                    postDiv.style.display = "block";
                }
            })
            displayall.addEventListener("click", event => {
                postDiv.style.display = "block";
            })
            
            const input = document.getElementById("myInput")
            

            


            



        });
    });


           
