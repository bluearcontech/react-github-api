import styled from 'styled-components'

const Wrapper = styled.section`
    padding: 4em;
    background: white;
`

const Label = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    margin-bottom: 2em
`
const RepoLi = styled.li`
    width: 250px;
    height: 100px;
    padding-bottom: 20px;
    margin-right: 20px;
    margin-bottom: 20px;
    float: left !important;
    border-bottom: 1px #e1e4e8 solid !important;
    list-style-type: none;
`
const DivImg = styled.div`
    vertical-align: top;
    display: inline-block !important;
`
const Image = styled.img`
    display: inline-block;
    overflow: hidden;
    line-height: 1;
    vertical-align: middle;
    border-radius: 3px;
    height:75px
`
const DivDetail = styled.div`
    vertical-align: top;
    display: inline-block !important;
    margin-left:20px;
    width: 150px;
`
const Button = styled.button`
    border-radius: 3px;
    padding: 0.25em 1em;
    margin: 0 1em;
    background: transparent;
    color: black;
    border: 2px solid palevioletred;
`

export { Wrapper, DivImg, DivDetail, Button, RepoLi, Label, Image}