import React from "react";
import { contactText } from "../constants";

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact__inner">
                <h2 className="contact__title">Contact</h2>
                <div className="contact__lines" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                {/* <div className="contact__text">
                    <div className="text">
                        <div>
                            <a href="https://open.kakao.com/o/gM7YLzwf" target="_blank" rel="noreferrer">KAKAO : Webstroyboy</a>
                        </div>
                        <div>
                            <a href="mailto:webstoryboy@naver.com" target="_blank" rel="noreferrer">mail : WEBSTORYBOY@NAVER.COM</a>
                        </div>
                    </div>
                </div> */}
                <div className="contact__text">
                    <div className="text">
                        {contactText.map((contact, key) => (
                            <div key={key}>
                                <a
                                    href={contact.link}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    {contact.title}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="contact__lines bottom" aria-hidden="true">
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
        </section>
    );
};

export default Contact;