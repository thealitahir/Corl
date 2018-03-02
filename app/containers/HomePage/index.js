import React from 'react';
import Corl from '../../components/home/Corl/Corl';
import Banner from '../../components/home/Banner/Banner';
import Benifits from '../../components/home/Benifits/Benifits';
import Revenue from '../../components/home/Revenue/Revenue';
import Works from '../../components/home/Works/Works';
import Model from './Model';

class HomePage extends React.PureComponent {
  componentWillMount() {
    document.title = "Revenue share on the blockchain | Corl";
  }
  state = { showModel: false }
  renderModel() {
    return (
      <Model
        closeModel={(value) => {
          this.setState({ showModel: value })
        }}
      />
    )
  }

  render() {
    return (
      <div>
        <div className="main-content home-content">
          <Banner
            setModelFlag={(value) => {
              this.setState({ showModel: value })
            }}
          />
          <Corl
            setModelFlag={(value) => {
              this.setState({ showModel: value })
            }}
          />
          <Works />
          <Benifits
            setModelFlag={(value) => {
              this.setState({ showModel: value })
            }}
          />
          <Revenue />
        </div>
        {this.state.showModel ? this.renderModel() : null}
      </div>



    );
  }
}

export default HomePage;