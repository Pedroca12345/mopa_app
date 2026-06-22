import { LoginPage } from './src/pages/LoginPage';
import { UserContextProvider } from './src/providers/UserContextProvider';

export default function App() {
  return (
    <UserContextProvider>
      <LoginPage />
    </UserContextProvider>
  );
}