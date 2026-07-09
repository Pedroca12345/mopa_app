import { Navigation } from "./src/routes/stack/index"
import { UserContextProvider } from './src/providers/UserContextProvider';
import { PartContextProvider } from "./src/providers/PartContextProvider/PartContextProvider";

export default function App() {
  return (
    <UserContextProvider>
      <PartContextProvider>
        <Navigation />
      </PartContextProvider>
    </UserContextProvider>
  );
}