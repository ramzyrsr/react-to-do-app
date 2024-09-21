module.exports = {
    async loginUser(email, password) {
        const url = `${process.env.REACT_APP_BASE_URL}/user/login`;
      
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
      
        // if (!response.ok) {
        //   throw new Error(`Error: ${response.status} ${response.statusText}`);
        // }
      
        // const data = await response.json();
        // console.warn(data);
        
        const data = response;
        return data;
    }
}