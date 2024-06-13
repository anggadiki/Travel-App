import HomeScreen from "@/components/HomeScreen";
import { UserProvider } from "@/contexts/userContexts";

const App = () => {
  return (
    <UserProvider>
      <HomeScreen />
    </UserProvider>
  );
};

export default App;
