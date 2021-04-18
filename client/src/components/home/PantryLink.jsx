import { HomeLink, Block, BottomDiv, Image } from './HomeStyles';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { LoggedInUserContext } from '../../contexts/LoggedInUser';

export default function PantryLink() {
  const [LoggedInUser, setLoggedInUser] = useContext(LoggedInUserContext)
  
  return (
    <HomeLink>
      <Block left><h2 className="title-link left">pantry</h2></Block>
      <BottomDiv imageRight>
        <div className="bottom-text">
          <p>expired items</p>
          <p> items</p>
        </div>
        <Image
          right
          alt="vegetables"
          src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRhYmxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        />
      </BottomDiv>
    </HomeLink>
  )
}