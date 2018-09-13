let h = React.createElement;

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

let CreateInput = (props) => {
    return h("input", {})
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
        return h("main", null,  
            h(CreateHeader),
            h(CreateInput),
            h(MapChirps, {chirplist: this.state.myArray})
           
    )

    
  }
}

 ReactDOM.render(
     h(MyComponent), 
     document.getElementById("root")); 