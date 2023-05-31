const express = require('express');
const axios = require('axios');
const Twitter = require('twitter')

const client = new Twitter({
    consumer_key: 'YOUR_CONSUMER_KEY',
    consumer_secret: 'YOUR_CONSUMER_SECRET',
    access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
    access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

const app = express();

app.use(express.json());

app.post('/block-account', async (req, res) => {
    try {

        const accountNameToBlock = req.body;
        await blockAccountsByKeyword(accountNameToBlock);

        res.sendStatus(200);
    } catch (error) {
        console.error('An error occurred while blocking the account:', error);
        res.sendStatus(500);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

async function blockAccountsByKeyword(keyword) {
    try {
        const searchResults = await client.get('users/search', { q: keyword });
        const userIds = searchResults.map((user) => user.id_str);

        await Promise.all(
            userIds.map((userId) => client.post('blocks/create', { user_id: userId }))
        );

        console.log(`Successfully blocked accounts with the keyword "${keyword}".`);
    } catch (error) {
        console.error('An error occurred while blocking accounts:', error);
    }
}