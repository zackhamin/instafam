import React, { Component } from 'react';
import Post from './Post'

export default class Home extends Component {
    render() {
        return (
            <div className="posts" >
                <Post username='harryboyd1' pfp='https://pbs.twimg.com/profile_images/1154124878024458240/jvxgPCmU_400x400.jpg' postpic='https://ichef.bbci.co.uk/news/640/cpsprodpb/91B7/production/_86130373_86130372.jpg' caption='Just took out a child and tried to leave Europe, good day all round!' likes={11} time='1 hour'/>
                <Post username='aragorn-the-king' pfp='https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/05/viggo-mortensen-aragorn-lord-of-the-rings-the-two-towers.jpg?itok=6W1EyzMT' postpic='https://preview.redd.it/n88hfcwso0q21.jpg?auto=webp&s=7c1c461aaf4ea19d896d8cb57646587cd8b1c063' caption='Rookie' likes={11,821} time='1 day'/>
                <Post username='archerlegolas' pfp='https://vignette.wikia.nocookie.net/lotr/images/9/95/Legolask.jpg/revision/latest?cb=20130604231140' postpic='https://media.comicbook.com/2019/07/legolas-1180679-1280x0.jpeg' caption='GG ' likes={231} time='17 minutes'/>
            </div>
        )
    }
}
