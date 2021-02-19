import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './Config'

export const initializeHandel = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
}

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();


export const handleSignIn = () => {
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
      const {displayName, email, photoURL} = res.user
      const signInUser = {
        isSignIn: true,
        name:displayName,
        email:email,
        photo:photoURL,
        success:true
      }
      return signInUser;
     
    })
    .catch(err => {
      console.log(err);
      console.log(err.message);
    })
   }

   
  export const handleSignOut = () => {
    return firebase.auth().signOut()
    .then(res => {
      const signOutUser = {
        isSignIn:false,
        name:'',
        email:'',
        password:'',
        error:'',
        success:false,
        photo:''
      }
      return signOutUser
      
    })
    .catch(err => {
      console.log(err)
    });
  }
export const creactSignInWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
      .then( res => {
        const newUserInfo = res.user
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateName(name);
        return newUserInfo;
        
       
      })
      .catch(error => {
        const newUserInfo = {}
        newUserInfo.error = error.message
        newUserInfo.success = false;
        return newUserInfo;
      });
}

export const signWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        return newUserInfo;
        
   
    })
    .catch(error => {
      const newUserInfo = {}
      newUserInfo.error = error.message
      newUserInfo.success = false;
      return newUserInfo;
  });
}

 const updateName = name =>{
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
      
    }).then(function() {
      console.log('update successful')
    }).catch(function(error) {
      console.log(error)
    });

}



  
 export const fbIdLogIn =  () => {
   
  }
