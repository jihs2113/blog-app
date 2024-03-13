import { useState } from 'react';
import { app } from 'firebaseApp';
import { getAuth } from 'firebase/auth';

import Router from './components/Router';

function App() {
    const auth = getAuth(app);
    //auth 속성 중에 currentUser가 null이면 로그인 하지 않음을 나타낸다.
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);
    return <Router isAuthenticated={isAuthenticated} />;
    //true false로 반환
}

export default App;
