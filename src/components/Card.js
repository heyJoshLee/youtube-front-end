import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.type !== 'sm' && '360px'};
  margin - bottom: ${(props) => props.type === 'sm' ? '10px' : '40px'};
  cursor: pointer;
  display: ${(props) => props.type === 'sm' && 'flex'};
  gap: 10px;
`

const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === 'sm' ? '300px' : '202px'};
  background-color: #999;
  flex: 1;
`

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type !== 'sm' && '15px'};
  gap: 12px;
  flex: 1;
`

const ChannelImage = styled.img`
  height: 36px;
  width: 36px;
  border-radius: 50 %;
  background-color: #999;
  display: ${(props) => props.type === 'sm' && 'none'};
`
const Texts = styled.div``

const Title = styled.h1`
font - size: 16px;
font - weight: 500;
color: ${(theme) => theme.theme.text};
`
const ChannelName = styled.h2`
font - size: 14px;
color: ${(theme) => theme.theme.textSoft};
margin: 10px 0;
`
const Info = styled.div`
font - size: 14px;
color: ${(theme) => theme.theme.textSoft}

`



const Card = ({ type }) => {
  return (
    <Link to="/video/test">
      <Container type={type}>
        <Image type={type} src='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/112908101/original/6181bf7c0728865bf853a108f75a05ab73fa61f9/design-eye-catchy-youtube-thumbnail.jpg' />
        <Details type={type}>
          <ChannelImage type={type} src='https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo'
          />
          <Texts>
            <Title>Test Title Name</Title>
            <ChannelName>Cool Name</ChannelName>
            <Info>534,123 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  )
}

export default Card;