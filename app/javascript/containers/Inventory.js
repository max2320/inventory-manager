import React, { Component } from 'react';
import Item from  '../components/Item';

import { client } from  '../libs/apollo';
import { INVENTORY } from '../libs/queries';

class Inventory extends Component {
  state = {
    loading: true
  }


  async fetchData(){
    const variables = {};

    client.query({
      query: INVENTORY,
      variables: variables
    }).then(({ data: { inventories } }) => {
      console.log(inventories)
      if(!inventories) { return; }

      this.setState({ inventories, loading: false });
    });
  }

  componentDidMount(){
    this.fetchData()
  }

  renderList(){
    const { inventories } = this.state;

    return inventories.map((item)=>(<Item {...item} />));
  }

  render() {
    const { loading, inventories } = this.state;

    if(loading) return 'Loading';

    return (
      <div>
        {this.renderList()}
      </div>
    )
  }
}

Inventory.propTypes = {
}


export default Inventory;
