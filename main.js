let h = React.createElement;

let generateId = 4;

let EnterContent = (props) =>{
    return <div>
        <h2> {props.content} </h2>
        {/* <h3> {props.userId} </h3> */}
        </div> ;
}

let MapContents = (props) =>{
    return <div>
            {props.Contentlist.map(content =>
            <EnterContent content={content.content.toUpperCase()} key={content.userId}/>)}
         </div> ;
}
class CreateContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newContent: ""
        }
    }
render(){
    return <form onSubmit={(event) => {
        event.preventDefault();
        event.target.value;
        this.props.addContent(this.state.newContent);
        }}>
        <input type="text" 
                value= {this.state.newContent}
                onChange={(event) => 
                    this.setState({newContent: event.target.value})
            }/> 
         </form> 
}
}



let JSX = <h1>whats Upper</h1>;
    
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        myArray: [
        // this is just a placeholder array
            // {
            // "userId": 1,
            // "id": 0,
            // "author": "null in a string",
            // "content": "Hey! This is the first post"
            // }
        ]
      };
        let getContent = () =>{
            // API to an array
          return fetch('http://0.tcp.ngrok.io:18229/wassups.json')
          .then(res => res.json())
          .then(wassups => {
              this.setState({
                  myArray: wassups
              })
          }
          )
        //   .then(data => console.log(data))
      }
      getContent();
    }
        render(){ 
            let addContent = (Contentcontent) =>{
                let newUserId = 4;
                let newMyArray = this.state.myArray.concat({
                    userId: newUserId,
                    id: 8,
                    author: "null in a string",
                    content: Contentcontent.toUpperCase()});
                    this.setState({
                    myArray: newMyArray
                })
            };
        return h("div", null,  
            h(CreateContent, {addContent: addContent}),
            h(MapContents, {Contentlist: this.state.myArray}),
    )
}
}
 ReactDOM.render([JSX, 
     h(MyComponent)], 
     document.getElementById("root")); 