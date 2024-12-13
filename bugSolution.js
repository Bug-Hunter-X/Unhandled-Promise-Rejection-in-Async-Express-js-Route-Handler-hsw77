const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... asynchronous operation to fetch user data ...
    const userData = await database.getUser(userId);
    if (!userData) {
      return res.status(404).send('User not found');
    }
    res.send(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
});

// ... other routes ...

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});