const loadmyImg = document.getElementById('loader-img')
loadmyImg.addEventListener("click", myFunction);
function myFunction() {
  

const imgs = function () {

    fetch(
      'https://api.pexels.com/v1/curated?page=2&per_page=40',
      {
        headers: {
          Authorization: "PlLlSM9SD6tRWDcL5GqWUKoSsPRkrzrgV5qQiM4vWIc5sMOoMTANtAlx"
        }
      })
      .then((response) => {
        console.log('response', response)
        if (response.ok) {
          return response.json()
        } else {
          if (response.status === 404) {
            throw new Error('404 - Pagina non trovata')
          } else if (response.status === 500) {
            throw new Error('500 - Internal server error')
          } else {
            throw new Error('Errore generico')
          }
        }
      })
      .catch((err) => {
            console.log('errore!', err)
        })
    

        .then((immagini) => {
        //console.log(immagini)
        const row = document.getElementById('imgCard')
        immagini.photos.forEach((imgs) => {
        //console.log(imgs)
        const newCol = document.createElement('div')
        newCol.classList.add('col','col-md-4') 
        newCol.innerHTML = `
        <div class="card" style="width: 20rem; height:38rem">
        <img src="${imgs.src.original}" class="card-img-top" alt="..." style ="object-fit: 'cover'; width: 20rem; height: 30rem;">
        <div class="card-body text-center">
        <h5 class="card-title">${imgs.photographer}</h5>
        <a href="#" class="btn btn-primary" id="hidingButton">Hide</a>
        </div>
        </div>
          `
        row.appendChild(newCol)
        
        const deleteButton = document.getElementById('hidingButton')
        deleteButton.addEventListener("click", deleteFunction)
        function deleteFunction() {
        const deletedcard =  deleteButton.closest(".card")
        deletedcard.classList.add('null-class')
        
        }
        

        }
        )
    }
        )
    }
    
    

    imgs()

}

