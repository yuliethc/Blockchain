import React from 'react';
import { Row, Col, Grid, Button, Glyphicon } from 'react-bootstrap';
import {GridList, GridTile} from 'material-ui/GridList';

import ItemBrowser from './ItemBrowser';

const styles = {
  gridList: {
    overflowY: 'auto',
  },
};

class ListBrowser extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let items = this.props.items.map((item) => {
			return ( <GridTile title= {item.title} subtitle = {item.price +item.currency}> 
						<ItemBrowser key={item.txid} data={item}/>
					</GridTile>)
		});	
		return (
			<Row>
				<Col xs={12}>
					<GridList
						cellHeight= {'auto'}
      					style={styles.gridList}
   			 		>	
   			 			{items}
					</GridList>
				</Col>
			</Row>
		);
	}
}

export default ListBrowser;
