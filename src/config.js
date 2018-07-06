var PHONE = ['281', '890', '0584']
var EMAIL = 'TODO'
var CAREEREMAIL = 'careers@pcc-tx.com'

var config = {
  meta_title: 'Paradigm',
  meta_description: '',

  // Required info for schema
  email: EMAIL,
  logo: '/paradign-nav-logo.png',
  name: 'Paradigm Contruction',
  legal_name: 'Paradigm Contruction',
  url: 'https://paradigmconstruction-tx.com',
  phone: PHONE.join('.'),

  // Required address object for schema
  address: {
    street: '26865 Interstate 45',
    city: 'The Woodlands',
    state: 'Texas',
    zipcode: '77380',
    directions: 'https://www.google.com/maps/place/26865+I-45,+Spring,+TX+77380/@30.1524665,-95.451683,17z/data=!3m1!4b1!4m5!3m4!1s0x86473690fb630a45:0x607cefbd708ff75f!8m2!3d30.1524619!4d-95.4494943',
    country: 'United States',
    area: '',
  },

  // Useful adds
  mailto: `mailto:` + EMAIL,
  careersMailto: `mailto:${CAREEREMAIL}`,
  tel: 'tel:' + PHONE.join(''),

  // Social Media
  linkedin: 'https://linkedin.com',
  facebook: 'https://facebook.com',

  // Analytics codes
  googleAnalytics: 'UA-TODO-XX',

  // Font codes
  typekit: 'knq2tdr',
}

module.exports = config
