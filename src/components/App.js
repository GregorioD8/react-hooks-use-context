import React, { useContext } from "react";
import Header from "./Header";
import Profile from "./Profile";

//import the provider
import { UserProvider } from "../context/user"
import { ThemeContext } from "../context/theme"

function App() {
  const { theme } = useContext(ThemeContext)

  //dont need this anymore
  // const [user, setUser] = useState(null);
  return (
    <main className={theme}>
      {/* wrap components that need access to context data in the provider
      and remove the user prop */}
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
