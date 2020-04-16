import React from 'react'
import { Route, Switch } from 'react-router-dom'
import BlogPosts from './BlogPosts'
import NewBlogPost from './NewBlogPost'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={BlogPosts} />
          <Route exact path="/posts" component={BlogPosts} />
          <Route exact path="/new_blog_post" component={NewBlogPost} />
        </Switch>
      </div>
    )
  }
}

export default App