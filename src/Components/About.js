import React from 'react'
import Toolbar from './Toolbar'

export default function About() {
    return (
        <div>
        <Toolbar />
            <h1>
                What is Slackify?
            </h1>
            <p>
                Slackify is an app built for the office radio.
                You can ask it what's playing, so you can add it to your
                own private playlists, or you can tell it to skip the song,
                if you don't like it. 
            </p>
        </div>
    )
}
