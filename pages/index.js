import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getAllRepos from "@lib/getAllRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="IkboljonMe - Developer, Writer, Creator"
      description="Portfolio of Ikboljon Abdurasulov - my projects, experience and latest code on GitHub."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const allRepos = await getAllRepos(userData);
  // Only send the fields the page uses, the full GitHub response is very big
  const repositories = allRepos.map(
    ({ id, name, description, html_url, license, archived }) => ({
      id,
      name,
      description,
      html_url,
      license: license ? license.key : null,
      archived,
    })
  );
  return {
    props: {
      repositories,
    },
  };
};
