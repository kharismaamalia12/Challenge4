import React from 'react';
import './belanja.css';
import Gambar1 from '../images/1.svg';

class Beranda extends React.Component{
    render(){
        return(
            <div>
                <selection className="banner">
                    <div className="textBx">
                        <h2 className="display-4">
                            <br/><span>MERKURIUS MART</span>
                        </h2>
                        <h3>Penuhi kebutuhan di masa pandemi ini belanja online juga menjadi<br/> 
                            solusinya untuk melengkapi kebutuhan masyarakat sehari-hari.Belanja<br/>
                            online dinilai menjadi solusi tpat karena masyarkat tidak perlu ke<br/> 
                            luar rumah, sehingga dapat menghindari risiko penularan Covid-19.
                        </h3>
                        <a className="btn btn-dark" href="https://www.happyfresh.id/">Learn More</a>
                    </div>
                    <img src={Gambar1} alt="gambar1" className="gambar"></img>
                    <br/><br/><br/>
                </selection>   
            </div>
        );
    }
}

export default Beranda;