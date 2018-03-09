/* 

*/
import React, {Component} from 'react';
import Card from '../Card/Card';

class List extends Component{
	render(){
		var cards  = this.props.cards.map((card)=>{
			return <Card id={card.id}
					title={card.title}
					description={card.descripton}
					tasks={card.tasks}/>
	
		});

		return (
			<div className="list">
				<h1>{this.props.card.title}</h1>
			</div>
		);
	}
}

export default List;


