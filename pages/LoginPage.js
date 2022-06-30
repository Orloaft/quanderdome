import { signIn, useSession } from "next-auth/react";
import styles from "../styles/LogInPage.module.scss";
import { useState } from "react";
import { Particles } from "../components/Particles/Particles";

export default function LoginPage({ logIn }) {
  const [nameInput, setNameInput] = useState("");
  const { data: session, status } = useSession();
  const handleNameChange = (e) => {
    setNameInput(e.target.value);
  }; //if authentication was succesful render login page to let user choose a name
  // if (session) {
  //   return (
  //     <div className={styles.container}>
  //       <Particles />
  //       <section className={styles.login}>
  //         <h1 className={styles.login__heading}> Welcome to the QuanderDome</h1>
  //         <form className={styles.sign_in_form}>
  //           <input
  //             onChange={(e) => {
  //               handleNameChange(e);
  //             }}
  //             className={styles.input}
  //             placeholder="username"
  //           ></input>
  //           <button
  //             onClick={(e) => {
  //               e.preventDefault();
  //               if (nameInput.length > 4) {
  //                 window.localStorage.setItem("username", nameInput);
  //                 logIn();
  //               } else {
  //                 alert("please use at least 5 characters");
  //               }
  //             }}
  //             className={styles.button}
  //           >
  //             Sign in
  //           </button>
  //         </form>
  //       </section>
  //     </div>
  //   );
  // } else {
    //if session cat be fetched then render button for nextAuth sign in
    return (
      <div className={styles.container}>
        <section className={styles.login}>
          <h1 className={styles.login__heading}> Welcome to the QuanderDome</h1>
          <a
            href={`/api/auth/signin`}
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            Sign in
          </a>
        </section>
      </div>
    );
  }
}
