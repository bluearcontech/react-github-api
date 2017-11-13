import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getStarGazers, setStarGazers } from '../actions/starGazers'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { getUserRequest, setUserInfo } from '../actions/user'
import { getUserReposRequest, setUserReposInfo } from '../actions/repositories'
import { getUserFilterReposRequest, setUserFilterReposInfo } from '../actions/filterRepositories'
import store from '../store'
import * as Style from '../styles/StarGazersStyle'
class StarGazerView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            username: props.match.params.username,
            repo: props.match.params.repo
        }
        this.onClick = this.onClick.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (!Object.is(this.state.starGazers, nextProps.starGazers)) {
            this.setState({
                starGazers: nextProps.starGazers
            })
            if (typeof (nextProps.starGazers) == "object") {
                this.setState({
                    loading: false
                })
            }
        }
    }

    onClick() {
        this.props.history.goBack()
    }

    componentDidMount() {
        const { username, repo } = this.state
        var info = `${username}/${repo}`
        this.props.getStarGazers(info)
    }

    render() {

        const { loading, starGazers } = this.state
        return (
            <Style.Wrapper>
                <Style.Button onClick={this.onClick}>Back</Style.Button>
                {
                    loading ?
                        <Style.Label>Loading...</Style.Label>
                        :
                        <div className="container" style={{ paddingTop: '20px' }}>
                            <Style.Label>StarGazers</Style.Label>
                            {
                                starGazers.map(starGazer => {
                                    return (
                                        <Style.RepoLi key={starGazer.id}>
                                            <Style.DivImg>
                                                <Style.Image src={starGazer.avatar_url} />
                                            </Style.DivImg>
                                            <Style.DivDetail>
                                                <Style.Label>{starGazer.login}</Style.Label>
                                            </Style.DivDetail>
                                        </Style.RepoLi>
                                    )
                                })
                            }
                        </div>
                }
            </Style.Wrapper>
        )
    }
}

const mapStateToProps = state => ({
    starGazers: state.starGazers
})

const mapDispatchToProps = {
    getStarGazers,
    setStarGazers
}

export default connect(mapStateToProps, mapDispatchToProps)(StarGazerView)
