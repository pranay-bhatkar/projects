
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/3-31084_wallpaper-anime-girl-anime-artist-artwork-digital-anime.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: 100%;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    height: 37.5vh;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
    text-align: center;
    font-weight:600;
    text-shadow: 5px 6px 10px #ec38bc;
    word-spacing: 20px;
    font-size: 80px;
    letter-spacing: 15px;
`;

const HyperLinks = styled(Box)`
    background: #03001e;  
    background: -webkit-linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e); 
    background: linear-gradient(to right, #fdeff9, #ec38bc, #7303c0, #03001e); 
    margin: auto;
    width: 50%;
    border: 3px solid green;
    & > a,{
        margin-top: 50px;
        padding: 20px 30px;
        text-align: center; 
        align-items: center;
        text-decoration: none;
        color: #fff; 
        font-size: 25px;
        font-weight: 500;
        word-spacing: 50px;
    }
`;

    const Container = styled(Box)`
    background-color: #D9AFD9;
    background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
`;



const Contact = () => {
    return (
        <Container>
            <Banner />
            <Wrapper>
            <Text variant="h5">Connect With Me</Text>
                <HyperLinks style={{ borderRadius:50}}>
                        <Link href="https://github.com/pranay-bhatkar"color="inherit"   target="_blank">GitHub</Link>
                        <Link href="https://www.linkedin.com/in/pranay-bhatkar-a3004024a/" color="inherit" target="_blank">LinkedIn</Link>
                        <Link href="mailto:pranaybhatkar81@gmail.com?Subject=This is a subject" color="inherit" target="_blank" >Email</Link>
                        <Link href="https://www.instagram.com/mr.pannya02/" color="inherit" target="_blank" >Instagram</Link>
                </HyperLinks>
            </Wrapper>
        </Container>
    );
}

export default Contact;