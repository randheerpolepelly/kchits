import React from 'react';
import TitleComp from "./titleComponent.js";

export default class ContactUsComp extends React.Component {
  componentDidMount() {
  	 function initMap() {
        var kchitsOfc = {lat: 17.356918, lng: 78.519953};
        var map = new google.maps.Map(document.getElementById('kchitsMap'), {
          zoom: 15,
          center: kchitsOfc
        });
        var marker = new google.maps.Marker({
          position: kchitsOfc,
          map: map
        });
      }
    initMap();
  }
  render() {
    return (
      <div className="col-sm-12">
    	<TitleComp title="Contact Us at:" />
        <div className="col-sm-6">
			<p>
				HNo: 11-13-192/B, Green Hills Colony
			</p>
			<p>
				Road No. 2A, Saroor Nagar,
			</p>
			<p>
				Hyderabad - 500035
			</p>
			<p>
				Ph: +91 9703132630
			</p>
			<p>
				Customer Care: +91 9703132630
			</p>
			<p>
				Email: <a href="mailto: chinna.guru.95@gmail.com" target="_top">chinna.guru.95@gmail.com</a>
			</p>
		</div>
		<div div className="col-sm-6">
			<div id="kchitsMap"></div>
		</div>
      </div>
    );
  }
}