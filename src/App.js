import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import Add from "./components/Add";
import Form from "./components/Form";
import Header from "./components/Header";
import FilteredPosts from "./components/FilteredPosts";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
      post: "",
      id: 1,
      titleSearch: "",
      posts: [],
      filteredPosts: []
    };
    this.deletePost = this.deletePost.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.searchForTitle = this.searchForTitle.bind(this);
    this.deleteDown = this.deleteDown.bind(this)
  }

  componentDidUpdate(pp,ps){
    if(ps === this.state){
      this.render()
    } else {
      return;
    }
  }

  handleChange(e, cb) {
    let { value, name } = e.target;
    this.setState({ [name]: value });
    if(this.state.titleSearch.length > 0){
      cb()
    }
  }

  deletePost(id) {
    let updateArr = [];
    this.state.posts.forEach(ele => {
      if (ele.id !== id) {
        updateArr.push(ele);
      }
    });
    this.setState({ posts: updateArr });
  }

  searchForTitle(e) {
    let { value, name } = e.target;
    let newArr = this.state.posts.filter(post => post.title.includes(value));
    this.setState({ filteredPosts: newArr });    
  }

  handleSubmit() {
    this.setState({
      posts: [
        {
          title: this.state.input,
          picture: this.state.imageUrl,
          post: this.state.post,
          id: this.state.id
        },
        ...this.state.posts
      ]
    });
    this.setState({
      input: "",
      imageUrl: "",
      post: "",
      id: this.state.id + 1
    });
  }

  deleteDown(e){
      let key = e.keyCode || e.charCode;
      if( key == 8 || key == 46 ){
          this.setState({titleSearch: ''})
  }
  this.forceUpdate()

  }

  render() {
    return (
      <div className="app">
        <Header
        deleteDown={this.deleteDown}
          appState={this.state}
          searchForTitle={this.searchForTitle}
          handleChange={this.handleChange}
        />
        <Form handleChange={this.handleChange} appState={this.state} />
        <Add add={this.handleSubmit} appState={this.state} />
        {this.state.titleSearch.length ? (
          <FilteredPosts  filteredPosts={this.state.filteredPosts}/>
        ) : (
          <Posts posts={this.state.posts} delete={this.deletePost} />
        )}
      </div>
    );
  }
}

export default App;
