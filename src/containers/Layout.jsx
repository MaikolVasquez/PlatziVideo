import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Layout = ({ children }) => {

    return (

        <>       
            { children }
        <Footer />
        </>

    )

}

export default Layout