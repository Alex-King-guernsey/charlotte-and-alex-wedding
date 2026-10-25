fetch("data/content.json")
.then(response => response.json())
.then(data => {

document.getElementById("app").innerHTML = `
<h1>${data.couple}</h1>

<p>
${data.venue.name}
</p>

<p>
Website successfully connected to content.json
</p>
`;

});
