const reload = document.getElementById("reload");
const generate = document.getElementById("generate");
const url = document.getElementById("url");
const short_url = document.getElementById("short_url");
const icon = document.querySelector(".icon");

reload.addEventListener("click",reloadFunction);
generate.addEventListener("click",generateUrl);
icon.addEventListener("click",copyText);

function reloadFunction()
{
    location.reload();
}

async function generateUrl()
{
    const api = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(url.value);
    // console.log(url.value);

    try
    {
        const response = (await fetch(api)).text().then((data)=>
            {
                short_url.value = data;
                icon.className = "active"
            }
        ).catch((e)=>{

        });
        console.log(response)
    }
    catch(e)
    {
        
    }
}

async function copyText()
{
    await navigator.clipboard.writeText(short_url.value);
    alert("Url Copied")
}