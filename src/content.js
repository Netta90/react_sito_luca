import React from 'react';
import './content.css';
import ImageOne from './storia.png';
import ImageTwo from './images.png'



class Content extends React.Component {

	render() {
		return (

			<div className='style'>
				<a name="fehuea"></a>
				<h2 className="first featurette-heading " >Prima di tutto, mi presento:</h2>
				<h3 className="featurette-heading text-center">Sono Falchi Luca sono un Licensed NLP Coach e Master Pratictioner.</h3>
				<section className="row">
					<div className="col-md-4">
						Un modo un po’ macchinoso per dire che le mie competenze rientrano nel campo dello sviluppo personale.
						Chi si rivolge a me avrà un aiuto concreto nel raggiungere i propri obiettivi.
						Quante volte vi è capitato di pensare: ”Oh, vorrei tanto raggiungere quell’obiettivo”?
						Quante ancora vi demoralizzate o - peggio - vi autosabotate con scuse inutili che per qualche motivo non riuscite a contrastare?
					</div>

					<div className="col-md-4">
						Beh, qui entro in gioco io: il tuo personal Coach!
						Il tutto con metodi, tecniche e una comunicazione positiva inconscia, che porterà la vostra mente ad aprirsi alle nuove possibilità, a liberarsi dalle catene invisibili che la mente vi impone e ad aprirvi ai nuovi orizzonti: scoprirete cosi di essere capaci di cose straordinarie!
					</div>

					<div className="col-md-4">
						Il mio lavoro consiste nel farti ottenere tutto questo.
						In quasi <strong>dieci anni</strong> di esperienza in questo settore ho visto le persone che si sono affidate alle mie consulenze prendere in mano la loro vita, esattamente come ho fatto io a suo tempo, e farne qualcosa di meraviglioso!
					</div>

				</section>
				<div>
					<hr className="featurette-divider" />
					<div className="row featurette background">
						<div className="col-md-7">
							<div className="no-padding">
								<h2 className="featurette-heading text-center">Ma che cos'è esattamente la Neuro Linguistica? <span class="text-muted ">Provo a spiegarlo in breve:
							</span></h2>
								<p className="left">La Programmazione Neuro Linguistica (PNL) è un metodo di comunicazione e un sistema di life coaching anche definito come un approccio alla comunicazione volta allo sviluppo personale.
								Ideato in California negli anni Settanta del XX secolo da Richard Bandler e John Grinder, il nome deriva dall'idea che ci sia una connessione fra i processi neurologici ("neuro"), il linguaggio ("linguistico") e gli schemi comportamentali appresi con l'esperienza ("programmazione"), affermando che questi schemi possono essere organizzati per raggiungere specifici obiettivi.
								L'idea centrale della PNL è che l’individuo comunichi interamente con quelle che sono le sue convenzioni sociali, il suo linguaggio e fisiologia affinché possa percepirne i vantaggi e trarne la forza e gli stimoli necessari al raggiungimento di obiettivi, di serenità individuale o sociale.
								L'interpretazione soggettiva di questa struttura da significato al mondo, modificando i significati attraverso una trasformazione della struttura percettiva.
								La persona può intraprendere cambiamenti di atteggiamento e di comportamento. La percezione del mondo e - di conseguenza - la risposta ad esso possono essere modificate applicando opportune tecniche di cambiamento.
								La PNL ha tra i suoi scopi, quindi, l'obiettivo di sviluppare abitudini/reazioni di successo, amplificando i comportamenti  efficaci e diminuendo quelli indesiderati.
								Il cambiamento può avvenire anche riproducendo ("modellando") precisamente i comportamenti delle persone di successo allo scopo di creare un nuovo "strato" di esperienza (una tecnica chiamata modeling, o modellamento).
							</p>
							</div>
						</div>
						<div className="col-md-5 no-padding">
							<img src={ImageOne} className='imageOne' />
						</div>
					</div>
					<hr className="featurette-divider" />

					<div className="row featurette title">

						<div className="col-md-7 order-md-2 no-padding">
							<h2 className="featurette-heading">Di cosa mi occupo? <span className="text-muted">See by yourself!</span>
							</h2>
							<p>
								<ul >
									<li>Sviluppo personale</li>
									<li>Coaching personale</li>
									<li>Gestione dello stress</li>
									<li>Uso di un linguaggio di precisione per raggiungere gli obbiettivi</li>
									<li>Tecniche specifiche che puntano ad aumentare in maniera significativa la capacità relazionale</li>
									<li>Raggiungere alti livelli di focalizzazione e concentrazione</li>
									<li>Imparare a cogliere le opportunità</li>
								</ul>
							</p>

						</div>
						<div className="col-md-5 order-md-1 imagetwo">
							<img src={ImageTwo} />
						</div>
					</div>
					<div className="contatti" id="contatti">
						<h2>Contatti</h2>
						<p> Se ti interessa approfondire l'argomento o ti rivedi in uno degli esempi sopra illustrato, che aspetti? Contattami con una delle seguenti modalità:</p>
						<div className="container">
							<div className="row">
								<div className="column col-sm-4 mycol">
									<a className="btn btn-primary btn-lg megabutton" href="mailto:falchiluca1988@gmail.com">Inviami una mail</a>
								</div>
								<div className="column col-sm-4 mycol">
									<a className="btn btn-primary btn-lg megabutton" href="skype:https://l.facebook.com/l.php?u=https%3A%2F%2Fjoin.skype.com%2Finvite%2FnX1KI0CWEIrU%3Ffbclid%3DIwAR3aVuBY7XTDBaFF0UjtGVQLlR-iPYhjfIuvY-Yt3wh9UE8nCPA4Uw3qOGA&h=AT1v3pzzSCNoz037JAMxytXPPPHyHiHne8ENtUNwQZKP02oY8tJ5-o5Zeui3rIUe8HwStoGny-Rcby0coEHeJ0_yFyooyqf4iDu0axvE_Z5dtepjL7qJkaSI8OxBF4J0n5Q">Aggiungimi su Skype</a>
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