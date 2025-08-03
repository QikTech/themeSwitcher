import React from 'react';
import styled from 'styled-components';
import MainContent from '../components/common/MainContent';

const ContactPage = () => {
  return (
    <MainContent
      title="Contact Us"
      paragraph="Feel free to get in touch with us for any inquiries or collaboration opportunities."
    >
      <p>
        Contact: +6582314107
        <br />
        Email: hr@hipster-inc.com
        <br />
        Website: www.hipster-inc.com
      </p>
    </MainContent>
  );
};

export default ContactPage;