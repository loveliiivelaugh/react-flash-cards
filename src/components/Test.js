import React from 'react';

class Test extends React.Component {constructor(props){
  super(props);
  this.state = {
      style : {
          width : '100%'
      }
  };
  this.openNav = this.openNav.bind(this);
  this.closeNav = this.closeNav.bind(this);
  }

  componentDidMount() {
      document.addEventListener("click", this.closeNav);
  }

  componentWillUnmount() {
      document.removeEventListener("click", this.closeNav);
  }

  openNav() {
      const style = { width : '100%' };
      this.setState({ style });
      document.body.style.backgroundColor="rgba(0,0,0,0.4)";
      document.addEventListener("click", this.closeNav);
  }

  closeNav() {
      document.removeEventListener("click", this.closeNav);
      const style = { width : 0 };
      this.setState({ style });
      document.body.style.backgroundColor="#F3F3F3";
  }
  render(){

  

  
      return (
        <div>
            <span style={{fontSize:30,cursor:"pointer"}} onClick={this.openNav}>&#9776; Add Cards</span>
              <div ref="snav" className="overlay" style={this.state.style}></div>
                  <div className="sidenav-container">
                      <div className="text-center">
                        <h2>Form</h2>
                        <p>This is a sample input form</p>
                      </div>
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>×</a>
                <div className = "list-group">
                    {/*your form component goes here */}
                    {this.props.children}
                    {/* Overlay add cards/flash card manager console  */}
          <div id="add-container" name={showAddContainer} className="add-container" >

              {/* flash cards manager console overlay  */}
              <div>
                <div className="container">
                  <h1 className="display-4 text-center py-1">Add New Card</h1>
                  <button id="hide" className="btn btn-small btn-ghost">
                    <i className="fas fa-times"></i>
                  </button>
                  
                  <div className="jumbotron p-3 shadow-sm">
                    <form id="create-form" action="/create-item" method="POST">
                      <div className="d-flex align-items-center">
                        <input id="create-field" name="item" autoFocus autoComplete="off" className="form-control mr-3" type="text" style={{ flex: "1" }} />
                        <button className="btn btn-primary">Add New Item</button>
                      </div>
                    </form>
                  </div>
                  
                  <ul className="list-group pb-5">
                    <li className="list-group-item list-group-item-action d-flex align-items-center justify-content-between">
                      <span className="item-text">Fake example item this</span>
                      <div>
                        <button className="edit-me btn btn-secondary btn-sm mr-1">Edit</button>
                        <button className="delete-me btn btn-danger btn-sm">Delete</button>
                      </div>
                    </li>
                  </ul>
              </div>
              )
}}

export default Test;