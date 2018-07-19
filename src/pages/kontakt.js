import React, { Component } from "react";

class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <h1><span>Kontakt</span></h1>

                <div className="row">
                    <div className="col-md-6" >
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2523.5499233966593!2d15.2681392563446!3d50.76537865541858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ecc75a2b193f1%3A0xbee8c7ddd6105b01!2sAlbrechtice+v+Jizersk%C3%BDch+hor%C3%A1ch+304%2C+468+43+Albrechtice+v+Jizersk%C3%BDch+hor%C3%A1ch%2C+%C4%8Cesk%C3%A1+republika!5e0!3m2!1scs!2scz!4v1425743120021" />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="address">
                            <h2 style={{ marginTop: 0}}>Adresa</h2>
                            <address>
                                <strong>Spolek Naděje 2011</strong><br/>
                                468 43 Albrechtice v Jizerských horách 304<br/>
                                Česká republika<br/>
                                <abbr title="Identifikační číslo organizace">IČ:</abbr> 01567730
                            </address>

                            <h2>Zástupci spolku</h2>
                            <address>
                                <strong>Martina Fikarová</strong><br/>
                                <a href="mailto:#">fikama@centrum.cz</a>
                            </address>
                            <address>
                                <strong>Miroslav Evják</strong><br/>
                                <a href="mailto:#">miroslav.evjak@gmail.com</a>
                            </address>
                            <address>
                                <strong>Věra Engeová</strong><br/>
                                <a href="mailto:#">vera.engeova@seznam.cz</a>
                            </address>
                        </div>
                    </div>
                </div>
                <br/>

                <div className="row">
                    <div className="col-md-12">
                        <div className="bank-info">
                            <h4 className="text-center">Číslo účtu pro sponzory:</h4>
                            <p className="account">670100-2208920235/6210</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage