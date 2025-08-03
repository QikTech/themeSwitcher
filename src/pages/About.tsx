import React from 'react';
import styled from 'styled-components';
import MainContent from '../components/common/MainContent';

const AboutPage = () => {
  return (
    <MainContent
      title="About Hipster Pte. Ltd."
      paragraph="We are a dynamic company based in Singapore, focused on creating innovative and user-centric web applications. Our team is dedicated to building modern, scalable, and secure solutions."
    >
      <p>
        Address: # 01-04, 75 Ayer Rajah Crescent, 139953, Singapore
        <br />
        UEN. 201621408D
      </p>
    </MainContent>
  );
};

export default AboutPage;