import Twitter from 'twitter';

const client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

async function blockAccountsByKeyword(keyword: string): Promise<void> {
  try {
    const searchResults = await client.get('users/search', { q: keyword });
    const userIds = searchResults.map((user: any) => user.id_str);

    await Promise.all(
      userIds.map((userId: string) => client.post('blocks/create', { user_id: userId }))
    );

    console.log(`Successfully blocked accounts with the keyword "${keyword}".`);
  } catch (error) {
    console.error('An error occurred while blocking accounts:', error);
  }
}

const accountNameToBlock = 'TARGET_ACCOUNT_NAME';
blockAccountsByKeyword(accountNameToBlock);