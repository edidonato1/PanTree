import { HomeLink, Block, BottomDiv, Image } from './HomeStyles';
import { Link } from 'react-router-dom';

export default function LibraryLink() {
  
  return (
    <HomeLink>

      <Block right><h2 className="title-link right">library</h2></Block>
      <BottomDiv>
        <Image
          left
          alt="vegetables"
          src="https://media.gettyimages.com/photos/card-filer-for-organizational-purposes-picture-id183415861?k=6&m=183415861&s=612x612&w=0&h=dUhWbQjilf7awK_0udl1TyqZo90ISu7ZtEH2EDtP3PE=" />
        <div className="bottom-text">
          <hr></hr>
          <Link>view by category </Link>
          <hr></hr>
          <Link >view all foods</Link>
          <hr></hr>
        </div>
      </BottomDiv>

    </HomeLink>
    
  )
}

// pantry impage
//https://images.unsplash.com/photo-1518843875459-f738682238a6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnZXRhYmxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60