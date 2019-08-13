export const refresh = () => {
  return fetch('/chat', {
      method: 'GET',
    })
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject({error: 'service-error', err: response.statusText});
    });
};

export const sendMessage = (user, message) => {
  return fetch('/chat', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({sender:user, message:message})
    })
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject({error: 'service-error', err: response.statusText});
    });
};

export const getUserLogin = (username) => {
  return fetch("/login", {
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify({loginuser:username}),
    })
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject({error: 'service-error', err: response.statusText});
    });
};

export const getUserLogout = (username) => {
  return fetch("/logout", {
      method:'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify({loginuser:username}),
    })
    .then( response => {
      if(response.ok) {
        return response.json();
      }
      return Promise.reject({error: 'service-error', err: response.statusText});
    });
};



