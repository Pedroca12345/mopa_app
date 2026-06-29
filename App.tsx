import { Navigation } from "./src/routes/stack/index"
import { UserContextProvider } from './src/providers/UserContextProvider';

export default function App() {
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
}