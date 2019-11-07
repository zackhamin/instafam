import React, { Component } from 'react'
import Chat from './Chat'

export default class Messages extends Component {
    render() {
        return (
            <div>
                <Chat username='frodo-tbaggins' message="Where's the ring Sam?" time='1h' imageurl='https://giantbomb1.cbsistatic.com/uploads/square_medium/3/39164/1245387-untitled_1.png'/>
                <Chat username='gandalf-the-don' message="Are you nearly at Mordor?" time='3h' imageurl='https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters_opt/p-the-lord-of-the-rings-ian-mckellen.jpg'/>
                <Chat username='smeagol' message="Stupid fat hobbit!" time='12h' imageurl='https://www.irishtimes.com/polopoly_fs/1.2453158.1449152864!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg'/>
                <Chat username='gerrard8' message="We've won it 6 times!" time='1st June' imageurl='https://d3nfwcxd527z59.cloudfront.net/content/uploads/2019/05/31224434/Steven-Gerrard-Champions-League-2005.jpg'/>
                <Chat username='queenliz01' message="You are on my list of honours this year..." time='28th December' imageurl='https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/05/queen-elizabeth-920x518.jpg'/>

            </div>
        )
    }
}
