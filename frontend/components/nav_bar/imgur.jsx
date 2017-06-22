import React from 'react';

const imgur = () => (

        <span className="topbar-icon menu-btn icon-arrow-down">
            <div className="link-menu">
                <ul>
                    <li><a href="//imgur.com/jobs" className="hiring" data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@jobs@@}}">we're hiring!</a></li>
                                        <li><a href="//imgur.com/blog" data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@blog@@,@@new@@:false}}">blog</a></li>

                    <li><a href="//imgur.com/about"  data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@about@@}}">about imgur</a></li>
                    <li><a href="//store.imgur.com" data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@store@@}}">imgur store</a></li>
                    <li><a href="//imgur.com/apps"  data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@apps@@}}">imgur apps</a></li>
                    <li><a href="//apidocs.imgur.com" data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@api@@}}">developer api</a></li>
                    <li><a href="http://www.imgurads.com/" data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@advertise@@}}">advertise</a></li>
                    <li><a href="//help.imgur.com/hc/en-us" data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@help@@}}">need help?</a></li>
                </ul>
                <div className="clear"></div>
                <div className="dropdown-footer hamburger-menu">
                    <div className="terms-footer">
                        <a href="//imgur.com/tos"  data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@terms@@}}">terms</a>
                        <a href="//imgur.com/privacy"  data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@privacy@@}}">privacy</a>
                        <a className="small-margin-top" href="//imgur.com/privacy#adchoices" data-jafo="{@@event@@:@@header@@,@@meta@@:{@@link@@:@@adchoices@@}}">ad choices</a>
                    </div>

                    <iframe src="//www.facebook.com/plugins/like.php?href=https%3A%2F%2Ffacebook.com%2Fimgur&amp;width&amp;layout=button&amp;action=like&amp;show_faces=false&amp;share=false&amp;height=35" scrolling="no" frameborder="0" style="display:inline-block; border:none; overflow:hidden; height:20px; width:50px; margin-right:7px;" allowTransparency="true"></iframe>
                    <a href="https://twitter.com/imgur" className="twitter-follow-button" data-show-count="false" data-show-screen-name="false"></a>

                </div>
            </div>
        </span>
)
