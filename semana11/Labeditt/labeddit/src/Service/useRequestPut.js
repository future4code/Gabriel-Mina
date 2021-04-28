// import axios from "axios";

// const useRequestPut =(direction,id) =>{

//     const vote = async () => {
//         const body = {
//             direction: direction
//         }

//         try {
//             const response = await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/vote`, body, {
//                 headers: {
//                     Authorization: localStorage.getItem("token")
//                 }
//             });
//             console.log(response.data);
//         } catch (erro) {
//             console.log(erro.response.data);
//         }
//     }

  
// }
// export default useRequestPut;