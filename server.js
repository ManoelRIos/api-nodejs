const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); 
app.get('/', (req, res) => {

  return res.json( [
    {name: 'Manoel Rios',
     age: 21,
     picture: 'https://scontent.fbsb3-1.fna.fbcdn.net/v/t39.30808-6/260207093_1990781591091390_121498061791375974_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGg_-D7xgU3YB07XNVVw5hzalm5jg9RySdqWbmOD1HJJ7In1tX5HOekF7va4KDvTl7G2i_7gspEJGziBiGbg8ls&_nc_ohc=w8G1H00aJaoAX8SUflI&tn=ZeiqOLWupujaXs8d&_nc_ht=scontent.fbsb3-1.fna&oh=00_AT_ZRsNduSdUCpBHRuyCLcEeNj8yvtQs787Om4QWUF-9Uw&oe=62D9324F',
     post: 'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.6435-9/81726479_10213097104297378_8464783402522902528_n.jpg?stp=dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=84a396&_nc_eui2=AeEsU0k3g2rPlIe1UvcINCeP307l-FiLEi3fTuX4WIsSLZ1-GvICtme_n8bSgDbfNYx-oF_RjS-gO6QUq5MvQuP-&_nc_ohc=sVM0W3mIC8UAX_73mfR&_nc_ht=scontent.fbsb3-1.fna&oh=00_AT9KHpp75TuYRgKqDBfLBvhFp3YjzoPDG55LTp-t-ddIWQ&oe=62FA95BC'},
    {name: 'Duda Martins',
     age: 21,
     picture: 'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.6435-9/154506724_5175570702516306_8173312898489825808_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGlDyq4LA_IQKGr1hI05QNj9pP1Vvv8TvH2k_VW-_xO8dwyVOmWUM7niXNJcM_a519piLS96kBA6VJ4ob6kXFNY&_nc_ohc=pos3-tyMjMwAX8sUqTc&_nc_ht=scontent.fbsb3-1.fna&oh=00_AT9cbv8IzK0lVPDtUhHk3A2YnGLLeL6E8EN7KaiaxM0TRg&oe=62F99313',
     post: 'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.6435-9/152627369_5175567829183260_2486482359569022890_n.jpg?stp=c0.398.1242.649a_dst-jpg_s843x403&_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeF2oOHVxdYghKEMpVn0n3nJc7xM8sqybgpzvEzyyrJuCnp3d5UXfRnajgPQl7DX3dBzdcdcMc5tNc5SsP_xbAOc&_nc_ohc=SD_8lmfksXMAX__xtB-&_nc_ht=scontent.fbsb3-1.fna&oh=00_AT8tOMrUt0GAVn5H2jXNRLLZ_gDg2u034JidmIwB23CxVw&oe=62FB48C0'},
    {name: 'Ana Martins',
     age: 50,
     picture: 'https://scontent.fbsb3-1.fna.fbcdn.net/v/t1.6435-9/79871690_2619222034820930_4255383206657785856_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHGB819_m_I1A5ezZ1mFh-EVxH8YDRUcq1XEfxgNFRyrdObLezhV9p-hqduD72CTN9x9f5Tgb6-ctGbn6WrivkW&_nc_ohc=j1sCZ0Xy-2gAX-P2fV9&_nc_ht=scontent.fbsb3-1.fna&oh=00_AT88F19lQfM1yw5glMJhAxMjwfQhP0_hfzaO-zFi4AYEyA&oe=62FA13AA',
     post: ''}
  ])

});

app.listen('3000', console.log('Listening on 3000 port'));