import react from 'react'
import axios from 'axios';

export default class Home extends react.Component{

    state = {
        valorNome:"",
        valorEmail:""
    }
    
    onChangeNome = (e) =>{
        this.setState({valorNome: e.target.value})
    }

    onChangeEmail = (e) =>{
        this.setState({valorEmail: e.target.value})
    }

    
    postApi = () =>{
        const body = {
            "name":this.state.valorNome,
            "email":this.state.valorEmail
        };
        
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",body,{
            headers:{
                authorization:"gabriel-mina-cruz"
            }
        }).then((response) =>{
            console.log(response);
            alert("Usuario Criado com sucesso");
            this.setState({ valorNome: "", valorEmail: "" });    
        }).catch((e) =>{
            alert("Erro",e.message);
            console.log(e.response.data);
        })
    }

    render(){        
        return(
            <div>
                <label>Insira teu Nome</label>
                <input type="text" value={this.state.valorNome} onChange={this.onChangeNome} />
                
                <label>Insira teu Email</label>
                <input type="email" value={this.state.valorEmail} onChange={this.onChangeEmail} required />
                
                <button onClick={this.postApi}>inserir</button>               
            </div>
        )
    }
}