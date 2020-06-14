import React from 'react';
import './content.css';
import ImageOne from './cervello.jpg';
import ImageTwo from './images.png'



class Content extends React.Component {

	render() {
		return (

			<div>
				<h2 className='title first featurette-heading' >Prima di tutto, mi presento:</h2>
				<h3 className='title featurette-heading'>Sono Falchi Luca sono un Licensed NLP Coach e Master Pratictioner.</h3>
				<p className='and text-muted'>Ovvero?</p>
				<section className="content name">
					<p>Un modo un po’ macchinoso per dire che le mie competenze rientrano nel campo dello sviluppo personale.
					Chi si rivolge a me avrà un’ aiuto concreto nel raggiungere i propri obbiettivi.
					Quante volte vi è capitato di pensare:” Oh vorrei tanto raggiungere quell’obbilettivo”?
				Quante ancora vi demoralizzate o peggio vi autosabotate con scuse inutili che per qualche motivo non riuscite a contrastare?</p>

					<p>
						Bhe qui entro in gioco io, il tuo personal Coach!!
						Il tutto con metodi, tecniche e una comunicazione positiva inconscia, che porterà la vostra mente ad aprirsi alle nuove possibilità,a liberarsi dalle catene invisibili che la mente vi impone e ad aprirvi ai nuovi orizzonti, scoprirete cosi di essere capaci di cose straordinarie.
				</p>
					<p>
						il mio lavoro consiste in farti ottenere tutto questo.
						In Quasi Dieci anni di esperienza in questo settore ho visto Le persone che si sono affidate alle mie consulenze prendere in mano la loro vita, esattamente come ho fatto io a suo tempo, e farne qualcosa di meraviglioso.

				</p>

				</section>
				<div className='contentName'>
				<hr className="featurette-divider" />
				<div className="row featurette">
					<div className="col-md-7">
						<h2 classNames="featurette-heading">Ma che cos'è esattamente la Neuro Linguistica? <span class="text-muted">provo a spiegarlo in breve:
							</span></h2>
				<p className="lead">La programmazione neuro linguistica (PNL), è un metodo di comunicazione e un sistema di "life coaching” o meglio definito come «un approccio alla comunicazione volta allo sviluppo personale.
				ideato in CaliclassNamefornia negli anni settanta del XX secolo da Richard Bandler e John Grinder. Il nome deriva dall'idea che ci sia una connessione fra i processi neurologici ("neuro"), il linguaggio ("linguistico") e gli schemi comportamentali appresi con l'esperienza ("programmazione"), affermando che questi schemi possono essere organizzati per raggiungere specifici obiettivi. 
				L'idea centrale della PNL è che l’individuo comunichi interamente con quelle che sono le sue convenzioni sociali il suo linguaggio e fisiologia affinché possa percepirne i vantaggi e trarne forza e stimoli necessari al raggiungimento di obiettivi,  serenità individuale o sociale,
				 l'interpretazione soggettiva di questa struttura dà significato al mondo. Modificando i significati attraverso una trasformazione della struttura percettiva .
				la persona può intraprendere cambiamenti di atteggiamento e di comportamenti. La percezione del mondo, e di conseguenza la risposta ad esso, possono essere modificate applicando opportune tecniche di cambiamento.
				La PNL ha tra i suoi scopi, quindi, l'obiettivo di sviluppare abitudini/reazioni di successo, amplificando i comportamenti  efficaci e diminuendo quelli indesiderati.
				Il cambiamento può avvenire anche riproducendo ("modellando") precisamente i comportamenti delle persone di successo allo scopo di creare un nuovo "strato" di esperienza (una tecnica chiamata modeling, o modellamento).

							</p>
					</div>
					<div className="col-md-5">
						<img src={ImageOne} className='imageOne'/>
					</div>
				</div>
				<hr className="featurette-divider" />

				<div className="row featurette">
					<div className="col-md-7 order-md-2">
						<h2 className="featurette-heading">	Mi occupo di: <span class="text-muted">See for yourself.</span>
						</h2>
						<p className="lead"> 
						<ul>
				            <li> Sviluppo personale.</li>
				            <li> Coaching personale.</li>
				            <li>Gestione dello stress.</li>
				            <li> Uso di un linguaggio di precisione per raggiungere gli obbiettivi.</li>
				            <li> tecniche specifiche che puntano ad aumentare in maniera significativa la capacità relazionale.</li>
				            <li> raggiungere alti livelli di focalizzazione e concentrazione.</li>
				            <li>Imparare a cogliere le opportunità.</li>
				            
	            
            			</ul>
             				</p>
					</div>
					<div className="col-md-5 order-md-1">
						<img src={ImageTwo} className='imagetwo'/>
					</div>
				</div>
				<div className="contatti" id="contatti">
					<h2>Contatti</h2>
					<p> Se Ti interessa approfondire l'argomento o ti rivedi in uno degli esempi sopra illustrato, che aspetti? Contattami ad uno dei seguenti indirizzi:</p>
					<div className="container">
						<div className="row">
							<div className="column col-sm-4 mycol">
								<a className="btn btn-primary btn-lg megabutton" href="mailto:luka@merda.com">Inviami una mail</a>
							</div>
							<div className="column col-sm-4 mycol">
								<a className="btn btn-primary btn-lg megabutton" href="skype:lukaMerda">Aggiungimi su Skype</a>
							</div>
							<div className="column col-sm-4 mycol">
								<a className="btn btn-primary btn-lg megabutton" href="https://www.udemy.com/lucaMerda">Raggiungimi su Udemy</a>
							</div>
						</div>
					</div>




				</div>
				</div>

			</div>
		);
	}
}

export default Content;