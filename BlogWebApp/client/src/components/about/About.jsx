
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Email, LinkedIn } from '@mui/icons-material';


const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/157-1572643_free-image-software-development.jpg);
    width: 100%;
    height: 50vh;
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #023e8a;
    line-height: 1.5;
    text-align: justify;
    
`;

const Container = styled(Box)`
    height: 100%;
    background-color: #D9AFD9;
    background-image: linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%);
`;

const HyperLinks = styled(Box)`
    justify-content: center;
    background: #800080;  
    background: -webkit-linear-gradient(to right, #ffc0cb, #800080); 
    background: linear-gradient(to right, #ffc0cb, #800080);
    & > a ,{
        margin-top: 20px;
        padding: 15px 50px ;
        text-align: center; 
        color: #f7b733; 
    }
`;

const About = () => {

    return (
        <Container>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">SOFTWARE  DEVLOPER </Typography>

                <Text variant="h5">As a skilled and passionate software developer, I am dedicated to crafting innovative solutions that push the boundaries of technology. With a strong foundation in programming languages such as Python, Java, and C++, I have honed my expertise in creating robust and efficient software applications.

                My problem-solving skills and attention to detail allow me to analyze complex challenges and design elegant solutions. Whether it's developing web applications, mobile apps, or enterprise software, I thrive on turning ideas into reality, delivering high-quality products that exceed expectations.

                Collaboration is at the heart of my approach. I enjoy working with cross-functional teams, communicating technical concepts to non-technical stakeholders, and engaging in productive brainstorming sessions. My adaptability allows me to seamlessly integrate into any development environment and contribute to projects of varying scales.
                    
                </Text>
                <Text variant="h5"> Constantly staying abreast of the latest industry trends and best practices, I am committed to continuous learning and improvement. My curiosity drives me to explore emerging technologies such as cloud computing, AI, and blockchain, ensuring that I remain at the forefront of the ever-evolving software landscape.

                Beyond writing code, I take pride in writing clean and maintainable code that adheres to industry standards and best coding practices. My comprehensive testing and debugging procedures ensure the delivery of bug-free software, providing users with an exceptional and seamless experience.

                As a software developer, I find fulfillment in solving real-world problems through technology, leveraging my technical expertise to drive innovation and make a positive impact on businesses and end-users alike. With a passion for learning, a commitment to excellence, and an unwavering dedication to my craft, I am ready to embrace new challenges and create software that transforms ideas into reality.
               </Text>

                <HyperLinks style={{ borderRadius:50}}>
                        <Link href="https://github.com/pranay-bhatkar"color="inherit"   target="_blank"><GitHub /></Link>
                        <Link href="https://www.linkedin.com/in/pranay-bhatkar-a3004024a/" color="inherit" target="_blank"><LinkedIn /></Link>
                        <Link href="mailto:pranaybhatkar81@gmail.com?Subject=This is a subject" color="inherit" target="_blank" ><Email /></Link>
                </HyperLinks>
            </Wrapper>
        </Container>
    )
}

export default About;