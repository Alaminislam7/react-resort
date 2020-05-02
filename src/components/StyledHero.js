import styled from 'styled-components';
import DefaultImg from '../images/room-1.jpeg';

const StyledHero = styled.header`
    min-height: calc(100vh - 66px);
    background: url(${props => props.img? props.img: DefaultImg}) center/cover no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 100px;
`






export default StyledHero;



