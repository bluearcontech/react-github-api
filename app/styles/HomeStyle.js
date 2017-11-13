import styled from 'styled-components'

const Label = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    margin-bottom: 2em
`

const ClearLabel = styled.h4`
    display:inline;
    color: pink`

const Form = styled.form``

const SearchButton = styled.button`
    border: 1px solid black;
    background-color: #fff;
    font-size: 20px;
`

const SearchWrapper = styled.div`
    margin-top: 15px;
    margin-bottom: 25px;
    text-align: center;
`

const Input = styled.input`
    border: 1px solid black;
    padding: 0.2em;
    margin-right: 2em;
    font-size: 20px;
`

const SearchBox = styled.input`
    font-size: 18px;
    margin: 0 auto;
    border-radius: 3px;
`

const Wrapper = styled.section`
    padding: 4em;
    background: white;
    margin-left: 4em;
    margin-right:4em
`

const SpinnerDiv = styled.div`
    margin: auto;
    width: 50px;
    height: 50px;
    margin-top: 40px;
`
const FilterMessage = styled.div`
    vertical-align: top !important;
    margin-bottom: 10px;
    float: left
`

const ClearButton = styled.button`
    margin-left: 50px
`

const FilterInfoWrapper = styled.div`
    margin-top: 15px;
    border-bottom: 1px #e1e4e8 solid !important;
    border-top: 1px #e1e4e8 solid !important;
    padding-top: 15px;
    padding-bottom: 15px;
`

const ClearWrapper = styled.div`
    margin-top:30px;
    text-align: center;
    &:hover .clear {
        color: blue;
}
`
export { Label, Form, SearchButton, SearchWrapper, Input, SearchBox, Wrapper, SpinnerDiv, FilterMessage, ClearButton, FilterInfoWrapper, ClearLabel, ClearWrapper}