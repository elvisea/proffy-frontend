import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Landing from '../src/pages/Landing'
import TeacherList from '../src/pages/TeacherList'
import TeacherForm from '../src/pages/TeacherForm'

const Routes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter>
    )
}

export default Routes;