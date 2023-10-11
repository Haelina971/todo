import NavBar from "./NavBar";
import HeroImg from '../../assets/hero_img.jpg';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

//Look at argument props if still necessary
const Header = (props) =>  {
    return (
        <div>           
            <NavBar/>
            <Card className="bg-dark">
                {/*Add dark overlay over image and center text*/}
                <Card.Img src={HeroImg} className="opacity-50" alt="Hero Image" />
                <Card.ImgOverlay className="d-flex align-items-center">
                    <Card className="mx-auto p-5">
                        <Card.Title>Start planning and organizing like a pro!</Card.Title>
                        <Card.Text>
                            Add small text for people to sign up
                        </Card.Text>
                        <Link to="pages/signup">
                            <Button className="mt-5" variant="success">Register</Button>{' '}
                        </Link>
                    </Card>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
}

export default Header;