import axios from "axios";

const getAllRepos = async (data) => {
  try {
    const username = data.githubUsername;
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=updated`
    );
    return res.data;
  } catch (err) {
    console.log(err, "ERROR FROM RETRIEVING REPOS");
  }
};

export default getAllRepos;
