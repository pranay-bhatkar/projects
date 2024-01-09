
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 100px;
    width: 100%;
    text-align: center;
    color: #black;
    line-height: 1;
    text-shadow: 5px 5px 10px blue;
`;

const SubHeading = styled(Typography)`
    font-size: 50px;
    text-align: center;
    background: transperant;
    color: white;
    font-weight: 500;
    text-shadow: 5px 5px 10px blue;
    
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>PRANAY</SubHeading>
        </Image>
    )
}

export default Banner;