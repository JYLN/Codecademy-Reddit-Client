const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async subreddit => {
  const response = await fetch(`${API_ROOT}/r/${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map(post => post.data);
};

export const getSubredditPostComments = async permalink => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map(subreddit => subreddit.data);
};
