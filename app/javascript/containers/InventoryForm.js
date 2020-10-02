import React, { Component } from 'react';

import { client } from  '../libs/apollo';
import { CATEGORIES } from '../libs/queries';

class InventoryForm extends Component {
  state = {
    loading: true,
    form: {}
  }


  render() {
    return (
      <form>
        <input type="text" placeholder="Name"/>


      </form>
    )
  }
}

export default InventoryForm;
