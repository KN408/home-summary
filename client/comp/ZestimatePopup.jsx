import React from 'react';
import PropTypes from 'prop-types';
import { ZestimatePopup, LinkInPopup, CloseButton, PopupIconLineI, PopupIconLineT } from './style.js';

const Popup = React.forwardRef(
  function zpu ({ hidePopupOnClick }, ref) {
    return (
      <ZestimatePopup ref={ref}>
        <CloseButton id="closeIcon" className="material-icons" onClick={hidePopupOnClick}>close</CloseButton>

        <p>The Zestimate is Zillow&apos;s best estimate of this home&apos;s market value. It is not an appraisal and it should be used as a starting point. <LinkInPopup href="https://www.zillow.com/zestimate/">Learn more</LinkInPopup>.</p>
        <p>If your facts are wrong, your Zestimate may be incorrect. <LinkInPopup href="#">Update them here</LinkInPopup>.</p>
        <p>The Zestimate incorporates multiple data models and responds to factors like:</p>

        <div className="zpu_iconline">
            <PopupIconLineI className="material-icons">directions_walk</PopupIconLineI>
            <PopupIconLineT>Neighborhood details</PopupIconLineT>
            <PopupIconLineI className="material-icons-outlined">house</PopupIconLineI>
            <PopupIconLineT>Home facts</PopupIconLineT>
        </div>
        <div className="zpu_iconline">
            <PopupIconLineI className="material-icons">visibility</PopupIconLineI>
            <PopupIconLineT>Popularity on Zillow</PopupIconLineT>
            <PopupIconLineI className="material-icons-outlined">calendar_today</PopupIconLineI>
            <PopupIconLineT>Listing price</PopupIconLineT>
        </div>
      </ZestimatePopup>
    )
  }
);

Popup.propTypes = {
  hidePopupOnClick: PropTypes.func
}

export default Popup;