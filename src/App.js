

  import Header  from "./Header";
  import Sidebar from "./Sidebar";
  import Data from "./Data";
  import { auth, provider } from './firebase';
  import { useState } from 'react';


function App() {
  
  const [user, setUser] = useState(null);

  const signIn = () => {
    auth.signInWithPopup(provider)
            .then(({ user }) => setUser(user))
            .catch(err => alert(err))
  }
  return (
    <>
    {user ? (
      <>
        <Header photoURL={user.photoURL} />
        <div className="App">
          <Sidebar />
          <Data />
        </div>
      </>
    ) : (
          <div className="LoginWrapper">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Google_Drive_icon_%282020%29.svg/2295px-Google_Drive_icon_%282020%29.svg.png" alt="gdrive" />
            <button onClick={signIn}>Login to Google Drive</button>
          </div>
    )
    }
    </>
  );



}

export default App;
