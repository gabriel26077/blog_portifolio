const newPosForm = document.getElementById("newPost");
const postsContainer = document.getElementById("posts");

console.log(newPosForm);

function addPost(event) {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const post = document.createElement("div");
    post.className = "post-object";
    post.innerHTML = `<h1>${title}</h1><p style="display: block">${content}</p><input type="checkbox"> Esconder Conteúdo`;

    postsContainer.appendChild(post);

    // Limpa o formulário após a adição da postagem

    postsContainer.addEventListener("change", function (event) {
        if (event.target.type === "checkbox") {
            const content = event.target.previousElementSibling;
            content.style.display = event.target.checked ? "none" : "block";
        }
    });

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

}