import React from 'react';
import './content.css';
import Image from 'react-bootstrap/Image';




class Content extends React.Component {

    render() {
        return (
        	
        	<div>
	        	<h2 className='title first'>Prima di tutto, mi presento:</h2>
				<h3 className='title'>Sono Falchi Luca sono un Licensed NLP Coach e Master Pratictioner.</h3>
				<p className='and'>Ovvero?</p>
			<section className="content name">
               <p>Un modo un po’ macchinoso per dire che le mie competenze rientrano nel campo dello sviluppo personale.
				Chi si rivolge a me avrà un’ aiuto concreto nel raggiungere i propri obbiettivi.
				Quante volte vi è capitato di pensare:” Oh vorrei tanto raggiungere quell’obbilettivo”?
				Quante ancora vi demoralizzate o peggio vi autosabotate con scuse inutili che per qualche motivo non riuscite a contrastare?</p>
			
				<p>
	            Bhe qui entro in gioco io, il tuo personal Coach!!
				Il tutto con metodi, tecniche e una comunicazione positiva inconscia, che porterà la vostra mente ad aprirsi alle nuove possibilità,a liberarsi dalle catene invisibili che la mente vi impone e ad aprirvi ai nuovi orizzonti, scoprirete cosi di essere capaci di cose straordinarie.
				</p>
            </section>
            <section className="content name">
               <p>
            	il mio lavoro consiste in farti ottenere tutto questo.
				In Quasi Dieci anni di esperienza in questo settore ho visto Le persone che si sono affidate alle mie consulenze prendere in mano la loro vita, esattamente come ho fatto io a suo tempo, e farne qualcosa di meraviglioso.

				</p>
				

            </section>

            </div>
        );
    }
}

export default Content;