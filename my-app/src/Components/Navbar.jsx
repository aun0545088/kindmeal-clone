import styled from "styled-components";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";


var userDetails = JSON.parse(localStorage.getItem("signupForm"))
console.log(userDetails)

const Container = styled.div`
  height: 110px;
`;
const TopWrapper = styled.div`
  width: 70%;
  height: 80px;
  margin: auto;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Logo = styled.div``;
const Image = styled.img`
  width: 250px;
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  padding: 5px;
  color: white;
  background-color: #cecece;
  border-radius: 50%;
  cursor: pointer;
`;
const Right = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Option = styled.div`
  padding: 3px 8px;
  border-radius: 3px;
  font-size: 12px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const BottomWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-between;
  background-color: #53b774;
`;
const Content = styled.div`
  width: 70%;
  display: flex;
  margin: auto;
  justify-content: space-around;
  box-sizing: border-box;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  &:hover {
    background-color: #439760;
  }
`;

const Navbar = ({data,handleDataFun}) => {

  
  return (
    <Container>
      <TopWrapper>
        <Left>
          <Logo>
            <Image
              src="https://www.kindmeal.my/images/logo-kindmeal.png"
              alt="logo"
            />
          </Logo>
        </Left>
        <Center>
          <Icon>
            <LinkOutlinedIcon />
          </Icon>
          <Icon>
            <FacebookOutlinedIcon />
          </Icon>
          <Icon>
            <TwitterIcon />
          </Icon>
        </Center>
        {data? <div>
          <div style={{display:"flex"}}>
            <h2>{userDetails.name}</h2>
            <h3 onClick={handleDataFun}>Logout</h3>
          </div>
        </div> :<Right>
          <Option>
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              Login
            </Link>{" "}
          </Option>
          <Option bg="#34619f" color="white">
            Facebook
          </Option>
          <Option bg="#666666" color="white">
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Email
            </Link>
          </Option>
          <Link
            to={"/signup"}
            style={{ textDecoration: "none", color: "black" }}
          >
            <Option>Sign Up</Option>
          </Link>
        </Right> }
        
      </TopWrapper>
      <BottomWrapper>
        <Content>
          <Nav>
            <Link style={{ textDecoration: "none", color: "white" }} to={"/"}>
              Home
            </Link>
          </Nav>
          <Nav>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/mealdeal"}
            >
              Meal Deals
            </Link>
          </Nav>
          <Nav>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/kindmoments"}
            >
              KindMoments
            </Link>
          </Nav>
          <Nav>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/hotpicks"}
            >
              Hot Picks
            </Link>
          </Nav>
          <Nav>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/recipes"}
            >
              Recipes
            </Link>
          </Nav>
          <Nav>
            <Link style={{ textDecoration: "none", color: "white" }} to={""}>
              Directory
            </Link>
          </Nav>
          <Nav>
            <Link style={{ textDecoration: "none", color: "white" }} to={""}>
              Articles
            </Link>
          </Nav>
          <Nav>
            <Link style={{ textDecoration: "none", color: "white" }} to={""}>
              Help
            </Link>
          </Nav>
        </Content>
      </BottomWrapper>
    </Container>
  );
};

export default Navbar;
