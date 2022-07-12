import interact from 'interactjs';

// const draggable = (() => {
//   const position = { x: 0, y: 0 };

//   interact('.draggable').draggable({
//     listeners: {
//       start(event) {
//         console.log(event.type, event.target);
//       },
//       move(event) {
//         position.x += event.dx;
//         position.y += event.dy;
//         event.target.style.transform = `translate(${position.x}px, ${position.y}px)`;
//       },
//       end(event) {
//         position.x = 0;
//         position.y = 0;
//         event.target.style.transform = 'translate(0px, 0px)';
//       },
//     },
//   });
// })();

// const dropzone = (() => {
//   interact('.dropzone')
//     .dropzone({
//       accept: '.draggable',
//       overlap: 'center',
//     }).on('dropactivate', handleDrop);
//   function handleDrop(e) {
//     console.log(e);
//   }
// })();
