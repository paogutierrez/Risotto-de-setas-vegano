import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Swal from "sweetalert2";
import { google } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const loginEmailPassword = (email, password) =>{
  return (dispatch) => {
    const auth = getAuth ();
    signInWithEmailAndPassword(auth,email,password)
    .then(({user}) => {
      dispatch(
        loginSincrono(user.uid,user.displayName)
        )
        console.log(
          Swal.fire({
            title: 'Bienvenido',
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
        )
    })
    .catch(e =>{
      console.log(e);
      console.log(
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Usuario no registrado',
          
        })
      )
    })
  }
}

export const loginGoogle = () => {

  return(dispatch) => {
    const auth = getAuth();
    signInWithPopup(auth, google)
      .then(({ user }) => {
        dispatch(loginSincrono(user.uid, user.displayName));
      })
      .catch((e) => {
        console.log(e);
      });
  }
};

export const loginSincrono = (id, displayName) => {
  return {
    type: types.login,
    payload: {
      id,
      displayName,
    },
  };
};
