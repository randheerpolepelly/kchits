import React from 'react';
import TitleComp from "./titleComponent.js";

export default class AboutUsComp extends React.Component {
  render() {
    return (
      <div>
        <TitleComp title="About Us:" />
        <h3> Small is Beautiful, Always.</h3>
        <p>
        	Our business philosophy is designed to help people protect themselves against a temporary or permanent loss of livelihood. providing them a reasonable safety net and economic support, as they go through life's ups and downs.That's why we popularise Chit Schemes involving a monthly instalment of as little as Rs.250.So that even the poorest among us feels enthused and empowered to save and to borrow safely. The same principle applies to our enabling credit access to tiny businesses, matching their capabilities and empowering their spirit of enterprise. For instance, our Enterprise Funding is for small amounts, with an average disbursement of Rs.2 lakhs.
		</p>
    	<h3>With You, Every Step of the Way.</h3>
    	<p>
    	No wonder, Koppuravuri Chits have grown to be the Numero Uno in the Chit Funds industry. Propagating the message of small savings and responsible money management. Creating immense social capital. That ultimately defines our bottomline.
        Empowering many families through prosperity. Disbursing crores of rupees to chit Subscribers and Small/Medium Enterprises.
       	We are dedicated to your financial success and wellbeing. Come, rediscover the fine art of money management.However small your saving. However big your dreams. We have an appropriate solution and financial instrument for you.Every step of your auspicious journey through life.
		</p>
      </div>
    );
  }
}