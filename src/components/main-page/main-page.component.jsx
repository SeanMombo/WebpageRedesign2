import React from 'react';

import "./main-page.styles.scss"
import CustomButton from '../custom-button/custom-button.component'

// import linkedInSvg from '../../img/linkedin-logo.svg'


class MainPage extends React.Component {

    render () {
        return (
        
            <div className='main-banner'>
          
                <header>
                
                    <div class="logo-container">  
                  
                        <svg id="svg" version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="408.79120879120876" viewBox="-300, -300, 1000, 1009">

                            <g id="svgg"><path id="path0" d="M134.525 5.347 C 121.526 10.065,89.292 60.337,63.575 116.001 C 53.166 138.532,53.235 136.518,62.518 146.666 C 66.684 151.220,72.865 158.110,76.255 161.979 L 82.418 169.012 98.901 165.993 C 107.967 164.333,118.846 162.369,123.077 161.628 C 127.308 160.888,132.253 159.848,134.066 159.317 C 148.764 155.017,228.571 147.847,228.571 150.827 C 228.571 159.438,177.127 227.774,134.717 275.498 L 110.989 302.198 124.318 315.934 C 138.020 330.055,142.504 332.096,147.253 326.374 C 148.758 324.560,151.346 323.077,153.005 323.077 C 158.805 323.077,191.073 287.917,225.399 244.194 C 236.210 230.424,246.654 217.127,248.609 214.645 C 252.099 210.213,252.374 210.201,263.993 213.966 C 281.747 219.720,323.875 226.232,345.604 226.583 C 356.181 226.753,364.818 227.518,364.796 228.282 C 364.640 233.853,315.062 295.396,267.724 348.783 C 240.020 380.026,241.960 375.318,252.198 386.466 C 256.731 391.402,262.677 398.119,265.411 401.394 L 270.382 407.347 279.696 402.661 C 288.753 398.105,306.802 379.775,333.174 348.352 C 340.275 339.890,346.762 332.664,347.589 332.294 C 352.209 330.226,377.543 293.866,386.897 275.878 C 400.380 249.948,401.118 240.924,391.004 225.654 C 381.936 211.964,384.750 212.754,342.090 211.926 C 321.358 211.523,300.934 210.707,296.703 210.112 C 292.473 209.518,282.088 208.008,273.626 206.757 C 265.165 205.506,257.452 204.463,256.488 204.439 C 255.523 204.415,257.779 199.969,261.502 194.559 C 285.948 159.027,291.018 137.484,277.845 125.109 C 274.920 122.361,272.527 118.802,272.527 117.199 C 272.527 115.597,271.079 114.286,269.308 114.286 C 267.537 114.286,264.977 112.209,263.619 109.671 C 260.156 103.200,179.078 107.222,130.771 116.262 C 116.922 118.854,117.172 119.576,126.318 103.396 C 130.579 95.856,134.066 89.393,134.066 89.033 C 134.066 88.673,140.989 76.725,149.451 62.482 C 157.912 48.239,164.835 34.786,164.835 32.585 C 164.835 29.021,150.908 11.026,146.703 9.158 C 145.797 8.755,145.055 7.024,145.055 5.311 C 145.055 1.754,144.419 1.756,134.525 5.347 M35.378 165.835 C 26.945 168.424,2.915 197.419,2.358 205.678 C 2.145 208.850,18.427 226.374,21.587 226.374 C 28.825 226.374,63.736 196.163,63.736 189.900 C 63.736 187.212,56.049 177.011,47.258 168.033 C 43.466 164.161,41.822 163.856,35.378 165.835 " 
                            stroke="none"  fill-rule="evenodd"></path></g>
                        </svg>
                        {/* <img src={logo} width="124px"/> */}
                    </div>
                   
                    <h1>sean mombo</h1>

                </header>
                
                <div class="main-banner-content">  
                    <div className="brackets noselect">
                        <h1>{'{'}</h1>
                    </div>

                    
                    <div className="title-container">
                        <h1>
                        Frontend <span className='span2'></span>Developer
                        </h1>

                        <p>& indie game entrepreneur</p>
                    </div>

                    <div className="brackets noselect">
                        <h1>{'}'}</h1>
                    </div>
                   
                </div>

                <div className="social-container">
                    <CustomButton href="/portfolio" text='View My Portfolio'/>
                </div>
            </div>    
        )
    }
}

export default MainPage;