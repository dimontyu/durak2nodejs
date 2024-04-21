(function () {
  const messages = document.querySelector('#messages');
  const wsButton = document.querySelector('#wsButton');
  const wsSendButton = document.querySelector('#wsSendButton');
  const logout = document.querySelector('#logout');
  const login = document.querySelector('#login');

  function showMessage(message) {
    messages.textContent += `\n${message}`;
    messages.scrollTop = messages.scrollHeight;
  }

  function handleResponse(response) {
    return response.ok
      ? response.json().then((data) => JSON.stringify(data, null, 2))
      : Promise.reject(new Error('Unexpected response'));
  }

  login.onclick = function () {
    fetch('/login', { method: 'POST', credentials: 'same-origin' })
      .then(handleResponse)
      .then(showMessage)
      .catch(function (err) {
        showMessage(err.message);
      });
  };

  logout.onclick = function () {
    fetch('/logout', { method: 'DELETE', credentials: 'same-origin' })
      .then(handleResponse)
      .then(showMessage)
      .catch(function (err) {
        showMessage(err.message);
      });
  };
  
 self.onload= function () {
    fetch('/lg', { method: 'POST', credentials: 'same-origin' })
      .then(handleResponse)
      .then(showMessage)
      .catch(function (err) {
        showMessage(err.message);
      });
  };

  let ws;

  wsButton.onclick = function () {
    if (ws) {
      ws.onerror = ws.onopen = ws.onclose = null;
      ws.close();
    }

    ws = new WebSocket(`ws://${location.host}/4`);
    ws.onerror = function () {
      showMessage('WebSocket error');
    };
    ws.onopen = function () {
      showMessage('WebSocket connection established');
	  //ws.onmessage= async function message (e) {console.log(e)}
	 let counter = 0;
  
  
      const form = document.getElementById('form');
	  const form1 = document.getElementById('form1');
	  const form2 = document.getElementById('form2');
      const input = document.getElementById('input');
      const messages = document.getElementById('message');
	  const messaged = document.getElementById('messaged');
  
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (input.value) {
          const clientOffset = `${counter++}`;
          ws.send(JSON.stringify({'type':'chat','m':input.value,'n': clientOffset}));
          input.value = '';
        }
      });
	  
	  form1.addEventListener('click', (e) => {
        e.preventDefault();
       
          ws.send(JSON.stringify({'type':'start'}));
         
       
      });
  
      ws.addEventListener('message', (msg) => {
        const item = document.createElement('li');
		const item2 = document.createElement('span');
		const item3 = document.createElement('span');
        item2.textContent =JSON.parse(msg.data).uid+"  "+':';console.log(msg.data)
		item3.textContent =JSON.parse(msg.data).m;
		item.appendChild(item2);
		item.appendChild(item3);
        messages.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
        
      });  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
    };
    ws.onclose = function () {
      showMessage('WebSocket connection closed');
      ws = null;
    };
  };

  wsSendButton.onclick = function () {
    if (!ws) {
      showMessage('No WebSocket connection');
      return;
    }

    ws.send('Hello World!');
    showMessage('Sent "Hello World!"');
  };
  
  
  
  
  
  
})();