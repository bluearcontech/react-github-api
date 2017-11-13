import React from 'react'
import { Link } from 'react-router'
import * as Styles from '../styles/UserStyle'
import styled from 'styled-components'
class UserOverview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: props.user
        };
        this.renderStat = this.renderStat.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.user != nextProps.user) {
            this.setState({
                user: nextProps.user
            })
        }
    }

    renderStat(stat) {


        return (
            <Styles.List key={stat.name}>
                <p>{stat.value}</p>
                <p>{stat.name}</p>
            </Styles.List>
        )
    }

    render() {
        const { user } = this.state

        const stats = [
            {
                name: 'Public Repos',
                value: user.public_repos
            },
            {
                name: 'Followers',
                value: user.followers
            },
            {
                name: 'Following',
                value: user.following
            }
        ];

        return (
            <Styles.UserWrapper>
                <Styles.StyledDiv>
                    <Styles.ImageWrapper src={user.avatar_url} alt={`${user.login} avatar`} />
                </Styles.StyledDiv>
                <Styles.StyledDiv>
                    <Styles.Title>{user.login}</Styles.Title>
                </Styles.StyledDiv>

                <Styles.UnList>
                    {stats.map(this.renderStat)}
                </Styles.UnList>

            </Styles.UserWrapper>
        );
    }
};

export default UserOverview;
