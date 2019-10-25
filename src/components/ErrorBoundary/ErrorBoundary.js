/* NPM modules */
import React, { Component } from 'react';
/* Material UI */
import Container from '@material-ui/core/Container';
/* Own modules */
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
/* Assets */
/* CSS */

/**
 * Error Boundary
 */
export default class ErrorBoundary extends Component {
    /**
     * Constructor
     */
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    /**
     * Component did catch (necesario para el error boundary)
     */
    componentDidCatch(error, errorInfo) {
        console.log(error.message);
        console.log(error.stack);
        console.log(errorInfo);
        this.setState({ error });
    }

    /**
     * Render
     */
    render() {
        if (this.state.error) {
            return (
            <React.Fragment>
                <Header handleSearch={this.handleSearch}/>
                <Container>
                    <main className='Home'>
                        <h1>Se ha producido un error incontrolado en la aplicación.</h1>
                        <h2>Contacte con el administrador de la página.</h2>
                    </main>
                </Container>
                <Footer/>
            </React.Fragment>
            );
        } else {
            return this.props.children;
        }
    }
}