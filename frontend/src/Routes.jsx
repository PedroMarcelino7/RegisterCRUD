import { Routes, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import UserCrud from './Components/User/UserCrud'

export default props =>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/users' element={<UserCrud />} />
        <Route path='*' element={<Home />} />
    </Routes>