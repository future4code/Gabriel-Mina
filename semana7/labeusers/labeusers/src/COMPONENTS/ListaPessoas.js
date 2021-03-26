import react from "react";
import axios from "axios";

export default class ListaPessoas extends react.Component{

    state = {
        lista:[]
    }

    componentDidMount(){
        this.getApi();
    }

    getApi = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
            headers:{
                authorization:"gabriel-mina-cruz"
            }
        }).then((response) =>{
            this.setState({lista:response.data})
        }).catch((e) =>{
            console.log(e.response.data);
        })
    }

    render(){
        const retornaLista = this.state.lista.map((lista) =>{
            return <li key={lista.id}>
                        {lista.name}
                   </li>
        });
        return(
            <div>
                <ol>{retornaLista}</ol>     
            </div>
        );
    }
}