import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import firebase from 'firebase'
import { auth } from '../config/firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { setUser } from '../redux/user/action'

export default WrapComponent => {
    const withAuthenticated = props => {
        const [load, setLoad] = useState(true)
        useEffect(() => {
            isAuthen()
        }, [])

        const isAuthen = () => {
            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    props.setUser(user)
                    setLoad(false)
                } else {
                    Router.push('/login')
                }
            });
        }

        return (
            <>
                {load ? <div>Load</div> : <WrapComponent User={props.User} />}

            </>
        )
    }
    const mapStateToProps = state => {
        return {
            User: state.User
        }
    }
    return compose(
        connect(mapStateToProps, { setUser })
    )(withAuthenticated)
}