/* eslint-disable react/prop-types */ 
import PropTypes from "prop-types";

function CookiesAlertMessage(props) {
    return (
        <article className="cookies-message-article">
            <div className="message">
                <p>{String(props.message)}</p>
            </div>
            <div>
                <button type="button" className="accept-cookies-button" onClick={(event) => {
                    event.stopPropagation();
                    window.document.querySelector(".cookies-message-article").style.display = 'none';
                }}>Continue</button>
                
                <button type="button" className="decline-cookies-button" onClick={(event) => {
                    event.stopPropagation();
                    window.document.querySelector(".cookies-message-article").style.display = 'none';
                    window.location.href = "about:blank"
                }}>Close Site</button>
            </div>
        </article>
    );
}

CookiesAlertMessage.proptypes = {
    message: PropTypes.string
}

export default CookiesAlertMessage;