import React from 'react';

// Styles
import './Instagram.styles.scss';

const Instagram = () => (
    <div className='insta'>
        <h3>Instagram</h3>
        {/* <!-- LightWidget WIDGET --> */}
        <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
        <iframe title='insta' src="https://cdn.lightwidget.com/widgets/c439590e3c6e54479d8e46dc55682250.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" style={{ width: "100%", border: "0", overflow: "hidden" }}></iframe>


    </div>
)

export default Instagram;