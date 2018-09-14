let h = React.createElement;

let generateId = 4;

let EnterChirp = (props) =>{
    return <div>
        <h2> {props.chirp} </h2>
        {/* <h3> {props.userId} </h3> */}
        </div> ;
}

let MapChirps = (props) =>{
    return <div>
            {props.chirplist.map(chirp =>
            <EnterChirp chirp={chirp.chirp} key={chirp.userId}/>)}
         </div> ;
}
class CreateChirp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newChirp: ""
        }
    }
render(){
    return <form onSubmit={(event) => {
        event.preventDefault();
        event.target.value;
        this.props.addChirp(this.state.newChirp);
        }}>
        <input type="text" 
                value= {this.state.newChirp}
                onChange={(event) => 
                    this.setState({newChirp: event.target.value})
            }/> 
         </form> 
}
}

let JSX = <h1>wassup</h1>;
    
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        myArray: [
            {
            "userId": 1,
            "chirp": "Hey! This is the first Chirp"
            },
            {
            "userId": 2,
            "chirp": "No bots please"
            },
            {
            "userId": 3,
            "chirp": "Hello whirled"
            }
        ]
      };
    }
        render(){ 
            let addChirp = (chirpcontent) =>{
                let newUserId = 4;
                let newMyArray = this.state.myArray.concat({
                    userId: newUserId,
                    chirp: chirpcontent});
                    this.setState({
                    myArray: newMyArray
                })
            };
        return h("div", null,  
            h(CreateChirp, {addChirp: addChirp}),
            h(MapChirps, {chirplist: this.state.myArray}),
    )
}
}
 ReactDOM.render([JSX, 
     h(MyComponent)], 
     document.getElementById("root")); 