import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";
 

export default class Mydocument extends Document {
    render(){
        return(
            <Html lang="en">
                <Head></Head>
                <body>
                    <Main/>
                     <NextScript/>
                </body>
            </Html>
        );
    }
}

Mydocument.getInitialProps = async (ctx) =>{
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => {
        return originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />)
        });
    };
    const InitialProps = await Document.getInitialProps(ctx);
    return{
        ...InitialProps,
        styles: [
            ...React.Children.toArray(InitialProps.styles), 
            sheets.getStyleElement(),
        ]
    }
};