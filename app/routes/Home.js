import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUserRequest, setUserInfo } from '../actions/user'
import { getUserReposRequest, setUserReposInfo } from '../actions/repositories'
import { getUserFilterReposRequest } from '../actions/filterRepositories'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { RingLoader } from 'react-spinners'
import UserOverView from '../components/UserOverview'
import UserRepositories from '../components/UserRepositories'
import MessageBox from '../components/MessageBox'
import * as Styles from '../styles/HomeStyle'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            filterString: props.filterString || "",
            username: props.user != null ? props.user.login :  "",
            repositories: props.repositories != null ? props.repositories : [],
            filterRepositories: props.filterRepositories != null ? props.filterRepositories : [],
            user: props.user
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (!Object.is(this.state.user, nextProps.user)) {
            this.setState({
                user: nextProps.user
            })
            if (typeof (nextProps.user) == "object") {
                this.props.getUserReposRequest(this.state.username)
            }
        } else if (!Object.is(this.state.repositories, nextProps.repositories)) {
            if (typeof (nextProps.repositories) == "object") {
                this.setState({
                    repositories: nextProps.repositories,
                    loading: false
                })
            }
        } else if (!Object.is(this.state.filterRepositories, nextProps.filterRepositories)) {
            if (typeof (nextProps.filterRepositories) == "object") {
                this.setState({
                    filterRepositories: nextProps.filterRepositories,
                    filterString: nextProps.filterString
                })
            }
        }

        if (!Object.is(this.state.messages, nextProps.messages)) {
            if (nextProps.messages.length > 0) {
                this.setState({
                    messages: nextProps.messages,
                    loading: false
                })
            }
        }
    }

    handleSubmit(event) {
        // event.preventDefault()
        if (this.input.value.length > 0) {
            var emptyRepo = []
            this.props.getUserFilterReposRequest(emptyRepo, "")
            this.props.setUserReposInfo(emptyRepo)
            this.props.getUserRequest(this.input.value)
            this.setState({
                loading: true,
                username: this.input.value,
                filterRepositories: [],
                filterString: "",
                repositories: []
            })
        }
    }

    handleKeyPress(event) {

        let filterString = this.search.value
        if (event.charCode == 13 && filterString.length > 0) {
            this.setState({
                filterString: filterString
            })
            let filteredRepositories = []
            this.state.repositories.map(repository => {
                var check = false
                if (repository.description) {
                    if (repository.description.toLowerCase().includes(filterString)) {
                        check = true
                        filteredRepositories.push(repository)
                    }
                }
                if (check == false && repository.name) {
                    if (repository.name.toLowerCase().includes(filterString)) {
                        filteredRepositories.push(repository)
                    }
                }
            })
            this.setState({
                filterRepositories: filteredRepositories
            })
            this.props.getUserFilterReposRequest(filteredRepositories, filterString)
        }
        else if (event.charCode == 13 && filterString.length == 0) {
            this.setState({
                filterRepositories: [],
                filterString: ""
            })
            this.props.getUserFilterReposRequest([], "")
        }
    }

    onChange(event) {

    }

    render() {

        const searchStyle = {
            marginTop: '15px'
        }
        const suggestions = []

        const {
            loading,
            user,
            repositories,
            filterRepositories,
            filterString
        } = this.state

        let userData, repositoryData, filterRepoData
        if (typeof (user) == "object") {
            userData = true
        } else {
            userData = false
        }
        if (typeof (repositories) == "object" && repositories.length > 0) {
            repositoryData = true
        } else {
            repositoryData = false
        }
        if (typeof (filterRepositories) == "object" && filterRepositories.length > 0) {
            filterRepoData = true
        } else {
            filterRepoData = false
        }

        const Form = styled.form``

        return (
            <Styles.Wrapper>
                <Styles.SearchWrapper>
                    <Styles.Label>Enter a GitHub username</Styles.Label>
                    <Form onSubmit={this.handleSubmit}>
                        <Styles.Input innerRef={x => { this.input = x }} defaultValue={this.state.username} />
                        <Styles.SearchButton>Search</Styles.SearchButton>
                    </Form>
                </Styles.SearchWrapper>

                <MessageBox />
                {
                    loading ?
                        <Styles.SpinnerDiv>
                            <RingLoader
                                color={'#123abc'}
                                loading={this.state.loading}
                            />
                        </Styles.SpinnerDiv>
                        :
                        ''
                }

                <div className="row vert-offset-top-1">
                    <div className="col-md-3 col-sm-3">
                        {
                            loading == false && repositoryData == true ?
                                <UserOverView user={user} />
                                :
                                ''
                        }
                    </div>
                    <div className="col-md-8 col-sm-8 col-md-offset-1 col-sm-offset-1" style={{marginTop: 20}}>
                        {
                            loading == false && filterString.length == 0 && repositoryData == true ?
                                <div>
                                    <Styles.SearchBox
                                        innerRef={x => { this.search = x }}
                                        onChange={this.onChange}
                                        onKeyPress={this.handleKeyPress}
                                        defaultValue={this.state.filterString}
                                        placeholder="Search repositories..."
                                    />
                                    <UserRepositories repositories={repositories} />
                                </div>
                                :
                                loading == false && filterString.length > 0 && filterRepoData == true ?
                                    <div>
                                        <Styles.SearchBox
                                            innerRef={x => { this.search = x }}
                                            onChange={this.onChange}
                                            onKeyPress={this.handleKeyPress}
                                            defaultValue={this.state.filterString}
                                            placeholder="Search repositories..."
                                        />
                                        <UserRepositories repositories={filterRepositories} />
                                    </div>
                                    :
                                    loading == false && filterString.length > 0 && filterRepoData == false ?
                                    <div>
                                        <Styles.SearchBox
                                            innerRef={x => { this.search = x }}
                                            onChange={this.onChange}
                                            onKeyPress={this.handleKeyPress}
                                            defaultValue={this.state.filterString}
                                            placeholder="Search repositories..."
                                        />
                                        <Styles.Label>There is not repository with this keyword</Styles.Label>
                                    </div>
                                    :
                                    ''
                        }
                    </div>
                </div>

            </Styles.Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user,
    repositories: state.repositories,
    filterRepositories: state.filterData.filterRepositories,
    filterString: state.filterData.filterString,
    messages: state.messages
})

const mapDispatchToProps = {
    getUserRequest,
    setUserInfo,
    getUserReposRequest,
    setUserReposInfo,
    getUserFilterReposRequest
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)