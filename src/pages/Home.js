import React, { useEffect } from 'react';
import { PageLayout } from 'layouts';
import axios from 'services/axios';

const Home = () => {
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get('/all');
        // eslint-disable-next-line no-console
        console.log(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <PageLayout pageClass="home">
      <section className="section">
        <div className="container">
          <h3 className="heading">Home</h3>
          <p>This is the home page</p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Home;
