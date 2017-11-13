import styled from 'styled-components'

const UserWrapper = styled.div`
    margin: 20px 0px 15px 0px;
    border-bottom: 1px #e1e4e8 solid !important;
`
const ImageWrapper = styled.img`
    border-radius: 10%;
    width: 100%;
`

const Title = styled.h1`
    font-size: 30px;
`

const List = styled.li`
    flex: 1;

`

const StyledDiv = styled.div`
`

const UnList = styled.ul`
    list-style: none;
    padding: 0;
    flex: 1;
    display: flex;
`

export { UserWrapper, ImageWrapper, List, StyledDiv,  Title, UnList }