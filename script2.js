   
let images = JSON.parse(localStorage.getItem("images")) || [];  

document.getElementById("fileInput").addEventListener("change", function(event) {
    let file = event.target.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(e) {
            images.push(e.target.result);  
            localStorage.setItem("images", JSON.stringify(images));  
            displayImages();
        };
        reader.readAsDataURL(file);
    }
});

function deleteImage() {
    if (images.length > 0) {
        images.pop();  
        localStorage.setItem("images", JSON.stringify(images));  
        displayImages();
    } else {
        alert("No images to delete!");
    }
}

function displayImages() {
    let container = document.getElementById("imageContainer");
    container.innerHTML = "";  
    images.forEach((src, index) => {
        let a = document.createElement("a");
        a.href = src;
        // a.style.position = "fixed";
        
        a.href = "#top";
        let img = document.createElement("img");
        img.src = src;
        img.style.cursor = "pointer";  
        img.setAttribute("class","itset");
        img.onclick = function () {
                openPopup(src);  
            };
        a.appendChild(img);
        container.appendChild(a);
    });
}

function openPopup(imageSrc) {
    
        let popup = document.getElementById("popup");
        let popupImage = document.getElementById("popupImage");
        popup.style.display = "flex"; 
        document.body.style.overflow = "hidden";

//         window.addEventListener("scroll", function () {
//     window.scrollTo(0, document.getElementById("popup").offsetTop);
// });

        // popup.style.marginTop = "1080px";

        popupImage.src = imageSrc;
     
        // let  body = document.getElementsById("body");
        popupImage.onclick = function () {
            downloadImage(imageSrc); 
          
            
        };

    }
  
    function closePopup() {
        document.body.style.overflow = "auto";
   
        document.getElementById("popup").style.display = "none";
    }

    function downloadImage(imageSrc) {
        let link = document.createElement("a");
        link.href = imageSrc;
        link.download = "downloaded_image.png"; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    
    document.getElementById("button").addEventListener("click", function (event) {
        if (event.target === this)
         closePopup();
    });

 
displayImages();
