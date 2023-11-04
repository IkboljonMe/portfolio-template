import axios from "axios";

const getAllRepos = async (data, token) => {
  try {
    const username = data.githubUsername;
    const headers = token ? { Authorization: `token ${token}` } : {};
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated`,
      { headers }
    );
    return res.data;
  } catch (err) {
    console.log(err, "ERROR FROM RETRIEVING REPOS");
  }
};

export default getAllRepos;
