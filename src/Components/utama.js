import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda';
import Belanja from './belanja';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route exact path="/belanja" component={Belanja}/>
    </Switch>
)

export default Utama;