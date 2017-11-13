import React, { Component } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { GoRepoForked, GoStar } from 'react-icons/lib/go'
import { Link } from 'react-router-dom'
import * as Styles from '../styles/UserRepositoriesStyle'

export default class UserRepositories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            repositories: props.repositories,
            filter: ""
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.user != nextProps.repositories) {
            this.setState({
                repositories: nextProps.repositories
            })
        }
    }

    render() {
        const { repositories } = this.state

        return (
            <Styles.RepoWrapper>
                {
                    repositories.map(repository => {
                        let momentObject = moment(repository.updated_at)
                        return (
                            <Styles.RepoList key={repository.id}>
                                <Styles.RepoItem>
                                    <Styles.Title>{repository.name}</Styles.Title>
                                </Styles.RepoItem>

                                {
                                    repository.description != null ?
                                        <p>{repository.description}</p>
                                        :
                                        ''
                                }

                                <Styles.SpanLang>{repository.language}</Styles.SpanLang>
                                {
                                    repository.stargazers_count > 0 ?
                                        <Styles.StyledLink to={`${repository.full_name}/stargazers`}>
                                            <Styles.SpanProperty>
                                                <GoStar />
                                                {repository.stargazers_count}
                                            </Styles.SpanProperty>
                                        </Styles.StyledLink>
                                        :
                                        <Styles.SpanProperty>
                                            <GoStar />
                                            {repository.stargazers_count}
                                        </Styles.SpanProperty>
                                }

                                <Styles.SpanProperty>
                                    <GoRepoForked />
                                    {repository.forks}
                                </Styles.SpanProperty>

                                Updated on {momentObject.format('YYYY-MM-DD')}

                            </Styles.RepoList>
                        )
                    })
                }
            </Styles.RepoWrapper>
        )

    }
}