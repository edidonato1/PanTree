import { useContext } from 'react';
import LibraryLink from '../../components/home/LibraryLink';
import PantryLink from '../../components/home/PantryLink';
import { LoggedInUserContext } from '../../contexts/LoggedInUser';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)

  return (
    <>
      <PantryLink />
      <LibraryLink />
    </>
  )
}

export default Home;