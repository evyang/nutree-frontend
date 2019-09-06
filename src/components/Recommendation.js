import React from 'react';
import Page from "../components/Page";
import '../styles/App.css';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

class Recommendation extends React.Component {
  // constructor (props) {
  //   super(props);
  // }

  render () {
    return (<Page>
      <div className='bg_pic'><h1>Your Customized Recommendation to pack for Ghana</h1>
        <div className="app">
          <div style={{marginLeft: '5%'}}>
            <div style={{textAlign: 'center'}}><Card> <CardImg top width="100%"
                                                               src="https://media.istockphoto.com/photos/pile-of-raw-basmati-rice-with-a-spoon-picture-id519309790?k=6&m=519309790&s=612x612&w=0&h=wMK6lbBadGe4dC13B5htyB1IDq1AHfaNwZR-vnKWbD8="
                                                               alt="Card image cap"/> <CardBody>
              <div style={{padding: '5 %'}}><CardTitle>Ghana's main nutrient deficients are...</CardTitle>
                <div style={{textAlign: 'left'}}><CardText>
                  <ul style={{marginLeft: '2%'}}>
                    <li>Fats</li>
                    <li>Fiber</li>
                    <li>Folic Acid</li>
                    <li>Protein</li>
                  </ul>
                </CardText></div>
              </div>
            </CardBody> </Card></div>
          </div>
        </div>
      </div>
    </Page>);
  }
}

export default Recommendation;
