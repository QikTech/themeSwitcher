import MainContent from '../components/common/MainContent';

const AboutPage = () => {
  return (
    <div style={{ marginTop: '1.4rem' }}>
      <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCaajUpXXELcOZVtApyy2tOaaAJ8ROhA3a4g&s"
          alt="Company"
          style={{
            width: '100%',
            height: 'auto',
            marginBottom: '1rem',
            borderRadius: '8px',
            display: 'block',
            objectFit: 'cover',
          }}
        />
      </div>
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
    </div>
  );
};

export default AboutPage;