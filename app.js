document.addEventListener("DOMContentLoaded", function(){
    const button = document.querySelector("#search");
    const textInput = document.querySelector("#textInput");
    const result = document.querySelector("#result");

    button.addEventListener("click", async (e)=>{
        e.preventDefault();

        //let output = await getData();
        //alert(output);

        let val = textInput.value.trim();
        let sanitizedVal = encodeURIComponent(val);
        let url = `superheroes.php?query=${sanitizedVal}`;

        let response = await fetch(url);
        let data = await response.text();
        //console.log(data);
        result.innerHTML = data;

    });
});

async function getData(){
    let response = await fetch("http://localhost/info2180-lab4/superheroes.php");
    let textData = await response.text();
    return textData;
}