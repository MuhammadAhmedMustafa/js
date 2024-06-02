// const list = document.getElementById('list');
// const form = document.forms.addTask;
// form.addEventListener('submit',addTask);
// function addTask(e){
//     e.preventDefault();
//     const task= document.createElement('li');
//     task.textContent = form.newTask.value;
//     list.appendChild(task);
//     }
// document.addEventListener('keydown',e => document.body.innerHTML = `<div>e.code:${e.code}</div><div>e.key: ${e.key}</div>`);
// const input = document.getElementById('input');
// const output = document.getElementById('output');
// input.addEventListener('keyup', e => output.textContent = input.value);
// document.addEventListener('mousemove',showCoords);
// function showCoords(event){
//     document.body.textContent = `(${event.x},${event.y})`;
//     }
// const bomb = document.createElement('div');
// bomb.textContent = '😝 ';
// bomb.style.position = 'absolute';
// bomb.style.top = Math.floor(200*Math.random()) + 'px';
// bomb.style.left = Math.floor(200*Math.random())+'px';
// bomb.style.fontSize = '64px';
// document.body.appendChild(bomb);
// bomb.addEventListener('click', e => {
//     document.body.style.background = 'red';
//     document.body.innerHTML = '<h1>BOOOOOOM!!!</h1>';
//     });
//     <form name='addTask'>
//     <input type='text' name='newTask'>
//     <button type='submit'>ADD</button>
//     </form>
//     <ul id='list'></ul> */
// const star = document.querySelector('#star');
// star.addEventListener( 'mousedown', start);
// star.addEventListener( 'mouseup', stop );
// function start(e) {
//     document.addEventListener( 'mousemove', move);
//     }
// function move(e){
//         star.style.left = `${e.x}px`;
//         star.style.top = `${e.y}px`;
//         }    
//         document.addEventListener( 'mousemove', move);

//         function stop(){
//             document.removeEventListener( 'mousemove', move );
//             }
// 