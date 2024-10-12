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
        
        const data = response;
        return data;
    },

    async registerUser(fullname, email, password) {
        const url = `${process.env.REACT_APP_BASE_URL}/user/register`;

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ fullname, email, password }),
        });

        const data = response;
        return data;
    },

    async getTodoList(userId) {
      const url = `${process.env.REACT_APP_BASE_URL}/todoList/homePage?userId=${userId}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = response;
      return data;
    }
}