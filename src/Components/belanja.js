import React from 'react';
import $ from 'jquery';

class Belanja extends React.Component{
    bind = (event) => {
        this.setState({[event.target.name] : event.target.value});
    }
    SaveBelanja = (event) => {
        event.preventDefault();

        let temp = this.state.belanja;

        if(this.state.action == "insert"){
            temp.push({
                id: this.state.id,
                barang: this.state.barang
            });
        }else if(this.state.action == "update"){
            let index = temp.findIndex(item => item.id == this.state.id);

            temp[index].barang = this.state.barang;
        }

        this.setState({belanja : temp});

        $("#modal").modal('hide');
    }

    Add = () => {
        this.setState({
            id: "",
            barang: "",
            action: "insert"
        });
    }

    Edit = (item) => {
        this.setState({
            id: item.id,
            barang: item.barang,
            action: "update"
        });
        $("#modal").modal('show');
    }

    Drop = (index) => {
        let temp = this.state.belanja;

        temp.splice(index,1);

        this.setState({belanja : temp});
    }

    constructor(){
        super();
        this.state = {
            belanja : [
                {id: "1", barang: "Kentang"},
                {id: "2", barang: "Wortel"},
                {id: "3", barang: "Bawang Putih"}
            ],
            id: "",
            barang: "",
            action: ""
        };
    }

    render(){
        return(
            <div className="belanjaa">
                <div className="container">
                <h1>Merkurius Mart</h1>
                <table className="table table-striped bg-dark text-white">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Nama Barang</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                {this.state.belanja.map((item,index) => {
                    return(
                            <tbody key={index}>
                                <tr>
                                    <th>{item.id}</th>
                                    <th>{item.barang}</th>
                                    <th>
                                        <button className="btn btn-sm btn-info m-1"
                                                onClick={() => this.Edit(item)} data-tonggle="modal"
                                                data-target="#modal">Edit</button>
                                        <button className="btn btn-sm btn-danger m-1"
                                                onClick={() => this.Drop(index)}>Hapus</button>
                                    </th>
                                </tr>
                            </tbody>
                        
                    );
                })}</table>
                <button className="btn btn-sm btn-success m-1" onClick={this.Add} data-toggle="modal"
                        data-target="#modal">Tambah Data</button>

                {/* elemen form modal */}
                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>Merkurius Mart</h5>
                            </div>
                            <form onSubmit={this.SaveBelanja}>
                                <div className="modal-body">
                                    ID
                                    <input type="text" name="id" className="form-control" onChange={this.bind} value={this.state.id}/>
                                    Nama Barang 
                                    <input type="text" name="barang" className="form-control" onChange={this.bind} value={this.state.barang}/>
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
export default Belanja;