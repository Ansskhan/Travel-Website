let cardContainer = document.getElementById('small-cards');
let upperContainer = document.getElementById('big-cards');
fetch('data.json')
.then(response => {
   return response.json();
})
.then(data => {
    data.cards.forEach(indexNo => {
        cardContainer.innerHTML += `
        <div class="card" data-aos="zoom-in" data-aos-delay="${indexNo.delay}">
          <img src="${indexNo.img}" alt="...">
          <div class="card-body m-0 p-0">
            <!-- <h5 class="card-title">Card title</h5> -->
            <p class="card-text">${indexNo.text}</p>
        </div>
        `
         });
        data.bigcards.forEach(indexNo => {
        upperContainer.innerHTML += 
        `
<a href="${indexNo.link}" class="card d-flex card-tags" data-aos="flip-up" data-aos-delay="${indexNo.delay}">
    
    <img src="${indexNo.img}" class="card-img-top" alt="${indexNo.title}">
    
    <div class="place-title">
        <h2 class="half">${indexNo.title}</h2>
    </div>
</a>

    <!-- Optional card body content (currently not used) -->
    <!--
    <div class="card-body d-flex flex-column align-items-center">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">


        `
        });
          document.querySelectorAll('.Gallery .card').forEach(card => applyHoverAnimation(card));
})
.catch(error =>{
    console.log("Error has been occured extracting data from json " + error)
})
console.log(cardContainer);
console.log(upperContainer);