import axios from "axios";

const getAllRepos = async (data, token) => {
  try {
    const username = data.githubUsername;
    const headers = token ? { Authorization: `token ${token}` } : {};
    const res = await axios.get(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`,
      { headers }
    );
    return res.data.items;
  } catch (err) {
    console.log(err, "ERROR FROM RETREIVING REPOS");
  }
};

export default getAllRepos;
