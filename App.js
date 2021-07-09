import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
  state = {
    posts:[ ]
  }
  componentDidMount(){
    axios.get('https://api.covidtracking.com/v1/states/current.json')
    .then(res => {
      console.log(res)
      this.setState({
        posts: res.data.slice(0,10)
      })
    })

  }
  render(){
    const { posts} = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className='post card' key={post.id}>
            <div className='card-content'>
              <br></br>
              <p> State: {post.state}</p>
              <p> Date: {post.date}</p>
              <p> Positive: {post.positive}</p>
              <p> Deaths: {post.death}</p>

            </div>

          </div>
        )
      })
    ) : (
      <div className="center"></div>
    ) 
    return(
      <div className='container'>
        <h4 className='center' ></h4>
       {postList}

      </div>
    )
  }
}

export default App;

