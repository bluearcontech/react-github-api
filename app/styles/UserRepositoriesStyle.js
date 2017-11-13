import styled from 'styled-components'
import { Link } from 'react-router-dom'

const RepoWrapper = styled.div``
const RepoList = styled.li`
    padding: 15px 0px 15px 0px;
    border-bottom: 1px #e1e4e8 solid !important;
    list-style-type: none;
`
const RepoItem = styled.div`
`
const Title = styled.h3`
    margin-top: 0px
    color:
`
const SpanLang = styled.span`
    margin-right: 16px !important
`
const SpanProperty = styled.span`
    margin-right: 16px !important;
    color: #586069 !important
    &:hover {
        color: blue !important;
    }
`

const StyledLink = styled(Link)`
    color: black;
    margin: 0.5em 0;
    font-family: Helvetica, Arial, sans-serif;

    &:hover {
        text-decoration: underline;
    }
    &.active {
        color: red;
    }
`;

export { RepoWrapper, RepoList, RepoItem, Title, SpanLang, SpanProperty, StyledLink }