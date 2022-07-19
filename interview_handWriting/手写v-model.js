/*
主要通过 Object.defineProperty(object, prop, describtion)
*/

<HTML>
    <div>
        <input id="username"></input>
        显示内容<p id="uName"></p>
    </div>

</HTML>

let obj = {};

Object.defineProperty(obj, 'username', {
    get: function(){},
    set: function(val){
        document.getElementById('uName').innerHTML = val;
    }
})

document.getElementById('username').addEventListener('keyup', function(){
    obj.username = event.target.value;
})