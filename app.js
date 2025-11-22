document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector("#search");

    button.addEventListener("click", async (e)=>{
        e.preventDefault();

        let output = await getData();
        alert(output);

    });
});

async function getData(){
    let response = await fetch("http://localhost/info2180-lab4/superheroes.php");
    let textData = await response.text();
    return textData;
}