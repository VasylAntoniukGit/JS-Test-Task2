/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var container_div = document.createElement('div');
var content_div = document.createElement('div');
var span = document.createElement('span');
var p = document.createElement('p'); 

function modal()
{
   
    p.innerHTML = 'MODAL WINDOW!';
    span.innerHTML = '&times';
    container_div.className = 'container';
    content_div.className = 'content';
    span.className = 'close';
    content_div.appendChild(span);
    content_div.appendChild(p);
    container_div.appendChild(content_div);
    document.body.appendChild(container_div);
     
}

span.onclick = function(){
    
    document.body.removeChild(container_div);
    
};

