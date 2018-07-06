import React from 'react'
import styles from './styles.module.scss'
import Helmet from 'components/Helmet'
import Link from 'components/Link'

import config from 'config'

export default function PrivacyPolicy() {
  return (
    <div className={styles.wrapper}>
      <Helmet
        title='Privacy Policy'
        description='Our Privacy Policy'
      />
      <div className={styles.header} />
      <div className={styles.row}>
        <div className={styles.col}>
          <p><i>*Updated September 2017</i></p>
          <h1><strong>Privacy Policy</strong></h1>
          <h2>1. Acknowledgment and Acceptance of Terms</h2>
          <p>This site is committed to protecting your privacy. This Privacy Statement sets forth our current privacy practices with regard to the information we collect when you or your computer interact with our website. By accessing {config.name}, you acknowledge and fully understand {config.name} Privacy Statement and freely consent to the information collection and use practices described in this Website Privacy Statement.</p>
          <h2>2. Participating Merchant Policies</h2>
          <p>Related services and offerings with links from this website, including vendor sites, have their own privacy statements that can be viewed by clicking on the corresponding links within each respective website. Online merchants and others who participate in {config.name} services are encouraged to participate in industry privacy initiatives and to take a responsible attitude towards consumer privacy. However, since we do not have direct control over the policies or practices of participating merchants and other third parties, we are not responsible for the privacy practices or contents of those sites. We recommend and encourage that you always review the privacy policies of merchants and other third parties before you provide any personal information or complete any transaction with such parties.</p>
          <h2>3. Information We Collect and How We Use It</h2>
          <p>{config.name} collects certain information from and about its users three ways: directly from our Web Server logs, the user, and with Cookies.</p>
          <h4>Web Server Logs.</h4>
          <p>When you visit our Website, we may track information to administer the site and analyze its usage. Examples of information we may track include:</p>
          <ul>
            <li>Your Internet protocol address.</li>
            <li>The kind of browser or computer you use.</li>
            <li>Number of links you click within the site.</li>
            <li>State or country from which you accessed the site.</li>
            <li>Date and time of your visit.</li>
            <li>Name of your Internet service provider.</li>
            <li>Web page you linked to our site from.</li>
            <li>Pages you viewed on the site.</li>
          </ul>
          <h4>Use of Cookies</h4>
          <p>{config.name} may use cookies to personalize or enhance your user experience. A cookie is a small text file that is placed on your hard disk by a Web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a Web Server in the domain that issued the cookie to you. One of the primary purposes of cookies is to provide a convenience feature to save you time. For example, if you personalize a web page, or navigate within a site, a cookie helps the site to recall your specific information on subsequent visits. Hence, this simplifies the process of delivering relevant content and eases site navigation by providing and saving your preferences and login information as well as providing personalized functionality.</p>
          <p>{config.name} reserves the right to share aggregated site statistics with partner companies, but does not allow other companies to place cookies on our website unless there is a temporary, overriding customer value (such as form completion and submission).</p>
          <p>You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies. If you reject cookies by changing your browser settings then be aware that this may disable some of the functionality on our Website.</p>
          <h2>4. Personal Information Uses</h2>
          <p>We will not disclose personally identifiable information we collect from you to third parties without your permission except to the extent necessary including:</p>
          <ul>
            <li>To fulfill your service requests for services.</li>
            <li>To protect ourselves from liability.</li>
            <li>To respond to legal process or comply with law, or In connection with a merger, acquisition, or liquidation of the company.</li>
          </ul>
          <h2>5. Changes to This Statement</h2>
          <p>{config.name} has the discretion to occasionally update this privacy statement. When we do, we will also revise the updated date at the top of this Privacy page. We encourage you to periodically review this privacy statement to stay informed about how we are helping to protect the personal information we collect. Your continued use of the service constitutes your agreement to this privacy statement and any updates.</p>
          <h2>6. Contacting Us</h2>
          <p>If you have questions regarding our Privacy Statement, its implementation, failure to adhere to this Privacy Statement and/or our general practices, please contact us <Link to='/contact'><u>here</u></Link>.</p>
          <p>We will use commercially reasonable efforts to promptly respond and resolve any problem or question.</p>
        </div>
      </div>
    </div>
  )
}
