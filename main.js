let h = React.createElement;

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

let JSXheader = <h1>whats Upper</h1>;
let HomePage = (props) => 
    h("div", null,  
        JSXheader,
        h(CreateContent, {addContent: props.addContent}),
        h(MapContents, {Contentlist: props.myArray})
)
    
class HomepageContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        myArray: [
        // this is just a placeholder array content
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
          return fetch('http://0.tcp.ngrok.io:11971/wassups.json')
          .then(res => res.json())
          .then(wassups => {
              this.setState({
                  myArray: wassups
              })
          }
          )
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
        return  h(HomePage, {addContent, myArray: this.state.myArray});
    
    }
}
 ReactDOM.render( 
     h(HomepageContainer), 
     document.getElementById("root")); 