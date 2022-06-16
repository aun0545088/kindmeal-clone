import styled from "styled-components";
import { Link } from "react-router-dom";
const Container = styled.div`
  padding-bottom: 15px;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-bottom: 15px;
`;
const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
`;
const Content = styled.p`
  color: black;
`;
const CardDiv = styled.div`
  margin-left: 5px;
  display: flex;
  flex-wrap: wrap;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
`;
const Title = styled.p`
  font-size: 8px;
`;

const Card = ({ contents, heading }) => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          {heading.map((e) => (
            <Content key={e.id}>
              <Link
                to={e.to}
                style={{
                  textDecoration: "none",
                  color: "#6e7174",
                }}
              >
                {e.title}
              </Link>
            </Content>
          ))}
        </Heading>
        <CardDiv>
          {contents.map((item) => (
            <Item key={item.id}>
              <Link to={"/mealdeal"}>
                <Image src={item.img} />
              </Link>
              <Title>{item.title}</Title>
            </Item>
          ))}
        </CardDiv>
      </Wrapper>
    </Container>
  );
};

export default Card;
