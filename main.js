let h = React.createElement;

let generateId = 4;
// () =>
//   {Math.floor(Math.random() * 9).toString();
// return generateId(10);}


let EnterChirp = (props) =>{
    return h('div', null, 
        h("h2", null, props.chirp),
        h("h3", null, props.userId)
        )
}

let MapChirps = (props) =>{
    return h('div', {}, [
        props.chirplist.map(chirp =>
            h(EnterChirp, {chirp: chirp.chirp, key: chirp.userId}) 
        )
    ])
}
class CreateChirp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newChirp: ""
        }
    }
render(){
    return h("form", {
        onSubmit: (event) => {
            event.preventDefault();
            event.target.value;
            this.props.addChirp(this.state.newChirp);
            }
        },
            h("input", {
                type: "text", 
                value: this.state.newChirp,
                onChange: (event) => {
                    this.setState({newChirp: event.target.value})
            }
        })
    )   
    
    
}
}

let CreateHeader = (props) => {
    return h("h1", {}, "wassup")
}

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
           
        return h("main", null,  
            h(CreateHeader),
            h(CreateChirp, {addChirp: addChirp}),
            h(MapChirps, {chirplist: this.state.myArray})
          
    )
}
    
  }


 ReactDOM.render(
     h(MyComponent), 
     document.getElementById("root")); 