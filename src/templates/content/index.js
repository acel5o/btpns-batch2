import React, { Component } from 'react';
import "./style.css";
import Gambar from "./react.png"
import {Card,CardIsi,Tabel,Label,Input,Container} from "../../components"
class Contents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            // Kesatu
                // <div className="container-card">
                //     <Card>  
                //         <CardIsi gambar={Gambar} title="ReactJS">
                //             React Js adalah sebuah library JavaScript yang di buat oleh facebook. 
                //             React bukanlah sebuah framework MVC. React adalah library yang bersifat composable user interface, 
                //             yang artinya kita dapat membuat berbagai UI yang bisa kita bagi menjadi beberapa komponen.
                //         </CardIsi>
                //     </Card>
                // </div>

            //Kedua
            // <>
            // <div className="judul">
            //     Data Kontak
            // </div>
            // <Container>
            //     <Tabel />
            // </Container>
            // </>

            // Ketiga  
            <>
            <div className="judul">
                 REGISTRATION
            </div>
            <Container>
            <form className="daftar">
                <Label nmlabel="fname">Nama</Label>
                <Input type="text" id="fname" name="fname" />
                <Label nmlabel="lname">Email</Label>
                <Input type="text" id="lname" name="lname" />
                <Label nmlabel="lname">Password</Label>
                <Input type="password" id="lname" name="lname" />
                <Input type="reset" value="Reset" name="ulang" />
                <Input type="button" value="Save" name="kirim" />
            </form>
            </Container>
            </>
        );
    }
}
export default Contents;