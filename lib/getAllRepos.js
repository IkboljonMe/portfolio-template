const getAllRepos = async (data) => {
  try {
    const username = data.githubUsername;
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`
    );
    if (!res.ok) {
      throw new Error(`GitHub API responded with ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error(err, "ERROR FROM RETRIEVING REPOS");
    return [];
  }
};

export default getAllRepos;
