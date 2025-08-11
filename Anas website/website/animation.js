// function applyHoverAnimation(card) {
//     const img = card.querySelector('img');
//     card.addEventListener('mouseover', () => {
//         img.style.animation = "img-scale-up 5s forwards";
//     });
//     card.addEventListener('mouseout', (e) => {
//         // e.relatedTarget is the element the mouse is moving to
//         // We only reverse animation if the new element is NOT still inside the card
//         if (!card.contains(e.relatedTarget)) {
//             img.style.animation = "img-scale-down 0.4s forwards";
//         }
//     });
//     console.log(img)
// }

// Note this is a complex file you created to animate even thought you can do this by simple transition in css that's why you should sometimes think before creating something so that you don't have to face any complex and time wasting issue but by doing this you know how to animate with js

